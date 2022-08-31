import { Stack, Divider, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import Parser from "html-react-parser";
const MobileNewsCardTop = ({ rssFeed, timeAgo }: any) => {
  return (
    <Fragment>
      <Stack
        direction="column"
        sx={{
          maxHeight: 100,
          minHeight: 50,
          // maxWidth: 270,
          width: "auto",
          justifyContent: "flex-start",
        }}
        px={0.7}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: "white", fontSize: "0.775rem" }}
        >
          <a
            href={rssFeed?.link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "inherit",
              textDecoration: "none",
              wordBreak: "break-all",
            }}
          >
            {" "}
            {rssFeed && rssFeed?.title?.length >= 95
              ? Parser(rssFeed?.title.substring(0, 92)) + "..."
              : Parser(rssFeed?.title)}
          </a>
        </Typography>
        <Typography variant="caption" sx={{ color: "#24D781" }}>
          {timeAgo.format(new Date(rssFeed?.date))}
        </Typography>
      </Stack>

      <Divider orientation="vertical" flexItem />
    </Fragment>
  );
};

export default MobileNewsCardTop;
