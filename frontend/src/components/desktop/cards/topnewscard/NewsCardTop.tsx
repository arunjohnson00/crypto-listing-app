import { Stack, Divider, Grid, Typography } from "@mui/material";
import { Fragment } from "react";

const NewsCardTop = ({ rssFeed, timeAgo }: any) => {
  return (
    <Fragment>
      <Fragment>
        <Grid item xs={4} sx={{ height: "auto" }} px={2}>
          <Stack
            direction="column"
            sx={{
              maxHeight: 100,
              minHeight: 50,
              maxWidth: 300,
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: "white", fontSize: "0.775rem" }}
            >
              <a
                href={rssFeed?.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {" "}
                {rssFeed?.title.substring(0, 80)}...
              </a>
            </Typography>
            <Typography variant="caption" sx={{ color: "#24D781" }}>
              {timeAgo.format(new Date(rssFeed?.published))}
            </Typography>
          </Stack>
        </Grid>

        <Divider orientation="vertical" flexItem />
      </Fragment>
    </Fragment>
  );
};

export default NewsCardTop;
