import { Grid, Typography, Stack } from "@mui/material";
import InputText from "../../../../../components/useradmin/form/input/text/InputText";
import InputSelectCoin from "../../../../../components/useradmin/form/selectcoin/InputSelectCoin";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const ExchangeDetails = ({
  exchangeCount,
  exchangeremoveHandle,
  index,
  data,
}: any) => {
  console.log(data);
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={3}
        pt={1}
      >
        <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "left",
              fontSize: ".9rem",
              fontWeight: 400,
              color: "#00ff95",
            }}
            mb={1}
          >
            Exchange {index + 2}
          </Typography>
          <InputSelectCoin
            name={`exchange_id[${index + 2}]`}
            id={`exchange_id_${index + 2}`}
            data={data}
            height={40}
            title="Select Exchange"
            variant="exchange"
          />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "left",
              fontSize: ".9rem",
              fontWeight: 400,
              color: "#00ff95",
            }}
            mb={1}
          >
            Exchange URL {index + 2}
          </Typography>
          <InputText
            placeholder="Eg: https://www.binance.com/en/trade/BTC_USDT"
            name={`url[${index + 2}]`}
            id={`url_${index + 2}`}
          />
        </Grid>
        {/* <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
          <Typography variant="subtitle1" sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 400 }} mb={1}>
            Block explorer URL {index + 2}
          </Typography>
          <InputText
            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
            name={`exchange_explorer_link[${index + 2}]`}
            id={`exchange_explorer_link_${index + 2}`}
          />
        </Grid> */}
        {exchangeCount.length && (
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={12}
            pt={{ xs: 0, sm: 0, md: 3, lg: 3, xl: 3 }}
          >
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => exchangeremoveHandle(index)}
            >
              <DeleteIcon fontSize="inherit" sx={{ color: "#fff9" }} />
            </IconButton>
          </Grid>
        )}
      </Stack>
    </Grid>
  );
};

export default ExchangeDetails;
