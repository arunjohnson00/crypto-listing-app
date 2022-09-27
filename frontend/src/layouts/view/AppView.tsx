import { Fragment, useState, useEffect } from "react";
import {
  Box,
  CardMedia,
  Grid,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import AppHeader from "../desktop/header/AppHeader";
import AppFooter from "../desktop/footer/AppFooter";
import MobileAppHeader from "../mobile/header/MobileAppHeader";
import MobileAppFooter from "../mobile/footer/MobileAppFooter";
import MobileBottomNav from "../../components/mobile/bottomnavigation/MobileBottomNav";
import Container from "@mui/material/Container";
import CoinSlider from "../../components/desktop/coinslider/CoinSlider";
import logoWhite from "../../assets/logo/logo.png";
const AppView = ({ children }: any) => {
  const location: any = useLocation();
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  window.addEventListener("resize", function (event) {
    setWindowInnerWidth(window.innerWidth);
  });
  //const req: any = new XMLHttpRequest();
  const [preloader, setPreloader] = useState<any>(true);
  useEffect(() => {
    window.onload = function () {
      setTimeout(() => setPreloader(false), 4000);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const matchesXL = useMediaQuery("(max-width:1536px)");
  return (
    <Fragment>
      {/* {windowInnerWidth >= 900 && preloader === true && (
        <Box
          sx={{
            position: "fixed",
            height: "100vh",
            width: "100vw",
            zIndex: 9999,
            backgroundColor: "#21324E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: 0,
          }}
        >
          <Stack
            direction="column"
            spacing={7}
            alignItems="center"
            justifyItems="center"
          >
            <Stack
              direction="column"
              spacing={1}
              alignItems="center"
              justifyItems="center"
            >
              <img src={logoWhite} alt="coinxhigh" width="200px" />
              <Box sx={{ width: "200px" }}>
                <LinearProgress sx={{ height: 6 }} />
              </Box>
              <Typography
                sx={{
                  fontSize: ".6rem",
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
                mt={1}
              >
                Connection...
              </Typography>
            </Stack>
            <Box sx={{ width: "100%" }}>
              <CardMedia
                component="img"
                height="80"
                image="https://iili.io/UtY5Kv.jpg"
                alt="green iguana"
                sx={{ objectFit: "unset" }}
              />
              <Typography
                sx={{ fontSize: ".6rem", color: "#FFFFFF", textAlign: "right" }}
                pt={1}
              >
                Sponsored
              </Typography>
            </Box>
          </Stack>
        </Box>
      )} */}
      <Container maxWidth={false}>
        <Grid
          item
          // ml={5}
          px={{ xs: 0.2, sm: 1, md: 3, lg: 4, xl: matchesXL ? 7 : 25 }}
        >
          <Grid
            container
            // spacing={5}
            sx={{
              dispaly: "flex",
              //
              paddingTop: "0px",
            }}
          >
            <Grid item xs={12}>
              {windowInnerWidth >= 900 ? (
                <AppHeader windowInnerWidth={windowInnerWidth} />
              ) : (
                <MobileAppHeader />
              )}
            </Grid>
          </Grid>

          <Grid xs={12}>{children}</Grid>
        </Grid>

        <Grid item xs={12}>
          {windowInnerWidth >= 900 ? (
            <Grid
              item
              //ml={5}
              px={{ xs: 0.2, sm: 1, md: 3, lg: 4, xl: matchesXL ? 7 : 25 }}
            >
              <AppFooter />
            </Grid>
          ) : (
            <Grid
              item
              //ml={5}
              px={{ xs: 0.2, sm: 1, md: 3, lg: 4, xl: matchesXL ? 7 : 25 }}
            >
              <Fragment>
                <MobileAppFooter />
                <MobileBottomNav />
              </Fragment>
            </Grid>
          )}
        </Grid>

        {windowInnerWidth >= 900 && (
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              zIndex: 999,
            }}
          >
            {" "}
            <CoinSlider />
          </Box>
        )}
      </Container>
    </Fragment>
  );
};

export default AppView;
