import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  CardMedia,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React from "react";
import MobileViewMoreBtn from "../../button/viewmorebtn/MobileViewMoreBtn";

const MobileAdsCardHome = () => {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          flexGrow: 1,
          // borderRadius: "10px",
          // border: "1px solid #243464",
          background: "linear-gradient(0deg, #00030e 10%, #0B1A51)",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={1}
          py={5}
          px={5}
          sx={{ alignItems: "center" }}
        >
          <Grid container xs={12} sm={12} md={12} lg={6} xl={6}>
            <Stack direction="column" spacing={5} sx={{ alignItems: "center" }}>
              <Typography
                variant="h5"
                sx={{
                  textTransform: "uppercase",
                  color: "#FFFFF5",
                  fontWeight: "bold",
                }}
              >
                Whitelist Challenge
              </Typography>
              <CardMedia
                sx={{ borderRadius: 15 }}
                component="img"
                height="244"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <Typography
                variant="body2"
                sx={{
                  //  textTransform: "uppercase",
                  color: "#FFFFF5",
                  // fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </Typography>

              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                {" "}
                {/* <Typography
                  variant="h6"
                  sx={{
                    //textTransform: "uppercase",
                    color: "#0FF39D",
                    fontWeight: "bold",
                  }}
                >
                  Participate the presale
                </Typography> <OpenInNewIcon sx={{ color: "#0FF39D" }} /> */}
                <MobileViewMoreBtn title="  Participate the presale" />
              </Stack>
            </Stack>
          </Grid>
        </Stack>
      </Box>
    </Grid>
  );
};

export default MobileAdsCardHome;
