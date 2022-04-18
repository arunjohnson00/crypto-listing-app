import { Box, Stack, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const HorizonatalList = () => {
  return (
    <Box>
      <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
        <Breadcrumbs separator="|" aria-label="breadcrumb">
          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "rgb(65, 81, 167)" }}
          >
            <Typography variant="subtitle2"> Coin Listed : 6879</Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#FF4560" }}
          >
            <Typography variant="subtitle2"> Users : 6879</Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#00E396" }}
          >
            <Typography variant="subtitle2"> Networks : 6879</Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#00E396" }}
          >
            <Typography variant="subtitle2"> Exchanges : 6879</Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#775DD0" }}
          >
            <Typography variant="subtitle2"> NTF's : 6879</Typography>
          </Link>
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};

export default HorizonatalList;
