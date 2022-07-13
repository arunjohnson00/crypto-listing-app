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
import MobileEventViewCard from "../cards/eventviewcard/MobileEventViewCard";

const MobileCoinPageEvents = () => {
  return (
    <Grid container xs={12}>
      <Grid xs={12}>
        <Stack direction={{ xs: "column", sm: "column", md: "row" }} mt={0}>
          {/* <Grid xs={12} sm={12} md={4}>
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
          </Grid> */}
          {/* <Grid xs={12} sm={12} md={8} mt={{ xs: 2, sm: 2, md: 0 }}>
            <CardMedia
              component="img"
              height="70"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </Grid> */}
        </Stack>
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container spacing={1}>
          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <MobileEventViewCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileCoinPageEvents;
