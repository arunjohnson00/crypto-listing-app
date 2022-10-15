import { Button, Stack, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userNFTListRequest } from "../../../store/action";
import UserAdminHtmlTable from "../htmltable/UserAdminHtmlTable";
import { tableHeader } from "./helper";
const UserAdminNFTListing = () => {
  const dispatch: any = useDispatch();

  const [tableData, setTableData] = useState<any>();
  useEffect(() => {
    const successHandler = (res: any) => {
      setTableData(res?.data?.data);
    };
    const errorHandler = (err: any) => {};

    dispatch(userNFTListRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Fragment>
      {tableData &&
      tableData?.response === true &&
      tableData?.data?.length !== 0 ? (
        <UserAdminHtmlTable
          tableData={tableData && tableData?.data}
          tableHeader={tableHeader}
          variant="nft"
          section="nft"
        />
      ) : (
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{ color: "#FFFFFF", fontSize: ".85rem" }}>
            Nft list is empty
          </Typography>
          <Link to="/user-dashboard/nft/add" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontSize: ".85rem",
                borderRadius: 5,
              }}
            >
              Add NFT
            </Button>
          </Link>
        </Stack>
      )}
    </Fragment>
  );
};

export default UserAdminNFTListing;
