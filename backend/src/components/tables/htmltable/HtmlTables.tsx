import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const HtmlTables = ({ rows }: any) => {
  return (
    <TableContainer>
      <Table
        sx={{
          minWidth: 100,
          height: 223,
          border: 0,
          fontSize: "8.5rem",
        }}
        size="small"
        aria-label="a dense table"
      >
        <TableBody>
          {rows?.slice(6, 12).map((row: any, index: number) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell sx={{ fontSize: ".80rem" }} align="left">
                {row?.year}
              </TableCell>
              <TableCell sx={{ fontSize: ".80rem" }} align="left">
                {row?.month}
              </TableCell>
              <TableCell sx={{ fontSize: ".80rem" }} align="left">
                {row?.count}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HtmlTables;
