import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography, Box, CircularProgress } from "@mui/material";
import VoteBtn from "../button/votebtn/VoteBtn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import moment from "moment";
import TablePagination from "./tablepagination/TablePagination";
import TableListPagination from "./tablepagination/TablePagination";

const ListingTable = ({
  tableData,
  page,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
  setPage,
}: any) => {
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  console.log(page);
  const scrollHandler = () => {
    // page?.pagination !== 0 &&

    page?.pagination % 5 === 0
      ? setPage({
          ...page,

          scroll: false,
        })
      : setPage({
          ...page,
          pagination: page.pagination + 1,
          scroll: true,
        });
  };

  return (
    <Stack direction="column" spacing={2}>
      <TableContainer component={Paper}>
        <InfiniteScroll
          dataLength={tableData?.length} //This is important field to render the next data
          next={scrollHandler}
          loader={
            <Box
              py={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#010822",
              }}
            >
              <CircularProgress />
            </Box>
          }
          hasMore={page?.scroll}
        >
          <Table
            sx={{
              minWidth: 650,
              backgroundColor: "transparent",
            }}
            aria-label="simple table"
            size="small"
          >
            <TableHead
              sx={{ backgroundColor: "#000000", color: "#FFFFF5", height: 50 }}
            >
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

            <TableBody sx={{ backgroundColor: "#010822", color: "#FFFFFF" }}>
              {tableData &&
                tableData?.map((data: any, index: number) => (
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
                        {data && data?.market_cap !== null ? (
                          data &&
                          "$" +
                            Math.floor(
                              Math.abs(data?.market_cap)
                            ).toLocaleString()
                        ) : (
                          <span style={{ color: "#7a7a7a" }}>--</span>
                        )}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                      <Typography variant="caption">
                        {data && data?.current_price !== null ? (
                          String(Math.trunc(parseFloat(data?.current_price)))
                            .length > 2 ? (
                            "$" +
                            Number(
                              parseFloat(data?.current_price).toFixed(2)
                            ).toLocaleString()
                          ) : data && Math.abs(data?.current_price) > 1 ? (
                            "$" +
                            parseFloat(data?.current_price)
                              .toFixed(4)
                              .toLocaleString()
                          ) : (
                            "$" +
                            parseFloat(data?.current_price)
                              .toFixed(13)
                              .toLocaleString()
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
                            parseFloat(data?.pc_24h)
                              .toFixed(2)
                              .replace("-", "") + "%"
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
                            parseFloat(data?.pc_7d)
                              .toFixed(2)
                              .replace("-", "") + "%"
                          ) : (
                            <span style={{ color: "#7a7a7a" }}>--</span>
                          )}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{ color: "#FFFFFF", border: 0, minWidth: 90 }}
                    >
                      <Typography variant="caption">
                        {" "}
                        {moment(data?.listed, "YYYYMMDD").fromNow()}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ minWidth: 50 }}>
                          <Typography variant="caption">
                            {" "}
                            {data?.vote}
                          </Typography>
                        </Box>
                        <VoteBtn />
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
                        {data &&
                          data?.badges?.map((item: any, index: number) => (
                            <Avatar
                              key={index}
                              alt={item?.name}
                              src={`${serverAPIUrl}public/uploads/badge_icons/${
                                parseInt(item?.status) === 1
                                  ? item?.active_icon
                                  : item?.inactive_icon
                              }`}
                              sx={{
                                width: 25,
                                height: 25,
                                mr: 0.5,
                                mb: 0.5,
                              }}
                            />
                          ))}
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
          </Table>
        </InfiniteScroll>
      </TableContainer>
      <Stack
        direction="row"
        spacing={2}
        alignItems="flex-end"
        justifyContent="flex-end"
      >
        <TableListPagination
          page={page}
          handleChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Stack>
    </Stack>
  );
};

export default ListingTable;
