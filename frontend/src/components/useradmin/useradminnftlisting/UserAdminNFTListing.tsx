import { Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
      {tableData?.data?.length !== 0 ? (
        <UserAdminHtmlTable
          tableData={tableData && tableData?.data}
          tableHeader={tableHeader}
          variant="nft"
          section="nft"
        />
      ) : (
        <Typography sx={{ color: "#FFFFFF", fontSize: ".85rem" }}>
          No data available !
        </Typography>
      )}
    </Fragment>
  );
};

export default UserAdminNFTListing;
