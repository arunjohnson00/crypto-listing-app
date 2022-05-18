import {
  Grid,
  Stack,
  Typography,
  Rating,
  Divider,
  CardMedia,
  Box,
  Avatar,
  Checkbox,
  LinearProgress,
  Link,
  Button,
} from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";

const CoinPageMarket = () => {
  return (
    <Grid container xs={12}>
      <Grid xs={12}>
        <Stack direction={{ xs: "column", sm: "column", md: "row" }} mt={2}>
          <Grid xs={12} sm={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#FFFFF5",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: "20%",
                  borderBottom: "2px solid #23E2A0",
                },
              }}
            >
              Safemoon Markets
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={8} mt={{ xs: 2, sm: 2, md: 0 }}>
            <CardMedia
              component="img"
              height="70"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </Grid>
        </Stack>
      </Grid>
      <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
        <Grid xs={12} mb={5}>
          <Stack
            direction="column"
            mt={{ xs: 0, sm: 0, md: 7 }}
            mx={{ xs: 0, sm: 0, md: 7 }}
          >
            <Stack
              direction="row"
              spacing={3}
              my={2}
              sx={{ justifyContent: "space-between" }}
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={1}
                sx={{ alignItems: "center" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ height: 32, width: 32 }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  Pancakeswap
                </Typography>
              </Stack>
              <Button
                variant="contained"
                startIcon={<MoodIcon />}
                sx={{ backgroundColor: "#6252E7", textTransform: "capitalize" }}
              >
                By on pancakeswap
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              my={2}
              sx={{ justifyContent: "space-between" }}
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={1}
                sx={{ alignItems: "center" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ height: 32, width: 32 }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  Pancakeswap
                </Typography>
              </Stack>
              <Button
                variant="contained"
                startIcon={<MoodIcon />}
                sx={{ backgroundColor: "#6252E7", textTransform: "capitalize" }}
              >
                By on pancakeswap
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              my={2}
              sx={{ justifyContent: "space-between" }}
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={1}
                sx={{ alignItems: "center" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ height: 32, width: 32 }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  Pancakeswap
                </Typography>
              </Stack>
              <Button
                variant="contained"
                startIcon={<MoodIcon />}
                sx={{ backgroundColor: "#6252E7", textTransform: "capitalize" }}
              >
                By on pancakeswap
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              my={2}
              sx={{ justifyContent: "space-between" }}
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={1}
                sx={{ alignItems: "center" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ height: 32, width: 32 }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  Pancakeswap
                </Typography>
              </Stack>
              <Button
                variant="contained"
                startIcon={<MoodIcon />}
                sx={{ backgroundColor: "#6252E7", textTransform: "capitalize" }}
              >
                By on pancakeswap
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              my={2}
              sx={{ justifyContent: "space-between" }}
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={1}
                sx={{ alignItems: "center" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ height: 32, width: 32 }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  Pancakeswap
                </Typography>
              </Stack>
              <Button
                variant="contained"
                startIcon={<MoodIcon />}
                sx={{ backgroundColor: "#6252E7", textTransform: "capitalize" }}
              >
                By on pancakeswap
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Grid
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        px={{ xs: 0, sm: 0, md: 4 }}
        mt={{ xs: 2, sm: 2, md: 0 }}
      >
        <Grid xs={12} pt={6}>
          <Stack direction="column" spacing={5} sx={{ alignItems: "center" }}>
            <Stack
              direction="column"
              spacing={2}
              sx={{ alignItems: "center" }}
              mt={2}
            >
              <Typography
                variant="h5"
                sx={{ color: "#FFFFF5", fontWeight: 600 }}
              >
                Safemoon
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#1AA87D", fontWeight: 500 }}
              >
                Total Liqudity in Pools
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#FFFFF5", fontWeight: 500 }}
              >
                $20,77744
              </Typography>
            </Stack>

            <Divider
              variant="fullWidth"
              flexItem
              orientation="horizontal"
              sx={{ borderColor: "#091338", borderBottomWidth: 2 }}
            />

            <Stack
              direction="column"
              spacing={2}
              sx={{ alignItems: "center" }}
              mt={2}
            >
              <Typography
                variant="h5"
                sx={{ color: "#2F9ECD", fontWeight: 500 }}
              >
                Total Holds
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#FFFFF5", fontWeight: 500 }}
              >
                20,77744
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoinPageMarket;
