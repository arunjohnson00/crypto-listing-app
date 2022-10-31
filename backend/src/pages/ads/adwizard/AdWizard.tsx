import { Grid, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import Avatar from "@mui/material/Avatar";
import {
  listAdsListRequest,
  listAirDropsRequest,
  searchAdsListRequest,
  searchAirDropsRequest,
} from "../../../store/action";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import DataTables from "../../../components/tables/datatables/DataTables";

import InputSearch from "../../../components/form/input/search/InputSearch";
import moment from "moment";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const AdWizard = () => {
  const adsList = useSelector((adsList: any) => {
    return adsList.adsListReducer.list_ads;
  });
  const searchResult = useSelector((result: any) => {
    return result?.adsListReducer?.search_result;
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
    dispatch(searchAdsListRequest(searchVal, successHandler, errorHandler));
  };

  var filteredData =
    searchValue !== "" &&
    searchResult &&
    searchResult !== undefined &&
    searchResult.length !== 0
      ? searchResult.data
      : adsList.data;

  const dispatch = useDispatch();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(listAdsListRequest(dataTableParams, successHandler, errorHandler));
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
      field: "id",
      headerName: "#",
      flex: 0.5,
      renderCell: (params: any) => (
        <span style={{ color: "#bebebe", fontWeight: 600 }}>{params?.id}</span>
      ),
    },
    {
      field: "banner_name",
      headerName: "Ads Name",
      flex: 1,
    },

    {
      field: "banner_ad_type",
      headerName: "Advertisement Type",
      flex: 2,

      renderCell: (params: any) => (
        <span>
          {parseInt(params.row.banner_ad_type) === 1 && (
            <span>Main banner</span>
          )}

          {parseInt(params.row.banner_ad_type) === 2 && (
            <span>Side Square Banner</span>
          )}
          {parseInt(params.row.banner_ad_type) === 3 && (
            <span> Side Banner Half</span>
          )}
          {parseInt(params.row.banner_ad_type) === 4 && (
            <span> Featured Coin</span>
          )}

          {parseInt(params.row.banner_ad_type) === 5 && <span>Video Ads</span>}
          {parseInt(params.row.banner_ad_type) === 6 && (
            <span>Vote Click Popup</span>
          )}
          {parseInt(params.row.banner_ad_type) === 7 && (
            <span>Search Bar Ad</span>
          )}

          {parseInt(params.row.banner_ad_type) === 8 && (
            <span>Welcome Banner Popup</span>
          )}

          {parseInt(params.row.banner_ad_type) === 9 && (
            <span>Announcements</span>
          )}
        </span>
      ),
    },
    {
      field: "banner_target_link",
      headerName: "Target Link",
      flex: 2,
      renderCell: (params: any) => (
        <span style={{ color: "blue", fontSize: ".7rem" }}>
          <a
            href={params.row.banner_target_link}
            target="_blank"
            rel="noreferrer"
            style={{ color: "blue", textDecoration: "none" }}
          >
            {" "}
            {params.row.banner_target_link}
          </a>
        </span>
      ),
    },

    {
      field: "banner_start_date",
      headerName: "Start Date",
      flex: 1,
      renderCell: (params: any) => (
        <span>
          {moment(new Date(params?.row.banner_start_date)).format(
            "DD MMM YYYY"
          )}
        </span>
      ),
    },

    {
      field: "no_of_days",
      headerName: "Total Days",
      flex: 1,

      renderCell: (params: any) => <span>{params?.row.no_of_days}</span>,
    },

    {
      field: "days",
      headerName: "Expiration Date",
      flex: 1.5,
      renderCell: (params: any) => (
        <span>
          {moment(new Date(params?.row.banner_start_date))
            .add(7, "days")
            .fromNow()}
        </span>
      ),
    },
    {
      field: "created_at",
      headerName: "Created at",
      flex: 1,
      renderCell: (params: any) => (
        <span>{moment(new Date(params?.row.created_at)).fromNow()}</span>
      ),
    },

    {
      field: "status",
      headerName: "Status",
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
                  Ads
                </Typography>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                <InputSearch
                  placeholder="Search Ads"
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
            <Link to="/adslist/add" style={{ textDecoration: "none" }}>
              <LargeBtn Title="Add new Ads" />
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
              : adsList && adsList?.data
          }
          setDataTableParams={setDataTableParams}
          dataTableParams={dataTableParams}
          rowCount={
            searchValue !== "" &&
            searchResult &&
            searchResult !== undefined &&
            searchResult?.length !== 0
              ? searchResult?.data?.length
              : adsList && adsList?.total
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
          <Link to="/adslist/add" style={{ textDecoration: "none" }}>
            <LargeBtn Title="Add new Ads" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AdWizard;
