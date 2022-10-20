import {
  Grid,
  Box,
  Stack,
  Typography,
  Avatar,
  Link as NavLink,
} from "@mui/material";

import todaysPerformerIcon from "../../../../assets/home/todays_performer_icon.png";
import recentlyAddedIcon from "../../../../assets/home/recently_added_icon.png";
import biggestLosersIcon from "../../../../assets/home/biggest_losers_icon.png";
import biggestGainersIcon from "../../../../assets/home/biggest_gainers_icon.png";

import promoteIcon from "../../../../assets/home/promote_icon.png";
import newsIcon from "../../../../assets/home/news.svg";
import chartIcon from "../../../../assets/home/chart_icon.png";
import addAssetIcon from "../../../../assets/home/add_asset_icon.svg";
import { Link } from "react-router-dom";

const MobileIconMenuCard = () => {
  return (
    <Box
      sx={{
        borderRadius: 4,
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
          <Link
            to="/coins/recently-added"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
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
                sx={{
                  color: "#FFFFF5",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  textAlign: "center",
                }}
                variant="subtitle2"
              >
                {" "}
                Recently added
              </Typography>
            </Stack>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link
            to="/coins/todays-performer"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
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
                sx={{
                  color: "#FFFFF5",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  textAlign: "center",
                }}
                variant="subtitle2"
              >
                Today's Performer
              </Typography>
            </Stack>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link
            to="/coins/biggest-gainers"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
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
                sx={{
                  color: "#FFFFF5",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  textAlign: "center",
                }}
                variant="subtitle2"
              >
                {" "}
                Biggest Gainers
              </Typography>
            </Stack>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link
            to="/coins/biggest-losers"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
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
                sx={{
                  color: "#FFFFF5",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  textAlign: "center",
                }}
                variant="subtitle2"
              >
                Biggest Losers
              </Typography>
            </Stack>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <NavLink
            href="https://t.me/coinXhigh_admin"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
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
                sx={{
                  color: "#FFFFF5",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  textAlign: "center",
                }}
                variant="subtitle2"
              >
                Promote
              </Typography>
            </Stack>
          </NavLink>
        </Grid>
        <Grid item xs={3}>
          <Link
            to="/news"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Stack
              direction={{ xs: "column" }}
              sx={{ alignItems: "center" }}
              spacing={1}
              pt={4}
            >
              <Avatar
                alt="News"
                src={newsIcon}
                sx={{ width: 30, height: 30, borderRadius: 0 }}
              />
              <Typography
                sx={{
                  color: "#FFFFF5",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  textAlign: "center",
                }}
                variant="subtitle2"
              >
                News
              </Typography>
            </Stack>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link
            // to="/chart"
            to="#"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
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
                sx={{
                  color: "#FFFFF5",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  textAlign: "center",
                }}
                variant="subtitle2"
              >
                Chart
              </Typography>
            </Stack>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link
            to="/add-asset"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
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
                sx={{
                  color: "#FFFFF5",
                  fontWeight: 400,
                  fontSize: ".8rem",
                  textAlign: "center",
                }}
                variant="subtitle2"
              >
                Add Asset
              </Typography>
            </Stack>
          </Link>
        </Grid>
      </Stack>
    </Box>
  );
};

export default MobileIconMenuCard;
