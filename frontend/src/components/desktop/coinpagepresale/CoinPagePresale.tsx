import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Stack,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Divider,
  Button,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EventViewCard from "../cards/eventviewcard/EventViewCard";
import { coinPresaleBlockRequest } from "../../../store/action";

const CoinPagePresale = () => {
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const coinPresale = useSelector((data: any) => {
    return data?.coinReducer?.coin_presale_block?.data;
  });

  const [copyValue, setCopyValue] = useState<any>("");
  const [copied, setCopied] = useState(false);

  const copyHandler = (e: any) => {
    setCopied(true);
    setTimeout(function () {
      setCopied(false);
    }, 500);
  };

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(
      coinPresaleBlockRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  return (
    <Stack direction="row" spacing={5} mt={3}>
      <Box
        sx={{
          backgroundColor: "#020F44",

          border: "1px solid #1A2149",
          borderRadius: 2,
        }}
      >
        <Box m={4}>
          <Stack direction="column" spacing={3}>
            <Stack direction="column" spacing={0.2}>
              <Typography sx={{ color: "#E5ECFF", fontSize: ".9rem" }}>
                Presale starts in
              </Typography>
              <Typography
                sx={{ color: "#E5ECFF", fontSize: "1.1rem", fontWeight: 600 }}
              >
                12Days 22Hours 33Min 55Seconds
              </Typography>
            </Stack>
            <Stack direction="column" spacing={0.2}>
              <Typography sx={{ color: "#E5ECFF", fontSize: ".8rem" }}>
                Presale address
              </Typography>

              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={0.8}
              >
                <a
                  href="#"
                  style={{
                    color: "#8A93C9",
                    textDecoration: "none",
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography
                    sx={{
                      color: "#65B7C2",
                      fontSize: ".75rem",
                      fontWeight: 600,
                    }}
                  >
                    0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
                  </Typography>
                </a>

                <CopyToClipboard
                  options={{ message: "Copy" }}
                  text="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                  onCopy={(e: any) => copyHandler(e)}
                >
                  <IconButton sx={{ padding: 0 }}>
                    <Tooltip title={`${copied ? "Copied" : "Copy this Token"}`}>
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
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Stack direction="column" spacing={2}>
        <Stack direction="column" spacing={0.2}>
          <Typography sx={{ color: "#E5ECFF", fontSize: ".75rem" }}>
            Presale starts Date & Time {"(UTC)"}
          </Typography>
          <Typography
            sx={{ color: "#E5ECFF", fontSize: ".9rem", fontWeight: 600 }}
          >
            19 Sept 2022 <span style={{ color: "#14EAE4" }}>09:48PM</span>
          </Typography>
        </Stack>

        <Divider
          sx={{ borderBottomColor: "#111138", borderBottomWidth: 2 }}
          flexItem
          orientation="horizontal"
          variant="fullWidth"
        />
        <Stack direction="column" spacing={0.2}>
          <Typography sx={{ color: "#E5ECFF", fontSize: ".75rem" }}>
            Presale end Date & Time {"(UTC)"}
          </Typography>
          <Typography
            sx={{ color: "#E5ECFF", fontSize: ".9rem", fontWeight: 600 }}
          >
            19 Sept 2022 <span style={{ color: "#14EAE4" }}>09:48PM</span>
          </Typography>
        </Stack>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6353E6",
            borderRadius: 3,
            textTransform: "capitalize",
            fontSize: ".8rem",
          }}
          endIcon={<LaunchIcon />}
        >
          Go to presale page
        </Button>
      </Stack>
    </Stack>
  );
};

export default CoinPagePresale;
