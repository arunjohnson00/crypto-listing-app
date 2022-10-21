import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { useDispatch } from "react-redux";
import {
  dashboardDeleteAirdropsRequest,
  dashboardDeleteCoinRequest,
  dashboardDeleteEventsRequest,
  dashboardDeleteNFTListingRequest,
  dashboardDeleteReviewRequest,
} from "../../../store/action";

import UserDashboardTablePagination from "./tablepagination/UserDashboardTablePagination";
const UserAdminHtmlTable = ({
  tableData,
  variant,
  tableHeader,
  section,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}: any) => {
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  const navigate: any = useNavigate();
  const dispatch: any = useDispatch();
  const formData = new FormData();

  const handleDeleteClick = (id: any) => {
    const successHandler = (res: any) => {
      toast.success(
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CheckCircleRoundedIcon sx={{ color: "#5CE32D", fontSize: 50 }} />
            <Typography sx={{ fontSize: ".85rem" }}>
              {res?.data?.message}
            </Typography>
          </Stack>
        </Box>,
        {
          position: "top-right",
          icon: false,
          //theme: "colored",
          className: "toast-success-container toast-success-container-after",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setTimeout(() => {
        navigate(0);
      }, 3000);
    };

    const errorHandler = (err: any) => {};

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0222a5",
      cancelButtonColor: "#d33",
      background: "#000825",
      color: "#FFFFFF",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (section === "coin") {
          formData.append("coin_id", id);
          dispatch(
            dashboardDeleteCoinRequest(formData, successHandler, errorHandler)
          );
        }

        if (section === "nft") {
          formData.append("nft_id", id);
          dispatch(
            dashboardDeleteNFTListingRequest(
              formData,
              successHandler,
              errorHandler
            )
          );
        }

        if (section === "events") {
          formData.append("event_id", id);
          dispatch(
            dashboardDeleteEventsRequest(formData, successHandler, errorHandler)
          );
        }

        if (section === "airdrops") {
          formData.append("airdrop_id", id);
          dispatch(
            dashboardDeleteAirdropsRequest(
              formData,
              successHandler,
              errorHandler
            )
          );
        }

        if (section === "review") {
          formData.append("review_id", id);
          dispatch(
            dashboardDeleteReviewRequest(formData, successHandler, errorHandler)
          );
        }

        Swal.fire("Deleted!", "Your data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //navigate(`${location.pathname}`);
        //navigate(0);
      }
    });
  };

  return (
    <TableContainer sx={{ background: "#000000" }}>
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
        {variant === "coin" && (
          <TableBody sx={{ backgroundColor: "#010822", color: "#FFFFFF" }}>
            {tableData &&
              tableData?.data?.data.map((data: any, index: number) => (
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
                        {data && data?.symbol?.length > 13
                          ? data?.symbol?.slice(0, 13) + "..."
                          : data && data?.symbol}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    <Stack direction="column" spacing={0.2}>
                      {data && data?.network_icon?.length !== 0 ? (
                        data &&
                        data?.network_icon?.map((item: any, index: number) => (
                          <Avatar
                            alt={data?.name}
                            src={`${serverAPIUrl}public/uploads/network_icons/${item}`}
                            sx={{ width: 25, height: 25, borderRadius: 0 }}
                          />
                        ))
                      ) : (
                        <Typography variant="caption">--</Typography>
                      )}
                    </Stack>
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
                      {data && data?.price !== null ? (
                        data && Math.abs(data?.price) > 1 ? (
                          "$" + parseFloat(data?.price).toFixed(4)
                        ) : (
                          "$" + parseFloat(data?.price).toFixed(13)
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
                    {parseInt(data?.status) === 1 ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#17AC27",

                          fontWeight: 600,
                        }}
                      >
                        Approved
                      </Typography>
                    ) : parseInt(data?.status) === 2 ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#FC0503",

                          fontWeight: 600,
                        }}
                      >
                        Suspended
                      </Typography>
                    ) : (
                      parseInt(data?.status) === 3 && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#FBFE07",

                            fontWeight: 600,
                          }}
                        >
                          Processing
                        </Typography>
                      )
                    )}
                  </TableCell>
                  <TableCell sx={{ color: "#E0B62A", border: 0, minWidth: 90 }}>
                    <Stack direction="row" spacing={1}>
                      <Link
                        to={{
                          pathname: `/user-dashboard/coin/edit`,
                        }}
                        state={{ id: data && data?.id }}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            color: "#FFFFFF",
                            fontSize: ".85rem",
                            textTransform: "capitalize",
                          }}
                        >
                          Edit
                        </Typography>{" "}
                      </Link>

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
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeleteClick(data && data?.id)}
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

        {variant === "nft" && (
          <TableBody sx={{ backgroundColor: "#010822", color: "#FFFFFF" }}>
            {tableData &&
              tableData?.data?.data.map((data: any, index: number) => (
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
                      alt={data?.title}
                      src={`${serverAPIUrl}public/uploads/nft_listing_image/${data?.image}`}
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
                          {data && data?.title?.length > 13
                            ? data?.title?.slice(0, 13) + "..."
                            : data && data?.title}
                        </Link>
                      </Typography>
                      {/* <Typography
                        variant="caption"
                        sx={{
                          color: "#0F68A1",
                          fontWeight: "bold",
                          fontSize: "0.6rem",
                        }}
                      >
                        {"$"}
                        {data?.symbol}
                      </Typography> */}
                    </Stack>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">{data?.currency}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">
                      {data?.currency_icon}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">{data?.network}</Typography>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    <Stack direction="column" spacing={0.2}>
                      <Avatar
                        alt={data?.title}
                        src={`${serverAPIUrl}public/uploads/network_icons/${data?.network_icon}`}
                        sx={{ width: 30, height: 30, borderRadius: 0 }}
                      />
                    </Stack>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">
                      {data?.pre_sale_mint_price}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">
                      {data?.public_mint_price}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">
                      {data?.max_num_items}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0, minWidth: 90 }}>
                    <Typography variant="caption">
                      {" "}
                      {moment(data?.created_at, "YYYYMMDD").fromNow()}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ color: "#E0B62A", border: 0, minWidth: 90 }}>
                    {parseInt(data?.status) === 1 ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#17AC27",

                          fontWeight: 600,
                        }}
                      >
                        Approved
                      </Typography>
                    ) : parseInt(data?.status) === 2 ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#FC0503",

                          fontWeight: 600,
                        }}
                      >
                        Suspended
                      </Typography>
                    ) : (
                      parseInt(data?.status) === 3 && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#FBFE07",

                            fontWeight: 600,
                          }}
                        >
                          Processing
                        </Typography>
                      )
                    )}
                  </TableCell>
                  <TableCell sx={{ color: "#E0B62A", border: 0, minWidth: 90 }}>
                    <Stack direction="row" spacing={1}>
                      <Link
                        to={{
                          pathname: `/user-dashboard/nft/edit`,
                        }}
                        state={{ id: data && data?.id }}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            color: "#FFFFFF",
                            fontSize: ".85rem",
                            textTransform: "capitalize",
                          }}
                        >
                          Edit
                        </Typography>{" "}
                      </Link>

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
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeleteClick(data && data?.id)}
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

        {variant === "events" && (
          <TableBody sx={{ backgroundColor: "#010822", color: "#FFFFFF" }}>
            {tableData &&
              tableData?.data?.data.map((data: any, index: number) => (
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },

                    border: 0,
                    height: 45,
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
                    <Avatar
                      alt={data?.title}
                      src={`${serverAPIUrl}public/uploads/event_proof/${data?.logo}`}
                      sx={{ width: 30, height: 30, borderRadius: 0 }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    {data && data?.title}
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">
                      {data && data?.category}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">
                      {data && data?.event_date}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    {moment(new Date(data?.end_date)).diff(
                      moment(new Date(data?.event_date)),
                      "days"
                    )}
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    {data && data?.is_online === 1 ? (
                      <Typography variant="caption" sx={{ color: "#00ff90" }}>
                        Online Event
                      </Typography>
                    ) : (
                      data?.is_online === 2 && (
                        <Typography variant="caption" sx={{ color: "#00d7ff" }}>
                          Offline Event
                        </Typography>
                      )
                    )}
                  </TableCell>

                  <TableCell sx={{ color: "#E0B62A", border: 0, minWidth: 90 }}>
                    {parseInt(data?.status) === 1 ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#17AC27",

                          fontWeight: 600,
                        }}
                      >
                        Approved
                      </Typography>
                    ) : parseInt(data?.status) === 2 ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#FC0503",

                          fontWeight: 600,
                        }}
                      >
                        Suspended
                      </Typography>
                    ) : (
                      parseInt(data?.status) === 3 && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#FBFE07",

                            fontWeight: 600,
                          }}
                        >
                          Processing
                        </Typography>
                      )
                    )}
                  </TableCell>
                  <TableCell sx={{ color: "#E0B62A", border: 0, minWidth: 90 }}>
                    <Stack direction="row" spacing={1}>
                      <Link
                        to={{
                          pathname:
                            data?.is_online === 1
                              ? `/user-dashboard/events/online-events/edit`
                              : `/user-dashboard/events/offline-events/edit`,
                        }}
                        state={{ id: data && data?.id }}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            color: "#FFFFFF",
                            fontSize: ".85rem",
                            textTransform: "capitalize",
                          }}
                        >
                          Edit
                        </Typography>{" "}
                      </Link>

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
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeleteClick(data && data?.id)}
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

        {variant === "airdrops" && (
          <TableBody sx={{ backgroundColor: "#010822", color: "#FFFFFF" }}>
            {tableData &&
              tableData?.data?.data.map((data: any, index: number) => (
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
                      alt={data && data?.title}
                      src={`${serverAPIUrl}public/uploads/coin_logo/${
                        data && data?.coin_logo
                      }`}
                      sx={{ width: 34, height: 34 }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    <Stack direction="column">
                      <Typography variant="caption">
                        {data && data?.coin_name}
                      </Typography>
                      {/* <Typography
                        variant="caption"
                        sx={{
                          color: "#0F68A1",
                          fontWeight: "bold",
                          fontSize: "0.6rem",
                        }}
                      >
                        {"$"}
                        {data?.symbol}
                      </Typography> */}
                    </Stack>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">
                      {data && data?.start_date}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">
                      {data && data?.no_of_days}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">
                      {data && data?.total_amount}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    <Typography variant="caption">
                      {data && data?.no_of_winners}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">
                      {data && data?.is_follow_twitter}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">
                      {data && data?.join_telegram}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ color: "#E0B62A", border: 0, minWidth: 90 }}>
                    {parseInt(data?.status) === 1 ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#17AC27",

                          fontWeight: 600,
                        }}
                      >
                        Approved
                      </Typography>
                    ) : parseInt(data?.status) === 2 ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#FC0503",

                          fontWeight: 600,
                        }}
                      >
                        Suspended
                      </Typography>
                    ) : (
                      parseInt(data?.status) === 3 && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#FBFE07",

                            fontWeight: 600,
                          }}
                        >
                          Processing
                        </Typography>
                      )
                    )}
                  </TableCell>
                  <TableCell sx={{ color: "#E0B62A", border: 0, minWidth: 90 }}>
                    <Stack direction="row" spacing={1}>
                      <Link
                        to={{
                          pathname: `/user-dashboard/airdrops/edit`,
                        }}
                        state={{ id: data && data?.id }}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            color: "#FFFFFF",
                            fontSize: ".85rem",
                            textTransform: "capitalize",
                          }}
                        >
                          Edit
                        </Typography>{" "}
                      </Link>

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
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeleteClick(data && data?.id)}
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

        {variant === "review" && (
          <TableBody sx={{ backgroundColor: "#010822", color: "#FFFFFF" }}>
            {tableData &&
              tableData?.data?.data.map((data: any, index: number) => (
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
                    <Typography variant="caption">
                      {" "}
                      {data && data?.name?.length > 13
                        ? data?.name?.slice(0, 13) + "..."
                        : data && data?.name}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">{data?.rating}</Typography>
                  </TableCell>

                  <TableCell
                    sx={{ color: "#FFFFFF", border: 0, minWidth: 100 }}
                  >
                    <Typography variant="caption">{data?.review}</Typography>
                  </TableCell>

                  <TableCell sx={{ color: "#FFFFFF", border: 0, minWidth: 90 }}>
                    <Typography variant="caption">
                      {" "}
                      {moment(data?.created_at, "YYYYMMDD").fromNow()}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ color: "#E0B62A", border: 0, minWidth: 90 }}>
                    {parseInt(data?.status) === 1 ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#17AC27",

                          fontWeight: 600,
                        }}
                      >
                        Approved
                      </Typography>
                    ) : parseInt(data?.status) === 2 ? (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#FC0503",

                          fontWeight: 600,
                        }}
                      >
                        Suspended
                      </Typography>
                    ) : (
                      parseInt(data?.status) === 3 && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#FBFE07",

                            fontWeight: 600,
                          }}
                        >
                          Processing
                        </Typography>
                      )
                    )}
                  </TableCell>
                  <TableCell sx={{ color: "#E0B62A", border: 0, minWidth: 90 }}>
                    <Stack direction="row" spacing={1}>
                      <Link
                        to={{
                          pathname: `/user-dashboard/review/edit`,
                        }}
                        state={{ id: data && data?.id }}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            color: "#FFFFFF",
                            fontSize: ".85rem",
                            textTransform: "capitalize",
                          }}
                        >
                          Edit
                        </Typography>{" "}
                      </Link>

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
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeleteClick(data && data?.id)}
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

      <UserDashboardTablePagination
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        tableData={tableData}
      />
    </TableContainer>
  );
};

export default UserAdminHtmlTable;
