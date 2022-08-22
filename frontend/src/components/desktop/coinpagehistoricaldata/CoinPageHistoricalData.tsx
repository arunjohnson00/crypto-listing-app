import { CardMedia, Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import HtmlTable from "../htmltable/HtmlTable";
import { tableHeader } from "./helper";
const CoinPageHistoricalData = () => {
  const coinHistoricalData = useSelector((data: any) => {
    return data?.coinReducer?.coin_historical_data_block?.data;
  });

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
              Historical Data
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={8} mt={{ xs: 2, sm: 2, md: 0 }}>
            <CardMedia
              component="img"
              height="70"
              image="https://iili.io/UtY5Kv.jpg"
              alt="green iguana"
              sx={{ objectFit: "unset" }}
            />
          </Grid>
        </Stack>
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12} sx={{ marginTop: 3 }}>
        {" "}
        <HtmlTable
          tableData={coinHistoricalData && coinHistoricalData}
          tableHeader={tableHeader}
          variant="historical_data"
        />
      </Grid>
    </Grid>
  );
};

export default CoinPageHistoricalData;
