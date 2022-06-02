import { Grid, Stack, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import DiscoverListEventsCard from "../cards/discoverlisteventscard/DiscoverListEventsCard";

const DiscoverEvents = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          Events
        </Typography>
      </Grid>
      <Grid item xs={12} mt={4}>
        <Typography variant="h5" sx={{ fontWeight: 500, color: "#ABAEAF" }}>
          02 June 2022
        </Typography>

        <Stack direction="row" flexWrap="wrap">
          <ImageList sx={{ height: "auto" }} cols={2}>
            <ImageListItem>
              <DiscoverListEventsCard />
            </ImageListItem>
            <ImageListItem>
              <DiscoverListEventsCard />
            </ImageListItem>
            <ImageListItem>
              <DiscoverListEventsCard />
            </ImageListItem>
            <ImageListItem>
              <DiscoverListEventsCard />
            </ImageListItem>
          </ImageList>
        </Stack>

        <Typography
          variant="h5"
          sx={{ fontWeight: 500, color: "#ABAEAF" }}
          mt={4}
        >
          02 June 2022
        </Typography>

        <Stack direction="row" flexWrap="wrap">
          <ImageList sx={{ height: "auto" }} cols={2}>
            <ImageListItem>
              <DiscoverListEventsCard />
            </ImageListItem>
            <ImageListItem>
              <DiscoverListEventsCard />
            </ImageListItem>
            <ImageListItem>
              <DiscoverListEventsCard />
            </ImageListItem>
            <ImageListItem>
              <DiscoverListEventsCard />
            </ImageListItem>
          </ImageList>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default DiscoverEvents;
