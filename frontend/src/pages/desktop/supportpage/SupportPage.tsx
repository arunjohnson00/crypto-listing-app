import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import SupportCard from "../../../components/desktop/cards/supportcard/SupportCard";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
const SupportPage = () => {
  return (
    <Fragment>
      <Grid container>
        {" "}
        <Grid item xs={12}>
          <Box mt={5}>
            <Stack direction="column" spacing={6}>
              <Stack direction="column" spacing={1}>
                <Typography
                  sx={{ color: "#23B184", fontWeight: 500, fontSize: "1.4rem" }}
                >
                  For any Support
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
                >
                  Want to promote your project? We offer promoted coin spots and
                  Banner Ad spots. Banner ads can also be displayed within the
                  blog posts if required. Please contact us if you wish to
                  present ads among articles.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={3}>
                <SupportCard
                  title="E-mail"
                  icon={
                    <MailOutlineIcon sx={{ color: "#FFFFFF", fontSize: 66 }} />
                  }
                  caption="For general questions, or to update coin information, please email us at:"
                  buttonText="Mail us"
                  buttonLink="mailto: support@coinxhigh.com"
                />
                <SupportCard
                  title="Telegram"
                  icon={
                    <TelegramIcon sx={{ color: "#FFFFFF", fontSize: 66 }} />
                  }
                  caption="For general questions, or to update coin information, please telegram at:"
                  buttonText="Telegram"
                  buttonLink="https://t.me/coinXhigh"
                />
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SupportPage;
