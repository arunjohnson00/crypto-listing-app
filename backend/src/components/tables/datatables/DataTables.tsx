import MUIDataTable from "mui-datatables";
import { Fragment } from "react";

const DataTables = ({ tableData, pageData, setPageData, tableColumn }: any) => {
  // const columns = ["Name", "Title", "Location"];
  // const columns: any = [
  //   { id: "ID" },
  //   { name: "Name" },
  //   { slug: "URL" },
  //   { thumb_icon: "Icon" },
  // ];

  // const data = [
  //   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  //   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  //   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  //   {
  //     name: "James Houston",
  //     company: "Test Corp",
  //     city: "Dallas",
  //     state: "TX",
  //   },
  // ];

  const options: any = {
    filterType: "dropdown",
    caseSensitive: false,

    //serverSide: true,

    onTableChange: (action: any, tableState: any) => {
      // console.log(action, tableState);
      if (action === "changePage") {
        console.log("Go to page", tableState.page);
        console.log("Go to page", tableState.rowsPerPage);
        setPageData({
          page: tableState.page,
          rowPerPage: tableState.rowsPerPage,
        });
      }
    },
  };

  return (
    <Fragment>
      <MUIDataTable
        title={""}
        data={tableData}
        columns={tableColumn}
        options={options}
      />
    </Fragment>
  );
};

export default DataTables;
