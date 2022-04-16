import { useState } from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import ExchangeUploader from "../../../components/form/input/file/exchangeicon/ExchangeUploader";
import InputText from "../../../components/form/input/text/InputText";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";

const ExchangeAdd = () => {
  const [formData, setFormData] = useState({});
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Add Exchanges
        </Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{ maxWidth: "758px", background: "white", borderRadius: "5px" }}
          pt={3}
          pl={4}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Exchange Name
            </Typography>

            <InputText
              placeholder="Enter Exchange Name"
              setFormData={setFormData}
              formData={formData}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Exchange URL
            </Typography>

            <InputText
              placeholder="Enter Exchange url"
              setFormData={setFormData}
              formData={formData}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Exchange Icon
            </Typography>

            <ExchangeUploader />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Stack spacing={2} sx={{ alignItems: "flex-end" }} pb={5} mr={5}>
              <LargeBtn Title="Add new exchange" />
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExchangeAdd;
