import { Button, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "./css/style.css";

const ComingSoon = () => {
  const navigate = useNavigate();
  return (
    <div id="notfound">
      <Helmet>
        <title>Coming Soon | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Coming Soon  | CoinXhigh.com" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta
          property="og:image"
          content="https://coinxhigh.com/coinxhighlogo.webp"
        />
        <meta property="og:url" content="https://coinxhigh.com/" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <div className="notfound">
        <div className="notfound-404">
          {/* <h3>Oops! Page not found</h3> */}
          <h1>
            <span>Coming</span>
            <br />
            <span>Soon</span>
          </h1>
        </div>
        {/* <h2>we are sorry, but the page you requested was under construction</h2> */}
        <Stack alignItems="center" justifyContent="center" direction="row">
          <Button
            variant="contained"
            size="medium"
            sx={{
              borderRadius: 5,
              fontSize: ".65rem",
              px: 2,
              backgroundColor: "#a11bc2",
            }}
            onClick={() => navigate(-1)}
          >
            GO BACK
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default ComingSoon;
