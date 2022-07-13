import {
  Grid,
  Stack,
  Typography,
  Rating,
  Divider,
  CardMedia,
  Box,
  Avatar,
  Checkbox,
  LinearProgress,
  Link,
  Button,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MoodIcon from "@mui/icons-material/Mood";
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
const MobileCoinPageMarket = () => {
  return (
    <Grid container xs={12}>
      <Grid xs={12}>
        <Stack direction={{ xs: "column", sm: "column", md: "row" }} mt={2}>
          <Grid xs={12} sm={12} md={4}>
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
              Safemoon Markets
            </Typography>
          </Grid>
          {/* <Grid xs={12} sm={12} md={8} mt={{ xs: 2, sm: 2, md: 0 }}>
            <CardMedia
              component="img"
              height="70"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </Grid> */}
        </Stack>
      </Grid>
      <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
        <Grid xs={12} mb={2}>
          <Stack
            direction="column"
            mt={{ xs: 0, sm: 0, md: 7 }}
            mx={{ xs: 0, sm: 0, md: 7 }}
          >
            <Stack
              direction="row"
              spacing={3}
              my={2}
              sx={{ justifyContent: "space-between" }}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={1}
                sx={{ alignItems: "center" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ height: 32, width: 32 }}
                />

                <Typography
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    lineHeight: 1,
                    fontSize: ".8rem",
                  }}
                >
                  Pancakeswap
                </Typography>
              </Stack>
              <Button
                variant="contained"
                startIcon={<MoodIcon />}
                sx={{
                  backgroundColor: "#6252E7",
                  textTransform: "capitalize",
                  fontSize: ".8rem",
                }}
              >
                By on pancakeswap
              </Button>
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              my={2}
              sx={{ justifyContent: "space-between" }}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={1}
                sx={{ alignItems: "center" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ height: 32, width: 32 }}
                />

                <Typography
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    lineHeight: 1,
                    fontSize: ".8rem",
                  }}
                >
                  Pancakeswap
                </Typography>
              </Stack>
              <Button
                variant="contained"
                startIcon={<MoodIcon />}
                sx={{
                  backgroundColor: "#6252E7",
                  textTransform: "capitalize",
                  fontSize: ".8rem",
                }}
              >
                By on pancakeswap
              </Button>
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              my={2}
              sx={{ justifyContent: "space-between" }}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={1}
                sx={{ alignItems: "center" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ height: 32, width: 32 }}
                />

                <Typography
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    lineHeight: 1,
                    fontSize: ".8rem",
                  }}
                >
                  Pancakeswap
                </Typography>
              </Stack>
              <Button
                variant="contained"
                startIcon={<MoodIcon />}
                sx={{
                  backgroundColor: "#6252E7",
                  textTransform: "capitalize",
                  fontSize: ".8rem",
                }}
              >
                By on pancakeswap
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      {/* <Grid
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        px={{ xs: 0, sm: 0, md: 4 }}
        mt={{ xs: 2, sm: 2, md: 0 }}
      >
        <Grid xs={12} pt={6}>
          <Stack direction="column" spacing={5} sx={{ alignItems: "center" }}>
            <Stack
              direction="column"
              spacing={2}
              sx={{ alignItems: "center" }}
              mt={2}
            >
              <Typography
                variant="h5"
                sx={{ color: "#FFFFF5", fontWeight: 600 }}
              >
                Safemoon
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#1AA87D", fontWeight: 500 }}
              >
                Total Liqudity in Pools
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#FFFFF5", fontWeight: 500 }}
              >
                $20,77744
              </Typography>
            </Stack>

            <Divider
              variant="fullWidth"
              flexItem
              orientation="horizontal"
              sx={{ borderColor: "#091338", borderBottomWidth: 2 }}
            />

            <Stack
              direction="column"
              spacing={2}
              sx={{ alignItems: "center" }}
              mt={2}
            >
              <Typography
                variant="h5"
                sx={{ color: "#2F9ECD", fontWeight: 500 }}
              >
                Total Holds
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#FFFFF5", fontWeight: 500 }}
              >
                20,77744
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid> */}

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
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        <Carousel
          // centerMode={true}
          responsive={responsiveFeatured}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={true}
          swipeable={true}
          partialVisible={true}
          autoPlay={true}
          draggable={true}
        >
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default MobileCoinPageMarket;
