import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import BoostPublishCard from "../../../components/desktop/cards/boostpublishcard/BoostPublishCard";
import "./style.css";

import WallClockIcon from "../../../assets/selectplan/wall-clock.png";
import TickIcon from "../../../assets/selectplan/tick.png";
import DotIcon from "../../../assets/selectplan/dot4.png";

const SelectPlanPage = () => {
  return (
    <Box mt={5}>
      <Stack direction="column" spacing={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack direction="column" spacing={0.3}>
            <Typography sx={{ color: "#FFFFF5", fontSize: ".9rem" }}>
              Hi
              <span style={{ color: "#6FB4B3", fontWeight: 600 }}> Joseph</span>
            </Typography>
            <Typography sx={{ color: "#FFFFF5", fontSize: ".85rem" }}>
              You are selected
            </Typography>
            <Typography
              sx={{
                color: "#FFFFF5",
                fontSize: "1rem",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  //color: "#6FB4B3",
                  fontWeight: 700,
                  fontSize: "2rem",
                  background:
                    "-webkit-linear-gradient(180deg, #063E82,#0BD4BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginRight: 10,
                }}
              >
                {" "}
                Fast Track Gold
              </span>{" "}
              <span>Plan</span>
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2} pt={9} pb={25}>
          <Box
            sx={{
              backgroundColor: "#01061A",
              border: "2px solid #08093D",
              borderRadius: 7,
              width: "100%",
              position: "relative",
            }}
            py={3}
            pl={24}
            pr={4}
          >
            <Box sx={{ position: "absolute", right: 125, top: -13 }}>
              <Chip
                avatar={
                  <Avatar
                    alt="Tick"
                    src={TickIcon}
                    sx={{ width: 16, height: 16, marginRight: 10 }}
                  />
                }
                label="Listing Completed"
                variant="outlined"
                sx={{
                  backgroundColor: "#05032a",
                  border: "2px solid #03033E",
                  color: "#FFFFFF",
                  padding: 0.5,
                  fontSize: ".75rem",
                }}
              />

              <Avatar
                alt="Dot"
                src={DotIcon}
                sx={{
                  width: 8,
                  height: 17,
                  marginRight: 10,
                  position: "relative",
                  left: 15,
                  top: 2,
                  borderRadius: 0,
                }}
              />
            </Box>
            <Stack direction="column" spacing={2}>
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "space-between" }}
              >
                <Box sx={{ position: "absolute", left: -50, top: -36 }}>
                  <BoostPublishCard
                    title={
                      <Typography
                        sx={{
                          color: "#FFFFF5",
                          fontSize: "1rem",
                          fontWeight: "bold",
                        }}
                        pl={3}
                      >
                        Fast Track{" "}
                        <span style={{ color: "#DBD929" }}>Gold</span>
                      </Typography>
                    }
                    button={false}
                    offer={true}
                  />
                </Box>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Clock"
                    src={WallClockIcon}
                    sx={{ width: 56, height: 56 }}
                  />

                  <Stack direction="column" spacing={0}>
                    <Typography sx={{ color: "#FFFFF5", fontSize: ".85rem" }}>
                      Thank you for listing
                    </Typography>
                    <Typography
                      sx={{
                        color: "#15F0B3",
                        fontSize: "1.4rem",
                        fontWeight: 600,
                      }}
                    >
                      Safemoon {"(SFM)"}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Stack direction="column" spacing={0} alignItems="flex-end">
                    <Typography
                      sx={{
                        color: "#3C404D",
                        fontSize: ".7rem",
                        fontWeight: 600,
                      }}
                    >
                      Status
                    </Typography>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Avatar
                        alt="Clock"
                        src={WallClockIcon}
                        sx={{ width: 24, height: 24 }}
                      />

                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                        }}
                      >
                        Waiting for the payment
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>

              <Divider
                flexItem
                orientation="horizontal"
                variant="fullWidth"
                sx={{ borderBottom: "2px solid #1D202A" }}
              />

              <Stack direction="column" spacing={2} px={3}>
                <Typography
                  sx={{
                    color: "#9FA2A8",
                    fontSize: ".85rem",
                  }}
                >
                  You are selecting{" "}
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontSize: ".9rem",
                    }}
                  >
                    {" "}
                    Fast Track Gold
                  </span>{" "}
                  <span
                    style={{
                      color: "#C8C233",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontSize: ".9rem",
                    }}
                  >
                    Plan
                  </span>{" "}
                  listing for safemoon.
                  <br /> We are sending the confirmation Email to the registered
                  mail{" "}
                  <span
                    style={{
                      color: "#0D7D67",
                      fontWeight: 500,
                    }}
                  >
                    {"(safemoon@safemoonprotocol.com)"}
                  </span>
                  . <br />
                  Please check the mail for more details.
                </Typography>
                <Typography
                  sx={{
                    color: "#9FA2A8",
                    fontSize: ".85rem",
                  }}
                >
                  Your listing active within 1 hour. <br />
                  In the meantime you can communicate our admin
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontWeight: 600,

                      fontSize: ".85rem",
                    }}
                  >
                    {" (telegram.me/coinxhigh_admin)"}
                  </span>
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  pt={1}
                >
                  <Typography
                    sx={{
                      color: "#9FA2A8",
                      fontSize: ".85rem",
                    }}
                  >
                    Regards, <br />
                    <span
                      style={{
                        color: "#FFFFFF",
                        fontWeight: 600,

                        fontSize: ".85rem",
                      }}
                    >
                      {" Coinxhigh.com"}
                    </span>
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        borderRadius: 6,
                        backgroundColor: "#0D2FB5",
                        textTransform: "capitalize",
                        fontSize: ".75rem",
                        width: 150,
                      }}
                    >
                      Pay Now
                    </Button>{" "}
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        borderRadius: 6,
                        backgroundColor: "#6250F0",
                        textTransform: "capitalize",
                        fontSize: ".75rem",
                        width: 150,
                      }}
                    >
                      Manual Payment
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SelectPlanPage;
