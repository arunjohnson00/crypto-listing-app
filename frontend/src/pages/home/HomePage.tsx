import React, { Fragment } from "react";
import {
  Grid,
  Stack,
  Box,
  CardMedia,
  Typography,
  Divider,
  Avatar,
} from "@mui/material";
import AppHeader from "../../layouts/header/AppHeader";
import LatestNewsHeading from "../../components/Typography/headings/latestnews/LatestNewsHeading";
import NewsCardTop from "../../components/cards/topnewscard/NewsCardTop";
import CoinSlider from "../../components/slider/coinslider/CoinSlider";
import VideoCard from "../../components/cards/videocard/VideoCard";
import HighlightCards from "../../components/cards/highlight/HighlightCards";
import FeaturedCoinCards from "../../components/cards/featuredcoin/FeaturedCoinCards";
import TableBtnGroup from "../../components/buttongroup/tablebtngroup/TableBtnGroup";
import TableFilterBtn from "../../components/buttongroup/tablefilterbtn/TableFilterBtn";
import HtmlTable from "../../components/tables/htmltable/HtmlTable";
import ViewMoreBtn from "../../components/button/viewmorebtn/ViewMoreBtn";
import NftCollectionCard from "../../components/cards/nftcollection/NftCollectionCard";
import NewsCard from "../../components/cards/newscard/NewsCard";
import AdsCardHome from "../../components/cards/adscard/AdsCardHome";
import { fontWeight } from "@mui/system";
import CardDeal from "../../components/banner/carddeal/CardDeal";

const HomePage = () => {
  return (
    <Fragment>
      <Grid
        container
        spacing={5}
        sx={{
          dispaly: "flex",
          backgroundColor: "#01061A",
          paddingTop: "40px",
          paddingBottom: "22px",
        }}
      >
        <Grid xs={12}>
          <AppHeader />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={5}
        sx={{
          dispaly: "flex",
          backgroundColor: "#01061A",
        }}
      >
        <Grid xs={12} sx={{ paddingTop: 3 }}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              borderTop: "1px solid #1a1545",
              borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#04091d",

              alignItems: "center",
            }}
          >
            <Grid xs={2}>
              <LatestNewsHeading />
            </Grid>
            <Grid xs={10}>
              <Stack direction="row" spacing={3}>
                <NewsCardTop />
                <NewsCardTop />
                <NewsCardTop />
                <NewsCardTop />
              </Stack>
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "0px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <CoinSlider /> <CoinSlider /> <CoinSlider /> <CoinSlider />{" "}
            <CoinSlider />
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <Grid item xs={8}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={4}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <VideoCard /> <VideoCard /> <VideoCard />
            <VideoCard /> <VideoCard />
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <Grid item xs={1.5}>
              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Highlights
              </Typography>
            </Grid>
            <Grid item xs={10.5}>
              <Divider
                sx={{ borderColor: "#2D4297", borderBottomWidth: "3px" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={4}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <HighlightCards />
            <HighlightCards />
            <HighlightCards />
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={0}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              // alignItems: "flex-start",
              // flexWrap: "wrap",
              // justifyContent: "space-between",
            }}
          >
            <Grid
              xs={1}
              sx={{
                backgroundColor: "#01061A",

                alignItems: "center",
              }}
            >
              <Stack direction="column" sx={{ alignItems: "center" }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    writingMode: "vertical-lr",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                  }}
                >
                  Featured Coins
                </Typography>
              </Stack>
            </Grid>
            <Grid
              xs={11}
              sx={{
                backgroundColor: "#01061A",

                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                spacing={0}
                sx={{
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <FeaturedCoinCards />
                <FeaturedCoinCards />
                <FeaturedCoinCards />
                <FeaturedCoinCards />
                <FeaturedCoinCards />
                <FeaturedCoinCards />
                <FeaturedCoinCards />
                <FeaturedCoinCards />
              </Stack>
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <Grid item xs={3}>
              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                CryptoCurrencies
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Divider
                sx={{ borderColor: "#2D4297", borderBottomWidth: "3px" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography sx={{ color: "white" }}>
                Subscribe to our newsletters and get business news delivered
                straight into your inbox ; Daily Newsletter. Your daily dose of
                business news, views and updates.
              </Typography>
            </Grid>

            <Grid item xs={7}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              marginTop: "30px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
              justifyContent: " space-between",
            }}
          >
            <TableBtnGroup />
            <TableFilterBtn />
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <HtmlTable />
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              marginTop: "0px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
              justifyContent: " flex-end",
            }}
          >
            <ViewMoreBtn title="View more" />
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <Grid item xs={3}>
              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                NFT Collections
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Divider
                sx={{ borderColor: "#2D4297", borderBottomWidth: "3px" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography sx={{ color: "white" }}>
                Subscribe to our newsletters and get business news delivered
                straight into your inbox ; Daily Newsletter. Your daily dose of
                business news, views and updates.
              </Typography>
            </Grid>

            <Grid item xs={7}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={0}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <NftCollectionCard />
            <NftCollectionCard />
            <NftCollectionCard />
            <NftCollectionCard />
            <NftCollectionCard />
            <NftCollectionCard />
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              marginTop: "0px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
              justifyContent: " flex-end",
            }}
          >
            <ViewMoreBtn title="See collections" />
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "0px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <Grid item xs={4}>
              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Coinxhigh crypto News
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Divider
                sx={{ borderColor: "#2D4297", borderBottomWidth: "3px" }}
              />
            </Grid>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <Grid item xs={7}>
              <Typography sx={{ color: "white" }}>
                Subscribe to our newsletters and get business news delivered
                straight into your inbox ; Daily Newsletter. Your daily dose of
                business news, views and updates.
              </Typography>
            </Grid>

            <Grid item xs={5}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",

              alignItems: "center",
            }}
          >
            <NewsCard /> <NewsCard /> <NewsCard /> <NewsCard />
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "0px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
              More News ˃
            </Typography>

            <Stack direction="row" spacing={1}>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 18, height: 18 }}
              />
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                Subscribe to our Telegram
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AdsCardHome />
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",

            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "50px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CardDeal />
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;
