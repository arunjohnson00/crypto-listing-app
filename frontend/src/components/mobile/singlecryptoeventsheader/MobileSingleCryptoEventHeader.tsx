import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const MobileSingleCryptoEventHeader = () => {
  return (
    <Box
      sx={
        {
          //background: "linear-gradient(to bottom, #07113F 0%, #01061A 100%)",
          // borderRadius: 6,
          //border: "1px solid #07113F",
        }
      }
      width="100%"
    >
      <Stack
        direction="column"
        spacing={4}
        alignItems="flex-start"
        //px={3}
        py={2}
      >
        <Stack direction="column" spacing={1.5} alignItems="flex-start">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 45, height: 45 }}
          />
          <Typography
            sx={{ fontSize: "1.1rem", color: "#FFFFFF", fontWeight: 500 }}
          >
            Etherium {"(ETH)"} $67897{" "}
            <span style={{ color: "red" }}>-9.89%</span>
          </Typography>
        </Stack>

        <Stack direction="column" spacing={2} alignItems="flex-start">
          <Stack direction="column" spacing={0} alignItems="flex-start">
            <Typography
              sx={{ fontSize: "1.7rem", color: "#FFFFFF", fontWeight: 600 }}
            >
              Etherium Mainet Merge
            </Typography>
            <Typography
              sx={{ fontSize: "1.9rem", color: "#01d39a", fontWeight: 500 }}
            >
              19 Sept 2022
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: ".85rem",
              color: "#757D9E",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Added 15 January 2022
          </Typography>
          <Stack direction="column" spacing={2} alignItems="flex-start" py={1}>
            <Box
              sx={{
                backgroundColor: "#01061A",
                borderRadius: 5,
                border: "1px solid #16245F",
              }}
            >
              <Stack direction="column" spacing={0.5} p={2}>
                <Typography
                  sx={{
                    fontSize: ".85rem",
                    color: "#585F7E",
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  Starts In
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    color: "#FFFFFF",
                    fontWeight: 500,
                    textAlign: "left",
                  }}
                >
                  <span style={{ color: "   #E7E960", fontWeight: 600 }}>
                    13
                  </span>{" "}
                  Days{" "}
                  <span style={{ color: "   #E7E960", fontWeight: 600 }}>
                    11
                  </span>{" "}
                  Hours{" "}
                  <span style={{ color: "   #E7E960", fontWeight: 600 }}>
                    24
                  </span>{" "}
                  Minutes{" "}
                  <span style={{ color: "   #E7E960", fontWeight: 600 }}>
                    13
                  </span>{" "}
                  Seconds{" "}
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Typography
            sx={{
              fontSize: ".85rem",
              color: "#FFFFFF",
              fontWeight: 400,
              textAlign: "left",
            }}
          >
            Avatars are found throughout material design with uses in everything
            from tables to dialog menus.
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={0.5}
          justifyContent="space-around"
          width="100%"
        >
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            <Link to="#" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontSize: ".85rem",
                  color: "#00ACC3",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                View Source
              </Typography>
            </Link>
            <OpenInNewIcon sx={{ color: "#819EEA", fontSize: 18 }} />
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            <Link to="#" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontSize: ".85rem",
                  color: "#00ACC3",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                View Proof
              </Typography>
            </Link>
            <OpenInNewIcon sx={{ color: "#819EEA", fontSize: 18 }} />
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            <Link to="#" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontSize: ".85rem",
                  color: "#00ACC3",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                View Event
              </Typography>
            </Link>
            <OpenInNewIcon sx={{ color: "#819EEA", fontSize: 18 }} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MobileSingleCryptoEventHeader;
