import {
  Grid,
  Stack,
  Typography,
  NativeSelect,
  Box,
  Avatar,
  Tooltip,
  Divider,
  CardMedia,
} from "@mui/material";
import { useSelector } from "react-redux";
import Iframe from "react-iframe";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileFeaturedCoinCards from "../cards/featuredcoin/MobileFeaturedCoinCards";

const responsiveFeatured: any = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};
const MobileCoinPageAbout = () => {
  const coinAboutBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_about_block?.data;
  });
  const featuredCoinList = useSelector((data: any) => {
    return data?.homeReducer?.featured_coin_list?.data;
  });
  return (
    <Grid container xs={12}>
      <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
        <Grid xs={12} mb={5}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#FFFFF5",
              "&::after": {
                content: '""',
                display: "block",
                width: "20%",
                borderBottom: "2px solid #23E2A0",
              },
            }}
          >
            About {coinAboutBlock && coinAboutBlock[0]?.name}
          </Typography>

          <Stack direction="column" mt={2} spacing={2}>
            <Typography sx={{ color: "#FFFFF5", fontSize: ".8rem" }}>
              {coinAboutBlock && coinAboutBlock[0]?.first_pragraph + "."}{" "}
              {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph &&
                `The live ${
                  coinAboutBlock && coinAboutBlock[0]?.name
                } price today is $5.631145622449 with a 24-hour
              trading volume of $26,254.16. ${
                coinAboutBlock && coinAboutBlock[0]?.name
              } is down 64.74% in the last
              24 hours and 18.56% up in the Last 1 Hour . The current Coinxhigh
              ranking is #418, with a live market cap of $45,792,809. It has a
              circulating supply of 562,103,091,188,157 ${
                coinAboutBlock && coinAboutBlock[0]?.name
              } coins and a
              max. supply of 1,000,000,000,000,000 ${
                coinAboutBlock && coinAboutBlock[0]?.name
              } coins. The current
              rating of ${
                coinAboutBlock && coinAboutBlock[0]?.name
              } on Coinxhigh is 4.9. ${
                  coinAboutBlock && coinAboutBlock[0]?.name
                } hit an all time
              high of $0.003382723655 on Jan 05, 2022 (212 Days ago). `}
            </Typography>

            <Typography sx={{ color: "#FFFFF5", fontSize: ".8rem" }}>
              You can read the Latest news about safemoon{" "}
              <a
                href={`https://news.coinxhigh.com/?s=${
                  coinAboutBlock && coinAboutBlock[0]?.name.toLowerCase()
                }`}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                here.
              </a>{" "}
            </Typography>

            <Typography sx={{ color: "#FFFFF5", fontSize: ".8rem" }}>
              {coinAboutBlock && coinAboutBlock[0]?.second_pragraph}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "23px",
          paddingBottom: "23px",
        }}
      >
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography
            sx={{ color: "#5FD6E9", fontWeight: 700, fontSize: "1.1rem" }}
          >
            Featured Coin
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        {featuredCoinList && (
          <Carousel
            // centerMode={true}
            responsive={responsiveFeatured}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={true}
            swipeable={true}
            partialVisible={true}
            autoPlay={false}
            draggable={true}
            minimumTouchDrag={10}
            keyBoardControl={true}
            shouldResetAutoplay={false}
          >
            {featuredCoinList &&
              featuredCoinList?.map((data: any, index: number) => (
                <Box key={index}>
                  <MobileFeaturedCoinCards cardData={data} />
                </Box>
              ))}
          </Carousel>
        )}
      </Grid>
      <Grid
        xs={12}
        sm={12}
        md={8}
        lg={8}
        xl={8}
        px={{ xs: 0, sm: 0, md: 4 }}
        mt={{ xs: 2, sm: 2, md: 0 }}
      >
        <CardMedia
          component="img"
          height="80"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />

        <Grid xs={12} pt={4}></Grid>
      </Grid>
    </Grid>
  );
};

export default MobileCoinPageAbout;
