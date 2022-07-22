import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Stack, Avatar, Box } from "@mui/material";

import LargeBtn from "../../../components/form/button/large/LargeBtn";
import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import CreateAdWizardCard from "../../../components/cards/createadwizardcard/CreateAdWizardCard";

//Server URL
const serverAPIUrl = process.env.REACT_APP_API_URL;
const CreateNewAdWizard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          pt={3}
          pb={1}
        >
          <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "flex-start" }}
            >
              <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "left", color: "#3C3658", fontWeight: 500 }}
                >
                  Create New Ad Wizard
                </Typography>
              </Grid>
            </Stack>
          </Grid>
        </Stack>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
        <Grid container spacing={2}>
          <Grid item xl={8.5} lg={8.5} md={8.5} sm={12} xs={12}>
            <Box p={4}>
              <Stack
                direction="column"
                spacing={2}
                sx={{ justifyContent: "flex-start" }}
              >
                <Stack
                  direction="column"
                  spacing={0.7}
                  sx={{ justifyContent: "flex-start" }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "left",
                      color: "#2C399F",
                      fontWeight: 600,
                    }}
                  >
                    Choose your ad
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: ".8rem",
                      color: "#858585",
                      fontWeight: 400,
                    }}
                  >
                    Select and Ad tailor your experience to the goals and
                    settings that will work best for your campaign
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={0}
                  sx={{ justifyContent: "flex-start", flexWrap: "wrap" }}
                  pt={3}
                >
                  <CreateAdWizardCard
                    title=" Promoted Spot"
                    caption="Promoted By coin/Project"
                  />
                  <CreateAdWizardCard
                    title=" Banner Ads"
                    caption="Promoted By coin/Project"
                  />
                  <CreateAdWizardCard
                    title=" Search Ad"
                    caption="Promoted By coin/Project"
                  />
                  <CreateAdWizardCard
                    title=" Coin Audit"
                    caption="Promoted By coin/Project"
                  />
                </Stack>
              </Stack>
            </Box>
          </Grid>

          <Grid item xl={3.5} lg={3.5} md={3.5} sm={12} xs={12}></Grid>
        </Grid>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
        <Grid container spacing={2}>
          <Grid item xl={8.5} lg={8.5} md={8.5} sm={12} xs={12}>
            <Box p={4}>
              <Stack
                direction="column"
                spacing={2}
                sx={{ justifyContent: "flex-start" }}
              >
                <Stack
                  direction="column"
                  spacing={0.7}
                  sx={{ justifyContent: "flex-start" }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "left",
                      color: "#2C399F",
                      fontWeight: 600,
                    }}
                  >
                    Choose Ad Type
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: ".8rem",
                      color: "#858585",
                      fontWeight: 400,
                    }}
                  >
                    Select and Ad tailor your experience to the goals and
                    settings that will work best for your campaign
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={0}
                  sx={{ justifyContent: "flex-start", flexWrap: "wrap" }}
                  pt={3}
                >
                  <CreateAdWizardCard
                    title="Coin Promoted Spot"
                    caption="Promoted By coin/Project"
                  />
                  <CreateAdWizardCard
                    title=" Banner Ads"
                    caption="Promoted By coin/Project"
                  />
                  <CreateAdWizardCard
                    title=" Search Ad"
                    caption="Promoted By coin/Project"
                  />
                  <CreateAdWizardCard
                    title=" Coin Audit"
                    caption="Promoted By coin/Project"
                  />
                </Stack>
              </Stack>
            </Box>
          </Grid>

          <Grid item xl={3.5} lg={3.5} md={3.5} sm={12} xs={12}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreateNewAdWizard;
