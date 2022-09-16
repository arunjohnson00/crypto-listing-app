import { Stack, Divider, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import Parser from "html-react-parser";
const NewsCardTop = ({ rssFeed, timeAgo }: any) => {
  return (
    <Fragment>
      <Stack
        direction="column"
        sx={{
          maxHeight: 80,
          minHeight: 60,
          // maxWidth: 270,

          border: "1px solid #091851",
          width: "auto",
          justifyContent: "flex-start",
          borderRadius: 2,
        }}
        p={1.2}
        mx={1}
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
            {rssFeed && rssFeed?.title?.length >= 55
              ? Parser(rssFeed?.title.substring(0, 55)) + "..."
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

export default NewsCardTop;
