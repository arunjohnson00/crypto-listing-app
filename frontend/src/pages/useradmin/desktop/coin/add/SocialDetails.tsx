import { Grid, Typography, Stack } from "@mui/material";
import InputText from "../../../../../components/useradmin/form/input/text/InputText";
import InputSelectCoin from "../../../../../components/useradmin/form/selectcoin/InputSelectCoin";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const SocialDetails = ({
  socialCount,
  index,
  socialremoveHandle,
  data,
}: any) => {
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={3}
        pt={3}
      >
        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
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
            Select Platform {index + 2}
          </Typography>
          <InputSelectCoin
            name={`social_platform[${index + 2}]`}
            id={`social_platform_${index + 2}`}
            data={data}
            height={40}
            width={300}
          />
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
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
            Social URL {index + 2}
          </Typography>
          <InputText
            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
            name={`social_url[${index + 2}]`}
            id={`social_url_${index + 2}`}
          />
        </Grid>
        {socialCount.length && (
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={12}
            pt={{ xs: 0, sm: 0, md: 3, lg: 3, xl: 3 }}
          >
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => socialremoveHandle(index)}
            >
              <DeleteIcon fontSize="inherit" sx={{ color: "#fff9" }} />
            </IconButton>
          </Grid>
        )}
      </Stack>
    </Grid>
  );
};

export default SocialDetails;
