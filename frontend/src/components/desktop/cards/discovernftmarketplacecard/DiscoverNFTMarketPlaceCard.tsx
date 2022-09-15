import { Box, Stack, Typography, Avatar } from "@mui/material";
import { Fragment } from "react";
const serverAPIUrl = process.env.REACT_APP_API_URL;
const DiscoverNFTMarketPlaceCard = () => {
  return (
    <Fragment>
      <Stack
        direction={{ xs: "column" }}
        spacing={0}
        sx={{ alignItems: "center" }}
        mb={1}
      >
        <Box
          sx={{
            flexGrow: 1,
            paddingY: 2.5,
            paddingX: 8,
            backgroundColor: "#050A28",
            color: "#FFFFF5",
            margin: 1,
            // border: "2px solid #0B1139",
            borderRadius: 2,
          }}
        >
          <Stack
            direction={{ xs: "column" }}
            spacing={2.3}
            sx={{ alignItems: "center" }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 60, height: 60 }}
            />
          </Stack>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{ color: "#FFFFF5", fontWeight: 600 }}
          textAlign="center"
        >
          Trimoox
        </Typography>
      </Stack>
    </Fragment>
  );
};

export default DiscoverNFTMarketPlaceCard;
