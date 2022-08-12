import TablePagination from "@mui/material/TablePagination";
import { useSelector } from "react-redux";
const TableListPagination = ({
  page,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
}: any) => {
  const cryptoCurrenciesList = useSelector((data: any) => {
    return data?.homeReducer?.crypto_currencies_list;
  });
  console.log(cryptoCurrenciesList && cryptoCurrenciesList);
  return (
    <TablePagination
      component="div"
      count={cryptoCurrenciesList && cryptoCurrenciesList?.total}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      sx={{
        color: "#FFFFFF",
        "&.MuiSvgIcon-root-MuiSelect-icon": { color: "#FFFFFF" },
        "& .MuiPaginationItem-root": {
          color: "#fff",
        },
      }}
    />
  );
};

export default TableListPagination;
