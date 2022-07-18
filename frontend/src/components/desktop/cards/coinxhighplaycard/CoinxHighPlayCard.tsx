import { useState, useEffect, Fragment } from "react";
import { Box, Stack, Typography, Avatar, Divider, Button } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chart from "react-apexcharts";

const CoinxHighPlayCard = () => {
  const [data, updateData] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    const interval = setInterval(() => {
      const val = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
      let array = [...data, val];
      array.shift();
      updateData(array);
    }, 2000);
    return () => {
      window.clearInterval(interval);
    };
  }, [data]);
  const chartData: any = {
    series: [
      {
        name: "Coinxhigh",
        data: data,
      },
    ],

    options: {
      colors: ["#03fb83"],
      chart: {
        height: "auto",
        type: "area",

        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#2FC7A3"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },

      grid: {
        show: false, // you can either change hear to disable all grids
        padding: {
          left: -5,
          bottom: -5,
        },
        xaxis: {
          lines: {
            show: false, //or just here to disable only x axis grids
          },
        },
        yaxis: {
          lines: {
            show: false, //or just here to disable only x axis grids
          },
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },

      legend: {
        show: false,
      },
      // xaxis: {
      //   type: "datetime",
      //   categories: [
      //     "2018-09-19T00:00:00.000Z",
      //     "2018-09-19T01:30:00.000Z",
      //     "2018-09-19T02:30:00.000Z",
      //     "2018-09-19T03:30:00.000Z",
      //     "2018-09-19T04:30:00.000Z",
      //     "2018-09-19T05:30:00.000Z",
      //     "2018-09-19T06:30:00.000Z",
      //   ],
      // },
      // tooltip: {
      //   x: {
      //     format: "dd/MM/yy HH:mm",
      //   },
      // },
    },
  };
  return (
    <Fragment>
      <Box sx={{ backgroundColor: "#010A2B", borderRadius: 4 }} p={3}>
        <Stack direction="column" spacing={3}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src="https://cryptologos.cc/logos/safemoon-safemoon-logo.png?v=022"
              sx={{ borderRadius: 0, width: 50, height: 50 }}
            />

            <Typography
              variant="h6"
              sx={{ color: "#FFFFF5", fontWeight: 600 }}
              textAlign={{ xs: "center", sm: "center", md: "left" }}
            >
              Join{" "}
              <span style={{ color: "#4FFEC4", fontWeight: 400 }}>
                Coinxhigh Play
              </span>
            </Typography>
          </Stack>

          <Box
            sx={{ width: "auto", borderRadius: 4, border: "2px solid #121B3F" }}
            px={2}
            py={3}
          >
            <Stack direction="column" spacing={1.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://cryptologos.cc/logos/safemoon-safemoon-logo.png?v=022"
                  sx={{ borderRadius: 0, width: 20, height: 20 }}
                />

                <Typography
                  sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: ".8rem" }}
                  textAlign={{ xs: "center", sm: "center", md: "left" }}
                >
                  Unlimited prize pool
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://cryptologos.cc/logos/safemoon-safemoon-logo.png?v=022"
                  sx={{ borderRadius: 0, width: 20, height: 20 }}
                />

                <Typography
                  sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: ".8rem" }}
                  textAlign={{ xs: "center", sm: "center", md: "left" }}
                >
                  Earn rewards every hour
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://cryptologos.cc/logos/safemoon-safemoon-logo.png?v=022"
                  sx={{ borderRadius: 0, width: 20, height: 20 }}
                />

                <Typography
                  sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: ".8rem" }}
                  textAlign={{ xs: "center", sm: "center", md: "left" }}
                >
                  Small Joining fee
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://cryptologos.cc/logos/safemoon-safemoon-logo.png?v=022"
                  sx={{ borderRadius: 0, width: 20, height: 20 }}
                />

                <Typography
                  sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: ".8rem" }}
                  textAlign={{ xs: "center", sm: "center", md: "left" }}
                >
                  Big prize. Never miss the chance
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Stack direction="column" spacing={0.5}>
            <Typography
              variant="body1"
              sx={{ color: "#FFFFF5", fontWeight: 500 }}
              textAlign={{ xs: "center", sm: "center", md: "left" }}
            >
              Last game winners
            </Typography>
            <Divider
              orientation="horizontal"
              sx={{
                borderColor: "#061445",
                borderBottomWidth: 2,
                width: "50%",
              }}
              flexItem
            />
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              width="100%"
              justifyContent="space-between"
            >
              <TableContainer
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: 3,

                  width: "100%",
                }}
              >
                <Table sx={{ width: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: "#35AACC",
                          border: 0,
                          fontSize: ".8rem",
                          padding: 0,
                          paddingBottom: 1,
                        }}
                      >
                        Address
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#35AACC",
                          border: 0,
                          fontSize: ".8rem",
                          padding: 0,
                          paddingBottom: 1,
                        }}
                      >
                        Prize
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#35AACC",
                          border: 0,
                          fontSize: ".8rem",
                          padding: 0,
                          paddingBottom: 1,
                        }}
                      >
                        Amount
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow sx={{ border: 0 }}>
                      <TableCell
                        sx={{
                          color: "#97989D",
                          border: 0,
                          fontSize: ".8rem",
                          padding: 0,
                        }}
                      >
                        Text
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#97989D",
                          border: 0,
                          fontSize: ".8rem",
                          padding: 0,
                        }}
                        align="left"
                      >
                        5BBB
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#97989D",
                          border: 0,
                          fontSize: ".8rem",
                          padding: 0,
                        }}
                        align="left"
                      >
                        2sec ago
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Fragment>
  );
};

export default CoinxHighPlayCard;
