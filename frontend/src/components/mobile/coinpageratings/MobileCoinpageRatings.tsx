import { Fragment, useState } from "react";
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
  Tooltip,
} from "@mui/material";
import { useSelector } from "react-redux";
import moment from "moment";
import MobileWiriteReview from "../writereview/MobileWiriteReview";
import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileCoinpageRatings = () => {
  const [openWriteReview, setOpenWriteReview] = useState(false);
  const coinRatingBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_rating_block?.data;
  });
  const handleWriteReviewClickOpen = () => {
    setOpenWriteReview(true);
  };

  const handleWriteReviewClose = () => {
    setOpenWriteReview(false);
  };
  return (
    <Fragment>
      <Grid container xs={12}>
        {/* <Grid xs={12}>
          <Stack direction={{ xs: "column", sm: "column", md: "row" }} mt={2}>
            <Grid xs={12}>
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
                Safemoon Rating & Reviews
              </Typography>
            </Grid>
            <Grid xs={12} mt={{ xs: 2, sm: 2, md: 0 }}>
              <CardMedia
                component="img"
                height="70"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
          </Stack>
        </Grid> */}

        <Grid xs={12} mb={5}>
          <Stack direction="column" mt={0} ml={{ xs: 0, sm: 0, md: 5 }}>
            <Stack direction="row" mt={0} spacing={1.5} alignItems={"center"}>
              <Stack
                direction="column"
                spacing={0}
                sx={{ alignItems: "center" }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <Typography
                    variant="h3"
                    sx={{ color: "#FFFFF5", fontWeight: "400" }}
                  >
                    {coinRatingBlock &&
                      parseFloat(coinRatingBlock[0]?.trust_score).toFixed(1)}
                  </Typography>
                </Stack>
                <Rating
                  name="size-small"
                  defaultValue={0}
                  value={
                    coinRatingBlock &&
                    parseFloat(coinRatingBlock[0]?.trust_score).toFixed(1)
                  }
                  size="small"
                  precision={0.1}
                  readOnly
                  sx={{ fontSize: ".9rem" }}
                />
                <Typography
                  variant="caption"
                  sx={{ color: "#FFFFF5", fontWeight: 400 }}
                  mt={0.4}
                >
                  {`(${
                    coinRatingBlock && coinRatingBlock[0]?.total_review_count
                  })`}
                </Typography>
              </Stack>
              <Stack
                direction="column"
                spacing={1.4}
                sx={{ alignItems: "center" }}
                width="100%"
              >
                <Box sx={{ flexGrow: 1 }} width="100%">
                  <LinearProgress
                    value={
                      coinRatingBlock &&
                      (
                        (coinRatingBlock[0]?.review_data?.ratings[4]
                          ?.rating_count /
                          coinRatingBlock[0]?.review_data?.total) *
                        100
                      ).toFixed(0)
                    }
                    variant="determinate"
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }} width="100%">
                  <LinearProgress
                    value={
                      coinRatingBlock &&
                      (
                        (coinRatingBlock[0]?.review_data?.ratings[3]
                          ?.rating_count /
                          coinRatingBlock[0]?.review_data?.total) *
                        100
                      ).toFixed(0)
                    }
                    variant="determinate"
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }} width="100%">
                  <LinearProgress
                    value={
                      coinRatingBlock &&
                      (
                        (coinRatingBlock[0]?.review_data?.ratings[2]
                          ?.rating_count /
                          coinRatingBlock[0]?.review_data?.total) *
                        100
                      ).toFixed(0)
                    }
                    variant="determinate"
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }} width="100%">
                  <LinearProgress
                    value={
                      coinRatingBlock &&
                      (
                        (coinRatingBlock[0]?.review_data?.ratings[1]
                          ?.rating_count /
                          coinRatingBlock[0]?.review_data?.total) *
                        100
                      ).toFixed(0)
                    }
                    variant="determinate"
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }} width="100%">
                  <LinearProgress
                    value={
                      coinRatingBlock &&
                      (
                        (coinRatingBlock[0]?.review_data?.ratings[0]
                          ?.rating_count /
                          coinRatingBlock[0]?.review_data?.total) *
                        100
                      ).toFixed(0)
                    }
                    variant="determinate"
                  />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={12}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            mt={0}
            spacing={-0.4}
          >
            <Typography variant="h6" sx={{ color: "#69EAFF", fontWeight: 600 }}>
              {coinRatingBlock && coinRatingBlock[0]?.name} Rating and Reviews
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#FFFFFF", fontWeight: 500 }}
            >
              How do you feel about{" "}
              {coinRatingBlock && coinRatingBlock[0]?.name}?
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
          <Grid xs={12} mb={5}>
            <Stack direction="column" mt={3}>
              <Box
                sx={{
                  height: 60,
                  flexGrow: 1,
                  backgroundColor: "#091338",
                  borderRadius: 2,
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "auto",
                  }}
                  px={2}
                  py={2}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center" }}
                    height="auto"
                  >
                    {/* <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/1.jpg"
                    /> */}

                    <Link
                      sx={{
                        color: "#FFFFF5",
                        fontWeight: 400,
                        cursor: "pointer",
                        fontSize: ".9rem",
                      }}
                      underline="none"
                      onClick={handleWriteReviewClickOpen}
                    >
                      Rate and review
                    </Link>

                    <MobileWiriteReview
                      openWriteReview={openWriteReview}
                      handleClose={handleWriteReviewClose}
                    />
                  </Stack>
                  <Rating
                    name="large"
                    defaultValue={5}
                    size="large"
                    sx={{ fontSize: "1.5rem" }}
                  />
                </Stack>
              </Box>
            </Stack>
          </Grid>
          {coinRatingBlock &&
            coinRatingBlock[0]?.review_details?.map(
              (item: any, index: number) => (
                <Grid xs={12} mb={2} key={index}>
                  <Stack
                    direction="column"
                    ml={{ xs: 0, sm: 0, md: 3 }}
                    spacing={0.5}
                  >
                    <Stack
                      direction="row"
                      spacing={3}
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      my={1.4}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{ alignItems: "center" }}
                      >
                        <Avatar
                          alt={item?.name}
                          src={`${serverAPIUrl}public/uploads/users/${item?.avatar}`}
                        />
                        <Stack direction="column">
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFF5",
                              fontWeight: 500,
                              lineHeight: 1,
                            }}
                          >
                            {item?.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#5299AF",
                              fontWeight: 400,
                              fontSize: ".7rem",
                            }}
                          >
                            17 reviews
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="column"
                        spacing={0}
                        sx={{
                          alignItems: "flex-end",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Rating
                          name="large"
                          defaultValue={0}
                          value={
                            coinRatingBlock &&
                            parseFloat(item?.rating).toFixed(1)
                          }
                          size="small"
                          readOnly
                          sx={{ fontSize: "1rem" }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#FFFFF5",
                            fontWeight: 400,
                            fontSize: ".7rem",
                          }}
                        >
                          {moment(item?.created_at, "YYYYMMDD").fromNow()}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Divider
                      variant="fullWidth"
                      flexItem
                      orientation="horizontal"
                      sx={{ borderColor: "#091338", borderBottomWidth: 2 }}
                    />

                    <Stack
                      direction="row"
                      spacing={3}
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        mt={1}
                        variant="caption"
                        sx={{
                          color: "#FFFFF5",
                          fontWeight: 400,
                        }}
                      >
                        {item?.review}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={3}
                      sx={{
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      {/* <Typography
                        my={1}
                        variant="caption"
                        sx={{
                          color: "#FFFFF5",
                          fontWeight: 400,
                        }}
                      >
                        17 Likes
                      </Typography> */}
                    </Stack>
                  </Stack>
                </Grid>
              )
            )}
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
            <Stack
              direction="column"
              spacing={1.5}
              sx={{ alignItems: "center" }}
            >
              <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                People are supporting
              </Typography>
              <Divider
                variant="fullWidth"
                flexItem
                orientation="horizontal"
                sx={{ borderColor: "#091338", borderBottomWidth: 2 }}
              />
              <Stack
                direction="column"
                spacing={0}
                sx={{ alignItems: "center" }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "#FFFFF5", fontWeight: 600 }}
                >
                  Safemoon
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#FFFFF5", fontWeight: 500 }}
                >
                  Reviews 3,567
                </Typography>
                <Stack
                  direction="column"
                  spacing={0}
                  sx={{ alignItems: "center" }}
                  mt={2}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#1EC08C", fontWeight: "400" }}
                  >
                    Trust Scrore
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{ color: "#FFFFF5", fontWeight: "400" }}
                  >
                    4.9
                  </Typography>
                  <Rating
                    name="large"
                    defaultValue={5}
                    size="large"
                    readOnly
                    sx={{ fontSize: "1.5rem" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ color: "#9C9C9B", fontWeight: "400" }}
                    pt={1}
                  >
                    Trust Scrore
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid> */}
      </Grid>
    </Fragment>
  );
};

export default MobileCoinpageRatings;
