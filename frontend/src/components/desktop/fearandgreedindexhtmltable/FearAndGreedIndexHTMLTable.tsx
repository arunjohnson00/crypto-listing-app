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

import moment from "moment";

const FearAndGreedIndexHTMLTable = ({
  tableData,
  variant,
  tableHeader,
}: any) => {
  const serverAPIUrl = process.env.REACT_APP_API_URL;

  const dispatch: any = useDispatch();
  const location: any = useLocation();

  return (
    <TableContainer sx={{ borderRadius: 4, border: "1px solid #202131" }}>
      <Table
        sx={{
          minWidth: 650,
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
                  sx={{ color: "#686868", fontWeight: 500 }}
                  key={index}
                >
                  {item}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>

        <TableBody sx={{ backgroundColor: "#010822", color: "#FFFFFF" }}>
          {tableData &&
            tableData.slice(0, 10).map((data: any, index: number) => (
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },

                  borderBottom: "1px solid #031323",
                  height: 20,
                  "&:hover": {
                    //backgroundColor: "red",
                  },
                }}
                key={index}
              >
                <TableCell
                  sx={{
                    color: "#FFFFFF",
                    border: 0,

                    maxWidth: 1,
                  }}
                >
                  <Link
                    to={{
                      pathname: `/coin/${data?.slug}`,
                    }}
                    state={{ coin_id: data?.id }}
                    style={{
                      textDecoration: "none",
                      color: "#686868",
                    }}
                  >
                    {index + 1}
                  </Link>
                </TableCell>
              </TableRow>
            ))}

          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },

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
                sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 600 }}
              >
                Today
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
                sx={{ color: "#F12828", fontSize: ".85rem", fontWeight: 600 }}
              >
                Extreme Fear
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
                  backgroundColor: "#F12828",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 25,
                  width: 25,
                }}
                p={0.5}
              >
                23
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
                sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 600 }}
              >
                20/Sep/2022
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FearAndGreedIndexHTMLTable;
