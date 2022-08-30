import { useState, useEffect, useRef, createRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
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
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import VoteBtn from "../button/votebtn/VoteBtn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import moment from "moment";
import { coinVoteRequest } from "../../../store/action";
import LoadingButton from "@mui/lab/LoadingButton";
import { defaultColor } from "../../../common/common";
const HtmlTable = ({ tableData, variant, tableHeader }: any) => {
  const serverAPIUrl = process.env.REACT_APP_API_URL;

  const dispatch: any = useDispatch();
  const location: any = useLocation();
  const [vote, setVote] = useState<any>({
    initial: false,
    completed: false,
    captcha: false,
  });
  const [openCaptcha, setOpenCaptcha] = useState<any>(false);
  const [voteid, setVoteId] = useState<any>();

  const recaptchaRef: any = useRef<ReCAPTCHA>();

  const captchaHandler = (index: any) => {
    setVote({ ...vote, initial: false, completed: false, captcha: true });
    setOpenCaptcha(true);

    setVoteId(index);
  };

  const captchaOnClose = () => {
    setOpenCaptcha(false);
    setVote({ ...vote, initial: false, completed: false, captcha: false });
  };

  const coinVoteHandler = (slug: any) => {
    console.log(slug);
    const successHandler = (res: any) => {
      setOpenCaptcha(false);
      setVote({ ...vote, initial: true, completed: false, captcha: false });
      setTimeout(function () {
        toast.success(`${res?.data?.data}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setVote({ ...vote, initial: false, completed: true, captcha: false });
      }, 2000);
    };
    const errorHandler = (err: any) => {
      console.log(err);
    };

    dispatch(coinVoteRequest(slug, successHandler, errorHandler));
  };

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
                      {index + 1}
                    </Link>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
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
                      {data && data?.logo === null ? (
                        <Avatar
                          sx={{
                            bgcolor: defaultColor[index],
                            width: 34,
                            height: 34,
                          }}
                        >
                          <Typography sx={{ fontSize: ".6rem" }}>
                            {data && data?.name[0]}
                          </Typography>
                        </Avatar>
                      ) : (
                        <Avatar
                          alt={data && data?.name}
                          src={`${serverAPIUrl}public/uploads/coin_logo/${data?.logo}`}
                          //src="https://mui.com/static/images/avatar/1.jpg"
                          sx={{ width: 34, height: 34 }}
                        />
                      )}
                    </Link>
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
                        {data && data?.market_cap !== null ? (
                          data &&
                          "$" +
                            Math.floor(
                              Math.abs(data?.market_cap)
                            ).toLocaleString()
                        ) : (
                          <span style={{ color: "#7a7a7a" }}>--</span>
                        )}
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    <Typography variant="caption">
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
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
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
                    </Link>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
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
                    </Link>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0, minWidth: 90 }}>
                    <Typography variant="caption">
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
                        {moment(data?.listed, "YYYYMMDD").fromNow()}
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{ minWidth: 50 }}>
                        <Typography variant="caption">
                          {" "}
                          {data &&
                          data?.vote !== null &&
                          vote?.completed === true
                            ? parseInt(data?.vote) + 1
                            : data?.vote}
                        </Typography>
                      </Box>
                      <Stack
                        direction={{ xs: "column", sm: "column", md: "row" }}
                        spacing={1.5}
                        sx={{
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                        pt={1}
                      >
                        {(vote &&
                          vote.initial === false &&
                          vote.completed === false &&
                          vote.captcha === false) ||
                        voteid !== data?.slug ? (
                          <Button
                            variant="contained"
                            sx={{
                              borderRadius: "50px",
                              textTransform: "capitalize",
                              fontSize: "0.675rem",
                              height: 23,
                            }}
                            style={{
                              background:
                                "linear-gradient(to right, #5652DD 0%, #104EAB 100%)",
                            }}
                            onClick={() => captchaHandler(data && data?.slug)}
                          >
                            Vote
                          </Button>
                        ) : vote.captcha === true && voteid === data?.slug ? (
                          <Dialog
                            open={openCaptcha}
                            // TransitionComponent={Transition}
                            keepMounted
                            onClose={captchaOnClose}
                            aria-describedby="alert-dialog-slide-description"
                          >
                            <DialogContent
                              sx={{
                                "&.MuiDialogContent-root": {
                                  padding: 0,
                                },
                              }}
                            >
                              <ReCAPTCHA
                                sitekey="6LeV-IQhAAAAAMwIIrqVh_eqFPl-8IFn1QQWWrEU"
                                onChange={() =>
                                  coinVoteHandler(data && data?.slug)
                                }
                                theme="dark"
                                ref={recaptchaRef}
                                onExpired={() => {
                                  // here
                                }}
                              />
                            </DialogContent>
                          </Dialog>
                        ) : vote.initial === true ? (
                          <LoadingButton
                            loading
                            variant="outlined"
                            sx={{
                              color: "#FFFFFF",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "50px",
                              textTransform: "capitalize",
                              fontSize: "0.675rem",
                              height: 23,
                            }}
                          >
                            Submiting
                          </LoadingButton>
                        ) : (
                          vote.completed === true && (
                            <Button
                              variant="contained"
                              sx={{
                                borderRadius: "50px",
                                textTransform: "capitalize",
                                fontSize: "0.675rem",
                                height: 23,
                              }}
                              style={{
                                background:
                                  "linear-gradient(to right, #5652DD 0%, #104EAB 100%)",
                              }}
                            >
                              Voted
                            </Button>
                          )
                        )}
                      </Stack>
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
        )}

        {variant === "historical_data" && (
          <TableBody sx={{ backgroundColor: "#010822", color: "#FFFFFF" }}>
            {tableData &&
              tableData?.slice(1).map((data: any, index: number) => (
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },

                    border: 0,
                    height: 50,
                  }}
                  key={index}
                >
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                      maxWidth: 1,
                    }}
                  >
                    <Typography variant="caption">
                      {data?.date !== null && data?.date}
                    </Typography>
                  </TableCell>

                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                    }}
                  >
                    <Typography variant="caption">
                      {data && data?.open?.current_price !== null ? (
                        String(
                          Math.trunc(parseFloat(data?.open?.current_price))
                        ).length > 2 ? (
                          "$" +
                          Number(
                            parseFloat(data?.open?.current_price).toFixed(2)
                          ).toLocaleString()
                        ) : data && Math.abs(data?.open?.current_price) > 1 ? (
                          "$" +
                          parseFloat(data?.open?.current_price)
                            .toFixed(4)
                            .toLocaleString()
                        ) : (
                          "$" +
                          parseFloat(data?.open?.current_price)
                            .toFixed(13)
                            .toLocaleString()
                        )
                      ) : (
                        <span style={{ color: "#7a7a7a" }}>--</span>
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                    }}
                  >
                    <Typography variant="caption">
                      {data && data?.high !== null ? (
                        String(Math.trunc(parseFloat(data?.high))).length >
                        2 ? (
                          "$" +
                          Number(
                            parseFloat(data?.high).toFixed(2)
                          ).toLocaleString()
                        ) : data && Math.abs(data?.high) > 1 ? (
                          "$" +
                          parseFloat(data?.high).toFixed(4).toLocaleString()
                        ) : (
                          "$" +
                          parseFloat(data?.high).toFixed(13).toLocaleString()
                        )
                      ) : (
                        <span style={{ color: "#7a7a7a" }}>--</span>
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                    }}
                  >
                    <Typography variant="caption">
                      {data && data?.low !== null ? (
                        String(Math.trunc(parseFloat(data?.low))).length > 2 ? (
                          "$" +
                          Number(
                            parseFloat(data?.low).toFixed(2)
                          ).toLocaleString()
                        ) : data && Math.abs(data?.low) > 1 ? (
                          "$" +
                          parseFloat(data?.low).toFixed(4).toLocaleString()
                        ) : (
                          "$" +
                          parseFloat(data?.low).toFixed(13).toLocaleString()
                        )
                      ) : (
                        <span style={{ color: "#7a7a7a" }}>--</span>
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                    }}
                  >
                    <Typography variant="caption">
                      {data && data?.close?.current_price !== null ? (
                        String(
                          Math.trunc(parseFloat(data?.close?.current_price))
                        ).length > 2 ? (
                          "$" +
                          Number(
                            parseFloat(data?.close?.current_price).toFixed(2)
                          ).toLocaleString()
                        ) : data && Math.abs(data?.close?.current_price) > 1 ? (
                          "$" +
                          parseFloat(data?.close?.current_price)
                            .toFixed(4)
                            .toLocaleString()
                        ) : (
                          "$" +
                          parseFloat(data?.close?.current_price)
                            .toFixed(13)
                            .toLocaleString()
                        )
                      ) : (
                        <span style={{ color: "#7a7a7a" }}>--</span>
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                    }}
                  >
                    <Typography variant="caption">
                      {data && data?.volume !== null ? (
                        data &&
                        "$" +
                          Math.floor(Math.abs(data?.volume)).toLocaleString()
                      ) : (
                        <span style={{ color: "#7a7a7a" }}>--</span>
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                    }}
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
        {variant === "todays_price" && (
          <TableBody sx={{ backgroundColor: "#010822", color: "#FFFFFF" }}>
            {tableData &&
              tableData.map((data: any, index: number) => (
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },

                    border: 0,
                    height: 50,
                  }}
                  key={index}
                >
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                      maxWidth: 1,
                    }}
                  >
                    <Typography variant="caption">
                      {data?.created_at !== null &&
                        moment(new Date(data?.created_at)).fromNow()}
                    </Typography>
                  </TableCell>

                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                    }}
                  >
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
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                    }}
                  >
                    <Typography variant="caption">
                      {data && data?.volume_24h !== null ? (
                        data &&
                        "$" +
                          Math.floor(
                            Math.abs(data?.volume_24h)
                          ).toLocaleString()
                      ) : (
                        <span style={{ color: "#7a7a7a" }}>--</span>
                      )}
                    </Typography>
                  </TableCell>

                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", justifyContent: "center" }}
                      spacing={0}
                    >
                      {data &&
                      data?.percent_change_1h !== null &&
                      Math.sign(parseFloat(data?.percent_change_1h)) === -1 ? (
                        <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                      ) : (
                        data?.percent_change_1h !== null && (
                          <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                        )
                      )}

                      <Typography
                        variant="caption"
                        sx={{
                          color:
                            Math.sign(parseFloat(data?.percent_change_1h)) ===
                            -1
                              ? "#ff0000"
                              : "#00ff00",
                          fontWeight: 600,
                          fontSize: ".7rem",
                        }}
                      >
                        {data && data?.percent_change_1h !== null ? (
                          parseFloat(data?.percent_change_1h)
                            .toFixed(2)
                            .replace("-", "") + "%"
                        ) : (
                          <span style={{ color: "#7a7a7a" }}>--</span>
                        )}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", justifyContent: "center" }}
                      spacing={0}
                    >
                      {data &&
                      data?.percent_change_24h !== null &&
                      Math.sign(parseFloat(data?.percent_change_24h)) === -1 ? (
                        <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                      ) : (
                        data?.percent_change_24h !== null && (
                          <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                        )
                      )}

                      <Typography
                        variant="caption"
                        sx={{
                          color:
                            Math.sign(parseFloat(data?.percent_change_24h)) ===
                            -1
                              ? "#ff0000"
                              : "#00ff00",
                          fontWeight: 600,
                          fontSize: ".7rem",
                        }}
                      >
                        {data && data?.percent_change_24h !== null ? (
                          parseFloat(data?.percent_change_24h)
                            .toFixed(2)
                            .replace("-", "") + "%"
                        ) : (
                          <span style={{ color: "#7a7a7a" }}>--</span>
                        )}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFFFFF",
                      border: 0,
                      borderBottom: "1px solid #09090970",
                    }}
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

export default HtmlTable;
