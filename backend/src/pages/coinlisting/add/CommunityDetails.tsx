import { Grid, Typography, Stack } from "@mui/material";
import InputText from "../../../components/form/input/text/InputText";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const CommunityDetails = ({
  communityCount,
  communityremoveHandle,
  index,
}: any) => {
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Stack direction="row" spacing={3} pt={3}>
        <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
            mb={1}
          >
            Website URL {index + 2}
          </Typography>
          <InputText
            placeholder="Enter official website url"
            name={`community_website_url[${index + 2}]`}
            id={`community_website_url_${index + 2}`}
          />
        </Grid>
        {communityCount.length && (
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
              onClick={() => communityremoveHandle(index)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        )}
      </Stack>
    </Grid>
  );
};

export default CommunityDetails;
