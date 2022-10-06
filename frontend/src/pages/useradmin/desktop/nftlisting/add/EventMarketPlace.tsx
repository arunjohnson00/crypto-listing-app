import { Grid, Typography, Stack } from "@mui/material";
import InputText from "../../../../../components/useradmin/form/input/text/InputText";
import InputSelectCoin from "../../../../../components/useradmin/form/selectcoin/InputSelectCoin";
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
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={3}
        mb={2}
      >
        <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "left",
              fontSize: ".9rem",
              fontWeight: 600,
              color: "#13C086",
            }}
            mb={1}
          >
            Marketplace {index + 2}
          </Typography>
          <InputSelectCoin
            name={`marketplace_id[${index + 2}]`}
            id={`marketplace_id_${index + 2}`}
            data={data}
            height={40}
            width={300}
          />
        </Grid>
        <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "left",
              fontSize: ".9rem",
              fontWeight: 600,
              color: "#13C086",
            }}
            mb={1}
          >
            Marketplace URL {index + 2}
          </Typography>
          <InputText
            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
            name={`marketplace_url[${index + 2}]`}
            id={`marketplace_url_${index + 2}`}
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
            pt={{ xs: 0, sm: 0, md: 3, lg: 3, xl: 3 }}
          >
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => eventMarketremoveHandle(index)}
            >
              <DeleteIcon fontSize="inherit" sx={{ color: "#fff9" }} />
            </IconButton>
          </Grid>
        )}
      </Stack>
    </Grid>
  );
};

export default EventMarketPlace;