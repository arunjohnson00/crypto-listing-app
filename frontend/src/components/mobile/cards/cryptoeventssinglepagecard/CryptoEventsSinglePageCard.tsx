import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const CryptoEventsSinglePageCard = ({ data }: any) => {
  return (
    <Link
      to={{
        pathname: `/crypto-events/${data?.slug}`,
      }}
      state={{ coin_id: data?.id }}
      style={{ textDecoration: "none", color: "#454182" }}
    >
      <Box
        sx={{
          backgroundColor: "#01061A",
          borderRadius: 5,
          border: "1px solid #16245F",
          width: "100%",
        }}
      >
        <Stack direction="column" spacing={0.5} p={2}>
          <Stack direction="column" spacing={0} alignItems="flex-start">
            <Typography
              sx={{ fontSize: "1.2rem", color: "#FFFFFF", fontWeight: 600 }}
            >
              {data && data?.title}
            </Typography>

            <Typography
              sx={{ fontSize: "1.1rem", color: "#01d39a", fontWeight: 500 }}
            >
              {data &&
                moment(new Date(data && data?.event_date)).format(
                  "DD MMM YYYY"
                )}
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: ".85rem",
              color: "#757D9E",
              fontWeight: 600,
              textAlign: "left",
            }}
          >
            Added:{" "}
            {data &&
              moment(new Date(data && data?.created_at)).format("DD MMM YYYY")}
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
};

export default CryptoEventsSinglePageCard;
