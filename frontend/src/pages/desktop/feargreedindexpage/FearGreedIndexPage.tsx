import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import moment from "moment";
import FearAndGreedcard from "../../../components/desktop/cards/fearandgreedcard/FearAndGreedcard";
import FearAndGreedIndexChart from "../../../components/desktop/fearandgreedindexchart/FearAndGreedIndexChart";
import FearAndGreedIndexHTMLTable from "../../../components/desktop/fearandgreedindexhtmltable/FearAndGreedIndexHTMLTable";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";

import { tableHeader } from "./helper";
import FearAndGreedIndexPieChart from "../../../components/desktop/fearandgreedindexpiechart/FearAndGreedIndexPieChart";
import {
  feargreedDataRequest,
  feargreedHistoricalDataRequest,
} from "../../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const FearGreedIndexPage = () => {
  const dispatch: any = useDispatch();
  const location = useLocation();

  const [historicalDataFilter, setHistoricalDatafilter] = useState<any>(30);
  const [pieChartDataFilter, setPieChartDatafilter] = useState<any>(30);
  const fearGreedData = useSelector((data: any) => {
    return data?.feargreedReducer?.feer_greed_data?.data;
  });

  const fearGreedHistoricalData = useSelector((data: any) => {
    return data?.feargreedReducer?.feer_greed_historical_data?.data;
  });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(feargreedDataRequest("noData", successHandler, errorHandler));
    dispatch(
      feargreedHistoricalDataRequest("noData", successHandler, errorHandler)
    );
  }, []);

  return (
    <Fragment>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={2} rowSpacing={3}>
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
          <Grid container columnSpacing={2} pt={3} rowSpacing={3}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={2}
                alignItems="center"
              >
                <Typography variant="h5" color="#FFFFFF">
                  Historical Data
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} px={2}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                      backgroundColor:
                        historicalDataFilter === 7 ? "#6252e7" : "#072170",
                      //backgroundColor: "#072170",
                      borderRadius: 5,
                    }}
                    onClick={() => setHistoricalDatafilter(7)}
                  >
                    7d
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                      backgroundColor:
                        historicalDataFilter === 15 ? "#6252e7" : "#072170",
                      //backgroundColor: "#072170",
                      borderRadius: 5,
                    }}
                    onClick={() => setHistoricalDatafilter(15)}
                  >
                    15d
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                      backgroundColor:
                        historicalDataFilter === 30 ? "#6252e7" : "#072170",
                      //backgroundColor: "#072170",
                      borderRadius: 5,
                    }}
                    onClick={() => setHistoricalDatafilter(30)}
                  >
                    30d
                  </Button>
                </Stack>
              </Stack>
              <Box pt={3}>
                <FearAndGreedIndexHTMLTable
                  tableHeader={tableHeader}
                  tableData={fearGreedHistoricalData && fearGreedHistoricalData}
                  filterValue={historicalDataFilter && historicalDataFilter}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={2}
                alignItems="center"
              >
                <Typography variant="h5" color="#FFFFFF">
                  Last {pieChartDataFilter && pieChartDataFilter} Days Overview
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} px={2}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                      backgroundColor:
                        pieChartDataFilter === 7 ? "#6252e7" : "#072170",
                      //backgroundColor: "#072170",
                      borderRadius: 5,
                    }}
                    onClick={() => setPieChartDatafilter(7)}
                  >
                    7d
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                      backgroundColor:
                        pieChartDataFilter === 15 ? "#6252e7" : "#072170",
                      //backgroundColor: "#072170",
                      borderRadius: 5,
                    }}
                    onClick={() => setPieChartDatafilter(15)}
                  >
                    15d
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                      backgroundColor:
                        pieChartDataFilter === 30 ? "#6252e7" : "#072170",
                      //backgroundColor: "#072170",
                      borderRadius: 5,
                    }}
                    onClick={() => setPieChartDatafilter(30)}
                  >
                    30d
                  </Button>
                </Stack>
              </Stack>
              <Box pt={3}>
                <FearAndGreedIndexPieChart
                  data={
                    fearGreedHistoricalData &&
                    fearGreedHistoricalData.slice(
                      0,
                      pieChartDataFilter && pieChartDataFilter
                    )
                  }
                  filterValue={pieChartDataFilter && pieChartDataFilter}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FearGreedIndexPage;
