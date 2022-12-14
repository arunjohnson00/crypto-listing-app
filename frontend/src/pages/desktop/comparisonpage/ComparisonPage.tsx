import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  CardMedia,
  Button,
  Typography,
  Divider,
  Box,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
//import useMediaQuery from "@mui/material/useMediaQuery";

import IconButton from "@mui/material/IconButton";
import ComparisonCard from "../../../components/desktop/cards/comparisoncard/ComparisonCard";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import TextField from "@mui/material/TextField";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";

const ComparisonPage = () => {
  const theme = useTheme();
  //const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  const [compareAdd, setAddCompare] = useState<any>([1]);

  const addCompareHandle = () => {
    compareAdd?.length <= 3 && setAddCompare([...compareAdd, 1]);
  };

  const closeCompareHandle = () => {
    compareAdd.splice(-1, 1);
    setAddCompare([...compareAdd]);
  };

  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en");

  return (
    <Fragment>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="column" spacing={0.5}>
            <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
              Cryptocurrency comparison table
            </Typography>
            <Typography variant="body2" sx={{ color: "#CDCED1" }}>
              The table below shows hows how the cryptocurencies IG offers
              compare,Further down we explain how these factors mayinfluence the
              cryptocurrencues' valuations, and why they matter to traders
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              background: "linear-gradient(180deg, #030C2D 50%, #01061A);",
              flexGrow: 1,
              borderRadius: 3,
              padding: 3,
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={2}
              sx={{ alignItems: "center" }}
            >
              <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
                <Stack
                  direction="column"
                  sx={{
                    color: "#CBCCD7",
                    height: "auto",
                  }}
                  spacing={2.7}
                  pt={24.3}
                  alignItems={{ xs: "center", sm: "center", md: "flex-end" }}
                >
                  <Typography variant="h6" sx={{ color: "#04DC98" }}>
                    Name
                  </Typography>
                  <Typography variant="caption">symbol:</Typography>
                  <Typography variant="caption">Contract Address:</Typography>
                  <Typography variant="caption">Price:</Typography>
                  <Typography variant="caption">Total Supply:</Typography>
                  <Typography variant="caption">Max Supply:</Typography>
                  <Typography variant="caption">Market Cap:</Typography>
                  <Typography variant="caption">All time High:</Typography>
                  <Typography variant="caption">All time high date:</Typography>
                  <Typography variant="caption">Holders:</Typography>
                  <Typography variant="caption">Date added:</Typography>
                  <Typography variant="caption">LP Holding:</Typography>
                  <Typography variant="caption">Audited:</Typography>
                  <Typography variant="caption">LP Locked:</Typography>
                  <Typography variant="caption">KYC Verified:</Typography>
                </Stack>
              </Grid>
              {compareAdd &&
                compareAdd?.length !== 0 &&
                compareAdd !== undefined &&
                compareAdd?.map((val: any, index: number) => {
                  return (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={3}
                      xl={3}
                    >
                      <ComparisonCard
                        closeCompareHandle={closeCompareHandle}
                        index={index}
                      />
                    </Grid>
                  );
                })}

              {compareAdd && compareAdd.length <= 3 && (
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                  <Stack direction="column" spacing={2}>
                    <IconButton aria-label="delete">
                      <AddBoxOutlinedIcon
                        sx={{ color: "#2F3F76", fontSize: 30 }}
                      />
                    </IconButton>
                    <TextField
                      variant="standard"
                      placeholder="Search Coin"
                      sx={{
                        backgroundColor: "#01061A",
                        borderColor: "#141720",
                        fontSize: ".8rem",
                        color: "#c3c3c38c",
                        borderRadius: 1,
                        height: 40,
                        paddingX: 1,
                      }}
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          color: "#787373",
                          fontSize: ".8rem",
                          paddingTop: 5,
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#06B147",
                        textTransform: "capitalize",
                        fontSize: "0.775rem",
                      }}
                      onClick={addCompareHandle}
                    >
                      Add coin to compare
                    </Button>
                  </Stack>
                </Grid>
              )}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ComparisonPage;
