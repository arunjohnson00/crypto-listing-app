import { Box, CardMedia, Chip, Stack, useMediaQuery } from "@mui/material";
import { Fragment } from "react";
import headerAds from "../../../assets/ads/topads.gif";

const HeaderAds = () => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Fragment>
      {matches === true ? (
        <Box py={2} width="70%">
          <a href="https://t.me/shopayment" target="_blank" rel="noreferrer">
            <CardMedia
              component="img"
              height="90"
              image={headerAds}
              alt="ads"
              sx={{ objectFit: "unset" }}
            />
          </a>
          <Stack direction="row" alignItems="center" justifyContent="flex-end">
            <Chip
              label="Ad"
              sx={{
                background: "#FFFFFF",
                color: "#000000",

                height: 15,
                fontSize: ".60rem",
                position: "relative",
                top: -20,
                right: 10,
                fontWeight: 600,
              }}
              size="small"
            />
          </Stack>
        </Box>
      ) : (
        <Box py={0.4} width="100%">
          <a href="https://t.me/shopayment" target="_blank" rel="noreferrer">
            <CardMedia
              component="img"
              height="auto"
              image={headerAds}
              alt="Ads"
              sx={{ objectFit: "unset" }}
            />
          </a>
          <Stack direction="row" alignItems="center" justifyContent="flex-end">
            <Chip
              label="Ad"
              sx={{
                background: "#FFFFFF",
                color: "#000000",

                height: 12,

                fontSize: ".5rem",
                position: "relative",
                top: -15,
                right: 2,
                fontWeight: 600,
              }}
              size="small"
            />
          </Stack>
        </Box>
      )}
    </Fragment>
  );
};

export default HeaderAds;
