import { Avatar, Box, Stack, Typography, Divider, Link } from "@mui/material";
import React from "react";
import moment from "moment";
import { defaultColor } from "../../../../common/common";
const serverAPIUrl = process.env.REACT_APP_API_URL;

const DiscoverLatestCommonCard = ({
  item,
  path,
  varient,
  image,
  title,
  subtitle,
  link,
  date,
  month,
  index,
}: any) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#081243",
        borderRadius: 5,
        padding: 3,
        margin: 1,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "column", md: "column" }}
        spacing={2}
      >
        {image === null || image === undefined ? (
          <Avatar
            alt={title}
            src={``}
            sx={{ width: 35, height: 35, backgrounColor: defaultColor[index] }}
          >
            {title && title[0]}
          </Avatar>
        ) : (
          <Avatar
            alt={title}
            src={`${serverAPIUrl}public/uploads/${path}/${image}`}
            sx={{ width: 35, height: 35 }}
          />
        )}

        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          spacing={0.8}
        >
          <Link href={link} target="_blank" sx={{ textDecoration: "none" }}>
            <Typography
              variant="body2"
              sx={{ color: "#FFFFF5", fontWeight: 400 }}
            >
              {title}
            </Typography>
          </Link>
          <Typography
            variant="caption"
            sx={{ color: "#FFFFF5", fontWeight: 600, fontSize: 11 }}
          >
            {subtitle}
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "row", sm: "row", md: "row" }}
          alignItems="center"
          spacing={2}
          pt={4}
        >
          <Typography variant="h6" sx={{ color: "#FFFFF5", fontWeight: 400 }}>
            {date}
          </Typography>
          <Divider
            variant="middle"
            orientation="vertical"
            flexItem
            sx={{ borderRightColor: "#FFFFF5", borderRightWidth: 2 }}
          />
          <Typography variant="h6" sx={{ color: "#FFFFF5", fontWeight: 500 }}>
            {month}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DiscoverLatestCommonCard;
