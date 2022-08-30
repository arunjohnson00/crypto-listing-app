import { Stack, Divider, Grid, Typography } from "@mui/material";
import { Fragment } from "react";

const MobileNewsCardTop = ({ rssFeed, timeAgo }: any) => {
  return (
    <Fragment>
      <Stack
        direction="column"
        sx={{ maxHeight: 100, minHeight: 50, maxWidth: 270 }}
        alignItems="flex-start"
        px={1}
      >
        <Typography sx={{ color: "#FFFFFF", fontSize: ".9rem" }}>
          <a
            href={rssFeed && rssFeed?.link}
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            {rssFeed && rssFeed?.title.substring(0, 80)}...
          </a>
        </Typography>
        <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
          <Typography variant="caption" sx={{ color: "#24D781" }}>
            {rssFeed && timeAgo.format(new Date(rssFeed?.date))}
          </Typography>
        </Stack>
      </Stack>

      <Divider orientation="vertical" flexItem />
    </Fragment>
  );
};

export default MobileNewsCardTop;
