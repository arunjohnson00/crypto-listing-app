import { Avatar, Box, Stack, Typography } from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const NFTMarketPlaceSimilarAppCard = () => {
  return (
    <Box sx={{ backgroundColor: "#11122B", borderRadius: 1 }} p={2}>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <ArrowCircleRightRoundedIcon
            sx={{ fontSize: 32, color: "#1976d2" }}
          />

          <Stack direction="column" spacing={-0.5}>
            <Typography
              variant="h6"
              sx={{ color: "#FFFFFF", textTransform: "uppercase" }}
            >
              Similar app may you like
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: ".8rem" }}>
              Explore more popular decentralized application
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: 1,
              width: 100,
              height: "auto",
            }}
            p={2}
          >
            <Stack direction="column" spacing={1}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 40, height: 40, borderRadius: 1 }}
              />
              <Typography
                sx={{ color: "#000000", fontSize: ".8rem", fontWeight: 600 }}
              >
                BSG
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 14, height: 14 }}
                />
                <Typography
                  sx={{ color: "#000000", fontSize: ".7rem", fontWeight: 500 }}
                >
                  ETH
                </Typography>
              </Stack>{" "}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NFTMarketPlaceSimilarAppCard;
