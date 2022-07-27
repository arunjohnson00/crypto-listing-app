import { Grid, Typography, Stack, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import {
  searchBadgeRequest,
  coinStatusCountRequest,
  monthWiseCoinListingRequest,
  liveAdsOverviewRequest,
  incomingAdRequest,
  recentListingsRequest,
} from "../../store/action";
import ago from "ts-ago";
import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import TimeAgo from "javascript-time-ago";
import { sendNotificationEmailRequest } from "../../store/action";
import { toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import InputSearch from "../../components/form/input/search/InputSearch";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const ViewFullList = () => {
  const timeAgo = new TimeAgo("en-US");
  const location = useLocation();
  const navigate = useNavigate();
  const diffDays = (date: any, otherDate: any) =>
    Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

  const monthwiseCoinListing = useSelector((cnMonthList: any) => {
    return cnMonthList?.dashboardReducer?.month_wise_coin_listing;
  });
  monthwiseCoinListing?.data?.map((x: any, i: any) => {
    x.id = i + 1;
    return x;
  });
  const liveAdsOverView = useSelector((liveAds: any) => {
    return liveAds?.dashboardReducer?.live_ads_overview;
  });

  liveAdsOverView?.data?.map((x: any, i: any) => {
    x.id = i + 1;
    return x;
  });

  const incomingAds = useSelector((inAds: any) => {
    return inAds?.dashboardReducer?.incoming_ad_request;
  });
  console.log(incomingAds);
  // incomingAds?.data?.map((x: any, i: any) => {
  //   x.id = i + 1;
  //   return x;
  // });

  const recentListings: any = useSelector((rcList: any) => {
    return rcList?.dashboardReducer?.recent_listings;
  });
  recentListings?.data
    ?.concat(recentListings?.data)
    .sort((a: any, b: any) => (a.time < b.time ? 1 : -1))
    .map((x: any, i: any) => {
      x.id = i + 1;
      return x;
    });

  // const searchResult = useSelector((result: any) => {
  //   return result?.badgesReducer?.search_result;
  // });

  // const [searchValue, setSearchValue] = useState("");
  const [dataTableParams, setDataTableParams] = useState<any>({
    PageSize: 15,
    pageCount: 1,
  });

  // const searchHandler = (searchVal: any) => {
  //   setSearchValue(searchVal);
  //   const successHandler = (res: any) => {};
  //   const errorHandler = (err: any) => {};
  //   dispatch(searchBadgeRequest(searchVal, successHandler, errorHandler));
  // };

  // var filteredData =
  //   searchValue !== "" &&
  //   searchResult &&
  //   searchResult !== undefined &&
  //   searchResult.length !== 0
  //     ? searchResult.data
  //     : monthwiseCoinListing.data;

  var filteredData =
    location.pathname === "/month-wise-coin-listing"
      ? monthwiseCoinListing?.data
      : location.pathname === "/live-ads-overview"
      ? liveAdsOverView?.data
      : location.pathname === "/recent-listings"
      ? recentListings?.data
      : location.pathname === "/incoming-ad-request" && incomingAds?.data;

  const dispatch = useDispatch();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(
      coinStatusCountRequest(dataTableParams, successHandler, errorHandler)
    );
    dispatch(
      monthWiseCoinListingRequest(dataTableParams, successHandler, errorHandler)
    );
    dispatch(
      liveAdsOverviewRequest(dataTableParams, successHandler, errorHandler)
    );
    dispatch(incomingAdRequest(dataTableParams, successHandler, errorHandler));
    dispatch(
      recentListingsRequest(dataTableParams, successHandler, errorHandler)
    );
  }, [dispatch, dataTableParams, setDataTableParams]);

  const sendMailHandler = (val: any) => {
    const successHandler = (res: any) => {
      console.log(res);

      toast.success(`${res?.data?.data}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    const errorHandler = (err: any) => {
      console.log(err);
      toast.error(`${err.error.message.response.request.responseText}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };
    dispatch(sendNotificationEmailRequest(val, successHandler, errorHandler));
  };
  const monthWiseColumn = [
    {
      field: "id",
      headerName: "#",
      flex: 0.3,
      renderCell: (params: any) => (
        <span style={{ color: "#bebebe", fontWeight: 600 }}>{params?.id}</span>
      ),
    },
    {
      field: "year",
      headerName: "Year",
      flex: 0.5,
    },
    {
      field: "month",
      headerName: "Month",
      flex: 0.5,
    },
    {
      field: "count",
      headerName: "Count",
      flex: 0.5,
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   flex: 1,
    //   renderCell: (params: any) => (
    //     <span>
    //       {parseInt(params.row.status) === 1 && (
    //         <span style={{ color: "#64dd17" }}>Approved</span>
    //       )}

    //       {parseInt(params.row.status) === 2 && (
    //         <span style={{ color: "#d50000" }}>Pending</span>
    //       )}

    //       {parseInt(params.row.status) === 3 && (
    //         <span style={{ color: "#6a1b9a" }}>Suspended</span>
    //       )}
    //     </span>
    //   ),
    // },
  ];

  const liveadsColumn = [
    {
      field: "id",
      headerName: "#",
      flex: 0.3,
      renderCell: (params: any) => (
        <span style={{ color: "#bebebe", fontWeight: 600 }}>{params?.id}</span>
      ),
    },
    {
      field: "adName",
      headerName: "Ad Name",
      flex: 1,
    },
    {
      field: "adType",
      headerName: "AdvertisementType",
      flex: 1,
    },
    {
      field: "adStartDate",
      headerName: "Expires in",
      flex: 1,
      renderCell: (params: any) => (
        <span>
          {diffDays(
            new Date(params?.row?.adStartDate).setDate(
              new Date(params?.row?.adStartDate).getDate() +
                parseInt(params?.row?.adNumberOfDays)
            ),
            new Date()
          )}
        </span>
      ),
    },
    {
      field: "adNumberOfDays",
      headerName: "Total Days",
      flex: 1,
    },
    {
      field: "updated_at",
      headerName: "Notify",
      flex: 1,
      renderCell: (params: any) => (
        <IconButton sx={{ padding: 0 }} onClick={sendMailHandler}>
          <MailOutlineIcon sx={{ color: "#10E49C", fontSize: "1rem" }} />
        </IconButton>
      ),
    },
  ];

  const recentListingColumn = [
    {
      field: "id",
      headerName: "#",
      flex: 0.3,
      renderCell: (params: any) => (
        <span style={{ color: "#bebebe", fontWeight: 600 }}>{params?.id}</span>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "time",
      headerName: "Time",
      flex: 1,
      renderCell: (params: any) => (
        <span>{timeAgo.format(new Date(params?.row?.time))}</span>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params: any) => (
        <span>
          {parseInt(params?.row?.status) === 1 && (
            <span style={{ color: "#00E396" }}>Approved</span>
          )}

          {parseInt(params?.row?.status) === 2 && (
            <span style={{ color: "#FEB019" }}>Suspended</span>
          )}

          {parseInt(params?.row?.status) === 3 && (
            <span style={{ color: "#FF0000" }}>Blocked</span>
          )}

          {parseInt(params?.row?.status) === 4 && (
            <span style={{ color: "#775DD0" }}>Processing</span>
          )}
        </span>
      ),
    },
  ];

  const incomingAdsColumn = [
    {
      field: "id",
      headerName: "#",
      flex: 0.3,
      renderCell: (params: any) => (
        <span style={{ color: "#bebebe", fontWeight: 600 }}>{params?.id}</span>
      ),
    },
    {
      field: "name",
      headerName: "Coin Name",
      flex: 0.8,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.5,
    },

    {
      field: "product",
      headerName: "Products",
      flex: 1,
      renderCell: (params: any) => (
        <Stack direction="row" spacing={1} alignItems="center">
          <span style={{ cursor: "pointer" }}>{params?.row?.product}</span>
          {params?.row?.adList !== 0 && (
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState: any) => (
                <div>
                  <span
                    style={{ color: "#7676ea" }}
                    {...bindTrigger(popupState)}
                  >
                    {params?.row?.adList?.length} Items
                  </span>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "center",
                      horizontal: "left",
                    }}
                  >
                    <Stack direction="column" spacing={0.2} py={0.7}>
                      {parseInt(params?.row?.adList) !== 0 &&
                        params?.row?.length !== 0 &&
                        params?.row?.adList?.map((list: any, index: number) => (
                          <Typography
                            key={index}
                            sx={{ px: 2, fontSize: ".65rem" }}
                          >
                            {list && list?.name}
                          </Typography>
                        ))}
                      {/* <Divider
                                flexItem
                                orientation="horizontal"
                                variant="fullWidth"
                              /> */}
                    </Stack>
                  </Popover>
                </div>
              )}
            </PopupState>
          )}
        </Stack>
      ),
    },
    {
      field: "days",
      headerName: "Days",
      flex: 0.5,
      renderCell: (params: any) => <span>{params?.row?.days} Days</span>,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      flex: 0.5,
      renderCell: (params: any) => (
        <span>
          {
            // timeAgo.format(new Date(params?.row?.startDate))
            ago(params?.row?.startDate)
          }
        </span>
      ),
    },
    {
      field: "transId",
      headerName: "Trans.ID",
      flex: 0.5,
      renderCell: (params: any) => (
        <span style={{ color: "#0864B1" }}>
          {params?.row?.transId?.substring(0, 7) + ".."}
        </span>
      ),
    },
    {
      field: "orderCreated",
      headerName: "Order Created",
      flex: 0.5,
      renderCell: (params: any) => (
        <span>
          {
            // timeAgo.format(new Date(params?.row?.orderCreated))
            ago(params?.row?.orderCreated)
          }
        </span>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
      renderCell: (params: any) => (
        <span>
          {parseInt(params?.row?.status) === 1 && (
            <span style={{ color: "#00E396" }}>Approved</span>
          )}

          {parseInt(params?.row?.status) === 2 && (
            <span style={{ color: "#FEB019" }}>Suspended</span>
          )}

          {parseInt(params?.row?.status) === 3 && (
            <span style={{ color: "#FF0000" }}>Blocked</span>
          )}

          {parseInt(params?.row?.status) === 4 && (
            <span style={{ color: "#775DD0" }}>Processing</span>
          )}
        </span>
      ),
    },
  ];
  return (
    <Grid container spacing={0}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          pt={3}
          pb={0}
        >
          <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "flex-start" }}
            >
              <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <IconButton>
                    <ArrowBackIosTwoToneIcon
                      onClick={() => {
                        navigate(-1);
                      }}
                    />
                  </IconButton>
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "left", fontWeight: 500 }}
                  >
                    {location.pathname === "/coin-status-count" &&
                      "Coin Status Count"}

                    {location.pathname === "/month-wise-coin-listing" &&
                      "Month wise coin listing"}

                    {location?.pathname === "/live-ads-overview" &&
                      "Live Ads Overview"}

                    {location.pathname === "/recent-listings" &&
                      "Recent Listing"}
                    {location.pathname === "/incoming-ad-request" &&
                      "Incoming Ad Request"}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                {/* <InputSearch
                  placeholder={
                    location.pathname === "/month-wise-coin-listing" &&
                    "Month wise coin listing"
                  }
                  searchValue={searchValue}
                  searchHandler={searchHandler}
                /> */}
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
            {/* <Link to="/badges/add">
              <LargeBtn Title="Add new Badge" />
            </Link> */}
          </Grid>
        </Stack>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
        <DataTables
          action={false}
          tableColumn={
            location.pathname === "/month-wise-coin-listing"
              ? monthWiseColumn
              : location?.pathname === "/live-ads-overview"
              ? liveadsColumn
              : location?.pathname === "/recent-listings"
              ? recentListingColumn
              : location?.pathname === "/incoming-ad-request" &&
                incomingAdsColumn
          }
          tableData={filteredData && filteredData}
          data={
            location.pathname === "/month-wise-coin-listing"
              ? monthwiseCoinListing?.data
              : location.pathname === "/live-ads-overview"
              ? liveAdsOverView?.data
              : location.pathname === "/recent-listings"
              ? recentListings?.data
              : location.pathname === "/incoming-ad-request" &&
                incomingAds?.data
          }
          setDataTableParams={setDataTableParams}
          dataTableParams={dataTableParams}
          rowCount={
            location.pathname === "/month-wise-coin-listing"
              ? monthwiseCoinListing?.data?.length
              : location.pathname === "/live-ads-overview"
              ? liveAdsOverView?.data?.length
              : location.pathname === "/recent-listings"
              ? recentListings?.data?.length
              : location.pathname === "/incoming-ad-request" &&
                incomingAds?.total
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
          {/* <Link to="/badges/add">
            <LargeBtn Title="Add new Badge" />
          </Link> */}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ViewFullList;
