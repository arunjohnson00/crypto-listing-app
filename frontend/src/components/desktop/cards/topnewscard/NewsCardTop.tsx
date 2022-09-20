import { Stack, Divider, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import Parser from "html-react-parser";
import moment from "moment";
const NewsCardTop = ({ rssFeed }: any) => {
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
          justifyContent: "space-between",

          borderRadius: 2,
          "&:hover": {
            backgroundColor: "#020c36",
          },
        }}
        p={1.2}
        mr={1}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: "#FFFFFF", fontSize: "0.775rem" }}
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
            {rssFeed && rssFeed?.title?.length >= 155
              ? Parser(rssFeed?.title.substring(0, 155)) + "..."
              : Parser(rssFeed?.title)}
            .
          </a>
        </Typography>
        <Typography variant="caption" sx={{ color: "#24D781" }}>
          {moment(new Date(rssFeed?.date)).fromNow()}
        </Typography>
      </Stack>

      <Divider orientation="vertical" flexItem />
    </Fragment>
  );
};

export default NewsCardTop;
