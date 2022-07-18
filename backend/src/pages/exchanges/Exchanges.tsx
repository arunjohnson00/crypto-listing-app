import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Stack, Avatar } from "@mui/material";

import LargeBtn from "../../components/form/button/large/LargeBtn";
import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import InputSearch from "../../components/form/input/search/InputSearch";

import { listExchangeRequest, searchExchangeRequest } from "../../store/action";

//Server URL
const serverAPIUrl = process.env.REACT_APP_API_URL;

//Table Data

const tableColumn = [
  {
    field: "name",
    headerName: "Exchange Name",
    flex: 2,
    align: "left",
    headerAlign: "left",
  },

  {
    field: "thumb_icon",
    headerName: "Icon",
    align: "center",
    headerAlign: "center",
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
    flex: 2.5,
    align: "left",
    headerAlign: "left",
    renderCell: (params: any) => (
      <span style={{ color: "blue", fontSize: ".7rem" }}>
        <a
          href={params.row.url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "blue", textDecoration: "none" }}
        >
          {" "}
          {params.row.url}
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
  const [dataTableParams, setDataTableParams] = useState<any>({
    PageSize: 15,
    pageCount: 1,
  });
  const exchangeList = useSelector((exList: any) => {
    return exList.exchangesReducer.listExchanges;
  });

  const searchResult = useSelector((result: any) => {
    return result?.exchangesReducer?.search_result;
  });

  const searchHandler = (searchVal: any) => {
    setSearchValue(searchVal);

    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(searchExchangeRequest(searchVal, successHandler, errorHandler));
  };

  const filteredData =
    searchValue !== "" &&
    searchResult &&
    searchResult !== undefined &&
    searchResult.length !== 0
      ? searchResult.data
      : exchangeList.data;

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(
      listExchangeRequest(dataTableParams, successHandler, errorHandler)
    );
  }, [dispatch, dataTableParams, setDataTableParams]);

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
          tableColumn={tableColumn && tableColumn}
          tableData={filteredData && filteredData}
          data={
            searchValue !== "" &&
            searchResult &&
            searchResult !== undefined &&
            searchResult?.length !== 0
              ? searchResult?.data
              : exchangeList && exchangeList?.data
          }
          setDataTableParams={setDataTableParams}
          dataTableParams={dataTableParams}
          rowCount={
            searchValue !== "" &&
            searchResult &&
            searchResult !== undefined &&
            searchResult?.length !== 0
              ? searchResult?.data?.length
              : exchangeList && exchangeList?.total
          }
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
