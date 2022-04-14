import { Grid, Typography } from "@mui/material";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import DataTables from "../../../components/tables/datatables/DataTables";

const Exchanges = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Exchanges
        </Typography>
      </Grid>

      <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTables />
      </Grid>
    </Grid>
  );
};

export default Exchanges;
