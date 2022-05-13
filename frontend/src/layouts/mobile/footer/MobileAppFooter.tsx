import { Box, Grid, Stack, Typography, Avatar, Divider } from "@mui/material";
import React from "react";

const MobileAppFooter = () => {
  return (
    <Grid xs={12} ml={-5}>
      <Box pt={0}>
        <Stack
          direction={{ xs: "row", sm: "row", md: "row" }}
          py={4}
          px={2}
          sx={{ alignItems: "center", justifyContent: "space-around" }}
          spacing={3}
        >
          <Grid xs={6}>
            <Stack
              direction="column"
              spacing={1.5}
              sx={{ alignItems: "center" }}
            >
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
          <Grid xs={6}>
            <Stack
              direction="column"
              spacing={1.5}
              sx={{ alignItems: "center" }}
            >
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
        </Stack>
        <Grid item xs={12} pb={4}>
          <Stack direction="column" spacing={1.5} sx={{ alignItems: "center" }}>
            <img
              src="https://coinxhigh.com/public/assets/images/logo.png"
              alt="coinxhigh"
              width="200px"
            />
            <Stack direction="row" spacing={2}>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Desclimer
              </Typography>
              <Divider
                variant="middle"
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#3D444D" }}
              />

              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Terms & Privacy
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Box>
    </Grid>
  );
};

export default MobileAppFooter;
