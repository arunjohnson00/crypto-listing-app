import { Avatar, Box, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const RecentSearchCard = ({ item, index, saveSearchHandler }: any) => {
  return (
    <Link
      target="_blank"
      to={{
        pathname: `/coin/${item?.coin_slug}`,
      }}
      onClick={() => saveSearchHandler("item?.slug")}
      // target="_blank"
      rel="noopener noreferrer"
      state={{ coin_id: "item?.id" }}
      style={{ textDecoration: "none", color: "#FFFFFF" }}
    >
      <Box
        sx={{
          backgroundColor: "#151720",
          padding: 1.5,
          borderRadius: 3,
          maxWidth: 70,
          minWidth: 70,
        }}
        key={index}
        my={1}
      >
        <Stack
          direction="column"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            alt="Trending"
            src={`${serverAPIUrl}public/uploads/coin_logo/${item?.coin_logo}`}
            sx={{ width: 33, height: 33 }}
          />
          <Stack
            direction="column"
            spacing={0}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              sx={{
                fontSize: ".7rem",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {item?.coin_name.length > 10
                ? item?.coin_name.slice(0, 7) + "..."
                : item?.coin_name}
            </Typography>

            <Typography
              sx={{
                fontSize: ".6rem",
                color: "#767676",
                fontWeight: 500,
              }}
            >
              {item?.coin_symbol}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default RecentSearchCard;
