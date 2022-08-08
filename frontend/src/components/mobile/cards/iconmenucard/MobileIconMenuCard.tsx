import { Grid, Box, Stack, Typography, Avatar } from "@mui/material";

import todaysPerformerIcon from "../../../../assets/home/todays_performer_icon.png";
import recentlyAddedIcon from "../../../../assets/home/recently_added_icon.png";
import biggestLosersIcon from "../../../../assets/home/biggest_losers_icon.png";
import biggestGainersIcon from "../../../../assets/home/biggest_gainers_icon.png";

import promoteIcon from "../../../../assets/home/promote_icon.png";
import ledgerBoardIcon from "../../../../assets/home/leaderboard_icon.png";
import chartIcon from "../../../../assets/home/chart_icon.png";
import addAssetIcon from "../../../../assets/home/add_asset_icon.png";

const MobileIconMenuCard = () => {
  return (
    <Box
      sx={{
        borderRadius: 8,
        backgroundColor: "#010822",
        border: "1px solid #0a1f49",
      }}
      px={3}
      pb={3}
    >
      <Stack
        direction={{ xs: "row" }}
        sx={{
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={3}>
          <Stack
            direction={{ xs: "column" }}
            sx={{ alignItems: "center" }}
            spacing={1}
            pt={4}
          >
            <Avatar
              alt=" Recently added"
              src={recentlyAddedIcon}
              sx={{ width: 35, height: 35, borderRadius: 0 }}
            />
            <Typography
              sx={{ color: "#FFFFF5", fontWeight: "bold", textAlign: "center" }}
              variant="subtitle2"
            >
              Recently added
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack
            direction={{ xs: "column" }}
            sx={{ alignItems: "center" }}
            spacing={1}
            pt={4}
          >
            <Avatar
              alt="Today's Performer"
              src={todaysPerformerIcon}
              sx={{ width: 35, height: 35, borderRadius: 0 }}
            />
            <Typography
              sx={{ color: "#FFFFF5", fontWeight: "bold", textAlign: "center" }}
              variant="subtitle2"
            >
              Today's Performer
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack
            direction={{ xs: "column" }}
            sx={{ alignItems: "center" }}
            spacing={1}
            pt={4}
          >
            <Avatar
              alt="Biggest Gainers"
              src={biggestGainersIcon}
              sx={{ width: 35, height: 35, borderRadius: 0 }}
            />
            <Typography
              sx={{ color: "#FFFFF5", fontWeight: "bold", textAlign: "center" }}
              variant="subtitle2"
            >
              Biggest Gainers
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack
            direction={{ xs: "column" }}
            sx={{ alignItems: "center" }}
            spacing={1}
            pt={4}
          >
            <Avatar
              alt="Biggest Losers"
              src={biggestLosersIcon}
              sx={{ width: 35, height: 35, borderRadius: 0 }}
            />
            <Typography
              sx={{ color: "#FFFFF5", fontWeight: "bold", textAlign: "center" }}
              variant="subtitle2"
            >
              Biggest Losers
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack
            direction={{ xs: "column" }}
            sx={{ alignItems: "center" }}
            spacing={1}
            pt={4}
          >
            <Avatar
              alt="Promote"
              src={promoteIcon}
              sx={{ width: 35, height: 35, borderRadius: 0 }}
            />
            <Typography
              sx={{ color: "#FFFFF5", fontWeight: "bold", textAlign: "center" }}
              variant="subtitle2"
            >
              Promote
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack
            direction={{ xs: "column" }}
            sx={{ alignItems: "center" }}
            spacing={1}
            pt={4}
          >
            <Avatar
              alt=" Ledger Board"
              src={ledgerBoardIcon}
              sx={{ width: 35, height: 35, borderRadius: 0 }}
            />
            <Typography
              sx={{ color: "#FFFFF5", fontWeight: "bold", textAlign: "center" }}
              variant="subtitle2"
            >
              Ledger Board
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack
            direction={{ xs: "column" }}
            sx={{ alignItems: "center" }}
            spacing={1}
            pt={4}
          >
            <Avatar
              alt="Chart"
              src={chartIcon}
              sx={{ width: 35, height: 35, borderRadius: 0 }}
            />
            <Typography
              sx={{ color: "#FFFFF5", fontWeight: "bold", textAlign: "center" }}
              variant="subtitle2"
            >
              Chart
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack
            direction={{ xs: "column" }}
            sx={{ alignItems: "center" }}
            spacing={1}
            pt={4}
          >
            <Avatar
              alt="Add Asset"
              src={addAssetIcon}
              sx={{ width: 35, height: 35, borderRadius: 0 }}
            />
            <Typography
              sx={{ color: "#FFFFF5", fontWeight: "bold", textAlign: "center" }}
              variant="subtitle2"
            >
              Add Asset
            </Typography>
          </Stack>
        </Grid>
      </Stack>
    </Box>
  );
};

export default MobileIconMenuCard;
