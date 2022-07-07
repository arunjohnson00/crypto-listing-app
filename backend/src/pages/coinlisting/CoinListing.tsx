import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Stack, Avatar } from "@mui/material";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import LargeBtn from "../../components/form/button/large/LargeBtn";
import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import InputSearch from "../../components/form/input/search/InputSearch";

import { listCoinRequest } from "../../store/action";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const CoinListing = () => {
  const dispatch = useDispatch();
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const coinList = useSelector((cnList: any) => {
    return cnList?.coinReducer?.listCoins?.data;
  });

  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (searchVal: any) => {
    setSearchValue(searchVal);
  };

  var filteredData = searchValue
    ? coinList?.filter((flData: any) => {
        return flData.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : coinList;

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(listCoinRequest("emptyData", successHandler, errorHandler));
  }, [dispatch]);

  const tableColumn = [
    {
      field: "name",
      headerName: "Name",
      flex: 2,
    },
    {
      field: "logo",
      headerName: "Icon",
      flex: 1,
      sortable: false,
      disableClickEventBubbling: true,

      align: "center",
      headerAlign: "center",

      renderCell: (params: any) => (
        <Avatar
          src={`${serverAPIUrl}public/uploads/coin_logo/${params.row.logo}`}
          alt={params.logo}
        />
      ),
    },
    {
      field: "is_presale",
      headerName: "Is Presale",
      flex: 1,

      align: "center",
      headerAlign: "center",
      renderCell: (params: any) =>
        parseInt(params.row.is_presale) === 1 ? (
          <span style={{ color: "green" }}>yes</span>
        ) : (
          <span style={{ color: "red" }}>No</span>
        ),
    },

    {
      field: "created_at",
      headerName: "Submitted",
      flex: 1,

      align: "center",
      headerAlign: "center",
      renderCell: (params: any) => (
        <span>{timeAgo.format(new Date(params.row.created_at))}</span>
      ),
    },

    {
      field: "network_id",
      headerName: "Network Id",
      flex: 1,

      align: "center",
      headerAlign: "center",
    },

    {
      field: "explorer_link",
      headerName: "Block explorer url",
      flex: 2.5,

      headerAlign: "left",
      align: "left",
      renderCell: (params: any) => (
        <span style={{ color: "blue", fontSize: ".7rem" }}>
          <a
            href={params.row.explorer_link}
            target="_blank"
            rel="noreferrer"
            style={{ color: "blue", textDecoration: "none" }}
          >
            {" "}
            {params.row.explorer_link}
          </a>
        </span>
      ),
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
            <span style={{ color: "#64dd17" }}>Approved</span>
          )}

          {parseInt(params.row.status) === 2 && (
            <span style={{ color: "#d50000" }}>Scheduled</span>
          )}

          {parseInt(params.row.status) === 3 && (
            <span style={{ color: "#6a1b9a" }}>Suspended</span>
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
                  Coin Listing
                </Typography>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                <InputSearch
                  placeholder="Search Coin"
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
            <Link to="/coins/add">
              <LargeBtn Title="Add new coins" />
            </Link>
          </Grid>
        </Stack>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTables
          tableColumn={tableColumn}
          tableData={filteredData}
          data={coinList}
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          {" "}
          <Link to="/coins/add">
            <LargeBtn Title="Add new coins" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CoinListing;
