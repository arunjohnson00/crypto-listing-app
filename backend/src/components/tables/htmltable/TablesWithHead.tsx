import * as React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Divider, IconButton, Stack, Typography } from "@mui/material";
import ago from "ts-ago";

import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const TablesWithHead = ({ rows, rowHeader, mailer, variant }: any) => {
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
            <TableCell></TableCell>
            {rowHeader &&
              rowHeader.map((title: any, index: number) => (
                <TableCell
                  align="left"
                  key={index}
                  sx={{ fontWeight: 600, padding: 0.5 }}
                >
                  {title}{" "}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {variant === "ads_overview" &&
            rows &&
            rows?.slice(0, 13).map((data: any, index: number) => (
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    paddingBottom: 1,
                  },
                  "&:first-child td, &:first-child th": {
                    border: 0,
                    paddingTop: 1,
                  },
                }}
                key={index}
              >
                <TableCell
                  align="left"
                  sx={{
                    fontSize: ".75rem",
                    border: 0,
                    fontWeight: 500,
                    padding: 0.5,
                    color: "#A1A1A1",
                  }}
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: ".75rem", border: 0, fontWeight: 500 }}
                >
                  {data?.adName}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: ".75rem",
                    color: "#008bff",
                    border: 0,
                    fontWeight: 500,
                    padding: 0.5,
                  }}
                >
                  {data?.adType}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: ".75rem", border: 0, fontWeight: 500 }}
                >
                  {diffDays(
                    new Date(data?.adStartDate).setDate(
                      new Date(data?.adStartDate).getDate() +
                        parseInt(data?.adNumberOfDays)
                    ),
                    new Date()
                  )}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: ".75rem",
                    border: 0,
                    color: "#AB264F",
                    fontWeight: 500,
                    padding: 0.5,
                  }}
                >
                  {data?.adNumberOfDays}
                </TableCell>

                {mailer === true && (
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: ".80rem",
                      border: 0,
                      fontWeight: 500,
                      padding: 0.5,
                    }}
                  >
                    <IconButton sx={{ padding: 0 }}>
                      <MailOutlineIcon
                        sx={{ color: "#10E49C", fontSize: "1rem" }}
                      />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          {variant === "recent_listings" &&
            rows &&
            rows
              ?.concat(rows)
              .sort((a: any, b: any) => (a.time < b.time ? 1 : -1))
              .slice(0, 13)
              .map((data: any, index: number) => (
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                      paddingBottom: 1,
                    },
                    "&:first-child td, &:first-child th": {
                      border: 0,
                      paddingTop: 1,
                    },
                  }}
                  key={index}
                >
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: ".75rem",
                      border: 0,
                      fontWeight: 500,
                      padding: 0.5,
                      color: "#A1A1A1",
                    }}
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: ".75rem",
                      border: 0,
                      fontWeight: 500,
                      padding: 0.5,
                    }}
                  >
                    {data?.name}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: ".75rem",
                      color: "#008bff",
                      border: 0,
                      fontWeight: 500,
                      padding: 0.5,
                    }}
                  >
                    {data?.type}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: ".75rem",
                      border: 0,
                      fontWeight: 500,
                      padding: 0.5,
                    }}
                  >
                    {ago(data?.time)}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: ".75rem",
                      border: 0,
                      color: "#AB264F",
                      fontWeight: 500,
                      padding: 0.5,
                    }}
                  >
                    <span>
                      {parseInt(data?.status) === 1 && (
                        <span style={{ color: "#00E396" }}>Approved</span>
                      )}

                      {parseInt(data?.status) === 2 && (
                        <span style={{ color: "#FEB019" }}>Suspended</span>
                      )}

                      {parseInt(data?.status) === 3 && (
                        <span style={{ color: "#f7370c" }}>Blocked</span>
                      )}

                      {parseInt(data?.status) === 4 && (
                        <span style={{ color: "#775DD0" }}>Processing</span>
                      )}
                    </span>
                  </TableCell>

                  {mailer === true && (
                    <TableCell
                      align="center"
                      sx={{ fontSize: ".80rem", border: 0, fontWeight: 500 }}
                    >
                      <IconButton sx={{ padding: 0 }}>
                        <MailOutlineIcon
                          sx={{ color: "#10E49C", fontSize: "1rem" }}
                        />
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
              ))}

          {variant === "incoming_ads" &&
            rows &&
            rows?.slice(0, 13).map((data: any, index: number) => (
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    paddingBottom: 1,
                  },
                  "&:first-child td, &:first-child th": {
                    border: 0,
                    paddingTop: 1,
                  },
                }}
                key={index}
              >
                <TableCell
                  align="left"
                  sx={{
                    fontSize: ".75rem",
                    border: 0,
                    fontWeight: 500,
                    padding: 0.5,
                    color: "#A1A1A1",
                  }}
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: ".75rem",
                    border: 0,
                    fontWeight: 500,
                    padding: 0.5,
                  }}
                >
                  {data?.name}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: ".75rem",
                    color: "#240cfb",
                    border: 0,
                    fontWeight: 500,
                    padding: 0.5,
                  }}
                >
                  {data?.amount}{" "}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: ".75rem",
                    border: 0,
                    fontWeight: 500,
                    padding: 0.5,
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <span style={{ cursor: "pointer" }}>{data?.product}</span>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                      {(popupState: any) => (
                        <div>
                          <span
                            style={{ color: "#7676ea" }}
                            {...bindTrigger(popupState)}
                          >
                            +3 Items
                          </span>
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            transformOrigin={{
                              vertical: "center",
                              horizontal: "left",
                            }}
                          >
                            <Stack direction="column" spacing={0} py={0.5}>
                              <Typography sx={{ px: 2, fontSize: ".65rem" }}>
                                {data?.product}
                              </Typography>
                              {/* <Divider
                                flexItem
                                orientation="horizontal"
                                variant="fullWidth"
                              /> */}
                              <Typography sx={{ px: 2, fontSize: ".65rem" }}>
                                {data?.product}
                              </Typography>
                            </Stack>
                          </Popover>
                        </div>
                      )}
                    </PopupState>
                  </Stack>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: ".75rem",
                    border: 0,
                    fontWeight: 500,
                    padding: 0.5,
                  }}
                >
                  {ago(data?.startDate)}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: ".75rem",
                    border: 0,
                    fontWeight: 500,
                    padding: 0.5,
                  }}
                >
                  {data?.days}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: ".75rem",
                    border: 0,
                    fontWeight: 500,
                    padding: 0.5,
                    color: "#0864B1",
                  }}
                >
                  {data?.transId?.substring(0, 7) + ".."}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: ".75rem",
                    border: 0,
                    fontWeight: 500,
                    padding: 0.5,
                  }}
                >
                  {ago(data?.orderCreated)}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: ".75rem",
                    border: 0,
                    fontWeight: 500,
                    padding: 0.5,
                  }}
                >
                  <span>
                    {parseInt(data?.status) === 1 && (
                      <span style={{ color: "#00E396" }}>Approved</span>
                    )}

                    {parseInt(data?.status) === 2 && (
                      <span style={{ color: "#FEB019" }}>Suspended</span>
                    )}

                    {parseInt(data?.status) === 3 && (
                      <span style={{ color: "#f7370c" }}>Blocked</span>
                    )}

                    {parseInt(data?.status) === 4 && (
                      <span style={{ color: "#775DD0" }}>Processing</span>
                    )}
                  </span>
                </TableCell>

                {mailer === true && (
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
                )}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablesWithHead;
