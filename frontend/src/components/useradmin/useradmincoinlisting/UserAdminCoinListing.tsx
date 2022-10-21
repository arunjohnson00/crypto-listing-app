import { Button, Stack, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userCoinListRequest } from "../../../store/action";
import UserAdminHtmlTable from "../htmltable/UserAdminHtmlTable";
import { tableHeader } from "./helper";
const UserAdminCoinListing = () => {
  const dispatch: any = useDispatch();

  const [tableData, setTableData] = useState<any>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  useEffect(() => {
    const successHandler = (res: any) => {
      setTableData(res?.data);
    };
    const errorHandler = (err: any) => {};

    dispatch(userCoinListRequest(page + 1, successHandler, errorHandler));
  }, [dispatch, page]);
  console.log(tableData);
  return (
    <Fragment>
      {tableData &&
      tableData?.response === true &&
      tableData?.data?.data?.length !== 0 ? (
        <UserAdminHtmlTable
          tableData={tableData && tableData}
          tableHeader={tableHeader}
          variant="coin"
          section="coin"
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      ) : (
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{ color: "#FFFFFF", fontSize: ".85rem" }}>
            Coin list is empty
          </Typography>
          <Link
            to="/user-dashboard/coin/add"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontSize: ".85rem",
                borderRadius: 5,
              }}
            >
              Add Coin
            </Button>
          </Link>
        </Stack>
      )}
    </Fragment>
  );
};

export default UserAdminCoinListing;
