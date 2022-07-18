import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";

import {
  coinListingPerDaysRequest,
  monthWiseCoinListingRequest,
  coinStatusCountRequest,
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

  const coinStatus = useSelector((cnMonthList: any) => {
    return cnMonthList?.dashboardReducer?.coin_status_count?.data;
  });

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(
      coinListingPerDaysRequest("emptyData", successHandler, errorHandler)
    );
    dispatch(
      monthWiseCoinListingRequest("emptyData", successHandler, errorHandler)
    );

    dispatch(coinStatusCountRequest("emptyData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xl={3.5} lg={3.5} md={3.5} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Coins Overview
        </Typography>
      </Grid>

      <Grid item xl={8.5} lg={8.5} md={8.5} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>

      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Item>
          <Box pt={3}>
            <LineChart lineChartData={coinPerDayListing && coinPerDayListing} />
          </Box>
        </Item>
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <Item>
          <Box pt={3}>
            <PieChart piData={coinList} />
            <ComponentFooter />
          </Box>
        </Item>
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <Item>
          <Box pt={2} pl={1}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                textAlign: "left",
                paddingBottom: "5px",
              }}
            >
              Coins Historical Data
            </Typography>
            <HtmlTables rows={monthwiseCoinListing && monthwiseCoinListing} />
            <ComponentFooter counter={false} />
          </Box>
        </Item>
      </Grid>

      <Grid item xl={7} lg={7} md={7} sm={6} xs={12}>
        <Typography
          variant="h5"
          sx={{ textAlign: "left", paddingBottom: "18px", marginTop: "20px" }}
        >
          Live Ads Overview{" "}
          <CellTowerOutlinedIcon style={{ color: "#00E396" }} />
        </Typography>
        <Item>
          <Box pt={2} pl={1}>
            <TablesWithHead />
            <ComponentFooter />
          </Box>
        </Item>
      </Grid>

      <Grid item xl={5} lg={5} md={5} sm={6} xs={12}>
        <Typography
          variant="h5"
          sx={{ textAlign: "left", paddingBottom: "18px", marginTop: "20px" }}
        >
          Recent Listings
        </Typography>
        <Item>
          <Box pt={2} pl={1}>
            <TablesWithHead />
            <ComponentFooter />
          </Box>
        </Item>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h5"
          sx={{ textAlign: "left", paddingBottom: "18px", marginTop: "20px" }}
        >
          Incoming Ads Requests
        </Typography>
        <Item>
          <Box pt={2} pl={1}>
            <TablesWithHead />
            <ComponentFooter />
          </Box>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
