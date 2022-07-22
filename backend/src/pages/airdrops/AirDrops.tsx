import { Grid, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
import Avatar from "@mui/material/Avatar";
import { listAirDropsRequest, searchAirDropsRequest } from "../../store/action";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";

import InputSearch from "../../components/form/input/search/InputSearch";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const AirDrops = () => {
  const airdropsList = useSelector((airdpList: any) => {
    return airdpList.airdropsReducer.listAirdrops;
  });
  const searchResult = useSelector((result: any) => {
    return result?.airdropsReducer?.search_result;
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
    dispatch(searchAirDropsRequest(searchVal, successHandler, errorHandler));
  };

  var filteredData =
    searchValue !== "" &&
    searchResult &&
    searchResult !== undefined &&
    searchResult.length !== 0
      ? searchResult.data
      : airdropsList.data;

  const dispatch = useDispatch();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(
      listAirDropsRequest(dataTableParams, successHandler, errorHandler)
    );
  }, [dispatch, dataTableParams, setDataTableParams]);

  const tableColumn = [
    // {
    //   field: "thumb_icon",
    //   headerName: "Icon",
    //   flex: 1,
    //   sortable: false,
    //   disableClickEventBubbling: true,
    //   renderCell: (params: any) => (
    //     <Avatar
    //       src={`${serverAPIUrl}public/uploads/badge_icons/${params.row.icon}`}
    //       alt={params.thumb_icon}
    //     />
    //   ),
    // },
    {
      field: "name",
      headerName: "Coin Name",
      flex: 1,
    },
    {
      field: "coin_id",
      headerName: "Coin ID",
      flex: 1,
    },

    {
      field: "start_date",
      headerName: "Start Date",
      flex: 1,
    },

    {
      field: "no_of_days",
      headerName: "No.of Days",
      flex: 1,
    },
    {
      field: "total_amount",
      headerName: "Total Amount",
      flex: 1,
    },
    {
      field: "no_of_winners",
      headerName: "No.of Winners",
      flex: 1,
    },
    {
      field: "is_follow_twitter",
      headerName: "Is follow Twitter?",
      flex: 1,
      renderCell: (params: any) => (
        <span>
          {parseInt(params.row.is_follow_twitter) === 1 && (
            <span style={{ color: "#64dd17" }}>Yes</span>
          )}

          {parseInt(params.row.is_follow_twitter) === 2 && (
            <span style={{ color: "#d50000" }}>No</span>
          )}
        </span>
      ),
    },
    {
      field: "join_telegram",
      headerName: "Joined Telegram?",
      flex: 1,
      renderCell: (params: any) => (
        <span>
          {parseInt(params.row.join_telegram) === 1 && (
            <span style={{ color: "#64dd17" }}>Yes</span>
          )}

          {parseInt(params.row.join_telegram) === 2 && (
            <span style={{ color: "#d50000" }}>No</span>
          )}
        </span>
      ),
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
                  Airdrops
                </Typography>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                <InputSearch
                  placeholder="Search Airdrops"
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
            <Link to="/airdrops/add">
              <LargeBtn Title="Add new Airdrops" />
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
              : airdropsList && airdropsList?.data
          }
          setDataTableParams={setDataTableParams}
          dataTableParams={dataTableParams}
          rowCount={
            searchValue !== "" &&
            searchResult &&
            searchResult !== undefined &&
            searchResult?.length !== 0
              ? searchResult?.data?.length
              : airdropsList && airdropsList?.total
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
          <Link to="/airdrops/add">
            <LargeBtn Title="Add new Airdrops" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AirDrops;
