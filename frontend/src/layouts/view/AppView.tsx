import { useState } from "react";
import { Grid } from "@mui/material";
import AppHeader from "../desktop/header/AppHeader";
import AppFooter from "../desktop/footer/AppFooter";
import MobileAppHeader from "../mobile/header/MobileAppHeader";
import MobileAppFooter from "../mobile/footer/MobileAppFooter";

const AppView = ({ children }: any) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  window.addEventListener("resize", function (event) {
    setWindowInnerWidth(window.innerWidth);
  });
  return (
    <Grid ml={5}>
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

      <Grid
        xs={12}
        sx={{
          paddingTop: "50px",
          paddingBottom: "23px",
        }}
      >
        {windowInnerWidth >= 900 ? <AppFooter /> : <MobileAppFooter />}
      </Grid>
    </Grid>
  );
};

export default AppView;
