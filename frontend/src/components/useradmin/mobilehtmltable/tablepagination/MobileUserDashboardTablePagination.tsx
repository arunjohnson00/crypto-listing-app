import TablePagination from "@mui/material/TablePagination";

const MobileUserDashboardTablePagination = ({
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  tableData,
}: any) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={tableData && tableData?.data?.total}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[]}
      onRowsPerPageChange={handleChangeRowsPerPage}
      sx={{
        color: "#FFFFFF",
        backgroundColor: "#000000",
        width: "100%",
        "&.MuiSvgIcon-root-MuiSelect-icon": { color: "#FFFFFF" },
        "& .MuiPaginationItem-root": {
          color: "#fff",
        },
      }}
    />
  );
};

export default MobileUserDashboardTablePagination;
