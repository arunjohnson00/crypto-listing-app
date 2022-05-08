import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import TableActionBtn from "../../button/tableaction/TableActionBtn";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteRowRequest } from "../../../store/action";
import { toast } from "material-react-toastify";
import Swal from "sweetalert2";

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

const GridEdit = ({ index, navigate, location, dispatch }: any) => {
  const handleEditClick = () => {
    navigate(`${location.pathname}/edit/${index}`, { state: { id: index } });
  };

  const successHandler = (res: any) => {
    console.log(res);

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
      console.log("hi");
    }, 3000);
  };

  const errorHandler = (err: any) => {
    console.log(err);
  };

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
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        navigate(`${location.pathname}`);
      }
    });
  };

  const handleViewClick = () => {
    navigate(`${location.pathname}/view`, { state: { id: index } });
  };

  return (
    <Fragment>
      <TableActionBtn
        tableEdit={handleEditClick}
        tableDelete={handleDeleteClick}
        tableView={handleViewClick}
        id={index}
      />
    </Fragment>
  );
};

const DataTables = ({ tableData, tableColumn }: any) => {
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
          components={{ Toolbar: CustomToolbar }}
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
