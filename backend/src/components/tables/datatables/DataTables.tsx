import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

import Swal from "sweetalert2";
import { makeStyles } from "@mui/styles";
import { toast } from "material-react-toastify";

import DialogPopup from "../../dialog/DialogPopup";
import TableActionBtn from "../../button/tableaction/TableActionBtn";

import { deleteRowRequest } from "../../../store/action";

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

const DataTables = ({ tableData, tableColumn, data }: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [pageSize, setPageSize] = useState<number>(10);

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
          rows={tableData}
          columns={[...tableColumn, ...addtitionalColumns]}
          filterMode="server"
          autoHeight={false}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 25, 50]}
          pagination
          loading={!tableData}
          components={{
            Toolbar: CustomToolbar,
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
