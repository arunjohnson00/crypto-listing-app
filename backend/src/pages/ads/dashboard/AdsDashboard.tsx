import { Typography, Grid, Stack } from "@mui/material";
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined";
import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import AdsDashboardPieChart from "../../../components/charts/adsdashboardpiechart/AdsDashboardPieChart";
import ActiveAdsCard from "../../../components/cards/activeadscard/ActiveAdsCard";

const AdsDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Typography variant="h4" sx={{ textAlign: "left" }}>
          Ads
        </Typography>
      </Grid>

      <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>

      <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} mt={3}>
            <Typography variant="h5">Active Ads</Typography>
            <CellTowerOutlinedIcon style={{ color: "#00E396" }} />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <ActiveAdsCard />
        </Grid>
      </Grid>
      <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} mt={3}>
            <Typography variant="h5">Ads Going to expire</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} mt={3}>
            <Typography variant="h5">Incoming Ad request</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} mt={3}>
            <Typography variant="h5">Featured Coins</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} mt={3}>
            <Typography variant="h5">Main Banner 970x90</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} mt={3}>
            <Typography variant="h5">Chart Ad</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} mt={3}>
            <Typography variant="h5">Video Ad (Youtube)</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} mt={3}>
            <Typography variant="h5">Bigger Ad</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} mt={3}>
            <Typography variant="h5">Sponsored NFT's</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} mt={3}>
            <Typography variant="h5">Bigger Ads (Half)</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdsDashboard;
