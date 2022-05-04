import { Grid, Typography, Stack } from "@mui/material";
import InputText from "../../../components/form/input/text/InputText";
import InputSelectCoin from "../../../components/form/selectcoin/InputSelectCoin";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const EventMarketPlace = ({
  eventMarketCount,
  index,
  eventMarketremoveHandle,
  data,
}: any) => {
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Stack direction="row" spacing={3} mb={2}>
        <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
          <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
            Marketplace {index + 2}
          </Typography>
          <InputSelectCoin
            name={`market_place[${index + 2}]`}
            id={`market_place_${index + 2}`}
            data={data}
          />
        </Grid>
        <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
          <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
            Marketplace URL {index + 2}
          </Typography>
          <InputText
            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
            name={`market_place_link[${index + 2}]`}
            id={`market_place_link_${index + 2}`}
            // width="auto"
          />
        </Grid>
        {eventMarketCount.length && (
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
              onClick={() => eventMarketremoveHandle(index)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        )}
      </Stack>
    </Grid>
  );
};

export default EventMarketPlace;
