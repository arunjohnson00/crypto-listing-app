import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import {
  Divider,
  Stack,
  Tooltip,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  IconButton,
  NativeSelect,
  LinearProgress,
  Box,
  Link,
  Button,
} from "@mui/material";
import Iframe from "react-iframe";
import moment from "moment";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";
import MobileSinglePageTab from "../singlepagetab/MobileSinglePageTab";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const MobileSingleCoinPageAccordion = () => {
  const latestNews = useSelector((data: any) => {
    return data?.commonReducer?.latest_news;
  });
  const coinDetailFirstBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_detail_first_block?.data;
  });
  const coinDetailOverview = useSelector((data: any) => {
    return data?.coinReducer?.coin_overview_block?.data;
  });
  const [viewMore, setViewMore] = useState(true);
  const [newsMore, setNewsMore] = useState(true);
  const viewmoreHandler = () => {
    setViewMore(!viewMore);
  };

  const viewNewsMoreHandler = () => {
    setNewsMore(!newsMore);
  };
  const [copyValue, setCopyValue] = useState(
    "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5"
  );
  const [copied, setCopied] = useState(false);
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  return (
    <div style={{ width: "100%" }}>
      <Accordion
        disableGutters={true}
        defaultExpanded
        sx={{
          backgroundColor: "transparent",
          color: "#FFFFFF",
        }}
      >
        <AccordionSummary
          sx={{ padding: 0 }}
          expandIcon={<ExpandMoreIcon sx={{ color: "#787878" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title="Delete">
              <Avatar
                src={ToolTipImage}
                sx={{ width: 14, height: 14 }}
              ></Avatar>
            </Tooltip>
            <Typography
              variant="body2"
              sx={{ color: "#23E2A0", fontWeight: 500 }}
            >
              Contact Address
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.contract_address?.map(
              (item: any, index: number) => (
                <Grid item xs={12} key={index}>
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    py={0}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="https://mui.com/static/images/avatar/1.jpg"
                        sx={{ width: 22, height: 22 }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#ffffffa1",
                          fontSize: "0.67rem",
                          fontWeight: "500",
                        }}
                      >
                        Binance Smart Chain
                      </Typography>
                    </Stack>
                    <Stack
                      direction={{ xs: "row", sm: "row", md: "row" }}
                      sx={{ alignItems: "center" }}
                      spacing={0}
                    >
                      {" "}
                      <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                        {`${item && item?.address?.substring(0, 14)} 
                      .........
                      ${item && item?.address?.slice(-6)}`}
                      </Typography>
                      <CopyToClipboard
                        options={{ message: "" }}
                        text={copyValue}
                        onCopy={() => setCopied(true)}
                      >
                        <IconButton
                          sx={{ paddingLeft: 1 }}
                          onClick={() => {
                            setCopyValue(item && item?.address);
                          }}
                        >
                          <Tooltip
                            title={`${copied ? "Copied" : "Copy this Token"}`}
                          >
                            <ContentCopyIcon
                              sx={{
                                color: `${copied ? "#23D471" : "#23D471"}`,
                                fontSize: 15,
                              }}
                            />
                          </Tooltip>
                        </IconButton>
                      </CopyToClipboard>
                    </Stack>
                  </Stack>
                </Grid>
              )
            )}
        </AccordionDetails>
      </Accordion>
      <Divider
        variant="fullWidth"
        flexItem
        orientation={"horizontal"}
        sx={{ borderColor: "#342D61", borderBottomWidth: 2 }}
      />
      <Accordion
        disableGutters={true}
        defaultExpanded
        sx={{
          backgroundColor: "transparent",
          color: "#FFFFFF",
        }}
      >
        <AccordionSummary
          sx={{ padding: 0 }}
          expandIcon={<ExpandMoreIcon sx={{ color: "#787878" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{ color: "#5FD6E9", fontWeight: 700, fontSize: "1.1rem" }}
          >
            {coinDetailFirstBlock && coinDetailFirstBlock[0]?.name} Chart
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Iframe
            url="https://coinbrain.com/embed/0x55d398326f99059ff775485246999027b3197955?theme=dark&chart=1&trades=1"
            width="100%"
            height="800"
            id="myId"
            className="myClassname"
            display="block"
            position="relative"
            frameBorder={0}
          />
          <MobileSinglePageTab />
        </AccordionDetails>
      </Accordion>
      <Divider
        variant="fullWidth"
        flexItem
        orientation={"horizontal"}
        sx={{ borderColor: "#342D61", borderBottomWidth: 2 }}
      />

      <Accordion
        disableGutters={true}
        defaultExpanded
        sx={{
          backgroundColor: "transparent",
          color: "#FFFFFF",
        }}
      >
        <AccordionSummary
          sx={{ padding: 0 }}
          expandIcon={<ExpandMoreIcon sx={{ color: "#787878" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography
            sx={{ color: "#5FD6E9", fontWeight: 700, fontSize: "1.1rem" }}
          >
            Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Grid xs={12} mb={0}>
            <Stack direction="column" mt={1.2}>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1.5}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  Price
                </Typography>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.current_price !== null &&
                  coinDetailOverview[0]?.current_price !== ""
                    ? "$" + coinDetailOverview[0]?.current_price
                    : "NA"}
                </Typography>
              </Stack>
              <Stack direction="row" mt={0.9}>
                <Box
                  sx={{
                    width: "100%",
                    color: "#6252e7",
                  }}
                >
                  <LinearProgress
                    value={60}
                    variant="determinate"
                    color="inherit"
                  />
                </Box>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={0.3}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#FFFFF5", fontSize: "0.65rem" }}
                >
                  Low:{" "}
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.price_low !== null &&
                  coinDetailOverview[0]?.price_low !== ""
                    ? "$" + coinDetailOverview[0]?.price_low
                    : "NA"}
                </Typography>
                <Stack direction="row">
                  {/* <NativeSelect
                  id="select"
                  sx={{
                    color: "#B6B6B9",
                    backgroundColor: "#010519",
                    fontSize: "0.55rem",
                    borderBottom: 0,
                    paddingRight: "7px",
                    "&:before": {
                      borderBottom: 0,
                    },
                    "&:after": {
                      borderBottom: 0,
                    },
                    "&.MuiNativeSelect-select-MuiInputBase-input-MuiInput-input .MuiNativeSelect-icon":
                      {
                        color: "red",
                      },
                    icon: {
                      fill: "red",
                    },
                  }}
                >
                  <option value="10">24h</option>
                  <option value="20">7h</option>
                </NativeSelect> */}
                  <Typography
                    variant="caption"
                    sx={{ color: "#FFFFF5", fontSize: "0.65rem" }}
                  >
                    High:{" "}
                    {coinDetailOverview &&
                    coinDetailOverview[0]?.price_high !== null &&
                    coinDetailOverview[0]?.price_high !== ""
                      ? "$" + coinDetailOverview[0]?.price_high
                      : "NA"}
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={4}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    Total Holders
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.total_holders !== null &&
                  coinDetailOverview[0]?.total_holders !== ""
                    ? coinDetailOverview[0]?.total_holders
                    : "NA"}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    In Watchlist
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  API need
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    Total Liqudity in pool
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.liquidity_pool_total !== null &&
                  coinDetailOverview[0]?.liquidity_pool_total !== ""
                    ? coinDetailOverview[0]?.liquidity_pool_total
                    : "NA"}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    All Time High
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.all_time_high !== null &&
                  coinDetailOverview[0]?.all_time_high !== ""
                    ? coinDetailOverview[0]?.all_time_high
                    : "NA"}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    All Time High Date
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.all_time_high_date !== null &&
                  coinDetailOverview[0]?.all_time_high_date !== ""
                    ? moment(
                        new Date(coinDetailOverview[0]?.all_time_high_date)
                      ).format("MMM DD YY")
                    : "NA"}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    1h %
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", justifyContent: "flex-end" }}
                  spacing={0}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_1h !== null &&
                  Math.sign(
                    parseInt(coinDetailOverview[0]?.percent_change_1h)
                  ) === -1 ? (
                    <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                  ) : (
                    coinDetailOverview &&
                    coinDetailOverview[0]?.percent_change_1h !== null && (
                      <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                    )
                  )}
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        coinDetailOverview &&
                        Math.sign(
                          parseInt(coinDetailOverview[0]?.percent_change_1h)
                        ) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 500,
                    }}
                  >
                    {coinDetailOverview &&
                    coinDetailOverview[0]?.percent_change_1h !== null &&
                    coinDetailOverview[0]?.percent_change_1h !== "" ? (
                      parseFloat(coinDetailOverview[0]?.percent_change_1h)
                        .toFixed(2)
                        .replace("-", "") + "%"
                    ) : (
                      <span style={{ color: "#7a7a7a" }}>--</span>
                    )}
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    24h %
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", justifyContent: "flex-end" }}
                  spacing={0}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_24h !== null &&
                  Math.sign(
                    parseInt(coinDetailOverview[0]?.percent_change_24h)
                  ) === -1 ? (
                    <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                  ) : (
                    coinDetailOverview &&
                    coinDetailOverview[0]?.percent_change_24h !== null && (
                      <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                    )
                  )}
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        coinDetailOverview &&
                        Math.sign(
                          parseInt(coinDetailOverview[0]?.percent_change_24h)
                        ) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 500,
                    }}
                  >
                    {coinDetailOverview &&
                    coinDetailOverview[0]?.percent_change_24h !== null &&
                    coinDetailOverview[0]?.percent_change_24h !== "" ? (
                      parseFloat(coinDetailOverview[0]?.percent_change_24h)
                        .toFixed(2)
                        .replace("-", "") + "%"
                    ) : (
                      <span style={{ color: "#7a7a7a" }}>--</span>
                    )}
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    7d %
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", justifyContent: "flex-end" }}
                  spacing={0}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_7d !== null &&
                  Math.sign(
                    parseInt(coinDetailOverview[0]?.percent_change_7d)
                  ) === -1 ? (
                    <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                  ) : (
                    coinDetailOverview &&
                    coinDetailOverview[0]?.percent_change_7d !== null && (
                      <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                    )
                  )}
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        coinDetailOverview &&
                        Math.sign(
                          parseInt(coinDetailOverview[0]?.percent_change_7d)
                        ) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 500,
                    }}
                  >
                    {coinDetailOverview &&
                    coinDetailOverview[0]?.percent_change_7d !== null &&
                    coinDetailOverview[0]?.percent_change_7d !== "" ? (
                      parseFloat(coinDetailOverview[0]?.percent_change_7d)
                        .toFixed(2)
                        .replace("-", "") + "%"
                    ) : (
                      <span style={{ color: "#7a7a7a" }}>--</span>
                    )}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    30d %
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", justifyContent: "flex-end" }}
                  spacing={0}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_30d !== null &&
                  Math.sign(
                    parseInt(coinDetailOverview[0]?.percent_change_30d)
                  ) === -1 ? (
                    <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                  ) : (
                    coinDetailOverview &&
                    coinDetailOverview[0]?.percent_change_30d !== null && (
                      <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                    )
                  )}
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        coinDetailOverview &&
                        Math.sign(
                          parseInt(coinDetailOverview[0]?.percent_change_30d)
                        ) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 500,
                    }}
                  >
                    {coinDetailOverview &&
                    coinDetailOverview[0]?.percent_change_30d !== null &&
                    coinDetailOverview[0]?.percent_change_30d !== "" ? (
                      parseFloat(coinDetailOverview[0]?.percent_change_30d)
                        .toFixed(2)
                        .replace("-", "") + "%"
                    ) : (
                      <span style={{ color: "#7a7a7a" }}>--</span>
                    )}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    60d %
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", justifyContent: "flex-end" }}
                  spacing={0}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_60d !== null &&
                  Math.sign(
                    parseInt(coinDetailOverview[0]?.percent_change_60d)
                  ) === -1 ? (
                    <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                  ) : (
                    coinDetailOverview &&
                    coinDetailOverview[0]?.percent_change_60d !== null && (
                      <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                    )
                  )}
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        coinDetailOverview &&
                        Math.sign(
                          parseInt(coinDetailOverview[0]?.percent_change_60d)
                        ) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 500,
                    }}
                  >
                    {coinDetailOverview &&
                    coinDetailOverview[0]?.percent_change_60d !== null &&
                    coinDetailOverview[0]?.percent_change_60d !== "" ? (
                      parseFloat(coinDetailOverview[0]?.percent_change_60d)
                        .toFixed(2)
                        .replace("-", "") + "%"
                    ) : (
                      <span style={{ color: "#7a7a7a" }}>--</span>
                    )}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    90d %
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", justifyContent: "flex-end" }}
                  spacing={0}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_90d !== null &&
                  Math.sign(
                    parseInt(coinDetailOverview[0]?.percent_change_90d)
                  ) === -1 ? (
                    <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                  ) : (
                    coinDetailOverview &&
                    coinDetailOverview[0]?.percent_change_90d !== null && (
                      <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                    )
                  )}
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        coinDetailOverview &&
                        Math.sign(
                          parseInt(coinDetailOverview[0]?.percent_change_90d)
                        ) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 500,
                    }}
                  >
                    {coinDetailOverview &&
                    coinDetailOverview[0]?.percent_change_90d !== null &&
                    coinDetailOverview[0]?.percent_change_90d !== "" ? (
                      parseFloat(coinDetailOverview[0]?.percent_change_90d)
                        .toFixed(2)
                        .replace("-", "") + "%"
                    ) : (
                      <span style={{ color: "#7a7a7a" }}>--</span>
                    )}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    Volume 24h
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography
                  variant="caption"
                  sx={{ color: "#ff0000", fontWeight: 600 }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.volume_24h !== null &&
                  coinDetailOverview[0]?.volume_24h !== ""
                    ? coinDetailOverview[0]?.volume_24h
                    : "NA"}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    Market Cap
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.market_cap !== null &&
                  coinDetailOverview[0]?.market_cap !== ""
                    ? coinDetailOverview[0]?.market_cap
                    : "NA"}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    Fully Diluted Market Cap
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.fully_diluted_market_cap !== null &&
                  coinDetailOverview[0]?.fully_diluted_market_cap !== ""
                    ? parseFloat(
                        coinDetailOverview[0]?.fully_diluted_market_cap
                      ).toFixed(3)
                    : "NA"}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    Circulating Supply
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.circulating_supply !== null &&
                  coinDetailOverview[0]?.circulating_supply !== ""
                    ? coinDetailOverview[0]?.circulating_supply
                    : "NA"}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                    Total Supply
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.total_supply !== null &&
                  coinDetailOverview[0]?.total_supply !== ""
                    ? coinDetailOverview[0]?.total_supply
                    : "NA"}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Divider
        variant="fullWidth"
        flexItem
        orientation={"horizontal"}
        sx={{ borderColor: "#342D61", borderBottomWidth: 2 }}
      />
      <Accordion
        disableGutters={true}
        defaultExpanded
        sx={{
          backgroundColor: "transparent",
          color: "#FFFFFF",
        }}
      >
        <AccordionSummary
          sx={{ padding: 0 }}
          expandIcon={<ExpandMoreIcon sx={{ color: "#787878" }} />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography
            sx={{ color: "#5FD6E9", fontWeight: 700, fontSize: "1.1rem" }}
          >
            Liqudity Pool
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Grid xs={12} mt={0}>
            <Stack
              direction="row"
              mt={3}
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="column" spacing={1.6}>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  Number of Liquidity Pools
                </Typography>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.liquidity_pool_number !== null &&
                  coinDetailOverview[0]?.liquidity_pool_number !== ""
                    ? coinDetailOverview[0]?.liquidity_pool_number
                    : "NA"}
                </Typography>
              </Stack>
              <Divider
                variant="middle"
                flexItem
                orientation="vertical"
                sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
              />

              <Stack direction="column" spacing={1.6}>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  Total in Liquidity Pool
                </Typography>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.liquidity_pool_total !== null &&
                  coinDetailOverview[0]?.liquidity_pool_total !== ""
                    ? "$" + coinDetailOverview[0]?.liquidity_pool_total
                    : "NA"}
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="column" mt={3} spacing={2}>
              <Stack direction="column" spacing={0.3}>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="body2" sx={{ color: "#1EC18D" }}>
                    Safemoonswap
                  </Typography>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                  />
                  <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                    SFM/BUSD LP Holding :
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    20,3456,555 BUSD
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#038CBF", fontWeight: 600 }}
                  >
                    ($10,0000,08)
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="column" spacing={0.3}>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="body2" sx={{ color: "#1EC18D" }}>
                    Safemoonswap
                  </Typography>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                  />
                  <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                    SFM/BNB LP Holding :
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    20,3456,555 BNB
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#038CBF", fontWeight: 600 }}
                  >
                    ($10,0000,08)
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="column" spacing={0.3}>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="body2" sx={{ color: "#1EC18D" }}>
                    Pc V2
                  </Typography>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                  />
                  <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                    SFM/BNB LP Holding :
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    20,3456,555 BNB
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#038CBF", fontWeight: 600 }}
                  >
                    ($10,0000,08)
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="column" spacing={0.3}>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#1EC18D" }}>
                    Pc V2
                  </Typography>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                  />
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    SFM/BUSD LP Holding :
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    20,3456,555 BUSD
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#038CBF", fontWeight: 600 }}
                  >
                    ($10,0000,08)
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="column" spacing={0.3}>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#1EC18D" }}>
                    Pc V2
                  </Typography>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                  />
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    SFM/BUSDT LP Holding :
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    20,3456,555 BUSDT
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#038CBF", fontWeight: 600 }}
                  >
                    ($10,0000,08)
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="column" spacing={0.3}>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#1EC18D" }}>
                    Pc V2
                  </Typography>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                  />
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    SFM/Cake LP Holding :
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    20,3456,555 Cake
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#038CBF", fontWeight: 600 }}
                  >
                    ($10,0000,08)
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="column" spacing={0.3}>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#1EC18D" }}>
                    Pc V2
                  </Typography>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                  />
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    SFM/ETH LP Holding :
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    20,3456,555 ETH
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#038CBF", fontWeight: 600 }}
                  >
                    ($10,0000,08)
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="column" spacing={0.3}>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#1EC18D" }}>
                    Pc V2
                  </Typography>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                  />
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    SFM/BTC LP Holding :
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    20,3456,555 BTC
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#038CBF", fontWeight: 600 }}
                  >
                    ($10,0000,08)
                  </Typography>
                </Stack>
              </Stack>

              <SlideDown className={"my-dropdown-slidedown"} closed={viewMore}>
                <Stack direction="column" spacing={0.3}>
                  <Stack direction="row" spacing={0.8}>
                    <Typography variant="caption" sx={{ color: "#1EC18D" }}>
                      Pc V2
                    </Typography>
                    <Divider
                      variant="middle"
                      flexItem
                      orientation="vertical"
                      sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                    />
                    <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                      SFM/BTC LP Holding :
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.8}>
                    <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                      20,3456,555 BTC
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#038CBF", fontWeight: 600 }}
                    >
                      ($10,0000,08)
                    </Typography>
                  </Stack>
                </Stack>
              </SlideDown>
              <Link
                sx={{ color: "#FFFFF5", fontSize: ".7rem" }}
                onClick={viewmoreHandler}
              >
                {viewMore === true ? "View More" : "View Less"}
              </Link>
            </Stack>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Divider
        variant="fullWidth"
        flexItem
        orientation={"horizontal"}
        sx={{ borderColor: "#342D61", borderBottomWidth: 2 }}
      />
      <Accordion
        disableGutters={true}
        defaultExpanded
        sx={{
          backgroundColor: "transparent",
          color: "#FFFFFF",
        }}
      >
        <AccordionSummary
          sx={{ padding: 0 }}
          expandIcon={<ExpandMoreIcon sx={{ color: "#787878" }} />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography
            sx={{ color: "#5FD6E9", fontWeight: 700, fontSize: "1.1rem" }}
          >
            Latest News
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {latestNews &&
            latestNews?.items?.slice(0, 2).map((item: any, index: number) => (
              <Fragment key={index}>
                {" "}
                <Stack direction="column" spacing={1} py={1.5}>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    <a
                      href={item && item?.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {" "}
                      {item && item?.title.substring(0, 80)}...
                    </a>
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#5FD6E9", fontWeight: 500 }}
                    >
                      {item && item?.author}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#494A4A", fontWeight: 500 }}
                    >
                      {item && timeAgo.format(new Date(item?.published))}
                    </Typography>
                  </Stack>
                </Stack>
                <Divider
                  variant="fullWidth"
                  flexItem
                  orientation={"horizontal"}
                  sx={{ borderColor: "#181921", borderBottomWidth: 2 }}
                />
              </Fragment>
            ))}

          <SlideDown className={"my-dropdown-slidedown"} closed={newsMore}>
            {latestNews &&
              latestNews?.items
                ?.slice(2, latestNews?.items?.length)
                .map((item: any, index: number) => (
                  <Fragment key={index}>
                    {" "}
                    <Stack direction="column" spacing={1} py={1.5}>
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 600,
                          fontSize: "1rem",
                        }}
                      >
                        <a
                          href={item && item?.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {" "}
                          {item && item?.title.substring(0, 80)}...
                        </a>
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#5FD6E9", fontWeight: 500 }}
                        >
                          {item && item?.author}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#494A4A", fontWeight: 500 }}
                        >
                          {item && timeAgo.format(new Date(item?.published))}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Divider
                      variant="fullWidth"
                      flexItem
                      orientation={"horizontal"}
                      sx={{ borderColor: "#181921", borderBottomWidth: 2 }}
                    />
                  </Fragment>
                ))}
          </SlideDown>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#04B865", textTransform: "capitalize" }}
            onClick={viewNewsMoreHandler}
          >
            Read {newsMore === true ? "More" : "Less"}
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MobileSingleCoinPageAccordion;
