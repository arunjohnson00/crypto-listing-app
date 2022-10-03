import { Grid, Stack, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import MobileDiscoverListAirdropCard from "../cards/discoverlistairdropcard/MobileDiscoverListAirdropCard";

const MobileDiscoverAirdrops = () => {
  return (
    <Grid container rowSpacing={2}>
      {/* <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          AirDrops
        </Typography>
      </Grid> */}
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: 500, color: "#ABAEAF" }}>
          02 June 2022
        </Typography>

        <Stack direction="column" flexWrap="wrap" spacing={2} mt={1}>
          <MobileDiscoverListAirdropCard />
          <MobileDiscoverListAirdropCard />
          <MobileDiscoverListAirdropCard />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MobileDiscoverAirdrops;
