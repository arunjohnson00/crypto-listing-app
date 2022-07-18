import { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { LinearProgress, Box } from "@mui/material";
import Swal from "sweetalert2";
import { makeStyles } from "@mui/styles";
import { toast } from "material-react-toastify";

import DialogPopup from "../../dialog/DialogPopup";
import TableActionBtn from "../../button/tableaction/TableActionBtn";

import { deleteRowRequest } from "../../../store/action";
import { styled } from "@mui/material/styles";

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Rows</Box>
    </StyledGridOverlay>
  );
}
const useStyles = makeStyles({
  grid: {
    display: "flex",
    flexDirection: "column",
  },
  gridToolbarCotainer: {
    justifyContent: "flex-end",
    borderBottom: "1px solid #ebebeb",
  },
});

const GridEdit = ({ index, navigate, location, dispatch, data }: any) => {
  const handleEditClick = () => {
    navigate(`${location.pathname}/edit/${index}`, { state: { id: index } });
  };

  const successHandler = (res: any) => {
    toast.success(`${res.data.message}`, {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setTimeout(() => {
      navigate(`${location.pathname}`);
    }, 3000);
  };

  const errorHandler = (err: any) => {};

  const handleDeleteClick = () => {
    navigate(`${location.pathname}/delete`);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          deleteRowRequest(
            { pathname: location.pathname, id: index },
            successHandler,
            errorHandler
          )
        );
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //navigate(`${location.pathname}`);
        navigate(-1);
      }
    });
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleViewClick = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <TableActionBtn
        tableEdit={handleEditClick}
        tableDelete={handleDeleteClick}
        tableView={handleViewClick}
        id={index}
      />
      <DialogPopup
        handleClose={handleClose}
        open={open}
        id={index}
        data={data}
      />
    </Fragment>
  );
};

const DataTables = ({
  tableData,
  tableColumn,
  data,
  setDataTableParams,
  dataTableParams,
  rowCount,
}: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer className={classes.gridToolbarCotainer}>
        <GridToolbarExport
          printOptions={{
            hideFooter: true,
            hideToolbar: true,
          }}
        />
      </GridToolbarContainer>
    );
  };
  const addtitionalColumns = [
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,

      flex: 2,
      disableClickEventBubbling: true,
      align: "center",
      headerAlign: "center",
      renderCell: (params: any) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <GridEdit
              index={params.row.id}
              navigate={navigate}
              location={location}
              dispatch={dispatch}
              data={data}
            />
          </div>
        );
      },
    },
  ];

  return (
    <Fragment>
      <div style={{ height: "100vh", width: "100%" }}>
        <DataGrid
          rows={tableData && tableData}
          columns={[...tableColumn, ...addtitionalColumns]}
          //filterMode="server"
          paginationMode="server"
          rowCount={rowCount && rowCount}
          autoHeight={false}
          //page={dataTableParams && dataTableParams?.pageCount - 1}
          pageSize={dataTableParams && dataTableParams?.PageSize}
          // onPageSizeChange={(newPageSize) =>
          //   dataTableParams &&
          //   setDataTableParams({ ...dataTableParams, PageSize: newPageSize })
          // }

          onPageChange={(newPage) =>
            dataTableParams &&
            setDataTableParams({ ...dataTableParams, pageCount: newPage })
          }
          //rowsPerPageOptions={[15]}
          pagination
          loading={!tableData}
          //onCellClick={(e: any) => console.log(e.colDef.width)}
          components={{
            Toolbar: CustomToolbar,
            LoadingOverlay: LinearProgress,
            NoRowsOverlay: CustomNoRowsOverlay,
          }}
          className={classes.grid}
          sx={{
            boxShadow: 0,
            border: "none",
            padding: "8px",
            borderRadius: "12px",
            backgroundColor: "white",
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "black",
            },
            "& .MuiDataGrid-columnHeaders": {
              borderTop: "none",
              fontSize: 14,
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 600,
            },
          }}
        />
      </div>
    </Fragment>
  );
};

export default DataTables;
