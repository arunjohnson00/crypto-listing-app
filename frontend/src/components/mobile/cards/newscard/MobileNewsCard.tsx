import { Grid, Box, Typography, Stack } from "@mui/material";
import React from "react";
import Parser from "html-react-parser";
import moment from "moment";

const MobileNewsCard = ({ rssFeed }: any) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#020822",
        borderRadius: 4,
        border: "1px solid #243464",
        // maxHeight: 200,
        //minHeight: 170,
        height: "auto",
      }}
      px={2}
      py={2}
      mr={0}
    >
      <Stack direction="column" spacing={0}>
        <Typography
          variant="body2"
          sx={{ color: "#02FC8E", fontWeight: "bold" }}
        >
          <a
            href={rssFeed && rssFeed?.link}
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            {Parser(rssFeed && rssFeed?.title.substring(0, 75))}...
          </a>
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "#FFFFF5", fontWeight: "300", wordWrap: "break-word" }}
        >
          {Parser(rssFeed && rssFeed?.excerpt?.substring(0, 200))}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#40444F", fontWeight: "550" }}
          >
            {rssFeed && moment(new Date(rssFeed?.date)).fromNow()}
          </Typography>

          <Typography
            variant="caption"
            sx={{ color: "#40444F", fontWeight: "550" }}
          >
            {rssFeed && rssFeed?.author}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MobileNewsCard;
