import { Grid, Box, Typography, Stack } from "@mui/material";
import React from "react";
import Parser from "html-react-parser";

const NewsCardNewsPage = ({ rssFeed, timeAgo }: any) => {
  return (
    <Grid item xs={11} px={0}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#020822",
          borderRadius: "6px",
          border: "1px solid #243464",

          minHeight: 170,
          height: "auto",
          maxHeight: 400,
          // maxWidth: 370,
        }}
        px={2}
        py={2}
      >
        <Stack direction="column" spacing={0}>
          <Typography
            variant="h6"
            sx={{ color: "#F9FBF7", fontWeight: "bold" }}
          >
            <a
              href={rssFeed && rssFeed?.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              {rssFeed && rssFeed?.title.substring(0, 45)}...
            </a>
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#FFFFF5", fontWeight: "300", wordWrap: "break-word" }}
          >
            {rssFeed && Parser(rssFeed?.description.substring(0, 170))}...
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#595F64", fontWeight: "550" }}
            >
              {rssFeed && timeAgo.format(new Date(rssFeed?.published))}
            </Typography>

            <Typography
              variant="caption"
              sx={{ color: "#595F64", fontWeight: "550" }}
            >
              {rssFeed && rssFeed?.author}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default NewsCardNewsPage;
