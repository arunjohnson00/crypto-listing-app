import React, { Fragment, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import dateFormat, { masks } from "dateformat";
import Swal from "sweetalert2";
import { removeFromAdsSummaryRequest } from "../../../store/action";
const AdSummaryCard = () => {
  const adSummaryDetails = useSelector((adSummary: any) => {
    return adSummary?.adsReducer?.ads_summary;
  });

  const dispatch = useDispatch();

  const removeFromAdsSummaryHandler = (index: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this process?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      result.isConfirmed &&
        Swal.fire({
          title: "Deleted!",
          text: "Your data has been deleted",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });

      dispatch({
        type: removeFromAdsSummaryRequest,
        payload: index,
      });
    });
  };
  return (
    <Fragment>
      <Box sx={{ backgroundColor: "#06094C", borderRadius: 3 }}>
        <Stack direction="column" spacing={2}>
          <Typography
            px={2}
            pt={2}
            sx={{
              textAlign: "left",
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "1.1rem",
            }}
          >
            Ad Summary
          </Typography>
          <Box
            px={2}
            py={2}
            sx={{ backgroundColor: "#FFFFFF", borderRadius: 3 }}
          >
            <Stack direction="column" spacing={4}>
              <Typography
                sx={{
                  textAlign: "left",
                  color: "#090A44",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                Ad Summary
              </Typography>

              {adSummaryDetails && adSummaryDetails?.length === 0 ? (
                <Stack direction="row" spacing={2}>
                  {" "}
                  <Typography
                    sx={{
                      textAlign: "left",
                      color: "#c1c1c1",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    Please choose an item
                  </Typography>
                </Stack>
              ) : (
                adSummaryDetails &&
                adSummaryDetails?.map((data: any, index: any) => (
                  <Stack
                    key={index}
                    direction="row"
                    spacing={2}
                    alignItems="baseline"
                  >
                    <Typography
                      sx={{
                        textAlign: "left",
                        color: "#090A44",
                        fontWeight: 700,
                        fontSize: ".8rem",
                      }}
                    >
                      {index + 1}
                    </Typography>
                    <Stack direction="column" spacing={1}>
                      <Stack direction="row" spacing={2}>
                        <Typography
                          sx={{
                            textAlign: "left",
                            color: "#BFBFBF",
                            fontWeight: 500,
                            fontSize: ".78rem",
                            minWidth: 80,
                          }}
                        >
                          Selected Ad
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "left",
                            color: "#2E3B97",
                            fontWeight: 700,
                            fontSize: ".76rem",
                            textTransform: "capitalize",
                          }}
                        >
                          {data?.choseAdType?.replace(/_/g, " ")}{" "}
                          {data && (
                            <span
                              style={{
                                color: "#a5a5a5",
                                fontWeight: 500,
                                fontSize: ".6rem",
                              }}
                            >
                              {" "}
                              {`(${data?.item_name})`}
                            </span>
                          )}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Typography
                          sx={{
                            textAlign: "left",
                            color: "#BFBFBF",
                            fontWeight: 500,
                            fontSize: ".78rem",
                            minWidth: 80,
                          }}
                        >
                          Days
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "left",
                            color: "#1D1D36",
                            fontWeight: 500,
                            fontSize: ".76rem",
                          }}
                        >
                          {data?.no_of_days} Days
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Typography
                          sx={{
                            textAlign: "left",
                            color: "#BFBFBF",
                            fontWeight: 500,
                            fontSize: ".78rem",
                            minWidth: 80,
                          }}
                        >
                          Start Date
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "left",
                            color: "#1D1D36",
                            fontWeight: 500,
                            fontSize: ".76rem",
                          }}
                        >
                          {dateFormat(data?.start_date, "dd mmmm yyyy")}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Typography
                          sx={{
                            textAlign: "left",
                            color: "#BFBFBF",
                            fontWeight: 500,
                            fontSize: ".78rem",
                            minWidth: 80,
                          }}
                        >
                          Price
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "left",
                            color: "#1D1D36",
                            fontWeight: 500,
                            fontSize: ".76rem",
                          }}
                        >
                          {data &&
                            parseInt(data?.price) *
                              parseInt(data?.no_of_days)}{" "}
                          BNB
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={0}
                      alignItems="center"
                      height="26px"
                    >
                      <Button
                        variant="text"
                        sx={{
                          textTransform: "capitalize",
                          color: "#BB332E",
                          fontWeight: 500,
                          fontSize: ".5rem",
                          padding: 0,
                          minWidth: 40,
                          maxWidth: 40,
                        }}
                      >
                        Edit
                      </Button>
                      <Divider
                        flexItem
                        orientation="vertical"
                        variant="middle"
                        sx={{ borderColor: "#85858C", height: 10 }}
                      />
                      <Button
                        variant="text"
                        sx={{
                          textTransform: "capitalize",
                          color: "#5A3FD2",
                          fontWeight: 500,
                          fontSize: ".5rem",
                          padding: 0,
                          minWidth: 50,
                          maxWidth: 50,
                        }}
                        onClick={() => removeFromAdsSummaryHandler(index)}
                      >
                        Remove
                      </Button>
                    </Stack>
                  </Stack>
                ))
              )}
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ backgroundColor: "transparent", borderRadius: 0 }} py={2}>
        <Divider flexItem orientation="horizontal" variant="fullWidth" />

        <Stack direction="column" spacing={2.5} pt={2} alignItems="flex-start">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              sx={{
                textAlign: "left",
                color: "#000000",
                fontWeight: 500,
                fontSize: ".90rem",
                minWidth: 80,
              }}
            >
              Total Amount :
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                color: "#1D1D36",
                fontWeight: 700,
                fontSize: "1.26rem",
              }}
            >
              12 BNB
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <CircleIcon
              sx={{ color: "#C2C2C2", width: 9, height: 9, marginTop: 0.5 }}
            />
            <Stack direction="column" spacing={0}>
              <Typography
                sx={{
                  textAlign: "left",
                  color: "#1D1D36",
                  fontWeight: 500,
                  fontSize: ".65rem",
                }}
              >
                Please transfer 12 BNB to
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  color: "#181C99",
                  fontWeight: 600,
                  fontSize: ".65rem",
                }}
              >
                0x473037de59cf9484632f4a27b509cfe8d4a31404{" "}
                <span style={{ color: "#000000" }}>{"(BEP20)"}</span>
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <CircleIcon
              sx={{ color: "#C2C2C2", width: 9, height: 9, marginTop: 0.5 }}
            />
            <Stack direction="column" spacing={0}>
              <Typography
                sx={{
                  textAlign: "left",
                  color: "#1D1D36",
                  fontWeight: 700,
                  fontSize: ".75rem",
                }}
              >
                Products
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  color: "#181C99",
                  fontWeight: 600,
                  fontSize: ".65rem",
                }}
              >
                Coin Promo Spot, NFT Promoted Spot, Airdrop Promotion, Banner
                Ads
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            width="100%"
            justifyContent="center"
          >
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontSize: ".9rem",
                backgroundColor: "#06094C",
                borderRadius: 2,
                minWidth: 200,
                maxWidth: 250,
              }}
            >
              Promote Now
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Fragment>
  );
};

export default AdSummaryCard;
