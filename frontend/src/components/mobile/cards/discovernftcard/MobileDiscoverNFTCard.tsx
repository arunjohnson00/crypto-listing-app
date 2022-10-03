import { Box, Stack, Typography, IconButton, CardMedia } from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import Telegram from "@mui/icons-material/Telegram";
import Twitter from "@mui/icons-material/Twitter";
const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileDiscoverNFTCard = ({ item }: any) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        backgroundColor: "#050A28",
        color: "#FFFFF5",
        margin: 1,
        border: "2px solid #0B1139",
        borderRadius: 2,
      }}
    >
      <Stack
        direction={{ xs: "column" }}
        spacing={2.3}
        sx={{ alignItems: "center" }}
      >
        <CardMedia
          component="img"
          height="127px"
          alt={item && item?.title}
          src={`${serverAPIUrl}public/uploads/nft_listing_image/${item?.image}`}
        />

        <Typography
          variant="subtitle1"
          sx={{ color: "#FFFFF5", fontWeight: 600 }}
          textAlign="center"
        >
          {item && item?.title}
        </Typography>
      </Stack>

      <Stack direction={{ xs: "column" }} spacing={0.5} alignItems="center">
        <Typography variant="body2" sx={{ color: "#848890", fontWeight: 600 }}>
          Price
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#2ADDB6", fontWeight: 500 }}
        >
          {item && item?.public_mint_price} {item && item?.symbol}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "#23C1D4", fontWeight: 600 }}
        >
          2365 Votes
        </Typography>
        <Stack direction="row" justifyContent="center" pt={2}>
          <IconButton aria-label="delete">
            <LanguageIcon sx={{ color: "#FFFFF5", fontSize: 19 }} />
          </IconButton>
          <IconButton aria-label="delete">
            <Telegram sx={{ color: "#FFFFF5", fontSize: 19 }} />
          </IconButton>
          <IconButton aria-label="delete">
            <Twitter sx={{ color: "#FFFFF5", fontSize: 19 }} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MobileDiscoverNFTCard;
