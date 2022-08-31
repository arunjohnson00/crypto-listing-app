import { Fragment, useState } from "react";
import { Box, Grid } from "@mui/material";
import AppHeader from "../desktop/header/AppHeader";
import AppFooter from "../desktop/footer/AppFooter";
import MobileAppHeader from "../mobile/header/MobileAppHeader";
import MobileAppFooter from "../mobile/footer/MobileAppFooter";
import MobileBottomNav from "../../components/mobile/bottomnavigation/MobileBottomNav";
import Container from "@mui/material/Container";
import CoinSlider from "../../components/desktop/coinslider/CoinSlider";
const AppView = ({ children }: any) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  window.addEventListener("resize", function (event) {
    setWindowInnerWidth(window.innerWidth);
  });
  return (
    <Fragment>
      <Container maxWidth={false}>
        <Grid item ml={5} px={{ xs: 0.2, sm: 1, md: 3, lg: 4, xl: 25 }}>
          <Grid
            container
            spacing={5}
            sx={{
              dispaly: "flex",
              //
              paddingTop: "40px",
              paddingBottom: "22px",
            }}
          >
            <Grid xs={12}>
              {windowInnerWidth >= 900 ? (
                <AppHeader windowInnerWidth={windowInnerWidth} />
              ) : (
                <MobileAppHeader />
              )}
            </Grid>
          </Grid>

          <Grid xs={12}>{children}</Grid>
        </Grid>

        <Grid
          xs={12}
          sx={{
            paddingTop: "50px",
            paddingBottom: "23px",
          }}
        >
          {windowInnerWidth >= 900 ? (
            <Grid item ml={5} px={{ xs: 0.2, sm: 1, md: 3, lg: 4, xl: 25 }}>
              <AppFooter />
            </Grid>
          ) : (
            <Fragment>
              <MobileAppFooter />
              <MobileBottomNav />
            </Fragment>
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
