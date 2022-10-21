import { Divider, Stack, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MobileOfferZone = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="column" spacing={2} alignItems="center" py={3}>
      <Helmet>
        <title> Offer Zone | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Offer Zone | CoinXhigh.com" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta
          property="og:image"
          content="https://coinxhigh.com/coinxhighlogo.webp"
        />
        <meta property="og:url" content="https://coinxhigh.com/" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <Box
        sx={{
          // border: "1px solid #151717",
          backgroundColor: "#00020B",

          borderRadius: 4,
          height: "auto",
          width: "100%",
        }}
      >
        <Stack direction="row" alignItems="center" width="100%" px={2} py={1}>
          <Stack direction="row" alignItems="flex-start" sx={{ flexGrow: 0 }}>
            <IconButton aria-label="delete" onClick={() => navigate(-1)}>
              <ArrowBackIosRoundedIcon
                sx={{ color: "#b4bdf6", fontSize: "1.2rem" }}
              />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="center"
            sx={{ flexGrow: 1 }}
          >
            <Typography sx={{ fontSize: "1rem", color: "#FFFFFF", mr: "67px" }}>
              Offer Zone
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* <Divider
        light
        flexItem
        variant="middle"
        orientation="horizontal"
        sx={{ borderColor: "#1F556D" }}
      /> */}
      <Stack direction="column" alignItems="center" width="100%">
        <Stack direction="row" alignItems="center" width="100%">
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 1,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>

          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 1,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" width="100%">
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 2,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" width="100%">
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 1,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 1,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" width="100%">
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 2,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" width="100%">
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 1,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 1,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" width="100%">
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 2,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" width="100%">
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 1,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 1,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" width="100%">
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 2,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" width="100%">
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 1,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              // border: "1px solid #151717",
              backgroundColor: "#00020B",

              borderRadius: 4,
              height: "auto",
              flexGrow: 1,
            }}
            m={1}
          >
            <Stack
              direction="column"
              spacing={4}
              alignItems="center"
              justifyContent="center"
              p={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Ads
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MobileOfferZone;
