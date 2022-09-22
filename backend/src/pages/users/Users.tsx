import { Grid, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
import Avatar from "@mui/material/Avatar";
import moment from "moment";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import InputSearch from "../../components/form/input/search/InputSearch";
import { listUserRequest, searchUserRequest } from "../../store/action";

const Users = () => {
  const userList = useSelector((usrList: any) => {
    return usrList?.usersReducer?.listUsers;
  });
  const searchResult = useSelector((result: any) => {
    return result?.usersReducer?.search_result;
  });

  const [searchValue, setSearchValue] = useState("");
  const [dataTableParams, setDataTableParams] = useState<any>({
    PageSize: 15,
    pageCount: 1,
  });

  const searchHandler = (searchVal: any) => {
    setSearchValue(searchVal);
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(searchUserRequest(searchVal, successHandler, errorHandler));
  };

  var filteredData =
    searchValue !== "" &&
    searchResult &&
    searchResult !== undefined &&
    searchResult.length !== 0
      ? searchResult?.data
      : userList?.data;

  const dispatch = useDispatch();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(listUserRequest(dataTableParams, successHandler, errorHandler));
  }, [dispatch, dataTableParams, setDataTableParams]);

  const serverAPIUrl = process.env.REACT_APP_API_URL;

  const tableColumn = [
    {
      field: "id",
      headerName: "#",
      flex: 0.5,
      renderCell: (params: any) => (
        <span style={{ color: "#bebebe", fontWeight: 600 }}>{params?.id}</span>
      ),
    },
    {
      field: "name",
      headerName: "User Name",
      flex: 2,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "avatar",
      headerName: "Avatar",
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
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
      flex: 2,
      align: "left",
      headerAlign: "left",
      renderCell: (params: any) => (
        <span style={{ color: "blue", fontSize: ".7rem" }}>
          <a
            href={`mailto:${params.row.email}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: "blue", textDecoration: "none" }}
          >
            {" "}
            {params.row.email}
          </a>
        </span>
      ),
    },
    {
      field: "dname",
      headerName: "Display Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "created_at",
      headerName: "Careated at",
      align: "center",
      headerAlign: "center",
      flex: 1,
      renderCell: (params: any) => (
        <span>{moment(params.row.created_at).fromNow()}</span>
        //<span>{moment("2022-04-25T09:51:52.000000Z").fromNow()}</span>
      ),
    },

    {
      field: "rating",
      headerName: "Rating",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "status",
      headerName: "Status",
      align: "center",
      headerAlign: "center",
      flex: 1,
      renderCell: (params: any) => (
        <span>
          {parseInt(params.row.status) === 1 && (
            <span style={{ color: "#00e396" }}>Approved</span>
          )}

          {parseInt(params.row.status) === 2 && (
            <span style={{ color: "#ff0023" }}>Suspended</span>
          )}

          {parseInt(params.row.status) === 3 && (
            <span style={{ color: "#c105ffd4" }}>Processing</span>
          )}
        </span>
      ),
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          pt={3}
          pb={1}
        >
          <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "flex-start" }}
            >
              <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                <Typography variant="h5" sx={{ textAlign: "left" }}>
                  Users
                </Typography>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                <InputSearch
                  placeholder="Search User"
                  searchValue={searchValue}
                  searchHandler={searchHandler}
                />
              </Grid>
            </Stack>
          </Grid>

          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={12}
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Link to="/users/add" style={{ textDecoration: "none" }}>
              <LargeBtn Title="Add Users" />
            </Link>
          </Grid>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTables
          tableColumn={tableColumn && tableColumn}
          tableData={filteredData && filteredData}
          data={
            searchValue !== "" &&
            searchResult &&
            searchResult !== undefined &&
            searchResult?.length !== 0
              ? searchResult?.data
              : userList && userList?.data
          }
          setDataTableParams={setDataTableParams}
          dataTableParams={dataTableParams}
          rowCount={
            searchValue !== "" &&
            searchResult &&
            searchResult !== undefined &&
            searchResult?.length !== 0
              ? searchResult?.data?.length
              : userList && userList?.total
          }
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
          {" "}
          <Link to="/users/add" style={{ textDecoration: "none" }}>
            <LargeBtn Title="Add new User" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Users;
