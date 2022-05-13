import { Stack, Divider, Grid, Typography } from "@mui/material";
import { Fragment } from "react";

const MobileNewsCardTop = ({ rssFeed, timeAgo }: any) => {
  return (
    <Fragment>
      <Fragment>
        <Grid item xs={4} sx={{ height: "auto" }} px={2}>
          <Stack
            direction="column"
            sx={{ maxHeight: 100, minHeight: 50, maxWidth: 300 }}
          >
            <Typography variant="h6" sx={{ color: "white", fontSize: "1rem" }}>
              {rssFeed?.title}
            </Typography>
            <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
              <Typography variant="caption" sx={{ color: "#24D781" }}>
                {timeAgo.format(new Date(rssFeed?.published))}
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Divider orientation="vertical" flexItem />
      </Fragment>
    </Fragment>
  );
};

export default MobileNewsCardTop;
