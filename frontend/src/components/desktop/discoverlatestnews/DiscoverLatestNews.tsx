import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const DiscoverLatestNews = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        borderRadius: 4,
        backgroundColor: "#020727",
      }}
      mb={7}
    >
      <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={5}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          spacing={2}
        >
          <Stack
            direction={{ xs: "row", sm: "row", md: "row" }}
            alignItems="center"
            spacing={1}
          >
            <CampaignIcon sx={{ color: "#2DCEAF", fontSize: 20 }} />
            <Typography variant="h6" sx={{ color: "#2DCEAF", fontWeight: 500 }}>
              News
            </Typography>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            spacing={0.5}
          >
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              alignItems="center"
              spacing={10}
              //justifyContent="space-between"
              pl={3.8}
              pt={0}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                alignItems="center"
                spacing={1}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#FFFFF5", fontWeight: 300, fontSize: 12 }}
                >
                  Bitcoin, Cardano on the Rise: Check Out Today's Profitable
                  Cryptocurrency Prices
                </Typography>
                <OpenInNewIcon sx={{ color: "#5B6171", fontSize: 14 }} />
              </Stack>

              <Typography
                variant="caption"
                sx={{ color: "#223077", fontWeight: 600, fontSize: 10 }}
              >
                4 Min ago
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              alignItems="center"
              spacing={10}
              //justifyContent="space-between"
              pl={3.8}
              pt={0}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                alignItems="center"
                spacing={1}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#FFFFF5", fontWeight: 300, fontSize: 12 }}
                >
                  Bitcoin, Cardano on the Rise: Check Out Today's Profitable
                  Cryptocurrency Prices
                </Typography>
                <OpenInNewIcon sx={{ color: "#5B6171", fontSize: 14 }} />
              </Stack>

              <Typography
                variant="caption"
                sx={{ color: "#223077", fontWeight: 600, fontSize: 10 }}
              >
                4 Min ago
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              alignItems="center"
              spacing={10}
              // justifyContent="space-between"
              pl={3.8}
              pt={0}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                alignItems="center"
                spacing={1}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#FFFFF5", fontWeight: 300, fontSize: 12 }}
                >
                  Bitcoin, Cardano on the Rise: Check Out Today's Profitable
                  Cryptocurrency Prices
                </Typography>
                <OpenInNewIcon sx={{ color: "#5B6171", fontSize: 14 }} />
              </Stack>

              <Typography
                variant="caption"
                sx={{ color: "#223077", fontWeight: 600, fontSize: 10 }}
              >
                4 Min ago
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              alignItems="center"
              spacing={10}
              //justifyContent="space-between"
              pl={3.8}
              pt={0}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                alignItems="center"
                spacing={1}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#FFFFF5", fontWeight: 300, fontSize: 12 }}
                >
                  Bitcoin, Cardano on the Rise: Check Out Today's Profitable
                  Cryptocurrency Prices
                </Typography>
                <OpenInNewIcon sx={{ color: "#5B6171", fontSize: 14 }} />
              </Stack>

              <Typography
                variant="caption"
                sx={{ color: "#223077", fontWeight: 600, fontSize: 10 }}
              >
                4 Min ago
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              alignItems="center"
              spacing={10}
              //justifyContent="space-between"
              pl={3.8}
              pt={0}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                alignItems="center"
                spacing={1}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#FFFFF5", fontWeight: 300, fontSize: 12 }}
                >
                  Bitcoin, Cardano on the Rise: Check Out Today's Profitable
                  Cryptocurrency Prices
                </Typography>
                <OpenInNewIcon sx={{ color: "#5B6171", fontSize: 14 }} />
              </Stack>

              <Typography
                variant="caption"
                sx={{ color: "#223077", fontWeight: 600, fontSize: 10 }}
              >
                4 Min ago
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DiscoverLatestNews;
