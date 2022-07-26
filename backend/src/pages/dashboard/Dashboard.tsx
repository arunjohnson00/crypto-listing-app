import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import sortBy from "lodash/sortBy";
import {
  coinListingPerDaysRequest,
  monthWiseCoinListingRequest,
  coinStatusCountRequest,
  liveAdsOverviewRequest,
  incomingAdRequest,
  recentListingsRequest,
} from "../../store/action";
import { Item } from "./style";
import PieChart from "../../components/charts/piechart/PieChart";
import LineChart from "../../components/charts/linechart/LineChart";
import HtmlTables from "../../components/tables/htmltable/HtmlTables";
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined";
import TablesWithHead from "../../components/tables/htmltable/TablesWithHead";
import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import ComponentFooter from "../../components/footer/compfooter/ComponentFooter";

const Dashboard = () => {
  const dispatch = useDispatch();
  const coinList = useSelector((cnList: any) => {
    return cnList?.coinReducer?.listCoins?.data;
  });
  const coinPerDayListing = useSelector((cnPerDayList: any) => {
    return cnPerDayList?.dashboardReducer?.coin_listing_per_days?.data;
  });

  const monthwiseCoinListing = useSelector((cnMonthList: any) => {
    return cnMonthList?.dashboardReducer?.month_wise_coin_listing?.data;
  });

  const coinStatusCount = useSelector((cnStatus: any) => {
    return cnStatus?.dashboardReducer?.coin_status_count?.data;
  });

  const liveAdsOverView = useSelector((liveAds: any) => {
    return liveAds?.dashboardReducer?.live_ads_overview?.data;
  });
  const incomingAds = useSelector((inAds: any) => {
    return inAds?.dashboardReducer?.incoming_ad_request?.data;
  });
  const recentListings: any = useSelector((rcList: any) => {
    return rcList?.dashboardReducer?.recent_listings?.data;
  });

  useEffect(() => {
    const successHandler = (res: any) => {
      //console.log(res);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(
      coinListingPerDaysRequest("emptyData", successHandler, errorHandler)
    );
    dispatch(
      monthWiseCoinListingRequest("emptyData", successHandler, errorHandler)
    );

    dispatch(coinStatusCountRequest("emptyData", successHandler, errorHandler));
    dispatch(liveAdsOverviewRequest("emptyData", successHandler, errorHandler));
    dispatch(incomingAdRequest("emptyData", successHandler, errorHandler));
    dispatch(recentListingsRequest("emptyData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems="flex-start">
      <Grid item xl={3.5} lg={3.5} md={3.5} sm={12} xs={12}>
        <Typography
          sx={{ textAlign: "left", fontWeight: 500, fontSize: "1.3rem" }}
        >
          Coins Overview
        </Typography>
      </Grid>

      <Grid item xl={8.5} lg={8.5} md={8.5} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>

      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
        <Item>
          <Box pt={3}>
            <LineChart lineChartData={coinPerDayListing && coinPerDayListing} />
          </Box>
        </Item>
      </Grid>
      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
        <Item>
          <Box pt={3}>
            <Stack direction="column" spacing={0.5}>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  paddingBottom: "5px",
                  color: "#373163",
                  fontSmooth: "always",
                  fontSize: ".9rem",
                  fontWeight: 700,
                }}
              >
                Current Status of Coin
              </Typography>
              <Divider orientation="horizontal" flexItem variant="fullWidth" />
            </Stack>
            <PieChart piData={coinStatusCount} title="Current status of coin" />
            <ComponentFooter data={coinStatusCount} path="/coin-status-count" />
          </Box>
        </Item>
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Item>
          <Box pt={2} pl={1}>
            <Stack direction="column" spacing={0.5}>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  paddingBottom: "5px",
                  color: "#373163",
                  fontSmooth: "always",
                  fontSize: ".9rem",
                  fontWeight: 700,
                }}
              >
                Coins Historical Data
              </Typography>
              <Divider orientation="horizontal" flexItem variant="fullWidth" />
            </Stack>
            <HtmlTables rows={monthwiseCoinListing && monthwiseCoinListing} />
            <ComponentFooter counter={false} path="/month-wise-coin-listing" />
          </Box>
        </Item>
      </Grid>

      <Grid item xl={7} lg={7} md={8} sm={12} xs={12}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            variant="h6"
            sx={{ textAlign: "left", paddingBottom: "18px", marginTop: "20px" }}
          >
            Live Ads Overview{" "}
          </Typography>
          <CellTowerOutlinedIcon style={{ color: "#00E396" }} />
        </Stack>
        <Item>
          <Box pt={0} pl={0}>
            <TablesWithHead
              rowHeader={[
                "Ad name",
                "Advertisement type",
                "Expires in",
                "Total days",
                "Notify",
              ]}
              rows={liveAdsOverView && liveAdsOverView}
              variant="ads_overview"
              mailer={true}
            />
            <ComponentFooter path="/live-ads-overview" />
          </Box>
        </Item>
      </Grid>

      <Grid item xl={5} lg={5} md={12} sm={12} xs={12}>
        <Typography
          variant="h6"
          sx={{ textAlign: "left", paddingBottom: "18px", marginTop: "20px" }}
        >
          Recent Listings
        </Typography>
        <Item>
          <Box pt={0} pl={1}>
            <TablesWithHead
              rowHeader={["Name", "Type", "Time", "Status"]}
              rows={recentListings && recentListings}
              variant="recent_listings"
            />
            <ComponentFooter path="/recent-listings" />
          </Box>
        </Item>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h6"
          sx={{ textAlign: "left", paddingBottom: "18px", marginTop: "20px" }}
        >
          Incoming Ads Requests
        </Typography>
        <Item>
          <Box pt={0} pl={0}>
            <TablesWithHead
              rowHeader={[
                "Coin name",
                "Amount",
                "Products",
                "Start Date",
                "Days",
                "Trans.ID",
                "Order Careated",
                "Status",
              ]}
              rows={incomingAds && incomingAds}
              variant="incoming_ads"
            />
            <ComponentFooter path="/incoming-ad-request" />
          </Box>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
