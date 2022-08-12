import { Box, Grid, Stack, Avatar, Typography } from "@mui/material";
import React from "react";

const MobileMenuCards = ({
  width,
  marginBottom,
  title,
  icon,
  sub_title,
  url,
}: any) => {
  return (
    <Grid item xs={width && width} mx={2}>
      <Box
        sx={{ backgroundColor: "#12122C", borderRadius: 2 }}
        py={2}
        px={2}
        mb={marginBottom && marginBottom}
      >
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Stack
            direction="column"
            spacing={0}
            sx={{ alignItems: "flex-start" }}
          >
            <a
              href={url && url}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Typography
                variant="h6"
                sx={{ color: "#BDBAC5", fontWeight: "", textAlign: "center" }}
              >
                {title && title?.length >= 21
                  ? title && title?.slice(0, 19) + "..."
                  : title && title}
              </Typography>
            </a>
            <Typography
              variant="caption"
              sx={{ color: "#787786", fontWeight: "", textAlign: "center" }}
            >
              {sub_title && sub_title}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default MobileMenuCards;
