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
  Link,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EventViewCard from "../cards/eventviewcard/EventViewCard";
import { coinPresaleBlockRequest } from "../../../store/action";
import moment from "moment";
import { CountDownTimer } from "./countdown/CountDownTimer";
const CoinPagePresale = () => {
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const coinPresale = useSelector((data: any) => {
    return data?.coinReducer?.coin_presale_block;
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

  console.log(coinPresale);

  return (
    <Stack direction="column" spacing={5} mt={3}>
      {coinPresale && coinPresale?.response === true ? (
        coinPresale?.data?.map((item: any, index: number) => (
          <Stack direction="row" spacing={2} mt={0} key={index}>
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
                    {item &&
                      moment(new Date(item?.presale_start_date)).isAfter(
                        new Date()
                      ) === true && (
                        <Stack
                          direction="row"
                          sx={{ alignItems: "center" }}
                          spacing={0.5}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#FFFFF5",
                              fontWeight: "300",
                              fontSize: ".9rem",
                            }}
                          >
                            Presale Starts in
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontWeight: "500",
                              fontSize: ".1.1rem",
                            }}
                          >
                            {CountDownTimer(
                              moment(new Date(item?.presale_start_date))
                            )}
                          </Typography>
                        </Stack>
                      )}

                    {item &&
                      moment(new Date()).isBetween(
                        new Date(item?.presale_start_date),
                        new Date(item?.presale_end_date)
                      ) === true && (
                        <Stack
                          direction="row"
                          sx={{ alignItems: "center" }}
                          spacing={0.5}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#FFFFF5",
                              fontWeight: "300",
                              fontSize: ".9rem",
                            }}
                          >
                            Presale Ends in
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontWeight: "500",
                              fontSize: ".1.1rem",
                            }}
                          >
                            {CountDownTimer(
                              moment(new Date(item?.presale_end_date))
                            )}
                          </Typography>
                        </Stack>
                      )}

                    {item &&
                      moment(new Date()).isAfter(
                        new Date(new Date(item?.presale_end_date))
                      ) === true && (
                        <Stack
                          direction="row"
                          sx={{ alignItems: "center" }}
                          spacing={0.5}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontWeight: "500",
                              fontSize: ".1.1rem",
                            }}
                          >
                            Presale is expired
                          </Typography>
                        </Stack>
                      )}
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
                        href={
                          item && item?.presale_link !== null
                            ? item?.presale_link
                            : "#"
                        }
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
                          {item && item?.presale_address !== null
                            ? item?.presale_address
                            : "NA"}
                        </Typography>
                      </a>

                      <CopyToClipboard
                        options={{ message: "Copy" }}
                        text={
                          item && item?.presale_address !== null
                            ? item?.presale_address
                            : "NA"
                        }
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
                  {moment(new Date(item?.presale_start_date)).format(
                    "DD MMM YYYY HH:MM:SS A"
                  )}
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
                  {moment(new Date(item?.presale_end_date)).format(
                    "DD MMM YYYY HH:MM:SS A"
                  )}
                </Typography>
              </Stack>
              <Link href={item?.presale_link} target="_blank">
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
              </Link>
            </Stack>
          </Stack>
        ))
      ) : (
        <Stack direction="column" spacing={0.2} my={3}>
          <Typography sx={{ color: "#FFFFFF", fontSize: "1.1rem" }}>
            Data Not Available
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default CoinPagePresale;
