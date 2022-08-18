import { useState } from "react";
import { useSelector } from "react-redux";
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
import WiriteReview from "../writereview/WiriteReview";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const CoinpageRatings = () => {
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
    <Grid container xs={12}>
      <Grid xs={12}>
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
              {coinRatingBlock && coinRatingBlock[0]?.name} Rating & Reviews
            </Typography>
          </Grid>
          <Grid xs={12} mt={{ xs: 2, sm: 2, md: 0 }}>
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
      <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
        <Grid xs={12} mb={5}>
          <Stack direction="column" mt={3}>
            <Box
              sx={{
                height: 70,
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
                    }}
                    underline="none"
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
        <Grid xs={12} mb={5}>
          <Stack direction="column" mt={7} ml={{ xs: 0, sm: 0, md: 5 }}>
            <Typography
              variant="h5"
              sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 30 }}
            >
              Reviwes{" "}
              {coinRatingBlock && coinRatingBlock[0]?.total_review_count}
            </Typography>
            <Stack direction="row" mt={1} spacing={1.5} alignItems={"center"}>
              <Checkbox
                defaultChecked
                size="small"
                sx={{
                  color: "#6252E8",
                  "&.Mui-checked": {
                    color: "#6252E8",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: "1rem" }}
              >
                Excellent
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
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
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: "1rem" }}
              >
                {coinRatingBlock &&
                  (
                    (coinRatingBlock[0]?.review_data?.ratings[4]?.rating_count /
                      coinRatingBlock[0]?.review_data?.total) *
                    100
                  ).toFixed(0) + "%"}
              </Typography>
            </Stack>
            <Stack direction="row" mt={1} spacing={1.5} alignItems={"center"}>
              <Checkbox
                defaultChecked
                size="small"
                sx={{
                  color: "#6252E8",
                  "&.Mui-checked": {
                    color: "#6252E8",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: "1rem" }}
              >
                Great
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
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
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: "1rem" }}
              >
                {coinRatingBlock &&
                  (
                    (coinRatingBlock[0]?.review_data?.ratings[3]?.rating_count /
                      coinRatingBlock[0]?.review_data?.total) *
                    100
                  ).toFixed(0) + "%"}
              </Typography>
            </Stack>
            <Stack direction="row" mt={1} spacing={1.5} alignItems={"center"}>
              <Checkbox
                defaultChecked
                size="small"
                sx={{
                  color: "#6252E8",
                  "&.Mui-checked": {
                    color: "#6252E8",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: "1rem" }}
              >
                Avarage
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
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
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: "1rem" }}
              >
                {coinRatingBlock &&
                  (
                    (coinRatingBlock[0]?.review_data?.ratings[2]?.rating_count /
                      coinRatingBlock[0]?.review_data?.total) *
                    100
                  ).toFixed(0) + "%"}
              </Typography>
            </Stack>
            <Stack direction="row" mt={1} spacing={1.5} alignItems={"center"}>
              <Checkbox
                defaultChecked
                size="small"
                sx={{
                  color: "#6252E8",
                  "&.Mui-checked": {
                    color: "#6252E8",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: "1rem" }}
              >
                Poor
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
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
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: "1rem" }}
              >
                {coinRatingBlock &&
                  (
                    (coinRatingBlock[0]?.review_data?.ratings[1]?.rating_count /
                      coinRatingBlock[0]?.review_data?.total) *
                    100
                  ).toFixed(0) + "%"}
              </Typography>
            </Stack>

            <Stack direction="row" mt={1} spacing={1.5} alignItems={"center"}>
              <Checkbox
                defaultChecked
                size="small"
                sx={{
                  color: "#6252E8",
                  "&.Mui-checked": {
                    color: "#6252E8",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: "1rem" }}
              >
                Bad
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
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
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: "1rem" }}
              >
                {coinRatingBlock &&
                  (
                    (coinRatingBlock[0]?.review_data?.ratings[0]?.rating_count /
                      coinRatingBlock[0]?.review_data?.total) *
                    100
                  ).toFixed(0) + "%"}
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        {coinRatingBlock &&
          coinRatingBlock[0]?.review_details?.map(
            (item: any, index: number) => (
              <Grid xs={12} key={index}>
                <Stack direction="column" ml={{ xs: 0, sm: 0, md: 3 }}>
                  <Stack
                    direction="row"
                    spacing={3}
                    sx={{ alignItems: "center" }}
                    my={2}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={`${serverAPIUrl}public/uploads/users/${item?.avatar}`}
                    />
                    <Stack direction="column" spacing={0.2}>
                      <Typography
                        sx={{
                          color: "#FFFFF5",
                          fontWeight: 400,
                          lineHeight: 1,
                          fontSize: "1.1rem",
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
                    sx={{ borderColor: "#091338", borderBottomWidth: 2 }}
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
                  <Stack
                    direction="row"
                    spacing={3}
                    sx={{ alignItems: "center", justifyContent: "flex-start" }}
                    my={2}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#FFFFF5",
                        fontWeight: 400,
                      }}
                    >
                      17 Likes
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#FFFFF5",
                        fontWeight: 400,
                      }}
                    >
                      Share
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            )
          )}
      </Grid>

      <Grid
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        px={{ xs: 0, sm: 0, md: 4 }}
        mt={{ xs: 2, sm: 2, md: 0 }}
      >
        <Grid xs={12} pt={6}>
          <Stack direction="column" spacing={1.5} sx={{ alignItems: "center" }}>
            <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
              People are supporting
            </Typography>
            <Divider
              variant="fullWidth"
              flexItem
              orientation="horizontal"
              sx={{ borderColor: "#091338", borderBottomWidth: 2 }}
            />
            <Stack direction="column" spacing={0} sx={{ alignItems: "center" }}>
              <Typography
                variant="h4"
                sx={{ color: "#FFFFF5", fontWeight: 600 }}
              >
                {coinRatingBlock && coinRatingBlock[0]?.name}
              </Typography>
              <Typography
                variant="subtitle1"
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
              variant="fullWidth"
              flexItem
              orientation="horizontal"
              sx={{ borderColor: "#091338", borderBottomWidth: 2 }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoinpageRatings;
