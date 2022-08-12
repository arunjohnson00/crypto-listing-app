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

const CoinPageFAQ = () => {
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
              Safemoon FAQ's
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={8} mt={{ xs: 2, sm: 2, md: 0 }}>
            <CardMedia
              component="img"
              height="70"
              image="https://iili.io/UtY5Kv.jpg"
              alt="green iguana"
            />
          </Grid>
        </Stack>
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid xs={12} mb={5}>
          <Stack
            direction="column"
            mt={{ xs: 0, sm: 0, md: 4 }}
            mx={{ xs: 0, sm: 0, md: 0 }}
          >
            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h5"
                sx={{ color: "#02AD78", fontWeight: 600 }}
              >
                Safemoon Price Live data
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 500 }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </Typography>
            </Stack>
            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h5"
                sx={{ color: "#02AD78", fontWeight: 600 }}
              >
                Safemoon Price Live data
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 500 }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </Typography>
            </Stack>
            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h5"
                sx={{ color: "#02AD78", fontWeight: 600 }}
              >
                Safemoon Price Live data
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 500 }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </Typography>
            </Stack>
            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h5"
                sx={{ color: "#02AD78", fontWeight: 600 }}
              >
                Safemoon Price Live data
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 500 }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </Typography>
            </Stack>
            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h5"
                sx={{ color: "#02AD78", fontWeight: 600 }}
              >
                Safemoon Price Live data
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: 500 }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoinPageFAQ;
