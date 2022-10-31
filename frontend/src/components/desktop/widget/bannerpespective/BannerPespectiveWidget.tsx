import { Grid, Box, Stack } from "@mui/material";
import { relative } from "path";

import Tilt from "react-parallax-tilt";
import OnlineAnalysisCard from "../../cards/onlineanalysis/OnlineAnalysisCard";
import MarketStatusCard from "../../cards/marketstatus/MarketStatusCard";
import ScanCreditCard from "../../cards/scancreditcard/ScanCreditCard ";

const BannerPespectiveWidget = () => {
  return (
    <Grid item xs={12}>
      {/* <Tilt>
        <Box
          sx={{
            position: "absolute",
            zIndex: 999,
            top: "79px",
            left: "54px",
          }}
        >
          <ScanCreditCard />
        </Box>
      </Tilt> */}

      <Tilt>
        <Box
          sx={{
            position: "absolute",
            zIndex: 999,
            top: "36px",
            left: "391px",
          }}
        >
          <OnlineAnalysisCard />
        </Box>
      </Tilt>

      <Tilt>
        <Box
          sx={{
            position: "absolute",
            zIndex: 999,
            top: "167px",
            left: "116px",
          }}
        >
          <MarketStatusCard />
        </Box>
      </Tilt>
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: 350,
            height: 350,
            border: "10px solid #2F4A51",
            borderRadius: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Box
            sx={{
              width: 220,
              height: 220,
              border: "5px solid #2F4A51",
              borderRadius: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                border: "5px solid #2F4A51",
                borderRadius: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>
          </Box>{" "}
        </Box>
      </Stack>
    </Grid>
  );
};

export default BannerPespectiveWidget;
