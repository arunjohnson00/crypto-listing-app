import {
  Grid,
  Box,
  Stack,
  Avatar,
  Typography,
  Chip,
  Rating,
  IconButton,
  CardMedia,
} from "@mui/material";
import Chart from "react-apexcharts";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import LanguageIcon from "@mui/icons-material/Language";
import Telegram from "@mui/icons-material/Telegram";
import Twitter from "@mui/icons-material/Twitter";

const DiscoverNFTCard = ({}) => {
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
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />

        <Typography
          variant="subtitle1"
          sx={{ color: "#FFFFF5", fontWeight: 600 }}
          textAlign="center"
        >
          Bored Ape Yatched Club
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
          0.2365ETH
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

export default DiscoverNFTCard;
