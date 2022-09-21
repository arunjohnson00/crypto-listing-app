import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import moment from "moment";
import FearAndGreedcard from "../../../components/desktop/cards/fearandgreedcard/FearAndGreedcard";
import FearAndGreedIndexChart from "../../../components/desktop/fearandgreedindexchart/FearAndGreedIndexChart";
import FearAndGreedIndexHTMLTable from "../../../components/desktop/fearandgreedindexhtmltable/FearAndGreedIndexHTMLTable";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";

import { tableHeader } from "./helper";
import FearAndGreedIndexPieChart from "../../../components/desktop/fearandgreedindexpiechart/FearAndGreedIndexPieChart";
import { feargreedDataRequest } from "../../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const FearGreedIndexPage = () => {
  const dispatch: any = useDispatch();
  const location = useLocation();

  const fearGreedData = [
    ["Wed Sep 10 2022 7:00:09", 18922.122606522],
    ["Wed Sep 11 2022 6:00:10", 18926.577839053],
    ["Wed Sep 12 2022 5:00:09", 18888.975381391],
    ["Wed Sep 13 2022 5:00:09", 18888.975381391],
    ["Wed Sep 14 2022 5:00:09", 18888.975381391],
    ["Wed Sep 15 2022 5:00:09", 18888.975381391],
    ["Wed Sep 16 2022 5:00:09", 18888.975381391],
    ["Wed Sep 17 2022 5:00:09", 18888.975381391],
    ["Wed Sep 18 2022 5:00:09", 18888.975381391],
    ["Wed Sep 19 2022 5:00:09", 18888.975381391],
    ["Wed Sep 20 2022 5:00:09", 18888.975381391],
    ["Wed Sep 21 2022 5:00:09", 18888.975381391],
  ];
  // const fearGreedData = useSelector((data: any) => {
  //   return data?.feargreedReducer?.feer_greed_data;
  // });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(feargreedDataRequest("noData", successHandler, errorHandler));
  }, []);

  console.log(fearGreedData && fearGreedData, "hi");
  return (
    <Fragment>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography variant="h5" color="#FFFFFF">
                Crypto Fear and Greed Index
              </Typography>
              <Box pt={3}>
                <FearAndGreedcard />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <FearAndGreedIndexChart data={fearGreedData} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={2} pt={3}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <Stack direction="row" spacing={2}>
                <Typography variant="h5" color="#FFFFFF">
                  Historical Data
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} px={2}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                      //backgroundColor: dateTime === "thirty_day" ? "#6252e7" : "#072170",
                      backgroundColor: "#072170",
                      borderRadius: 5,
                    }}
                    //onClick={() => updateData("seven_day")}
                  >
                    7d
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                      //backgroundColor: dateTime === "thirty_day" ? "#6252e7" : "#072170",
                      backgroundColor: "#072170",
                      borderRadius: 5,
                    }}
                    //onClick={() => updateData("fifteen_day")}
                  >
                    15d
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                      //backgroundColor: dateTime === "thirty_day" ? "#6252e7" : "#072170",
                      backgroundColor: "#072170",
                      borderRadius: 5,
                    }}
                    //onClick={() => updateData("thirty_day")}
                  >
                    30d
                  </Button>
                </Stack>
              </Stack>
              <Box pt={3}>
                <FearAndGreedIndexHTMLTable tableHeader={tableHeader} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Stack direction="row" spacing={2}>
                <Typography variant="h5" color="#FFFFFF">
                  {moment(new Date()).format("MMMM YYYY")} Overview
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} px={2}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                      //backgroundColor: dateTime === "thirty_day" ? "#6252e7" : "#072170",
                      backgroundColor: "#072170",
                      borderRadius: 5,
                    }}
                    //onClick={() => updateData("seven_day")}
                  >
                    7d
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                      //backgroundColor: dateTime === "thirty_day" ? "#6252e7" : "#072170",
                      backgroundColor: "#072170",
                      borderRadius: 5,
                    }}
                    //onClick={() => updateData("fifteen_day")}
                  >
                    15d
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                      //backgroundColor: dateTime === "thirty_day" ? "#6252e7" : "#072170",
                      backgroundColor: "#072170",
                      borderRadius: 5,
                    }}
                    //onClick={() => updateData("thirty_day")}
                  >
                    30d
                  </Button>
                </Stack>
              </Stack>
              <Box pt={3}>
                <FearAndGreedIndexPieChart data={fearGreedData} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FearGreedIndexPage;
