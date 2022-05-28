import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Stack, Avatar } from "@mui/material";

import LargeBtn from "../../components/form/button/large/LargeBtn";
import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import InputSearch from "../../components/form/input/search/InputSearch";

import { listExchangeRequest } from "../../store/action";

//Server URL
const serverAPIUrl = process.env.REACT_APP_API_URL;

//Table Data

const tableColumn = [
  {
    field: "name",
    headerName: "Exchange Name",
    flex: 1,
  },

  {
    field: "thumb_icon",
    headerName: "Icon",
    flex: 1,
    sortable: false,
    disableClickEventBubbling: true,
    renderCell: (params: any) => (
      <Avatar
        src={`${serverAPIUrl}public/uploads/exchange_icons/${params.row.thumb_icon}`}
        alt={params.thumb_icon}
      />
    ),
  },

  {
    field: "url",
    headerName: "Exchange Url",
    flex: 1,
  },

  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params: any) => (
      <span>
        {parseInt(params.row.status) === 1 && (
          <span style={{ color: "#64dd17" }}>Approved</span>
        )}

        {parseInt(params.row.status) === 2 && (
          <span style={{ color: "#d50000" }}>Pending</span>
        )}

        {parseInt(params.row.status) === 3 && (
          <span style={{ color: "#6a1b9a" }}>Suspended</span>
        )}
      </span>
    ),
  },
];

const Exchanges = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const exchangeList = useSelector((exList: any) => {
    return exList.exchangesReducer.listExchanges.data;
  });

  const searchHandler = (searchVal: any) => {
    setSearchValue(searchVal);
  };

  const filteredData = searchValue
    ? exchangeList.filter((flData: any) => {
        return flData.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : exchangeList;

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(listExchangeRequest("emptyData", successHandler, errorHandler));
  }, [dispatch]);

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
                  Exchanges
                </Typography>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                <InputSearch
                  placeholder="Search Exchanges"
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
            <Link to="/exchange/add">
              <LargeBtn Title="Add Exchange" />
            </Link>
          </Grid>
        </Stack>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTables
          tableColumn={tableColumn}
          tableData={filteredData}
          data={exchangeList}
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          {" "}
          <Link to="/exchange/add">
            <LargeBtn Title="Add Exchange" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Exchanges;
