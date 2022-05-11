import { Box, Grid, Stack, Typography, Avatar, Divider } from "@mui/material";
import React from "react";

const AppFooter = () => {
  return (
    <Grid item xs={12}>
      <Box pt={5}>
        <Stack direction="row" py={10} px={0}>
          <Grid item xs={4}>
            <Stack direction="column" spacing={1.5}>
              <img
                src="https://coinxhigh.com/public/assets/images/logo.png"
                alt="coinxhigh"
                width="200px"
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                A new way to payment easy. reliable and 100% secure
              </Typography>
              <Stack direction="row" spacing={1}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ width: 35, height: 35 }}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ width: 35, height: 35 }}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ width: 35, height: 35 }}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ width: 35, height: 35 }}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack direction="column" spacing={1.5}>
              <Typography
                variant="body2"
                sx={{ color: "#D0CFD3", fontWeight: "600" }}
              >
                Useful Links
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                content
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                How it works
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Create
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Explore
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Terms and Service
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack direction="column" spacing={1.5}>
              <Typography
                variant="body2"
                sx={{ color: "#D0CFD3", fontWeight: "600" }}
              >
                Community
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Help centers
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Partners
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Suggestions
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Blog
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                News letter
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack direction="column" spacing={1.5}>
              <Typography
                variant="body2"
                sx={{ color: "#D0CFD3", fontWeight: "600" }}
              >
                Partners
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Our Partner
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Become a parner
              </Typography>
            </Stack>
          </Grid>
        </Stack>
        <Divider
          variant="middle"
          orientation="horizontal"
          flexItem
          sx={{ borderColor: "#3D444D" }}
        />

        <Stack
          direction="row"
          py={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          px={0}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#838385",
              fontWeight: "500",
              //fontSize: "0.59rem",
            }}
          >
            Become a parner
          </Typography>{" "}
          <Box>
            {" "}
            <Stack direction="row" spacing={1}>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35 }}
              />
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35 }}
              />
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35 }}
              />
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35 }}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};

export default AppFooter;
