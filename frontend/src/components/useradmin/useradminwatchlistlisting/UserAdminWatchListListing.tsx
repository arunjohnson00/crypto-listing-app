import { Box, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userWatchListRequest } from "../../../store/action";
import UserAdminHtmlTable from "../htmltable/UserAdminHtmlTable";
import { tableHeader } from "./helper";
const UserAdminWatchListListing = () => {
  const dispatch: any = useDispatch();

  const [tableData, setTableData] = useState<any>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  useEffect(() => {
    const successHandler = (res: any) => {
      setTableData(res?.data?.data);
    };
    const errorHandler = (err: any) => {};

    dispatch(userWatchListRequest(page + 1, successHandler, errorHandler));
  }, [dispatch, page]);

  return (
    <Box height="100vh">
      <Fragment>
        {tableData &&
        tableData?.response === true &&
        tableData?.data?.data?.length !== 0 ? (
          <UserAdminHtmlTable
            tableData={tableData && tableData}
            tableHeader={tableHeader}
            variant="review"
            section="review"
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
          />
        ) : (
          <Typography sx={{ color: "#FFFFFF", fontSize: ".85rem" }}>
            No data available !
          </Typography>
        )}
      </Fragment>
    </Box>
  );
};

export default UserAdminWatchListListing;
