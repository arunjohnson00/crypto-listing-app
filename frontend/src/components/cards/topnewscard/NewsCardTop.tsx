import { Stack, Divider, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import Marquee from "react-fast-marquee";

const NewsCardTop = () => {
  const text = `The CEO of Mining Capital Coin is Allegedly Involved in Investment
  Fraud Scheme of $62M`;

  return (
    <Fragment>
      <Grid item xs={3} sx={{ height: "auto" }}>
        <Typography
          variant="subtitle2"
          sx={{ color: "white", fontSize: "0.775rem" }}
        >
          {text.substr(0, 87)}
        </Typography>
        <Typography variant="caption" sx={{ color: "#24D781" }}>
          24 Minutes ago
        </Typography>
      </Grid>
      <Divider orientation="vertical" flexItem />
    </Fragment>
  );
};

export default NewsCardTop;
