import { useState } from "react";
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
import WiriteReview from "../writereview/WiriteReview";

const CoinpageRatings = () => {
  const [openWriteReview, setOpenWriteReview] = useState(false);

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
              Reviwes 3,876
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
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 17 }}
              >
                Excellent
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <LinearProgress value={90} variant="determinate" />
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 17 }}
              >
                90%
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
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 17 }}
              >
                Great
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <LinearProgress value={90} variant="determinate" />
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 17 }}
              >
                90%
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
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 17 }}
              >
                Avarage
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <LinearProgress value={90} variant="determinate" />
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 17 }}
              >
                90%
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
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 17 }}
              >
                Poor
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <LinearProgress value={90} variant="determinate" />
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 17 }}
              >
                90%
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={12}>
          <Stack direction="column" ml={{ xs: 0, sm: 0, md: 3 }}>
            <Stack
              direction="row"
              spacing={3}
              sx={{ alignItems: "center" }}
              my={2}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <Stack direction="column">
                <Typography
                  variant="h5"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  Padmajan
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
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              my={2}
            >
              <Rating
                name="large"
                defaultValue={5}
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
                17 days ago
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              my={0}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#FFFFF5",
                  fontWeight: 400,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
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
      </Grid>
    </Grid>
  );
};

export default CoinpageRatings;
