import { Fragment, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import MobileWiriteReview from "../writereview/MobileWriteReview";
import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";

import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import { useLocation, useNavigate } from "react-router-dom";
import { coinRatingBlockRequest } from "../../../store/action";
import InfiniteScroll from "react-infinite-scroll-component";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileCoinpageRatings = () => {
  const dispatch: any = useDispatch();
  const location: any = useLocation();
  const navigate: any = useNavigate();
  const [loading, setLoading] = useState(false);
  const [openWriteReview, setOpenWriteReview] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const coinRatingBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_rating_block?.data;
  });
  const handleWriteReviewClickOpen = () => {
    setOpenWriteReview(true);
  };

  const handleWriteReviewClose = () => {
    setOpenWriteReview(false);
  };

  const fetchMoreData = () => {
    coinRatingBlock &&
      coinRatingBlock[0]?.review_details?.length >= 1 &&
      setHasMore(false);
  };
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(
      coinRatingBlockRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, []);
  const auth =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
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
                <Box sx={{ flexGrow: 1, color: "#00B67A" }} width="100%">
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
                    color="inherit"
                    sx={{ borderRadius: 10, height: 6 }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1, color: "#73CF11" }} width="100%">
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
                    color="inherit"
                    sx={{ borderRadius: 10, height: 6 }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1, color: "#FFCE00" }} width="100%">
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
                    color="inherit"
                    sx={{ borderRadius: 10, height: 6 }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1, color: "#FF8622" }} width="100%">
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
                    color="inherit"
                    sx={{ borderRadius: 10, height: 6 }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1, color: "#FF3722" }} width="100%">
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
                    color="inherit"
                    sx={{ borderRadius: 10, height: 6 }}
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
          <Grid xs={12} mb={2}>
            <Stack direction="column" mt={3}>
              <Box
                sx={{
                  backgroundColor: "#030923",

                  mt: 2,
                  borderRadius: 3,
                  border: "1px solid #050e35",
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
                    ></Link>
                    {!auth ? (
                      <Link
                        sx={{
                          color: "#FFFFF5",
                          fontWeight: 400,
                          cursor: "pointer",
                          textDecoration: "undeline",
                          textDecorationStyle: "dotted",
                          textUnderlineOffset: "4px",
                        }}
                        //underline="none"
                        onClick={() =>
                          navigate("/login", { state: location?.pathname })
                        }
                      >
                        login to write a review
                      </Link>
                    ) : (
                      <Link
                        sx={{
                          color: "#FFFFF5",
                          fontWeight: 400,
                          cursor: "pointer",
                          textDecoration: "undeline",
                          textDecorationStyle: "dotted",
                          textUnderlineOffset: "4px",
                        }}
                        //underline="none"
                        onClick={handleWriteReviewClickOpen}
                      >
                        Rate and review
                      </Link>
                    )}

                    <MobileWiriteReview
                      openWriteReview={openWriteReview}
                      handleClose={handleWriteReviewClose}
                      loading={loading}
                      setLoading={setLoading}
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
          {coinRatingBlock && coinRatingBlock[0]?.review_details?.length > 0 && (
            <InfiniteScroll
              dataLength={
                coinRatingBlock && coinRatingBlock[0]?.review_details?.length
              }
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4 style={{ color: "#FFFFFF" }}>Loading...</h4>}
              height={700}
              endMessage={
                <p style={{ textAlign: "center", color: "#FFFFFF" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {coinRatingBlock &&
                coinRatingBlock[0]?.review_details?.map(
                  (item: any, index: number) => (
                    <Box
                      key={index}
                      sx={{
                        backgroundColor: "#030923",
                        p: 2,
                        my: 2,
                        borderRadius: 3,
                        border: "1px solid #050e35",
                      }}
                    >
                      <Stack direction="column" spacing={1.5} px={2} py={1}>
                        <Stack
                          direction="row"
                          spacing={1.5}
                          sx={{ alignItems: "center" }}
                          my={2}
                        >
                          <Avatar
                            alt={item?.name}
                            src={`${serverAPIUrl}public/uploads/users/${item?.avatar}`}
                          />
                          <Stack direction="column" spacing={0.3}>
                            <Typography
                              sx={{
                                color: "#1dffc0",
                                fontWeight: 400,
                                lineHeight: 1,
                                fontSize: ".9rem",
                              }}
                            >
                              {item?.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "#FFFFF5",
                                fontWeight: 400,
                              }}
                            >
                              17 reviews
                            </Typography>
                          </Stack>
                        </Stack>

                        <Divider
                          variant="fullWidth"
                          flexItem
                          orientation="horizontal"
                          sx={{ borderColor: "#050e35", borderBottomWidth: 1 }}
                        />

                        <Stack
                          direction="row"
                          spacing={3}
                          sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                          my={2}
                        >
                          <Rating
                            name="large"
                            defaultValue={0}
                            value={
                              coinRatingBlock &&
                              parseFloat(item?.rating).toFixed(1)
                            }
                            precision={0.1}
                            size="large"
                            readOnly
                            sx={{ fontSize: "1.5rem" }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#FFFFF5",
                              fontWeight: 400,
                            }}
                          >
                            {moment(item?.created_at, "YYYYMMDD").fromNow()}
                          </Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={3}
                          sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                          my={0}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#FFFFF5",
                              fontWeight: 400,
                            }}
                          >
                            {item?.review}
                          </Typography>
                        </Stack>
                        <Divider
                          variant="fullWidth"
                          flexItem
                          orientation="horizontal"
                          sx={{ borderColor: "#050e35", borderBottomWidth: 1 }}
                        />
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                          my={2}
                        >
                          <Rating
                            name="size-medium"
                            defaultValue={0}
                            max={1}
                            icon={
                              <ThumbUpAltOutlinedIcon
                                fontSize="inherit"
                                sx={{ color: "#1dffc0", fontSize: "1rem" }}
                              />
                            }
                            emptyIcon={
                              <ThumbUpAltOutlinedIcon
                                fontSize="inherit"
                                sx={{ color: "#FFFFFF", fontSize: "1rem" }}
                              />
                            }
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#FFFFF5",
                              fontWeight: 400,
                            }}
                          >
                            17 Likes{" "}
                          </Typography>

                          {/* <Typography
                      variant="caption"
                      sx={{
                        color: "#FFFFF5",
                        fontWeight: 400,
                      }}
                    >
                      Share
                    </Typography> */}
                        </Stack>
                      </Stack>
                    </Box>
                  )
                )}
            </InfiniteScroll>
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
