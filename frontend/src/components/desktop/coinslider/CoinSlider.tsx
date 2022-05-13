import React from "react";
import { Stack, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Parser from "html-react-parser";
import { Helmet } from "react-helmet";

const cryptoSlider = `<div class="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#abb8c3" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="30" ></div>`;

const CoinSlider = () => {
  return (
    <Grid container xs={12}>
      <Helmet>
        <script
          defer
          src="https://www.livecoinwatch.com/static/lcw-widget.js"
        ></script>
      </Helmet>
      {Parser(cryptoSlider)}
    </Grid>
  );
};

export default CoinSlider;
