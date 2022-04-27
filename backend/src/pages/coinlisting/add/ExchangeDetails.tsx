import { Grid, Typography, Stack } from "@mui/material";
import InputText from "../../../components/form/input/text/InputText";
import InputSelectCoin from "../../../components/form/selectcoin/InputSelectCoin";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const ExchangeDetails = ({
  exchangeCount,
  exchangeremoveHandle,
  index,
}: any) => {
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Stack direction="row" spacing={3} pt={3}>
        <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
          <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
            Exchange {index + 2}
          </Typography>
          <InputSelectCoin />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
          <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
            Exchange URL {index + 2}
          </Typography>
          <InputText placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf" />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
          <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
            Block explorer URL {index + 2}
          </Typography>
          <InputText placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf" />
        </Grid>
        {exchangeCount.length && (
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={12}
            sx={{ paddingTop: "23px" }}
          >
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => exchangeremoveHandle(index)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        )}
      </Stack>
    </Grid>
  );
};

export default ExchangeDetails;
