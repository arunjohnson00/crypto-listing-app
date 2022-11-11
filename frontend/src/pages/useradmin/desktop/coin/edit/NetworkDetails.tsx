import { Grid, Typography, Stack } from "@mui/material";
import InputText from "../../../../../components/useradmin/form/input/text/InputText";
import InputSelectCoin from "../../../../../components/useradmin/form/selectcoin/InputSelectCoin";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const NetworkDetails = ({
  networkCount,
  networkremoveHandle,
  index,
  data,
}: any) => {
  ///console.log(arrayCount);
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
            Network {index + 2}
          </Typography>
          <InputSelectCoin
            name={`network[${index + 2}]`}
            id={`network_${index + 2}`}
            data={data}
            height={40}
            title="Select Network"
            variant="network"
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
            Contract address {index + 2}
          </Typography>
          <InputText
            placeholder="Eg: 0x2170ed0880ac9a755fd29b2688956bd959f933f8"
            name={`network_address[${index + 2}]`}
            id={`network_address_${index + 2}`}
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
            Block explorer URL {index + 2}{" "}
            <Typography variant="caption" sx={{ textAlign: "left" }} mb={1}>
              <span style={{ color: "#FFD700", fontWeight: 400 }}>
                {" "}
                (Optional)
              </span>
            </Typography>
          </Typography>
          <InputText
            placeholder="Eg: https://bscscan.com/token/0x2170ed0880ac9a755fd29b2688956bd959f933f8 "
            name={`network_explorer_link[${index + 2}]`}
            id={`network_explorer_link_${index + 2}`}
          />
        </Grid>
        {networkCount.length && (
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
              onClick={() => networkremoveHandle(index)}
            >
              <DeleteIcon fontSize="inherit" sx={{ color: "#fff9" }} />
            </IconButton>
          </Grid>
        )}
      </Stack>
    </Grid>
  );
};

export default NetworkDetails;
