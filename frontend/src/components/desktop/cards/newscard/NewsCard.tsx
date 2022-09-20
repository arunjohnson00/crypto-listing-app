import { Grid, Box, Typography, Stack } from "@mui/material";
import React from "react";
import Parser from "html-react-parser";
import moment from "moment";

const NewsCard = ({ rssFeed }: any) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#020822",
        borderRadius: 3,
        border: "1px solid #071438",
        maxHeight: 170,
        minHeight: 170,
        maxWidth: 370,
        "&:hover": {
          backgroundColor: "#020c36",
        },
      }}
      px={2}
      py={2}
      mr={2}
    >
      <Stack
        direction="column"
        spacing={0}
        justifyContent="space-between"
        height={170}
      >
        <Stack direction="column" spacing={0}>
          {" "}
          <Typography
            variant="body2"
            sx={{ color: "#02FC8E", fontWeight: "bold" }}
          >
            <a
              href={rssFeed?.link}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "inherit",
                textDecoration: "none",
                wordWrap: "break-word",
              }}
            >
              {" "}
              {rssFeed && rssFeed?.title?.length >= 100
                ? Parser(rssFeed?.title.substring(0, 100)) + "..."
                : Parser(rssFeed?.title)}
              .
            </a>
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#FFFFF5", fontWeight: 400, wordWrap: "break-word" }}
          >
            {rssFeed && rssFeed?.excerpt?.length >= 190
              ? Parser(rssFeed?.excerpt.substring(0, 190) + "...")
              : Parser(rssFeed?.excerpt)}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#40444F", fontWeight: "550" }}
          >
            {moment(new Date(rssFeed?.date)).fromNow()}
          </Typography>

          <Typography
            variant="caption"
            sx={{ color: "#40444F", fontWeight: "550" }}
          >
            {rssFeed?.author}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NewsCard;
