import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Divider, IconButton, Stack, Typography } from "@mui/material";
import ago from "ts-ago";
import TimeAgo from "javascript-time-ago";
import { toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { sendNotificationEmailRequest } from "../../../store/action";

const TablesWithHead = ({ rows, rowHeader, mailer, variant }: any) => {
  const timeAgo = new TimeAgo("en-US");
  const dispatch = useDispatch();
  const diffDays = (date: any, otherDate: any) =>
    Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
  const sendMailHandler = (val: any) => {
    const successHandler = (res: any) => {
      console.log(res);

      toast.success(`${res?.data?.data}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    const errorHandler = (err: any) => {
      console.log(err);
      toast.error(`${err.error.message.response.request.responseText}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };
    dispatch(sendNotificationEmailRequest(val, successHandler, errorHandler));
  };
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
            <TableCell
              align="left"
              sx={{ fontWeight: 700, padding: 0.5, color: "#373163" }}
            >
              #
            </TableCell>
            {rowHeader &&
              rowHeader.map((title: any, index: number) => (
                <TableCell
                  align="left"
                  key={index}
                  sx={{ fontWeight: 700, padding: 0.5, color: "#373163" }}
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
                    <IconButton
                      sx={{ padding: 0 }}
                      onClick={() => sendMailHandler(data?.id)}
                    >
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
            rows.slice(0, 13).map((data: any, index: number) => (
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
                  {/* {timeAgo.format(new Date(data?.time))} */}
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
                      <span style={{ color: "#FF0000" }}>Blocked</span>
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
                    {data?.adList !== 0 && (
                      <PopupState
                        variant="popover"
                        popupId="demo-popup-popover"
                      >
                        {(popupState: any) => (
                          <div>
                            <span
                              style={{ color: "#7676ea" }}
                              {...bindTrigger(popupState)}
                            >
                              {data?.adList?.length} Items
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
                              <Stack direction="column" spacing={0.2} py={0.7}>
                                {parseInt(data?.adList) !== 0 &&
                                  data?.adList?.length !== 0 &&
                                  data?.adList?.map(
                                    (list: any, index: number) => (
                                      <Typography
                                        key={index}
                                        sx={{ px: 2, fontSize: ".65rem" }}
                                      >
                                        {list && list?.name}
                                      </Typography>
                                    )
                                  )}
                                {/* <Divider
                                flexItem
                                orientation="horizontal"
                                variant="fullWidth"
                              /> */}
                              </Stack>
                            </Popover>
                          </div>
                        )}
                      </PopupState>
                    )}
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
                  {/* {timeAgo.format(new Date(data && data?.startDate))} */}
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
                  {data?.days} Days
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
                  {/* {timeAgo.format(new Date(data?.orderCreated))} */}
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
                      <span style={{ color: "#FF0000" }}>Blocked</span>
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
