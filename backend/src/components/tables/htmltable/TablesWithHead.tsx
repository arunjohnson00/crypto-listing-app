import * as React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { IconButton } from "@mui/material";
const TablesWithHead = ({ rows, rowHeader }: any) => {
  const diffDays = (date: any, otherDate: any) =>
    Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

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
        <TableHead>
          <TableRow>
            {rowHeader &&
              rowHeader.map((title: any, index: number) => (
                <TableCell key={index}>{title} </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((data: any, index: number) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={index}
              >
                <TableCell align="left" sx={{ fontSize: ".75rem", border: 0 }}>
                  {data?.adName}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: ".75rem", color: "#008bff", border: 0 }}
                >
                  {data?.adType}
                </TableCell>
                <TableCell align="left" sx={{ fontSize: ".75rem", border: 0 }}>
                  {diffDays(
                    new Date(data?.adStartDate).setDate(
                      new Date(data?.adStartDate).getDate() +
                        parseInt(data?.adNumberOfDays)
                    ),
                    new Date()
                  )}
                </TableCell>
                <TableCell align="left" sx={{ fontSize: ".75rem", border: 0 }}>
                  {data?.adNumberOfDays}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ fontSize: ".80rem", border: 0 }}
                >
                  <IconButton sx={{ padding: 0 }}>
                    <MailOutlineIcon
                      sx={{ color: "#10E49C", fontSize: "1rem" }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablesWithHead;
