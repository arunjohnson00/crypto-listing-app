import MUIDataTable from "mui-datatables";

const DataTables = () => {
  // const columns = ["Name", "Title", "Location"];
  const columns = [
    { name: "Name" },
    { name: "Title", options: { filterList: ["Business Analyst"] } },
    { name: "Location" },
  ];

  const options: any = {
    filter: true,
    filterType: "dropdown",
  };

  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis"],
    [
      "Aiden Lloyd",
      "Business Consultant for an International Company and CEO of Tony's Burger Palace",
      "Dallas",
    ],
    ["Jaden Collins", "Attorney", "Santa Ana"],
    ["Franky Rees", "Business Analyst", "St. Petersburg"],
    ["Aaren Rose", null, "Toledo"],
    ["Johnny Jones", "Business Analyst", "St. Petersburg"],
    ["Jimmy Johns", "Business Analyst", "Baltimore"],
    ["Jack Jackson", "Business Analyst", "El Paso"],
    ["Joe Jones", "Computer Programmer", "El Paso"],
    ["Jacky Jackson", "Business Consultant", "Baltimore"],
    ["Jo Jo", "Software Developer", "Washington DC"],
    ["Donna Marie", "Business Manager", "Annapolis"],
  ];

  console.log(data);
  return (
    <MUIDataTable
      title={"ACME Employee list"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default DataTables;
