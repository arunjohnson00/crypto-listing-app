import { Grid, Typography, Stack } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";

import InputSearch from "../../components/form/input/search/InputSearch";

//const serverAPIUrl = process.env.REACT_APP_API_URL;

const CoinsCommunity = () => {
  const coinCommunityList = useSelector((CommunityList: any) => {
    return CommunityList.listCoinCommunityReducer.coinCommunityListAll.data;
  });

  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (searchVal: any) => {
    setSearchValue(searchVal);
  };

  var filteredData = searchValue
    ? coinCommunityList.filter((flData: any) => {
        return flData.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : coinCommunityList;

  const tableColumn = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
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
                  Coin Community
                </Typography>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                <InputSearch
                  placeholder="Search Community"
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
            <Link to="/coins-community/add">
              <LargeBtn Title="Add Community" />
            </Link>
          </Grid>
        </Stack>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTables
          tableColumn={tableColumn}
          tableData={filteredData}
          data={coinCommunityList}
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          {" "}
          <Link to="/coins-community/add">
            <LargeBtn Title="Add Community" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CoinsCommunity;
