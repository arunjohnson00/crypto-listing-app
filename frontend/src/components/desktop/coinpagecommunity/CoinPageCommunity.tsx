import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import CoinCommunityChart from "../coinscommunitychart/CoinCommunityChart";
import FacebookGraphImage from "../../../assets/singlepagecoin/graph/facebook.png";
import DiscordGraphImage from "../../../assets/singlepagecoin/graph/discord.png";
import RedditGraphImage from "../../../assets/singlepagecoin/graph/reddit.png";
import TelegramGraphImage from "../../../assets/singlepagecoin/graph/telegram.png";
import TwitterGraphImage from "../../../assets/singlepagecoin/graph/twitter.png";
import GithubGraphImage from "../../../assets/singlepagecoin/graph/github.png";

const CoinPageCommunity = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <CoinCommunityChart
          //   dateTime={dateTime}
          //   setDateTime={setDateTime}
          //   updateData={updateData}
          //data={data}
          variant="telegram"
          title="Telegram"
          colorTheme="#13b0fc"
          icon={TelegramGraphImage}
          chartid="telegram"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <CoinCommunityChart
          //   dateTime={dateTime}
          //   setDateTime={setDateTime}
          //   updateData={updateData}
          //data={data}
          variant="reddit"
          title="Reddit"
          colorTheme="#ff3708"
          icon={RedditGraphImage}
          chartid="reddit"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <CoinCommunityChart
          //   dateTime={dateTime}
          //   setDateTime={setDateTime}
          //   updateData={updateData}
          //data={data}
          variant="twitter"
          title="Twitter"
          colorTheme="#00e8fd"
          icon={TwitterGraphImage}
          chartid="twitter"
        />
      </Grid>
      {/* <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <CoinCommunityChart
          //   dateTime={dateTime}
          //   setDateTime={setDateTime}
          //   updateData={updateData}
          data={data}
          variant="facebook"
          title="Facebook"
          colorTheme="#097EEB"
          icon={FacebookGraphImage}
          chartid="facebook"
        />
      </Grid> */}
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <CoinCommunityChart
          //   dateTime={dateTime}
          //   setDateTime={setDateTime}
          //   updateData={updateData}
          //data={data}
          variant="discord"
          title="Discord"
          colorTheme="#404EED"
          icon={DiscordGraphImage}
          chartid="discord"
        />
      </Grid>
    </Grid>
  );
};

export default CoinPageCommunity;
