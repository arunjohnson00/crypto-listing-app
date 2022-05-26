import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography, Tooltip } from "@mui/material";
import VoteBtn from "../button/votebtn/VoteBtn";
import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";
import Checkbox from "@mui/material/Checkbox";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TableMenu from "./tablemenu/TableMenu";

const ListingTable = () => {
  const [sortArrow, setSortArrow] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
        }}
        aria-label="simple table"
        size="medium"
      >
        <TableHead sx={{ backgroundColor: "#040A22", color: "#FFFFF5" }}>
          <TableRow sx={{ borderBottom: "2px solid #0C1137" }}>
            <TableCell
              sx={{ color: "#FFFFF5", fontWeight: "bold" }}
            ></TableCell>
            <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
              <Stack direction="row" alignItems="center">
                <span>#</span>
                {sortArrow === true ? (
                  <ArrowDropDownIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSortArrow(false);
                    }}
                  />
                ) : (
                  <ArrowDropUpIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSortArrow(true);
                    }}
                  />
                )}
              </Stack>
            </TableCell>
            <TableCell
              sx={{
                color: "#FFFFF5",
                fontWeight: "bold",
                fontSize: "0.725rem",
              }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{
                color: "#FFFFF5",
                fontWeight: "bold",
                fontSize: "0.725rem",
              }}
            >
              Price
            </TableCell>
            <TableCell
              sx={{
                color: "#FFFFF5",
                fontWeight: "bold",
                fontSize: "0.725rem",
              }}
            >
              1h
            </TableCell>
            <TableCell
              sx={{
                color: "#FFFFF5",
                fontWeight: "bold",
                fontSize: "0.725rem",
              }}
            >
              24h
            </TableCell>
            <TableCell
              sx={{
                color: "#FFFFF5",
                fontWeight: "bold",
                fontSize: "0.725rem",
              }}
            >
              <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
                <span> Fully Diluted Market Cap</span>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 14, height: 14 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
            </TableCell>
            <TableCell
              sx={{
                color: "#FFFFF5",
                fontWeight: "bold",
                fontSize: "0.725rem",
              }}
            >
              <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
                <span> Volume</span>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 14, height: 14 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
            </TableCell>
            <TableCell
              sx={{
                color: "#FFFFF5",
                fontWeight: "bold",
                fontSize: "0.725rem",
              }}
            >
              Block Chain
            </TableCell>
            <TableCell
              sx={{
                color: "#FFFFF5",
                fontWeight: "bold",
                fontSize: "0.725rem",
              }}
            >
              Added
            </TableCell>
            <TableCell
              sx={{ color: "#FFFFF5", fontWeight: "bold" }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: "#010822", color: "white" }}>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              borderBottom: "2px solid #0C1137",
            }}
          >
            <TableCell sx={{ color: "white" }}>
              {" "}
              <Checkbox
                icon={<StarOutlineRoundedIcon sx={{ color: "#FFFFF5" }} />}
                checkedIcon={<StarRoundedIcon sx={{ color: "#dfa303" }} />}
              />
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={{ color: "white", fontSize: "0.725rem" }}
            >
              1
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "0.725rem" }}>
              <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ width: 20, height: 20 }}
                />
                <Typography variant="caption">ApeCoin Ape</Typography>
              </Stack>
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "0.725rem" }}>
              <Typography variant="caption">Taroverse</Typography>
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "0.725rem" }}>
              {" "}
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 16, height: 16 }}
              />
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "0.725rem" }}>
              Test
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "0.725rem" }}>
              Test
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "0.725rem" }}>
              Test
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "0.725rem" }}>
              Test
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "0.725rem" }}>
              Test
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "0.725rem" }}>
              <IconButton aria-label="delete" onClick={handleClickOpenMenu}>
                <MoreVertIcon sx={{ color: "#FFFFF5" }} />
              </IconButton>
              <TableMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListingTable;
