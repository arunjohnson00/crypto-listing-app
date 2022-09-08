import { Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  userCoinListRequest,
  userEventsListRequest,
} from "../../../store/action";
import UserAdminHtmlTable from "../htmltable/UserAdminHtmlTable";
import { tableHeader } from "./helper";
const UserAdminEventsListing = () => {
  const dispatch: any = useDispatch();

  const [tableData, setTableData] = useState<any>();
  useEffect(() => {
    const successHandler = (res: any) => {
      setTableData(res?.data?.data);
    };
    const errorHandler = (err: any) => {};

    dispatch(userEventsListRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Fragment>
      {tableData?.data?.length !== 0 ? (
        <UserAdminHtmlTable
          tableData={tableData && tableData?.data}
          tableHeader={tableHeader}
          variant="events"
          section="events"
        />
      ) : (
        <Typography sx={{ color: "#FFFFFF", fontSize: ".85rem" }}>
          No data available !
        </Typography>
      )}
    </Fragment>
  );
};

export default UserAdminEventsListing;
