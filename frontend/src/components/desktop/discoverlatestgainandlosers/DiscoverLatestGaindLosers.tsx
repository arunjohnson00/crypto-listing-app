import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import GainersLosersCard from "../cards/gainersloserscard/GainersLosersCard";

const DiscoverLatestGaindLosers = () => {
  return (
    <Grid xs={12}>
      <Box
        sx={{
          flexGrow: 1,
          padding: 4,
          borderRadius: 4,
          backgroundColor: "#020727",
        }}
        mb={7}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={5}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            spacing={2}
          >
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              alignItems="center"
              spacing={1}
            >
              <CampaignIcon sx={{ color: "#2DCEAF", fontSize: 20 }} />
              <Typography
                variant="h6"
                sx={{ color: "#2DCEAF", fontWeight: 500 }}
              >
                Gainers & Losers
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={2}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: "#888C8F", fontWeight: 500 }}
              >
                Gainers
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                alignItems="center"
                spacing={1}
                pt={0}
              >
                <GainersLosersCard />
                <GainersLosersCard />
                <GainersLosersCard />
                <GainersLosersCard />
                <GainersLosersCard />
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={2}
              pt={2}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: "#888C8F", fontWeight: 500 }}
              >
                Losers
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                alignItems="center"
                spacing={1}
              >
                <GainersLosersCard />
                <GainersLosersCard />
                <GainersLosersCard />
                <GainersLosersCard />
                <GainersLosersCard />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default DiscoverLatestGaindLosers;
