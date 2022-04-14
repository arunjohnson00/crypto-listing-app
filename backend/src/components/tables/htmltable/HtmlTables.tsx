import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

function createData(year: number, month: string, coinlist: number) {
  return { year, month, coinlist };
}

const rows = [
  createData(2021, "June", 60),
  createData(2021, "July", 910),
  createData(2021, "August", 160),
  createData(2021, "September", 37),
  createData(2021, "October", 150),
];

const HtmlTables = () => {
  return (
    <TableContainer>
      <Table
        sx={{
          minWidth: 100,
          height: 223,
          border: 0,
          fontSize: "13px",
        }}
        size="small"
        aria-label="a dense table"
      >
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.year}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell component="th" scope="row">
                {row.year}
              </TableCell>
              <TableCell align="right">{row.month}</TableCell>
              <TableCell align="right">{row.coinlist}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HtmlTables;
