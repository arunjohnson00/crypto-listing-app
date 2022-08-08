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
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";
import MobileSinglePageTab from "../singlepagetab/MobileSinglePageTab";

const MobileSingleCoinPageAccordion = () => {
  const latestNews = useSelector((data: any) => {
    return data?.commonReducer?.latest_news;
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
          <Grid item xs={12}>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
              py={0}
            >
              <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
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
                  {"0xED3F52c46280ad96485323Fb6a51242cb4CA45F5".substring(
                    0,
                    7
                  ) +
                    "........." +
                    "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5".slice(-6)}
                </Typography>
                <CopyToClipboard
                  options={{ message: "" }}
                  text={copyValue}
                  onCopy={() => setCopied(true)}
                >
                  <IconButton
                    sx={{ paddingLeft: 1 }}
                    onClick={() => {
                      setCopyValue(
                        "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5"
                      );
                    }}
                  >
                    <Tooltip title={`${copied ? "Copied" : "Copy this Token"}`}>
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
          <Grid item xs={12}>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
              py={0}
            >
              <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
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
                  {"0xED3F52c46280ad96485323Fb6a51242cb4CA45F5".substring(
                    0,
                    7
                  ) +
                    "........." +
                    "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5".slice(-6)}
                </Typography>
                <CopyToClipboard
                  options={{ message: "" }}
                  text={copyValue}
                  onCopy={() => setCopied(true)}
                >
                  <IconButton
                    sx={{ paddingLeft: 1 }}
                    onClick={() => {
                      setCopyValue(
                        "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5"
                      );
                    }}
                  >
                    <Tooltip title={`${copied ? "Copied" : "Copy this Token"}`}>
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
          <Grid item xs={12}>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
              py={0}
            >
              <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
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
                  {"0xED3F52c46280ad96485323Fb6a51242cb4CA45F5".substring(
                    0,
                    7
                  ) +
                    "........." +
                    "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5".slice(-6)}
                </Typography>
                <CopyToClipboard
                  options={{ message: "" }}
                  text={copyValue}
                  onCopy={() => setCopied(true)}
                >
                  <IconButton
                    sx={{ paddingLeft: 1 }}
                    onClick={() => {
                      setCopyValue(
                        "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5"
                      );
                    }}
                  >
                    <Tooltip title={`${copied ? "Copied" : "Copy this Token"}`}>
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
            Safemoon Chart
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
                  $0.00589303
                </Typography>
              </Stack>
              <Stack direction="row" mt={0.9}>
                <Box sx={{ width: "100%" }}>
                  <LinearProgress value={60} variant="determinate" />
                </Box>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                mt={0.3}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#FFFFF5", fontSize: "0.55rem" }}
                >
                  Low:$0
                </Typography>
                <Stack direction="row">
                  <NativeSelect
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
                  </NativeSelect>
                  <Typography
                    variant="caption"
                    sx={{ color: "#FFFFF5", fontSize: "0.55rem" }}
                  >
                    High: $0.00589303
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
                    All Time High
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 12, height: 12 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  $0.00589303
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
                      sx={{ width: 12, height: 12 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  Dec 13 , 2021
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
                    Volume 24h
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 12, height: 12 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#C61F0A" }}>
                  20%
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
                      sx={{ width: 12, height: 12 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  $77788
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
                      sx={{ width: 12, height: 12 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  $77788
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
                      sx={{ width: 12, height: 12 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  81OT DOGH
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
                      sx={{ width: 12, height: 12 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  81OT DOGH
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
              <Stack direction="column" spacing={1}>
                <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                  Number of Liquidity Pools
                </Typography>
                <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                  43
                </Typography>
              </Stack>
              <Divider
                variant="middle"
                flexItem
                orientation="vertical"
                sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
              />

              <Stack direction="column" spacing={1}>
                <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                  Total in Liquidity Pool
                </Typography>
                <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                  $203456
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
