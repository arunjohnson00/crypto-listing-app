import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";

const FreeCoinHTMLTable = ({ rows, rowsHead }: any) => {
  return (
    <TableContainer
      sx={{
        backgroundColor: "#000000",
        borderRadius: 3,
        padding: 1,
        width: "98%",
      }}
    >
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {rowsHead.map((row: any, index: number) => (
              <TableCell
                key={index}
                sx={{
                  color: "#35AACC",
                  border: 0,
                  fontSize: ".8rem",
                  paddingBottom: 1,
                }}
              >
                {row}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableRow>
          <TableCell colSpan={4} sx={{ border: 0, padding: 0 }}>
            <Divider
              variant="middle"
              flexItem
              orientation="horizontal"
              sx={{ borderBottom: "2px solid #2A2B2D" }}
            />
          </TableCell>
        </TableRow>
        <TableBody>
          {rows.map((row: any, index: number) => (
            <TableRow key={index} sx={{ border: 0 }}>
              <TableCell
                sx={{ color: "#707070", border: 0, fontSize: ".8rem" }}
              >
                {row.address}
              </TableCell>
              <TableCell
                sx={{ color: "#707070", border: 0, fontSize: ".8rem" }}
                align="left"
              >
                {row.amount}
              </TableCell>
              <TableCell
                sx={{ color: "#707070", border: 0, fontSize: ".8rem" }}
                align="left"
              >
                {row.when}
              </TableCell>
              <TableCell
                sx={{ color: "#707070", border: 0, fontSize: ".8rem" }}
                align="left"
              >
                {row.type}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FreeCoinHTMLTable;
