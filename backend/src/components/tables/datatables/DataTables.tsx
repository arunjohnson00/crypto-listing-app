import { DataGrid } from "@mui/x-data-grid";
import { Fragment } from "react";
import TableActionBtn from "../../button/tableaction/TableActionBtn";
import { useNavigate, useLocation } from "react-router-dom";

const GridEdit = ({ index, navigate, location }: any) => {
  console.log(location);
  const handleEditClick = () => {
    alert("helloEdit" + index);
    navigate(`${location.pathname}/edit`, { id: index });
  };

  const handleDeleteClick = () => {
    alert("hellodelete" + index);
    navigate(`${location.pathname}/Delete`, { id: index });
  };

  const handleViewClick = () => {
    alert("helloview" + index);
    navigate(`${location.pathname}/View`, { id: index });
  };

  return (
    <Fragment>
      <TableActionBtn
        tableEdit={handleEditClick}
        tableDelete={handleDeleteClick}
        tableView={handleViewClick}
      />
    </Fragment>
  );
};

const DataTables = ({ tableData, pageData, setPageData, tableColumn }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
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
          rowsPerPageOptions={[5, 10, 20]}
        />
      </div>
    </Fragment>
  );
};

export default DataTables;
