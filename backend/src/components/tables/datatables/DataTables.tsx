import { DataGrid } from "@mui/x-data-grid";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import TableActionBtn from "../../button/tableaction/TableActionBtn";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteRowRequest } from "../../../store/action";

const GridEdit = ({ index, navigate, location, dispatch }: any) => {
  console.log(location);
  const handleEditClick = () => {
    navigate(`${location.pathname}/edit`, { state: { id: index } });
  };

  const successHandler = (res: any) => {
    console.log(res);
    navigate(`${location.pathname}`);
  };

  const errorHandler = (err: any) => {
    console.log(err);
  };

  const handleDeleteClick = () => {
    dispatch(
      deleteRowRequest(
        { pathname: location.pathname, id: index },
        successHandler,
        errorHandler
      )
    );
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

const DataTables = ({ tableData, pageData, setPageData, tableColumn }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [pageSize, setPageSize] = useState<number>(10);
  const addtitionalColumns = [
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: "100%",
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
        />
      </div>
    </Fragment>
  );
};

export default DataTables;
