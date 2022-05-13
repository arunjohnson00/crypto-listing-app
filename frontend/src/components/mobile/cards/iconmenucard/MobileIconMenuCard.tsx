import { Grid, Box, Stack, Typography } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const MobileIconMenuCard = () => {
  return (
    <Box
      sx={{
        borderRadius: 8,
        backgroundColor: "#010822",
        border: "1px solid #0a1f49",
      }}
      px={4}
      py={4}
    >
      <Stack
        direction={{ xs: "row" }}
        sx={{
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
        spacing={0}
      >
        <Stack
          direction={{ xs: "column" }}
          sx={{ alignItems: "center" }}
          spacing={1}
          pb={4}
        >
          <AccessTimeOutlinedIcon sx={{ color: "#09E2B1", fontSize: "55px" }} />
          <Typography
            sx={{ color: "#FFFFF5", fontWeight: "bold" }}
            variant="subtitle2"
          >
            Recently added
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column" }}
          sx={{ alignItems: "center" }}
          spacing={1}
          pb={4}
        >
          <MilitaryTechOutlinedIcon
            sx={{ color: "#09E2B1", fontSize: "55px" }}
          />
          <Typography
            sx={{ color: "#FFFFF5", fontWeight: "bold" }}
            variant="subtitle2"
          >
            Today's Performer
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column" }}
          sx={{ alignItems: "center" }}
          spacing={1}
          pb={4}
        >
          <AutoGraphOutlinedIcon sx={{ color: "#09E2B1", fontSize: "55px" }} />
          <Typography
            sx={{ color: "#FFFFF5", fontWeight: "bold" }}
            variant="subtitle2"
          >
            Biggest Gainers
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column" }}
          sx={{ alignItems: "center" }}
          spacing={1}
          pb={4}
        >
          <TrendingDownOutlinedIcon
            sx={{ color: "#09E2B1", fontSize: "55px" }}
          />
          <Typography
            sx={{ color: "#FFFFF5", fontWeight: "bold" }}
            variant="subtitle2"
          >
            Top Losers
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column" }}
          sx={{ alignItems: "center" }}
          spacing={1}
          pb={4}
        >
          <RocketLaunchOutlinedIcon
            sx={{ color: "#09E2B1", fontSize: "55px" }}
          />
          <Typography
            sx={{ color: "#FFFFF5", fontWeight: "bold" }}
            variant="subtitle2"
          >
            Promote
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column" }}
          sx={{ alignItems: "center" }}
          spacing={1}
          pb={4}
        >
          <EqualizerOutlinedIcon sx={{ color: "#09E2B1", fontSize: "55px" }} />
          <Typography
            sx={{ color: "#FFFFF5", fontWeight: "bold" }}
            variant="subtitle2"
          >
            Ledger Board
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column" }}
          sx={{ alignItems: "center" }}
          spacing={1}
          pb={4}
        >
          <CandlestickChartOutlinedIcon
            sx={{ color: "#09E2B1", fontSize: "55px" }}
          />
          <Typography
            sx={{ color: "#FFFFF5", fontWeight: "bold" }}
            variant="subtitle2"
          >
            Chart
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column" }}
          sx={{ alignItems: "center" }}
          spacing={1}
          pb={4}
        >
          <AddCircleOutlineOutlinedIcon
            sx={{ color: "#09E2B1", fontSize: "55px" }}
          />
          <Typography
            sx={{ color: "#FFFFF5", fontWeight: "bold" }}
            variant="subtitle2"
          >
            Add Asset
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MobileIconMenuCard;
