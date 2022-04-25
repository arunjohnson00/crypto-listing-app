import { Grid, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
import Avatar from "@mui/material/Avatar";
import moment from "moment";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import { listUsersRequest } from "../../store/action";

const Users = () => {
  const userList = useSelector((usrList: any) => {
    return usrList.listUsersReducer.userListAll.data;
  });

  const serverAPIUrl = process.env.REACT_APP_API_URL;
  console.log(userList);
  const [pageData, setPageData] = useState({
    page: 0,
    count: 1,
    rowPerPage: 100,
    data: [["Loading Data..."]],
    isLoading: false,
  });
  console.log(pageData);
  const dispatch = useDispatch();

  const successHandler = (res: any) => {
    console.log(res);
  };

  const errorHandler = (err: any) => {
    console.log(err);
  };
  useEffect(() => {
    dispatch(listUsersRequest(pageData, successHandler, errorHandler));
  }, [dispatch, pageData]);

  const tableColumn = [
    {
      field: "name",
      headerName: "User Name",
      width: 140,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 140,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params: any) => (
        <Avatar
          src={`${serverAPIUrl}public/uploads/users/${params.row.avatar}`}
          alt={params.thumb_icon}
        />
      ),
    },

    {
      field: "email",
      headerName: "Email Id",
      width: 140,
    },
    {
      field: "dname",
      headerName: "Display Name",
      width: 140,
    },

    {
      field: "created_at",
      headerName: "Careated at",
      width: 140,
      renderCell: (params: any) => (
        <span>{moment(params.row.created_at).fromNow()}</span>
        //<span>{moment("2022-04-25T09:51:52.000000Z").fromNow()}</span>
      ),
    },

    {
      field: "rating",
      headerName: "Rating",
      width: 140,
    },

    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params: any) => (
        <span>
          {params.row.status === 1 && (
            <span style={{ color: "#64dd17" }}>Approved</span>
          )}

          {params.row.status === 2 && (
            <span style={{ color: "#d50000" }}>Pending</span>
          )}

          {params.row.status === 3 && (
            <span style={{ color: "#6a1b9a" }}>Suspended</span>
          )}
        </span>
      ),
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Users
        </Typography>
      </Grid>

      <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
          {" "}
          <Link to="/users/add">
            <LargeBtn Title="Add new User" />
          </Link>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTables
          tableColumn={tableColumn}
          tableData={userList}
          setPageData={setPageData}
          pageData={pageData}
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
          {" "}
          <Link to="/users/add">
            <LargeBtn Title="Add new User" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Users;
