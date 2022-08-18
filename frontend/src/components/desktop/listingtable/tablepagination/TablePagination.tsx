import TablePagination from "@mui/material/TablePagination";
import { Pagination } from "@mui/material";
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

  return (
    <TablePagination
      component="div"
      count={cryptoCurrenciesList && cryptoCurrenciesList?.total}
      page={page?.pagination}
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

    // <Pagination
    //   count={cryptoCurrenciesList && cryptoCurrenciesList?.total}
    //   page={page}
    //   onChange={handleChangePage}
    //   showFirstButton
    //   showLastButton
    //   defaultPage={0}
    //   sx={{
    //     color: "#FFFFFF",
    //     "&.MuiSvgIcon-root-MuiSelect-icon": { color: "#FFFFFF" },
    //     "& .MuiPaginationItem-root": {
    //       color: "#fff",
    //     },
    //   }}
    // />
  );
};

export default TableListPagination;
