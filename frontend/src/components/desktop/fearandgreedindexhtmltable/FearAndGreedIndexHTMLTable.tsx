import { useState, useEffect, useRef, createRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import {
  Stack,
  Typography,
  Box,
  CircularProgress,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import { CountDownTimer } from "./countdown/CountDownTimer";
import moment from "moment";

const FearAndGreedIndexHTMLTable = ({
  tableData,
  variant,
  tableHeader,
  filterValue,
}: any) => {
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  const ref = useRef<any>();
  const dispatch: any = useDispatch();
  const location: any = useLocation();

  return (
    <TableContainer sx={{ borderRadius: 4, border: "1px solid #202131" }}>
      <Table
        sx={{
          //minWidth: 650,
          backgroundColor: "#010822",

          borderRadius: 4,
          "&.MuiTableContainer-root": { backgroundColor: "transparent" },
          "&.MuiPaper-root": { backgroundColor: "transparent" },
        }}
        aria-label="simple table"
        size="small"
      >
        <TableHead
          sx={{ backgroundColor: "#000000", color: "#686868", height: 50 }}
        >
          <TableRow sx={{ borderBottom: "2px solid black" }}>
            {tableHeader &&
              tableHeader.map((item: any, index: number) => (
                <TableCell
                  sx={{
                    color: "#686868",
                    fontWeight: 500,
                  }}
                  key={index}
                >
                  {item}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>

        <TableBody sx={{ backgroundColor: "#010822", color: "#FFFFFF" }}>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
                paddingBottom: 1,
              },

              borderBottom: "1px solid #031323",
              height: 60,
              "&:hover": {
                //backgroundColor: "red",
              },
            }}
          >
            <TableCell
              sx={{
                color: "#FFFFFF",
                border: 0,

                flexGrow: 0,
              }}
              colSpan={4}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: ".85rem",
                  fontWeight: 600,
                }}
              >
                Next update happen in{" "}
                <span style={{ color: "#c9d509" }}>
                  {CountDownTimer(
                    moment(new Date().setHours(5, 30, 0, 0)).add(1, "days")
                  )}
                </span>
              </Typography>
            </TableCell>
          </TableRow>
          {tableData &&
            tableData
              .slice(0, filterValue && filterValue)
              .map((data: any, index: number) => (
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                      paddingBottom: 1,
                    },

                    borderBottom: "1px solid #031323",
                    height: 20,
                    "&:hover": {
                      //backgroundColor: "red",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,

                      maxWidth: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: ".85rem",
                        fontWeight: 600,
                      }}
                    >
                      {moment(new Date(data?.timestamp)).fromNow()}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,

                      maxWidth: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color:
                          data && data?.value_classification === "Extreme Fear"
                            ? "#EF2828"
                            : data && data?.value_classification === "Fear"
                            ? "#EC840E"
                            : data && data?.value_classification === "Neutral"
                            ? "#A8CE08"
                            : data && data?.value_classification === "Greed"
                            ? "#1DAF03"
                            : data &&
                              data?.value_classification === "Extreme Greed" &&
                              "#008E49",
                        fontSize: ".85rem",
                        fontWeight: 600,
                      }}
                    >
                      {data?.value_classification}
                    </Typography>
                  </TableCell>

                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,

                      maxWidth: 1,
                    }}
                  >
                    <Box
                      sx={{
                        color: "#FFFFFF",
                        fontSize: ".85rem",
                        fontWeight: 600,
                        backgroundColor:
                          data && data?.value_classification === "Extreme Fear"
                            ? "#EF2828"
                            : data && data?.value_classification === "Fear"
                            ? "#EC840E"
                            : data && data?.value_classification === "Neutral"
                            ? "#A8CE08"
                            : data && data?.value_classification === "Greed"
                            ? "#1DAF03"
                            : data &&
                              data?.value_classification === "Extreme Greed" &&
                              "#008E49",
                        borderRadius: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 25,
                        width: 25,
                      }}
                      p={0.5}
                    >
                      {data?.value}
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,

                      maxWidth: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: ".85rem",
                        fontWeight: 600,
                      }}
                    >
                      {moment(new Date(data?.timestamp)).format("DD/MMM/YYYY")}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FearAndGreedIndexHTMLTable;
