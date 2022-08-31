import * as React from "react";
import { Link } from "react-router-dom";
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
  ButtonGroup,
  Button,
  Divider,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import moment from "moment";
const UserAdminHtmlTable = ({ tableData, variant, tableHeader }: any) => {
  const serverAPIUrl = process.env.REACT_APP_API_URL;

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          backgroundColor: "#010822",
          "&.MuiTableContainer-root": { backgroundColor: "transparent" },
          "&.MuiPaper-root": { backgroundColor: "transparent" },
        }}
        aria-label="simple table"
        size="small"
      >
        <TableHead
          sx={{ backgroundColor: "#000000", color: "#FFFFF5", height: 50 }}
        >
          <TableRow sx={{ borderBottom: "2px solid black" }}>
            {tableHeader &&
              tableHeader.map((item: any, index: number) => (
                <TableCell
                  sx={{ color: "#FFFFF5", fontWeight: "bold" }}
                  key={index}
                >
                  {item}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        {variant === "crypto_currencies" && (
          <TableBody sx={{ backgroundColor: "#010822", color: "#FFFFFF" }}>
            {tableData &&
              tableData.slice(0, 10).map((data: any, index: number) => (
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },

                    border: 0,
                    height: 20,
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
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    {" "}
                    <Avatar
                      alt={data?.name}
                      src={`${serverAPIUrl}public/uploads/coin_logo/${data?.logo}`}
                      sx={{ width: 34, height: 34 }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    <Stack direction="column">
                      <Typography variant="caption">
                        {" "}
                        <Link
                          to={{
                            pathname: `/coin/${data?.slug}`,
                          }}
                          state={{ coin_id: data?.id }}
                          style={{
                            textDecoration: "none",
                            color: "#FFFFFF",
                          }}
                        >
                          {data && data?.name?.length > 13
                            ? data?.name?.slice(0, 13) + "..."
                            : data && data?.name}
                        </Link>
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#0F68A1",
                          fontWeight: "bold",
                          fontSize: "0.6rem",
                        }}
                      >
                        {"$"}
                        {data?.symbol}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    {" "}
                    <Avatar
                      alt={data?.name}
                      src={`${serverAPIUrl}public/uploads/network_icons/${data?.network_icon}`}
                      sx={{ width: 41, height: 11, borderRadius: 0 }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">
                      {data?.market_cap}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    <Typography variant="caption">
                      {data && data?.current_price !== null ? (
                        data && Math.abs(data?.current_price) > 1 ? (
                          "$" + parseFloat(data?.current_price).toFixed(4)
                        ) : (
                          "$" + parseFloat(data?.current_price).toFixed(13)
                        )
                      ) : (
                        <span style={{ color: "#7a7a7a" }}>--</span>
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    {" "}
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", justifyContent: "center" }}
                      spacing={0}
                    >
                      {data &&
                      data?.pc_24h !== null &&
                      Math.sign(parseFloat(data?.pc_24h)) === -1 ? (
                        <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                      ) : (
                        data?.pc_24h !== null && (
                          <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                        )
                      )}

                      <Typography
                        variant="caption"
                        sx={{
                          color:
                            Math.sign(parseFloat(data?.pc_24h)) === -1
                              ? "#ff0000"
                              : "#00ff00",
                          fontWeight: 600,
                          fontSize: ".7rem",
                        }}
                      >
                        {data && data?.pc_24h !== null ? (
                          parseFloat(data?.pc_24h).toFixed(2).replace("-", "") +
                          "%"
                        ) : (
                          <span style={{ color: "#7a7a7a" }}>--</span>
                        )}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    {" "}
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", justifyContent: "center" }}
                      spacing={0}
                    >
                      {data &&
                      data?.pc_7d !== null &&
                      Math.sign(parseFloat(data?.pc_7d)) === -1 ? (
                        <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                      ) : (
                        data?.pc_7d !== null && (
                          <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                        )
                      )}

                      <Typography
                        variant="caption"
                        sx={{
                          color:
                            Math.sign(parseFloat(data?.pc_7d)) === -1
                              ? "#ff0000"
                              : "#00ff00",
                          fontWeight: 600,
                          fontSize: ".7rem",
                        }}
                      >
                        {data && data?.pc_7d !== null ? (
                          parseFloat(data?.pc_7d).toFixed(2).replace("-", "") +
                          "%"
                        ) : (
                          <span style={{ color: "#7a7a7a" }}>--</span>
                        )}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0, minWidth: 90 }}>
                    <Typography variant="caption">
                      {" "}
                      {moment(data?.listed, "YYYYMMDD").fromNow()}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ minWidth: 50 }}>
                        <Typography variant="caption"> {data?.vote}</Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 120 }}
                  >
                    <Stack
                      direction="row"
                      spacing={0}
                      alignItems="center"
                      sx={{ flexWrap: "wrap" }}
                    >
                      {data?.badges?.vote?.status === 1 ? (
                        <Avatar
                          alt={data?.badges?.vote?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.vote?.active_icon}`}
                          sx={{
                            width: 25,
                            height: 25,
                            mr: 0.5,
                            mb: 0.5,
                          }}
                        />
                      ) : (
                        <Avatar
                          alt={data?.badges?.vote?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.vote?.inactive_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      )}
                      {data?.badges?.airdrop?.status === 1 ? (
                        <Avatar
                          alt={data?.badges?.airdrop?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.airdrop?.active_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      ) : (
                        <Avatar
                          alt={data?.badges?.airdrop?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.airdrop?.inactive_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      )}

                      {data?.badges?.ama?.status === 1 ? (
                        <Avatar
                          alt={data?.badges?.ama?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.ama?.active_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      ) : (
                        <Avatar
                          alt={data?.badges?.ama?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.ama?.inactive_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      )}

                      {data?.badges?.audit?.status === 1 ? (
                        <Avatar
                          alt={data?.badges?.audit?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.audit?.active_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      ) : (
                        <Avatar
                          alt={data?.badges?.audit?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.audit?.inactive_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      )}

                      {data?.badges?.kyc?.status === 1 ? (
                        <Avatar
                          alt={data?.badges?.kyc?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.kyc?.active_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      ) : (
                        <Avatar
                          alt={data?.badges?.kyc?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.kyc?.inactive_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      )}
                      {data?.badges?.liquidity?.status === 1 ? (
                        <Avatar
                          alt={data?.badges?.liquidity?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.liquidity?.active_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      ) : (
                        <Avatar
                          alt={data?.badges?.liquidity?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.liquidity?.inactive_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      )}

                      {data?.badges?.ownership?.status === 1 ? (
                        <Avatar
                          alt={data?.badges?.ownership?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.ownership?.active_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      ) : (
                        <Avatar
                          alt={data?.badges?.ownership?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.ownership?.inactive_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      )}

                      {data?.badges?.presale?.status === 1 ? (
                        <Avatar
                          alt={data?.badges?.presale?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.presale?.active_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      ) : (
                        <Avatar
                          alt={data?.badges?.presale?.name}
                          src={`${serverAPIUrl}public/uploads/badges/${data?.badges?.presale?.inactive_icon}`}
                          sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                        />
                      )}
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ color: "#E0B62A", border: 0, minWidth: 90 }}>
                    <Typography variant="caption">In Review</Typography>
                  </TableCell>
                  <TableCell sx={{ color: "#E0B62A", border: 0, minWidth: 90 }}>
                    <Stack direction="row" spacing={1}>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: ".85rem",
                          textTransform: "capitalize",
                        }}
                      >
                        Edit
                      </Typography>

                      <Divider
                        flexItem
                        variant="middle"
                        orientation="vertical"
                        sx={{ borderRightColor: "#FFFFFF", height: 20 }}
                      />
                      <Typography
                        sx={{
                          color: "#CE0519",
                          fontSize: ".85rem",
                          textTransform: "capitalize",
                        }}
                      >
                        Delete
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}

            {/* <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              borderBottom: "2px solid black",
            }}
          >
            <TableCell component="th" scope="row" sx={{ color:"#FFFFFF" }}>
              1
            </TableCell>
            <TableCell sx={{ color:"#FFFFFF" }}>Test</TableCell>
            <TableCell sx={{ color:"#FFFFFF" }}>Test</TableCell>
            <TableCell sx={{ color:"#FFFFFF" }}>Test</TableCell>
            <TableCell sx={{ color:"#FFFFFF" }}>Test</TableCell>
            <TableCell sx={{ color:"#FFFFFF" }}>Test</TableCell>
            <TableCell sx={{ color:"#FFFFFF" }}>Test</TableCell>
            <TableCell sx={{ color:"#FFFFFF" }}>Test</TableCell>
            <TableCell sx={{ color:"#FFFFFF" }}>Test</TableCell>
            <TableCell sx={{ color:"#FFFFFF" }}>
              <VoteBtn />
            </TableCell>
            <TableCell sx={{ color:"#FFFFFF" }}>Test</TableCell>
          </TableRow> */}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default UserAdminHtmlTable;