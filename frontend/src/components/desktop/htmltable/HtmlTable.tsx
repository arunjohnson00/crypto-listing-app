import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from "@mui/material";
import VoteBtn from "../button/votebtn/VoteBtn";

const HtmlTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#000000", color: "#FFFFF5" }}>
          <TableRow sx={{ borderBottom: "2px solid black" }}>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              #
            </TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              Coin
            </TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              Name
            </TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              Chain
            </TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              Market Cap
            </TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              Price
            </TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              24h
            </TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              7d
            </TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              Listed
            </TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              Votes
            </TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              Badges
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: "#010822", color: "white" }}>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              borderBottom: "2px solid black",
            }}
          >
            <TableCell component="th" scope="row" sx={{ color: "white" }}>
              1
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              {" "}
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              <Stack direction="column">
                <Typography variant="caption">Taroverse</Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#0F68A1",
                    fontWeight: "bold",
                    fontSize: "0.6rem",
                  }}
                >
                  $TRSV
                </Typography>
              </Stack>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              {" "}
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
            </TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
          </TableRow>

          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              borderBottom: "2px solid black",
            }}
          >
            <TableCell component="th" scope="row" sx={{ color: "white" }}>
              1
            </TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
            <TableCell sx={{ color: "white" }}>
              <VoteBtn />
            </TableCell>
            <TableCell sx={{ color: "white" }}>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HtmlTable;
