import {
  Grid,
  Stack,
  Box,
  Avatar,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { fontSize } from "@mui/system";

const FeaturedCoinCards = () => {
  return (
    <Grid item xs={2.9} mb={3}>
      <Box
        sx={{
          borderRadius: "6px",
          border: "1px solid #243464",
          background: "linear-gradient(98deg, #01061c 50%, #0B1A51)",
        }}
        px={2}
        py={2}
      >
        <Grid item xs={12} pb={2}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <Stack direction="column" spacing={0}>
                <Typography
                  variant="caption"
                  sx={{ color: "white", fontWeight: "600" }}
                >
                  IRENA Coin
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: "0.59rem",
                  }}
                >
                  IRENA
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#29AA97", fontWeight: "600" }}
                >
                  $0.0000031
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={0} sx={{ alignItems: "center" }}>
              <Typography
                variant="h5"
                sx={{ color: "#FFFFF5", fontWeight: "400" }}
              >
                4.9
              </Typography>
              <Rating
                name="size-small"
                defaultValue={5}
                size="small"
                readOnly
                sx={{ fontSize: ".9rem" }}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} py={0}>
          <Divider sx={{ borderColor: "#184b7d" }} />
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
            py={1}
          >
            <Typography
              variant="body2"
              sx={{ color: "#6f737f", fontSize: "0.775rem" }}
            >
              Presale Starts in :
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", fontSize: ".9rem" }}
            >
              6 Days 7 Hours 19 Minutes
            </Typography>
          </Stack>

          <Divider sx={{ borderColor: "#184b7d" }} />
        </Grid>

        <Grid item xs={12} py={0}>
          <Stack
            direction="row"
            // spacing={0.8}
            sx={{
              alignItems: "center",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
            py={1}
          >
            <Chip
              label="Presale"
              sx={{
                borderRadius: "0px",
                backgroundColor: "#DD0801",
                color: "white",
                height: "25px",
                fontSize: "0.6125rem",
                marginBottom: "7px",
                marginRight: "4px",
              }}
            />

            <Chip
              label="Audited"
              sx={{
                borderRadius: "0px",
                backgroundColor: "#9638FF",
                color: "white",
                height: "25px",
                fontSize: "0.6125rem",
                marginBottom: "7px",
                marginRight: "4px",
              }}
            />
            <Chip
              label="KYC Verified"
              sx={{
                borderRadius: "0px",
                backgroundColor: "#3C38FF",
                color: "white",
                height: "25px",
                fontSize: "0.6125rem",
                marginBottom: "7px",
                marginRight: "4px",
              }}
            />
            <Chip
              label="Airdrop Hosted"
              sx={{
                borderRadius: "0px",
                backgroundColor: "#299E02",
                color: "white",
                height: "25px",
                fontSize: "0.6125rem",
                marginBottom: "7px",
                marginRight: "4px",
              }}
            />

            <Chip
              label="Ownership Renounced"
              sx={{
                borderRadius: "0px",
                backgroundColor: "#DF6803",
                color: "white",
                height: "25px",
                fontSize: "0.6125rem",
                marginBottom: "7px",
                marginRight: "4px",
              }}
            />
          </Stack>
        </Grid>

        <Grid item xs={12} py={0}>
          <Stack
            direction="column"
            spacing={0}
            sx={{
              justifyContent: "flex-start",
            }}
            py={1}
          >
            <Grid item xs={12} py={0}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: " space-between",
                }}
                py={0.3}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#5E6464", fontWeight: "Bold" }}
                >
                  Launch
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#FFFFF5", fontWeight: "Bold" }}
                >
                  In 2 Days
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} py={0}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: " space-between",
                }}
                py={0.3}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#5E6464", fontWeight: "Bold" }}
                >
                  1h
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "red", fontWeight: "Bold" }}
                >
                  18.36 % ⯆
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} py={0}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: " space-between",
                }}
                py={0.3}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#5E6464", fontWeight: "Bold" }}
                >
                  24h
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#00C080", fontWeight: "Bold" }}
                >
                  18.36 % ⯅
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} py={0}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: " space-between",
                }}
                py={0.3}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#5E6464", fontWeight: "Bold" }}
                >
                  Network
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#FFFFF5", fontWeight: "Bold" }}
                >
                  BSC
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} py={0}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: " space-between",
                }}
                py={0.3}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#5E6464", fontWeight: "Bold" }}
                >
                  Votes
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#FFFFF5", fontWeight: "Bold" }}
                >
                  43456
                </Typography>
              </Stack>
            </Grid>
          </Stack>
        </Grid>
      </Box>
    </Grid>
  );
};

export default FeaturedCoinCards;
