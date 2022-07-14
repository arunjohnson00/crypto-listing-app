import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { CircularProgress, Stack, Typography } from "@mui/material";
import VoteBtn from "../button/votebtn/VoteBtn";
import CoinGeckoImage from "../../../assets/singlepagecoin/coingecko.png";

import LeaderBoardCardChip from "../leaderboardcardchip/LeaderBoardCardChip";
const LeaderBoardHtmlTable = () => {
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
              Trust Score
            </TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              Audited
            </TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              KYC
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
                sx={{ width: 30, height: 30 }}
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
                sx={{ width: 30, height: 30 }}
              />
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 500,
                  fontSize: "0.7rem",
                }}
              >
                $9.789
              </Typography>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              {" "}
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 500,
                  fontSize: "0.7rem",
                }}
              >
                $0.00000008765
              </Typography>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              {" "}
              <Stack direction="row" spacing={1} alignItems="center">
                <CircularProgress
                  variant="determinate"
                  value={76}
                  sx={{ color: "#54FFCD" }}
                  size={15}
                  thickness={8}
                />
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 500,
                    fontSize: "0.7rem",
                  }}
                >
                  75
                </Typography>
              </Stack>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              {" "}
              <Typography
                sx={{
                  color: "#04CA75",
                  fontWeight: 500,
                  fontSize: "0.7rem",
                }}
              >
                Yes
              </Typography>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              {" "}
              <Typography
                sx={{
                  color: "#04CA75",
                  fontWeight: 500,
                  fontSize: "0.7rem",
                }}
              >
                Yes
              </Typography>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 500,
                    fontSize: "0.7rem",
                  }}
                >
                  12,340
                </Typography>
                <VoteBtn />
              </Stack>
            </TableCell>
            <TableCell sx={{ color: "white" }}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={0.5}
                pt={1}
              >
                <LeaderBoardCardChip src={CoinGeckoImage} title="Facebook" />

                <LeaderBoardCardChip src={CoinGeckoImage} title="Instagram" />
                <LeaderBoardCardChip src={CoinGeckoImage} title="Reddit" />
                <LeaderBoardCardChip src={CoinGeckoImage} title="Twitter" />
                <LeaderBoardCardChip src={CoinGeckoImage} title="Telegram" />
                <LeaderBoardCardChip src={CoinGeckoImage} title="Link" />
                <LeaderBoardCardChip src={CoinGeckoImage} title="Docs" />

                <LeaderBoardCardChip src={CoinGeckoImage} title="Source" />
              </Stack>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaderBoardHtmlTable;
