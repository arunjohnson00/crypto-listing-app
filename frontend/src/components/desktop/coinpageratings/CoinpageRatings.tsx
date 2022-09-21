import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
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
} from "@mui/material";
import moment from "moment";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import WiriteReview from "../writereview/WiriteReview";
import { coinRatingBlockRequest } from "../../../store/action";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const CoinpageRatings = () => {
  const dispatch: any = useDispatch();
  const location = useLocation();
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
  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Stack direction={{ xs: "column", sm: "column", md: "row" }} mt={2}>
          <Grid item xs={12}>
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
              {coinRatingBlock && coinRatingBlock[0]?.name} Rating & Reviews
            </Typography>
          </Grid>
          <Grid item xs={12} mt={{ xs: 2, sm: 2, md: 0 }}>
            <CardMedia
              component="img"
              height="70"
              image="https://iili.io/UtY5Kv.jpg"
              alt="green iguana"
              sx={{ objectFit: "unset" }}
            />
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Grid item xs={12} mb={5}>
          <Stack direction="column" mt={3}>
            <Box
              sx={{
                height: 70,
                flexGrow: 1,
                backgroundColor: "#030923",
                borderRadius: 2,
                border: "1px solid #050e35",
              }}
            >
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                px={2}
                py={2}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                  />

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
                    Write a review
                  </Link>

                  <WiriteReview
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
        <Grid item xs={12} mb={5}>
          <Box
            sx={{
              borderRadius: 3,
              backgroundColor: "#030923",
              border: "1px solid #050e35",
            }}
          >
            <Stack direction="column" mx={{ xs: 0, sm: 0, md: 5 }} py={3}>
              <Typography
                variant="subtitle1"
                sx={{ color: "#FFFFF5", fontWeight: 500, fontSize: "1.4rem" }}
              >
                Reviews{" "}
                {coinRatingBlock && coinRatingBlock[0]?.total_review_count}
              </Typography>
              <Stack direction="row" mt={0} spacing={1.5} alignItems={"center"}>
                <Checkbox
                  defaultChecked
                  readOnly
                  disabled
                  size="small"
                  sx={{
                    color: "#00b67a",
                    "&.Mui-checked": {
                      color: "#00b67a",
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    fontSize: ".85rem",
                    minWidth: 80,
                  }}
                >
                  Excellent
                </Typography>
                <Box sx={{ flexGrow: 1, color: "#00b67a" }}>
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
                    sx={{
                      borderRadius: 5,
                      height: 9,
                      maxWidth: 430,
                    }}
                    color="inherit"
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: ".85rem" }}
                >
                  {coinRatingBlock &&
                    (
                      (coinRatingBlock[0]?.review_data?.ratings[4]
                        ?.rating_count /
                        coinRatingBlock[0]?.review_data?.total) *
                      100
                    ).toFixed(0) + "%"}
                </Typography>
              </Stack>
              <Stack direction="row" mt={0} spacing={1.5} alignItems={"center"}>
                <Checkbox
                  defaultChecked
                  readOnly
                  disabled
                  size="small"
                  sx={{
                    color: "#73cf11",
                    "&.Mui-checked": {
                      color: "#73cf11",
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    fontSize: ".85rem",
                    minWidth: 80,
                  }}
                >
                  Great
                </Typography>
                <Box sx={{ flexGrow: 1, color: "#73cf11" }}>
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
                    sx={{
                      borderRadius: 5,
                      height: 9,
                      maxWidth: 430,
                    }}
                    color="inherit"
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: ".85rem" }}
                >
                  {coinRatingBlock &&
                    (
                      (coinRatingBlock[0]?.review_data?.ratings[3]
                        ?.rating_count /
                        coinRatingBlock[0]?.review_data?.total) *
                      100
                    ).toFixed(0) + "%"}
                </Typography>
              </Stack>
              <Stack direction="row" mt={0} spacing={1.5} alignItems={"center"}>
                <Checkbox
                  defaultChecked
                  readOnly
                  disabled
                  size="small"
                  sx={{
                    color: "#ffce00",
                    "&.Mui-checked": {
                      color: "#ffce00",
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    fontSize: ".85rem",
                    minWidth: 80,
                  }}
                >
                  Avarage
                </Typography>
                <Box sx={{ flexGrow: 1, color: "#ffce00" }}>
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
                    sx={{
                      borderRadius: 5,
                      height: 9,
                      maxWidth: 430,
                    }}
                    color="inherit"
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: ".85rem" }}
                >
                  {coinRatingBlock &&
                    (
                      (coinRatingBlock[0]?.review_data?.ratings[2]
                        ?.rating_count /
                        coinRatingBlock[0]?.review_data?.total) *
                      100
                    ).toFixed(0) + "%"}
                </Typography>
              </Stack>
              <Stack direction="row" mt={0} spacing={1.5} alignItems={"center"}>
                <Checkbox
                  defaultChecked
                  readOnly
                  disabled
                  size="small"
                  sx={{
                    color: "#ff8622",
                    "&.Mui-checked": {
                      color: "#ff8622",
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    fontSize: ".85rem",
                    minWidth: 80,
                  }}
                >
                  Poor
                </Typography>
                <Box sx={{ flexGrow: 1, color: "#ff8622" }}>
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
                    sx={{
                      borderRadius: 5,
                      height: 9,
                      maxWidth: 430,
                    }}
                    color="inherit"
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: ".85rem" }}
                >
                  {coinRatingBlock &&
                    (
                      (coinRatingBlock[0]?.review_data?.ratings[1]
                        ?.rating_count /
                        coinRatingBlock[0]?.review_data?.total) *
                      100
                    ).toFixed(0) + "%"}
                </Typography>
              </Stack>

              <Stack direction="row" mt={0} spacing={1.5} alignItems={"center"}>
                <Checkbox
                  defaultChecked
                  readOnly
                  disabled
                  size="small"
                  sx={{
                    color: "#ff3722",
                    "&.Mui-checked": {
                      color: "#ff3722",
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    fontSize: ".85rem",
                    minWidth: 80,
                  }}
                >
                  Bad
                </Typography>
                <Box sx={{ flexGrow: 1, color: "#ff3722" }}>
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
                    sx={{
                      borderRadius: 5,
                      height: 9,
                      maxWidth: 430,
                    }}
                    color="inherit"
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: ".85rem" }}
                >
                  {coinRatingBlock &&
                    (
                      (coinRatingBlock[0]?.review_data?.ratings[0]
                        ?.rating_count /
                        coinRatingBlock[0]?.review_data?.total) *
                      100
                    ).toFixed(0) + "%"}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>

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
                <Stack direction="column" spacing={2} px={2} py={2}>
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
                        coinRatingBlock && parseFloat(item?.rating).toFixed(1)
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
                    sx={{ alignItems: "center", justifyContent: "flex-start" }}
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
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        px={{ xs: 0, sm: 0, md: 4 }}
        mt={{ xs: 2, sm: 2, md: 0 }}
      >
        <Grid item xs={12} pt={6}>
          <Stack
            direction="column"
            alignItems="flex-start"
            sx={{ width: "100%" }}
          >
            <Stack
              direction="column"
              spacing={1.5}
              sx={{ alignItems: "center", width: 350, maxWidth: 550 }}
            >
              <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                People are supporting
              </Typography>
              <Divider
                variant="middle"
                flexItem
                orientation="horizontal"
                sx={{
                  borderColor: "#091338",
                  borderBottomWidth: 2,
                  width: "80%",
                  alignSelf: "center",
                }}
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
                  {coinRatingBlock && coinRatingBlock[0]?.name}
                </Typography>
                <Typography
                  //variant="subtitle1"
                  sx={{ color: "#FFFFF5", fontWeight: 500 }}
                >
                  Reviews{" "}
                  {coinRatingBlock && coinRatingBlock[0]?.total_review_count}
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
                    {coinRatingBlock &&
                      parseFloat(coinRatingBlock[0]?.trust_score).toFixed(1)}
                  </Typography>
                  <Rating
                    name="large"
                    defaultValue={0}
                    size="large"
                    value={
                      coinRatingBlock &&
                      parseFloat(coinRatingBlock[0]?.trust_score).toFixed(1)
                    }
                    readOnly
                    precision={0.1}
                    sx={{ fontSize: "1.5rem" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ color: "#9C9C9B", fontWeight: "400" }}
                    pt={1}
                  >
                    {coinRatingBlock &&
                    parseFloat(coinRatingBlock[0]?.trust_score) >= 5
                      ? "Excellent"
                      : coinRatingBlock &&
                        parseFloat(coinRatingBlock[0]?.trust_score) >= 4
                      ? "Great"
                      : coinRatingBlock &&
                        parseFloat(coinRatingBlock[0]?.trust_score) >= 3
                      ? "Avarage"
                      : coinRatingBlock &&
                        parseFloat(coinRatingBlock[0]?.trust_score) >= 2
                      ? "Poor"
                      : coinRatingBlock &&
                        parseFloat(coinRatingBlock[0]?.trust_score) >= 1 &&
                        "Bad"}
                  </Typography>
                </Stack>
              </Stack>
              <Divider
                variant="middle"
                flexItem
                orientation="horizontal"
                sx={{
                  borderColor: "#091338",
                  borderBottomWidth: 2,
                  width: "80%",
                  alignSelf: "center",
                }}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoinpageRatings;
