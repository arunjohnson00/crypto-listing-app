import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";
import InfiniteScroll from "react-infinite-scroll-component";
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
  CardMedia,
} from "@mui/material";
import VoteBtn from "../button/votebtn/VoteBtn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import moment from "moment";
import TablePagination from "./tablepagination/TablePagination";
import TableListPagination from "./tablepagination/TablePagination";
import LoadingButton from "@mui/lab/LoadingButton";
import { coinVoteRequest } from "../../../store/action";
import { defaultColor } from "../../../common/common";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import VotePopupAds from "../../ads/votepopupads/VotePopupAds";

const ListingTable = ({
  tableData,
  page,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
  setPage,
  windowInnerWidth,
  total,
}: any) => {
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  const dispatch: any = useDispatch();
  const location: any = useLocation();

  console.log(location?.pathname);
  const scrollHandler = () => {
    setPage({
      ...page,
      pagination: page.pagination + 1,
      scroll: true,
    });
  };

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
    const successHandler = (res: any) => {
      setOpenCaptcha(false);
      setVote({ ...vote, initial: true, completed: false, captcha: false });
      setTimeout(function () {
        toast.success(
          <Box>
            <Stack direction="row" spacing={2} alignItems="center">
              <CheckCircleRoundedIcon sx={{ color: "#5CE32D", fontSize: 50 }} />
              <Typography sx={{ fontSize: ".85rem" }}>
                {res?.data?.data}
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

        setVote({ ...vote, initial: false, completed: true, captcha: false });
      }, 2000);
    };
    const errorHandler = (err: any) => {
      console.log(err);
    };

    dispatch(coinVoteRequest(slug, successHandler, errorHandler));
  };
  return (
    <Stack direction="column" spacing={2}>
      <TableContainer component={Paper} className="tableFixHead">
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
                {location && location?.pathname === "/coins/presales" && (
                  <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
                    Presale Start Date
                  </TableCell>
                )}
                {location && location?.pathname === "/coins/presales" && (
                  <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
                    Presale End Date
                  </TableCell>
                )}

                {location && location?.pathname !== "/coins/presales" && (
                  <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
                    Market Cap
                  </TableCell>
                )}
                <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
                  Price
                </TableCell>
                {location && location?.pathname !== "/coins/presales" && (
                  <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
                    24h
                  </TableCell>
                )}
                {location && location?.pathname !== "/coins/presales" && (
                  <TableCell sx={{ color: "#FFFFF5", fontWeight: "bold" }}>
                    7d
                  </TableCell>
                )}
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
                      {data && data?.network_icon !== null ? (
                        <Avatar
                          alt={data?.name}
                          src={`${serverAPIUrl}public/uploads/network_icons/${data?.network_icon}`}
                          sx={{ width: 25, height: 25, borderRadius: 0 }}
                        />
                      ) : (
                        <Typography variant="caption">--</Typography>
                      )}
                      {/* 
<Stack direction="column" spacing={0.2}>
                      {data && data?.network_icon?.length !== 0 ? (
                        data &&
                        data?.network_icon?.map((item: any, index: number) => (
                          <Avatar
                            alt={data?.name}
                            src={`${serverAPIUrl}public/uploads/network_icons/${item[index]}`}
                            sx={{ width: 41, height: 11, borderRadius: 0 }}
                          />
                        ))
                      ) : (
                        <Typography variant="caption">--</Typography>
                      )}
                    </Stack> */}
                    </TableCell>

                    {location && location?.pathname === "/coins/presales" && (
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
                            {data && data?.presale_start_date !== null ? (
                              moment(data?.presale_start_date).format(
                                "DD MMM YYYY"
                              )
                            ) : (
                              <span style={{ color: "#7a7a7a" }}>--</span>
                            )}
                          </Link>
                        </Typography>
                      </TableCell>
                    )}

                    {location && location?.pathname === "/coins/presales" && (
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
                            {data && data?.presale_end_date !== null ? (
                              moment(data?.presale_end_date).format(
                                "DD MMM YYYY"
                              )
                            ) : (
                              <span style={{ color: "#7a7a7a" }}>--</span>
                            )}
                          </Link>
                        </Typography>
                      </TableCell>
                    )}

                    {location && location?.pathname !== "/coins/presales" && (
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
                    )}
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
                    {location && location?.pathname !== "/coins/presales" && (
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
                            sx={{
                              alignItems: "center",
                              justifyContent: "center",
                            }}
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
                    )}
                    {location && location?.pathname !== "/coins/presales" && (
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
                            sx={{
                              alignItems: "center",
                              justifyContent: "center",
                            }}
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
                    )}
                    <TableCell
                      sx={{ color: "#FFFFFF", border: 0, minWidth: 90 }}
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
                          {moment(new Date(data?.listed)).fromNow()}
                        </Link>
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ color: "#FFFFFF", border: 0 }}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ minWidth: 50 }}>
                          <Typography variant="caption">
                            {" "}
                            {data && data?.vote !== null ? (
                              data?.vote
                            ) : (
                              <Typography variant="caption">--</Typography>
                            )}
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
                              PaperProps={{
                                style: {
                                  backgroundColor: "transparent",
                                  boxShadow: "none",
                                  overflow: "hidden",
                                },
                              }}
                            >
                              <DialogContent
                                sx={{
                                  "&.MuiDialogContent-root": {
                                    padding: 0,
                                    overflow: "hidden",
                                    width:
                                      windowInnerWidth && windowInnerWidth > 900
                                        ? 500
                                        : "100%",
                                  },
                                }}
                              >
                                <Box
                                  p={4}
                                  sx={{
                                    width: "auto",
                                    height: "auto",
                                    backgroundColor: "#000000",
                                    border: "2px solid #121528",
                                    borderRadius: 3,
                                  }}
                                >
                                  <Stack
                                    direction="column"
                                    spacing={3}
                                    alignItems="center"
                                    justifyContent="center"
                                  >
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        color: "#FFFFFF",
                                        fontWeight: 400,
                                        fontSize: "1rem",
                                      }}
                                    >
                                      Vote for{" "}
                                      <span
                                        style={{
                                          color: "#1FD47E",
                                          fontWeight: 500,
                                        }}
                                      >
                                        {data && data?.name}
                                      </span>{" "}
                                      & prove that you are not a robot
                                    </Typography>
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

                                    <VotePopupAds />

                                    <Button
                                      variant="contained"
                                      sx={{
                                        borderRadius: 10,
                                        backgroundColor: "#00B6FC",
                                        textTransform: "none",
                                      }}
                                      onClick={captchaOnClose}
                                    >
                                      Close this window
                                    </Button>
                                  </Stack>
                                </Box>
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
                          data?.badges?.length > 0 &&
                          data?.badges?.map((item: any, index: number) => (
                            <Avatar
                              key={index}
                              alt={item?.name}
                              src={`${serverAPIUrl}public/uploads/badge_icons/${
                                parseInt(item?.status) === 1
                                  ? item && item?.active_icon
                                  : item && item?.inactive_icon
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
          total={total}
        />
      </Stack>
    </Stack>
  );
};

export default ListingTable;
