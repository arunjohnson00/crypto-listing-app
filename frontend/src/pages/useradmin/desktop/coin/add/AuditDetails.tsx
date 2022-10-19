import { Grid, Typography, Stack } from "@mui/material";
import InputText from "../../../../../components/useradmin/form/input/text/InputText";
import InputSelectCoin from "../../../../../components/useradmin/form/selectcoin/InputSelectCoin";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const AuditDetails = ({ auditCount, index, auditremoveHandle, data }: any) => {
  return (
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={3}
        pt={3}
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
            Audited By {index + 2}
          </Typography>
          <InputSelectCoin
            name={`audited_by[${index + 2}]`}
            id={`audited_by_${index + 2}`}
            data={data}
            height={40}
            width={300}
            title="Select Audit Provider"
            variant="audit"
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
            Audit URL {index + 2}
          </Typography>
          <InputText
            placeholder="Enter Audit URL"
            name={`audit_link[${index + 2}]`}
            id={`audit_link_${index + 2}`}
          />
        </Grid>
        {auditCount.length && (
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
              onClick={() => auditremoveHandle(index)}
            >
              <DeleteIcon fontSize="inherit" sx={{ color: "#fff9" }} />
            </IconButton>
          </Grid>
        )}
      </Stack>
    </Grid>
  );
};

export default AuditDetails;
