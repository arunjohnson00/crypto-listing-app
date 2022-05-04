import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import { Item } from "./style";
import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import LineChart from "../../components/charts/linechart/LineChart";
import PieChart from "../../components/charts/piechart/PieChart";
import HtmlTables from "../../components/tables/htmltable/HtmlTables";
import TablesWithHead from "../../components/tables/htmltable/TablesWithHead";
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined";
import ComponentFooter from "../../components/footer/compfooter/ComponentFooter";
import { listExchangeRequest } from "../../store/action";
import { listNetworkRequest } from "../../store/action";
import { listNftMarketPlacesRequest } from "../../store/action";
import { listUsersRequest } from "../../store/action";

import { listCoinRequest } from "../../store/action";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const successHandler = (res: any) => {
      //console.log(res);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };

    dispatch(
      listExchangeRequest("emptyformData", successHandler, errorHandler)
    );
    dispatch(listNetworkRequest("emptyformData", successHandler, errorHandler));
    dispatch(listUsersRequest("emptyformData", successHandler, errorHandler));
    dispatch(
      listNftMarketPlacesRequest("emptyformData", successHandler, errorHandler)
    );

    dispatch(listCoinRequest("emptyformData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Coins Overview
        </Typography>
      </Grid>

      <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>

      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Item>
          <Box pt={3}>
            <LineChart />
          </Box>
        </Item>
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
        <Item>
          <Box pt={3}>
            <PieChart />
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
            <HtmlTables />
            <ComponentFooter />
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
