import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Typography,
  Box,
  CardMedia,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import Iframe from "react-iframe";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedCoinCards from "../../../components/desktop/cards/featuredcoin/FeaturedCoinCards";
import { useTheme } from "@mui/material/styles";
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChartEventCard from "../../../components/desktop/cards/charteventcard/ChartEventCard";
import ChartWidgetCard from "../../../components/desktop/cards/chartwidgetcard/ChartWidgetCard";
import FreeCoinHTMLTable from "../../../components/desktop/table/freecoinhtmltable/FreeCoinHTMLTable";
import CoinxHighPlayCard from "../../../components/desktop/cards/coinxhighplaycard/CoinxHighPlayCard";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";

const FreeCoinPage = ({ windowInnerWidth }: any) => {
  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");

  return (
    <Fragment>
      <Grid
        container
        spacing={5}
        sx={{
          dispaly: "flex",
        }}
      >
        <Grid xs={12} sx={{ paddingTop: 3 }}>
          <LatestNewsScroll />
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "13px",
            paddingBottom: "13px",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            spacing={{ xs: 1, sm: 1, md: 2 }}
          >
            <Typography variant="h5" sx={{ color: "#FFFFF5", fontWeight: 600 }}>
              Free Coins
            </Typography>
            <Typography
              sx={{ color: "#FFFFF5", fontWeight: 300, fontSize: ".8rem" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
              temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur! Commodi minima excepturi repudiandae velit hic
              maxime doloremque. Quaerat provident commodi consectetur veniam
              similique ad earum omnis ipsum saepe, voluptas, hic voluptates
              pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
              excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              Voluptatem quaerat non architecto ab laudantium modi minima sunt
              esse temporibus sint culpa, recusandae aliquam numquam totam
              ratione voluptas quod exercitationem fuga. Possimus quis earum
              veniam quasi aliquam eligendi, placeat qui corporis!
            </Typography>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "13px",
            paddingBottom: "13px",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 1, md: 2 }}
            pt={5}
          >
            <Grid item xs={12} sm={12} md={8.5} lg={8.5} xl={8.5} mb={1}>
              <Stack direction="column" spacing={5}>
                <Stack direction="column" spacing={3}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#2BB77E", fontWeight: 600 }}
                  >
                    Get Free Crypto Now
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      fullWidth
                      id="filled-basic"
                      variant="outlined"
                      placeholder="Your faoucetpay linked address"
                      sx={{
                        borderColor: "#0F1A4A",

                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#01040D",
                          height: 40,
                          borderRadius: 4,
                          color: "#727374",
                          fontSize: ".80rem",
                          fontWeight: 600,
                          "& fieldset": {
                            borderColor: "#0F1A4A",
                            borderWidth: 2,
                            color: "#727374",
                          },
                          "&:hover fieldset": {
                            borderColor: "#0F1A4A",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#0F1A4A",
                          },
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        width: 150,
                        borderRadius: 4.5,
                        textTransform: "capitalize",
                        fontSize: ".70rem",
                        backgroundColor: "#2415A2",
                      }}
                    >
                      Get free crypto
                    </Button>
                  </Stack>
                </Stack>

                <Stack direction="column" spacing={2} alignItems="flex-start">
                  <Typography
                    variant="body1"
                    sx={{ color: "#2BB77E", fontWeight: 600 }}
                  >
                    Last Payments
                  </Typography>
                  <FreeCoinHTMLTable
                    rowsHead={["Address", "Amount", "When", "Type"]}
                    rows={[
                      {
                        address: "test1",
                        amount: "500",
                        when: "1s ago",
                        type: "claim",
                      },
                      {
                        address: "test2",
                        amount: "600",
                        when: "11s ago",
                        type: "referal",
                      },
                    ]}
                  />
                </Stack>

                <Stack direction="column" spacing={2} alignItems="flex-start">
                  <Stack direction="column" spacing={0} alignItems="flex-start">
                    <Typography
                      variant="body1"
                      sx={{ color: "#2BB77E", fontWeight: 600 }}
                    >
                      Referral Program
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#FFFFFF", fontWeight: 400 }}
                    >
                      50% refferal commission. Replace xxx with your FaucetPay
                      linked address
                    </Typography>
                  </Stack>
                  <TextField
                    fullWidth
                    id="filled-basic"
                    variant="outlined"
                    placeholder="http://localhost:3000/free-coin?x=xvgfjy"
                    sx={{
                      borderColor: "#0F1A4A",

                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#01040D",
                        height: 40,
                        borderRadius: 4,
                        color: "#727374",
                        fontSize: ".80rem",
                        fontWeight: 600,
                        "& fieldset": {
                          borderColor: "#0F1A4A",
                          borderWidth: 2,
                          color: "#727374",
                        },
                        "&:hover fieldset": {
                          borderColor: "#0F1A4A",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#0F1A4A",
                        },
                      },
                    }}
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={3.5} lg={3.5} xl={3.5} mb={1}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={1}>
                <Stack direction="column" spacing={2}>
                  <Typography
                    sx={{
                      color: "#444548",
                      fontWeight: 500,
                      fontSize: ".8rem",
                    }}
                  >
                    Sponsored
                  </Typography>
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={1}>
                <CoinxHighPlayCard />
              </Grid>
            </Grid>
          </Stack>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={1}>
            {" "}
            <Stack direction="column" spacing={2} alignItems="flex-start">
              <Typography
                variant="body1"
                sx={{ color: "#2BB77E", fontWeight: 600 }}
              >
                Top 25 Refferers {"(24h)"}
              </Typography>
              <FreeCoinHTMLTable
                rowsHead={[
                  "#",
                  "Address",
                  "Reffered Claims",
                  "Commitions Paid in",
                ]}
                rows={[
                  {
                    address: "test1",
                    amount: "500",
                    when: "1s ago",
                    type: "claim",
                  },
                  {
                    address: "test2",
                    amount: "600",
                    when: "11s ago",
                    type: "referal",
                  },
                ]}
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FreeCoinPage;
