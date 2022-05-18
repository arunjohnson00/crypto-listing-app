import { Grid, Typography, Stack } from "@mui/material";
import InputText from "../../../components/form/input/text/InputText";
import InputSelectCoin from "../../../components/form/selectcoin/InputSelectCoin";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const SocialNFTDetails = ({
  socialCount,
  index,
  socialremoveHandle,
  data,
}: any) => {
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Stack direction="row" spacing={3} pt={3}>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
          <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
            Select Platform {index + 2}
          </Typography>
          <InputSelectCoin
            name={`social_platform_id[${index + 2}]`}
            id={`social_platform_id_${index + 2}`}
            data={data}
          />
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
          <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
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
            sx={{ paddingTop: "23px" }}
          >
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => socialremoveHandle(index)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        )}
      </Stack>
    </Grid>
  );
};

export default SocialNFTDetails;
