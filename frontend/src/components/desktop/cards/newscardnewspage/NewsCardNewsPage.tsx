import { Grid, Box, Typography, Stack } from "@mui/material";
import React from "react";
import Parser from "html-react-parser";

const NewsCardNewsPage = ({ rssFeed, timeAgo, index }: any) => {
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
          position: "relative",
          // maxWidth: 370,
        }}
        px={2}
        py={2}
      >
        {index && (
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "#020822",
              border: "2px solid #2A3674",
              padding: 2,
              borderRadius: 10,
              width: 10,
              height: 10,
              left: -20,
              top: -30,
              display: "flex",
              color: "#FFFFFF",
              justifyContent: "center",
              alignItems: "center",
              fontSize: ".9rem",
              fontWeight: 600,
              zIndex: 2,
            }}
          >
            {index}
          </Box>
        )}
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
              {Parser(rssFeed && rssFeed?.title)}
            </a>
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#FFFFF5", fontWeight: "300", wordWrap: "break-word" }}
          >
            {rssFeed && Parser(rssFeed?.excerpt.substring(0, 170) + "......")}
          </Typography>
          <a
            href={rssFeed && rssFeed?.link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#02D47C",
              textDecoration: "none",
              fontSize: ".7rem",
            }}
          >
            Read More
          </a>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
            pt={1}
          >
            <Typography
              variant="caption"
              sx={{ color: "#595F64", fontWeight: "550" }}
            >
              {rssFeed && timeAgo.format(new Date(rssFeed?.date))}
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
