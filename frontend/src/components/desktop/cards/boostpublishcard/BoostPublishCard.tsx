import { Avatar, Badge, Box, Button, Stack, Typography } from "@mui/material";

import "./style.css";
import dot from "../../../../assets/boost/dot.png";
import discount from "../../../../assets/boost/discount.png";
const BoostPublishCard = ({ title, data, button, offer, normal }: any) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      mx={1}
      mt={2}
      mb={5}
    >
      <Box
        px={1.3}
        py={2}
        sx={{
          background:
            normal === true
              ? "#050E35"
              : "linear-gradient(180deg, #01061A, #0C0A49)",
          borderRadius: 4,
          border: "2px solid #0C0A49",
          position: "relative",

          minWidth: 200,
        }}
      >
        {offer === true && (
          <Badge
            overlap="circular"
            sx={{ position: "relative", top: -40, left: 130 }}
            badgeContent={
              <Stack
                direction="column"
                spacing={-0.7}
                sx={{ position: "absolute", top: 15, left: -35 }}
                alignItems="center"
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  -49%
                </Typography>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    fontSize: ".7rem",
                  }}
                >
                  OFF
                </Typography>
              </Stack>
            }
          >
            <Avatar
              alt="Discount"
              src={discount}
              sx={{ width: 65, height: 65, borderRadius: 0 }}
            />
          </Badge>
        )}
        <Stack direction="column" spacing={3} mt={offer === true ? 0 : 8}>
          {title && title}

          <Stack direction="column" spacing={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar alt="Listing" src={dot} sx={{ width: 13, height: 13 }} />
              <Typography sx={{ color: "#FFFFF5", fontSize: ".7rem" }}>
                Published with in 12 Hour
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar alt="Listing" src={dot} sx={{ width: 13, height: 13 }} />
              <Typography sx={{ color: "#FFFFF5", fontSize: ".7rem" }}>
                Published with in 12 Hour
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar alt="Listing" src={dot} sx={{ width: 13, height: 13 }} />
              <Typography sx={{ color: "#FFFFF5", fontSize: ".7rem" }}>
                Published with in 12 Hour
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="column" spacing={1} pt={10}>
            {normal === true ? (
              <Stack direction="row" spacing={1}>
                {" "}
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: "1.6rem", fontWeight: 700 }}
                >
                  Free
                </Typography>
              </Stack>
            ) : (
              <Stack direction="row" spacing={1}>
                <Stack direction="row" spacing={1} alignItems="baseline">
                  <Typography
                    className="price"
                    sx={{
                      color: "#BEB5F9",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                    }}
                  >
                    0.4
                  </Typography>
                  <Typography
                    sx={{ color: "#BEB5F9", fontSize: "1rem", fontWeight: 500 }}
                  >
                    USD
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="baseline">
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                    }}
                  >
                    0.4
                  </Typography>
                  <Typography
                    sx={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 500 }}
                  >
                    USD
                  </Typography>
                </Stack>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Box>

      {button === true && (
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            fontSize: ".8rem",
            backgroundColor: normal === true ? "#050E35" : "#1C048C",
            borderRadius: 5,
            minWidth: 130,
            maxWidth: 300,
            paddingX: 2,
          }}
        >
          Continue
        </Button>
      )}
    </Stack>
  );
};

export default BoostPublishCard;
