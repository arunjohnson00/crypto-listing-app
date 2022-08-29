import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BoostPublishCard from "../../../components/desktop/cards/boostpublishcard/BoostPublishCard";
import "./style.css";

import WallClockIcon from "../../../assets/selectplan/wall-clock.png";
import TickIcon from "../../../assets/selectplan/tick.png";
import DotIcon from "../../../assets/selectplan/dot4.png";

const SelectPlanMailPage = () => {
  const [copied, setCopied] = useState(false);

  const copyHandler = (e: any) => {
    setCopied(true);
    setTimeout(function () {
      setCopied(false);
    }, 500);
  };

  const inputHandler = (e: any) => {
    console.log(e);
  };
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
        <Stack direction="column" spacing={2} pt={9} pb={25}>
          <Stack direction="row" spacing={2} pt={0}>
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
                    Please send the payment {"(Coin)"} with the converted amount
                    to the address below We currently accept the following
                    crypto:
                  </Typography>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: ".9rem",
                    }}
                  >
                    BSC Chain - USDT {"(BEP20)"}, BNB {"(BEP20)"}, BUSD{" "}
                    {"(BEP20)"}, USDC {"(BEP20)"}
                    ETH Chain - USDC {"(ERC20)"}
                  </Typography>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography
                      sx={{
                        color: "#63666F",
                        fontSize: ".85rem",
                      }}
                    >
                      Payment Address:{" "}
                      <span style={{ color: "#B9BD86" }}>
                        0x09E65dBcA05a61ca5c8DCd8a37b48
                      </span>
                    </Typography>

                    <CopyToClipboard
                      options={{ message: "Copy" }}
                      text={"0x09E65dBcA05a61ca5c8DCd8a37b48"}
                      onCopy={(e: any) => copyHandler(e)}
                    >
                      <IconButton sx={{ padding: 0 }}>
                        <Tooltip
                          title={`${copied ? "Copied" : "Copy this Token"}`}
                        >
                          <ContentCopyIcon
                            sx={{
                              color: `${copied ? "#19ffb0" : "#19ffb0"}`,
                              fontSize: ".9rem",
                            }}
                          />
                        </Tooltip>
                      </IconButton>
                    </CopyToClipboard>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                    pt={1}
                  >
                    <Stack direction="row" spacing={2}>
                      <TextField
                        id="outlined-basic"
                        variant="filled"
                        placeholder="Enter your transaction hash here"
                        fullWidth
                        sx={{
                          backgroundColor: "#030519",
                          height: 42,
                          borderRadius: 1,
                          marginBottom: 0,
                          minWidth: 300,

                          "& .MuiInputBase-root": {
                            paddingTop: 0,
                            color: "#FFFFFF",
                            fontSize: ".85rem",
                            fontWeight: 400,
                          },

                          "& .MuiFilledInput-root": {
                            background: "#030519",
                            height: 42,
                            borderRadius: 2,
                            marginBottom: 0,

                            border: "1px solid #343940",
                          },
                          "& .MuiFilledInput-input": {
                            paddingTop: 1,
                          },
                          "&input:-webkit-autofill": {
                            borderRadius: "0px",
                            backgroundColor: "none",
                          },
                        }}
                        onChange={(e: any) => inputHandler(e?.target?.value)}
                      />
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
                        Submit
                      </Button>{" "}
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>

          <Typography
            sx={{
              color: "#9FA2A8",
              fontSize: ".75rem",
              fontStyle: "italic",
            }}
            pl={27}
            pr={3}
          >
            Informations : After the transaction, make sure to copy your
            transaction hash and submit it here. Once submitted, we conduct a
            manual verification before further proceedings. Thank you for
            cooperating with us, feel free to contact us for any support.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SelectPlanMailPage;
