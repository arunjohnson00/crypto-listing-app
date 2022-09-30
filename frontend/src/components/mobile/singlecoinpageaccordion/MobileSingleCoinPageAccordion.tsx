import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Parser from "html-react-parser";
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
import CoinPageChart from "../../desktop/coinpagechart/CoinPageChart";
import {
  coinPriceGraphBlockRequest,
  latestNewsRequest,
} from "../../../store/action";
import { useLocation } from "react-router-dom";
import MobileCoinPageChart from "../coinpagechart/MobileCoinPageChart";

const MobileSingleCoinPageAccordion = ({ variant }: any) => {
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const [resStatus, setResStatus] = useState<any>();
  const [priceFilter, setPriceFilter] = useState(1);

  const coinDetailFirstBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_detail_first_block?.data;
  });
  const coinDetailOverview = useSelector((data: any) => {
    return data?.coinReducer?.coin_overview_block?.data;
  });
  const coinPriceWidget = useSelector((data: any) => {
    return data?.coinReducer?.coin_price_graph_block?.data;
  });
  const latestNews = useSelector((data: any) => {
    return data?.commonReducer?.latest_news_feed?.data;
  });
  const [viewMore, setViewMore] = useState(true);
  const [newsMore, setNewsMore] = useState(true);
  const viewmoreHandler = () => {
    setViewMore(!viewMore);
  };
  const priceMaxMinHandler = (val: any) => {
    setPriceFilter(parseInt(val));
  };
  const viewNewsMoreHandler = () => {
    setNewsMore(!newsMore);
  };
  const [copyValue, setCopyValue] = useState(
    "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5"
  );
  const [copied, setCopied] = useState(false);
  const copyHandler = (e: any) => {
    setCopied(true);
    setTimeout(function () {
      setCopied(false);
    }, 500);
  };
  const filteredBNB =
    coinDetailOverview &&
    coinDetailOverview[0]?.address?.filter(
      (result: any) => parseInt(result.id) === 2
    );
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {
      setResStatus(err?.error?.message?.response?.data?.response);
    };

    dispatch(
      coinPriceGraphBlockRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, []);

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(latestNewsRequest({ count: 15 }, successHandler, errorHandler));
  }, [dispatch]);
  return (
    <div style={{ width: "100%" }}>
      {variant === "full" && (
        <>
          {" "}
          <Accordion
            disableGutters={true}
            defaultExpanded
            sx={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              paddingY: 1,
            }}
          >
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#787878" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  variant="body2"
                  sx={{ color: "#787878", fontWeight: 400, fontSize: ".65rem" }}
                >
                  Contact Address
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0, paddingBottom: 1 }}>
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
                          <Typography
                            variant="caption"
                            sx={{ color: "#FFFFF5" }}
                          >
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
                                title={`${
                                  copied ? "Copied" : "Copy this Token"
                                }`}
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
            sx={{ borderColor: "#0b1640", borderBottomWidth: 1 }}
          />
        </>
      )}
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
        <AccordionDetails sx={{ padding: 0, paddingBottom: 3 }}>
          {coinDetailOverview &&
          parseInt(coinDetailOverview[0]?.show_widget) === 1 ? (
            <Iframe
              url={`https://coinbrain.com/embed/bnb-${
                coinDetailOverview && filteredBNB[0]?.address
              }?theme=custom&accent=f5f5f5&padding=28&background=000516&chart=1&trades=1`}
              width="100%"
              height="1040"
              id="myId"
              className="myClassname"
              display="block"
              position="relative"
              frameBorder={0}
            />
          ) : (
            <Fragment>
              {coinPriceWidget &&
                coinPriceWidget?.price?.length !== 0 &&
                resStatus !== false && (
                  <MobileCoinPageChart
                    data={coinPriceWidget && coinPriceWidget}
                  />
                )}
            </Fragment>
          )}
          {/* <MobileSinglePageTab /> */}
        </AccordionDetails>
      </Accordion>
      <Divider
        variant="fullWidth"
        flexItem
        orientation={"horizontal"}
        sx={{ borderColor: "#0b1640", borderBottomWidth: 1 }}
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
        <AccordionDetails sx={{ padding: 0, paddingBottom: 3 }}>
          <Stack direction="column" mt={1.2}>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1.5}
            >
              <Typography
                variant="caption"
                sx={{ color: "#B6B6B9", fontSize: "0.75rem" }}
              >
                Price
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#FFFFF5", fontSize: "0.85rem", fontWeight: 500 }}
              >
                {coinDetailOverview && coinDetailOverview[0]?.price !== null ? (
                  String(Math.trunc(parseFloat(coinDetailOverview[0]?.price)))
                    .length > 2 ? (
                    "$ " +
                    Number(
                      parseFloat(coinDetailOverview[0]?.price).toFixed(2)
                    ).toLocaleString()
                  ) : coinDetailOverview &&
                    Math.abs(coinDetailOverview[0]?.price) > 1 ? (
                    "$ " +
                    parseFloat(coinDetailOverview[0]?.price)
                      .toFixed(4)
                      .toLocaleString()
                  ) : (
                    "$ " +
                    parseFloat(coinDetailOverview[0]?.price)
                      .toFixed(9)
                      .toLocaleString()
                  )
                ) : (
                  <span style={{ color: "#7a7a7a" }}>NA</span>
                )}
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
                  sx={{
                    borderRadius: 5,
                    height: 8,
                  }}
                  value={
                    coinDetailOverview && priceFilter === 1
                      ? (
                          (coinDetailOverview[0]?.low_high_price?.one?.min /
                            coinDetailOverview[0]?.low_high_price?.one?.max) *
                          100
                        ).toFixed(0)
                      : coinDetailOverview && priceFilter === 7
                      ? (
                          (coinDetailOverview[0]?.low_high_price?.seven?.min /
                            coinDetailOverview[0]?.low_high_price?.seven?.max) *
                          100
                        ).toFixed(0)
                      : coinDetailOverview && priceFilter === 15
                      ? (
                          (coinDetailOverview[0]?.low_high_price?.fifteen?.min /
                            coinDetailOverview[0]?.low_high_price?.fifteen
                              ?.max) *
                          100
                        ).toFixed(0)
                      : coinDetailOverview &&
                        priceFilter === 30 &&
                        (
                          (coinDetailOverview[0]?.low_high_price?.thirty?.min /
                            coinDetailOverview[0]?.low_high_price?.thirty
                              ?.max) *
                          100
                        ).toFixed(0)
                  }
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
                sx={{ color: "#B6B6B9", fontSize: "0.75rem" }}
              >
                Low:{" "}
                <span
                  style={{
                    color: "#FFFFFF",
                    // fontWeight: 500
                  }}
                >
                  {coinDetailOverview &&
                  priceFilter === 1 &&
                  coinDetailOverview[0]?.low_high_price?.one?.min !== null ? (
                    String(
                      Math.trunc(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.one?.min
                        )
                      )
                    ).length > 2 ? (
                      "$ " +
                      Number(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.one?.min
                        ).toFixed(2)
                      ).toLocaleString()
                    ) : coinDetailOverview &&
                      Math.abs(
                        coinDetailOverview[0]?.low_high_price?.one?.min
                      ) > 1 ? (
                      "$ " +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.one?.min
                      )
                        .toFixed(4)
                        .toLocaleString()
                    ) : (
                      "$ " +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.one?.min
                      )
                        .toFixed(9)
                        .toLocaleString()
                    )
                  ) : (
                    <span style={{ color: "#7a7a7a" }}></span>
                  )}
                  {coinDetailOverview &&
                  priceFilter === 7 &&
                  coinDetailOverview[0]?.low_high_price?.seven?.min !== null ? (
                    String(
                      Math.trunc(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.seven?.min
                        )
                      )
                    ).length > 2 ? (
                      "$ " +
                      Number(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.seven?.min
                        ).toFixed(2)
                      ).toLocaleString()
                    ) : coinDetailOverview &&
                      Math.abs(
                        coinDetailOverview[0]?.low_high_price?.seven?.min
                      ) > 1 ? (
                      "$ " +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.seven?.min
                      )
                        .toFixed(4)
                        .toLocaleString()
                    ) : (
                      "$ " +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.seven?.min
                      )
                        .toFixed(9)
                        .toLocaleString()
                    )
                  ) : (
                    <span style={{ color: "#7a7a7a" }}></span>
                  )}
                  {coinDetailOverview &&
                  priceFilter === 15 &&
                  coinDetailOverview[0]?.low_high_price?.fifteen?.min !==
                    null ? (
                    String(
                      Math.trunc(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.fifteen?.min
                        )
                      )
                    ).length > 2 ? (
                      "$ " +
                      Number(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.fifteen?.min
                        ).toFixed(2)
                      ).toLocaleString()
                    ) : coinDetailOverview &&
                      Math.abs(
                        coinDetailOverview[0]?.low_high_price?.fifteen?.min
                      ) > 1 ? (
                      "$ " +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.fifteen?.min
                      )
                        .toFixed(4)
                        .toLocaleString()
                    ) : (
                      "$ " +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.fifteen?.min
                      )
                        .toFixed(9)
                        .toLocaleString()
                    )
                  ) : (
                    <span style={{ color: "#7a7a7a" }}></span>
                  )}
                  {coinDetailOverview &&
                  priceFilter === 30 &&
                  coinDetailOverview[0]?.low_high_price?.thirty?.min !==
                    null ? (
                    String(
                      Math.trunc(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.thirty?.min
                        )
                      )
                    ).length > 2 ? (
                      "$ " +
                      Number(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.thirty?.min
                        ).toFixed(2)
                      ).toLocaleString()
                    ) : coinDetailOverview &&
                      Math.abs(
                        coinDetailOverview[0]?.low_high_price?.thirty?.min
                      ) > 1 ? (
                      "$ " +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.thirty?.min
                      )
                        .toFixed(4)
                        .toLocaleString()
                    ) : (
                      "$ " +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.thirty?.min
                      )
                        .toFixed(9)
                        .toLocaleString()
                    )
                  ) : (
                    <span style={{ color: "#7a7a7a" }}></span>
                  )}
                </span>
              </Typography>
              <Stack direction="row" spacing={1}>
                <NativeSelect
                  id="select"
                  onChange={(e: any) => priceMaxMinHandler(e.target.value)}
                  sx={{
                    color: "#B6B6B9",
                    backgroundColor: "#010519",
                    fontSize: "0.75rem",
                    borderBottom: 0,

                    "&:before": {
                      border: 0,
                    },
                    "&:after": {
                      border: 0,
                    },
                    "& .MuiNativeSelect-icon": {
                      color: "#FFFFFF",
                      width: ".8em",
                      height: ".8em",
                    },
                    icon: {
                      fill: "red",
                    },
                  }}
                >
                  <option value="1">1d</option>
                  <option value="7">7d</option>
                  <option value="15">15d</option>
                  <option value="30">30d</option>
                </NativeSelect>
                <Typography
                  variant="caption"
                  sx={{ color: "#B6B6B9", fontSize: "0.75rem" }}
                >
                  High:{" "}
                  <span
                    style={{
                      color: "#FFFFFF",
                      // fontWeight: 500
                    }}
                  >
                    {coinDetailOverview &&
                    priceFilter === 1 &&
                    coinDetailOverview[0]?.low_high_price?.one?.max !== null ? (
                      String(
                        Math.trunc(
                          parseFloat(
                            coinDetailOverview[0]?.low_high_price?.one?.max
                          )
                        )
                      ).length > 2 ? (
                        "$ " +
                        Number(
                          parseFloat(
                            coinDetailOverview[0]?.low_high_price?.one?.max
                          ).toFixed(2)
                        ).toLocaleString()
                      ) : coinDetailOverview &&
                        Math.abs(
                          coinDetailOverview[0]?.low_high_price?.one?.max
                        ) > 1 ? (
                        "$ " +
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.one?.max
                        )
                          .toFixed(4)
                          .toLocaleString()
                      ) : (
                        "$ " +
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.one?.max
                        )
                          .toFixed(9)
                          .toLocaleString()
                      )
                    ) : (
                      <span style={{ color: "#7a7a7a" }}></span>
                    )}
                    {coinDetailOverview &&
                    priceFilter === 7 &&
                    coinDetailOverview[0]?.low_high_price?.seven?.max !==
                      null ? (
                      String(
                        Math.trunc(
                          parseFloat(
                            coinDetailOverview[0]?.low_high_price?.seven?.max
                          )
                        )
                      ).length > 2 ? (
                        "$ " +
                        Number(
                          parseFloat(
                            coinDetailOverview[0]?.low_high_price?.seven?.max
                          ).toFixed(2)
                        ).toLocaleString()
                      ) : coinDetailOverview &&
                        Math.abs(
                          coinDetailOverview[0]?.low_high_price?.seven?.max
                        ) > 1 ? (
                        "$ " +
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.seven?.max
                        )
                          .toFixed(4)
                          .toLocaleString()
                      ) : (
                        "$ " +
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.seven?.max
                        )
                          .toFixed(9)
                          .toLocaleString()
                      )
                    ) : (
                      <span style={{ color: "#7a7a7a" }}></span>
                    )}
                    {coinDetailOverview &&
                    priceFilter === 15 &&
                    coinDetailOverview[0]?.low_high_price?.fifteen?.max !==
                      null ? (
                      String(
                        Math.trunc(
                          parseFloat(
                            coinDetailOverview[0]?.low_high_price?.fifteen?.max
                          )
                        )
                      ).length > 2 ? (
                        "$ " +
                        Number(
                          parseFloat(
                            coinDetailOverview[0]?.low_high_price?.fifteen?.max
                          ).toFixed(2)
                        ).toLocaleString()
                      ) : coinDetailOverview &&
                        Math.abs(
                          coinDetailOverview[0]?.low_high_price?.fifteen?.max
                        ) > 1 ? (
                        "$ " +
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.fifteen?.max
                        )
                          .toFixed(4)
                          .toLocaleString()
                      ) : (
                        "$ " +
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.fifteen?.max
                        )
                          .toFixed(9)
                          .toLocaleString()
                      )
                    ) : (
                      <span style={{ color: "#7a7a7a" }}></span>
                    )}
                    {coinDetailOverview &&
                    priceFilter === 30 &&
                    coinDetailOverview[0]?.low_high_price?.thirty?.max !==
                      null ? (
                      String(
                        Math.trunc(
                          parseFloat(
                            coinDetailOverview[0]?.low_high_price?.thirty?.max
                          )
                        )
                      ).length > 2 ? (
                        "$ " +
                        Number(
                          parseFloat(
                            coinDetailOverview[0]?.low_high_price?.thirty?.max
                          ).toFixed(2)
                        ).toLocaleString()
                      ) : coinDetailOverview &&
                        Math.abs(
                          coinDetailOverview[0]?.low_high_price?.thirty?.max
                        ) > 1 ? (
                        "$ " +
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.thirty?.max
                        )
                          .toFixed(4)
                          .toLocaleString()
                      ) : (
                        "$ " +
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.thirty?.max
                        )
                          .toFixed(9)
                          .toLocaleString()
                      )
                    ) : (
                      <span style={{ color: "#7a7a7a" }}></span>
                    )}
                  </span>
                </Typography>
              </Stack>
            </Stack>

            <Box mt={3}>
              {" "}
              <Divider
                variant="fullWidth"
                flexItem
                orientation="horizontal"
                sx={{ borderColor: "#0b1640", borderBottomWidth: 1 }}
              />
            </Box>
            <Stack direction="column" spacing={1.5}>
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
                <Typography
                  variant="caption"
                  sx={{
                    color: "#FFFFF5",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.total_holders !== null &&
                  coinDetailOverview[0]?.total_holders !== ""
                    ? coinDetailOverview[0]?.total_holders
                    : "NA"}
                </Typography>
              </Stack>

              {coinDetailOverview &&
                coinDetailOverview[0]?.address?.map(
                  (item: any, index: number) => (
                    <Box key={index}>
                      {item && item?.name !== null && (
                        <Stack
                          direction="row"
                          sx={{ justifyContent: "space-between" }}
                          mt={0}
                          alignItems="center"
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
                            <Typography
                              variant="caption"
                              sx={{ color: "#B6B6B9" }}
                            >
                              {item && item?.name?.length >= 25
                                ? item?.name?.slice(0, 25) + "..."
                                : item?.name}
                            </Typography>
                            <Tooltip title="Delete">
                              <Avatar
                                src={ToolTipImage}
                                sx={{ width: 9, height: 9 }}
                              ></Avatar>
                            </Tooltip>
                          </Stack>

                          <Stack
                            direction={{ xs: "row", sm: "row", md: "row" }}
                            sx={{ alignItems: "center" }}
                            spacing={0.8}
                          >
                            <a
                              href={item?.url}
                              style={{
                                color: "#8A93C9",
                                //textDecoration: "none"
                              }}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Typography
                                variant="caption"
                                sx={
                                  {
                                    //color: "#FFFFF5",fontSize:"0.85rem",fontWeight:500,,
                                    //fontSize: "0.65rem",
                                  }
                                }
                              >
                                {item?.address !== ""
                                  ? item &&
                                    item?.address?.substring(0, 5) +
                                      "..." +
                                      item?.address?.slice(-6)
                                  : "NA"}
                              </Typography>
                            </a>
                            {item?.address !== "" && (
                              <CopyToClipboard
                                options={{ message: "Copy" }}
                                text={item?.address}
                                onCopy={(e: any) => copyHandler(e)}
                              >
                                <IconButton
                                  sx={{ padding: 0 }}
                                  onClick={() => {
                                    setCopyValue(item?.address);
                                  }}
                                >
                                  <Tooltip
                                    title={`${
                                      copied ? "Copied" : "Copy this Token"
                                    }`}
                                  >
                                    <ContentCopyIcon
                                      sx={{
                                        color: `${
                                          copied ? "#19ffb0" : "#19ffb0"
                                        }`,
                                        fontSize: ".9rem",
                                      }}
                                    />
                                  </Tooltip>
                                </IconButton>
                              </CopyToClipboard>
                            )}
                          </Stack>
                        </Stack>
                      )}
                    </Box>
                  )
                )}
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
                <Typography
                  variant="caption"
                  sx={{
                    color: "#FFFFF5",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.watchlist_count !== null &&
                  coinDetailOverview[0]?.watchlist_count !== "" ? (
                    coinDetailOverview && coinDetailOverview[0]?.watchlist_count
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </Typography>
              </Stack>
              {/* <Stack
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
              <Typography variant="caption" sx={{ color: "#FFFFF5",fontSize:"0.85rem",fontWeight:500, }}>
                {coinDetailOverview &&
                coinDetailOverview[0]?.liquidity_pool_total !== null &&
                coinDetailOverview[0]?.liquidity_pool_total !== ""
                  ? coinDetailOverview[0]?.liquidity_pool_total
                  : "NA"}
              </Typography>
            </Stack> */}

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
                    ATH In Last 15 Days
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
                  sx={{
                    color: "#FFFFF5",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.low_high_price?.fifteen?.max !==
                    null ? (
                    String(
                      Math.trunc(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.fifteen?.max
                        )
                      )
                    ).length > 2 ? (
                      "$" +
                      Number(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.fifteen?.max
                        ).toFixed(2)
                      ).toLocaleString()
                    ) : coinDetailOverview &&
                      Math.abs(
                        coinDetailOverview[0]?.low_high_price?.fifteen?.max
                      ) > 1 ? (
                      "$" +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.fifteen?.max
                      )
                        .toFixed(4)
                        .toLocaleString()
                    ) : (
                      "$" +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.fifteen?.max
                      )
                        .toFixed(9)
                        .toLocaleString()
                    )
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>NA</span>
                  )}
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
                    ATH Date In Last 15 Days
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
                  sx={{
                    color: "#FFFFF5",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.all_time_high_date !== null &&
                  coinDetailOverview[0]?.all_time_high_date !== ""
                    ? moment(
                        new Date(coinDetailOverview[0]?.all_time_high_date)
                      ).format(" DD MMM YY")
                    : "NA"}
                </Typography>
              </Stack>
              <Box>
                <Divider
                  variant="fullWidth"
                  flexItem
                  orientation="horizontal"
                  sx={{
                    borderColor: "#0b1640",
                    borderBottomWidth: 1,
                    marginY: 2,
                  }}
                />
              </Box>
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
                    parseFloat(coinDetailOverview[0]?.percent_change_1h)
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
                          parseFloat(coinDetailOverview[0]?.percent_change_1h)
                        ) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 500,
                      fontSize: "0.85rem",
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
                    parseFloat(coinDetailOverview[0]?.percent_change_24h)
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
                          parseFloat(coinDetailOverview[0]?.percent_change_24h)
                        ) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 500,
                      fontSize: "0.85rem",
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
                    parseFloat(coinDetailOverview[0]?.percent_change_7d)
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
                          parseFloat(coinDetailOverview[0]?.percent_change_7d)
                        ) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 500,
                      fontSize: "0.85rem",
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
                    parseFloat(coinDetailOverview[0]?.percent_change_30d)
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
                          parseFloat(coinDetailOverview[0]?.percent_change_30d)
                        ) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 500,
                      fontSize: "0.85rem",
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
                    parseFloat(coinDetailOverview[0]?.percent_change_60d)
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
                          parseFloat(coinDetailOverview[0]?.percent_change_60d)
                        ) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 500,
                      fontSize: "0.85rem",
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
                    parseFloat(coinDetailOverview[0]?.percent_change_90d)
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
                          parseFloat(coinDetailOverview[0]?.percent_change_90d)
                        ) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 500,
                      fontSize: "0.85rem",
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

              <Box>
                <Divider
                  variant="fullWidth"
                  flexItem
                  orientation="horizontal"
                  sx={{
                    borderColor: "#0b1640",
                    borderBottomWidth: 1,
                    marginY: 2,
                  }}
                />
              </Box>
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
                  sx={{
                    color: "#FFFFF5",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.volume_24h !== null &&
                  coinDetailOverview[0]?.volume_24h !== ""
                    ? "$ " +
                      Math.floor(
                        Math.abs(coinDetailOverview[0]?.volume_24h)
                      ).toLocaleString()
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
                <Typography
                  variant="caption"
                  sx={{
                    color: "#FFFFF5",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.market_cap !== null &&
                  coinDetailOverview[0]?.market_cap !== ""
                    ? "$ " +
                      Math.floor(
                        Math.abs(coinDetailOverview[0]?.market_cap)
                      ).toLocaleString()
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
                <Typography
                  variant="caption"
                  sx={{
                    color: "#FFFFF5",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.fully_diluted_market_cap !== null &&
                  coinDetailOverview[0]?.fully_diluted_market_cap !== ""
                    ? "$ " +
                      Math.floor(
                        Math.abs(
                          coinDetailOverview[0]?.fully_diluted_market_cap
                        )
                      ).toLocaleString()
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
                <Typography
                  variant="caption"
                  sx={{
                    color: "#FFFFF5",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.circulating_supply !== null &&
                  coinDetailOverview[0]?.circulating_supply !== ""
                    ? Math.floor(
                        Math.abs(coinDetailOverview[0]?.circulating_supply)
                      ).toLocaleString()
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
                <Typography
                  variant="caption"
                  sx={{
                    color: "#FFFFF5",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.total_supply !== null &&
                  coinDetailOverview[0]?.total_supply !== ""
                    ? Math.floor(
                        Math.abs(coinDetailOverview[0]?.total_supply)
                      ).toLocaleString()
                    : "NA"}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Divider
        variant="fullWidth"
        flexItem
        orientation={"horizontal"}
        sx={{ borderColor: "#0b1640", borderBottomWidth: 1 }}
      />
      {/* <Accordion
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
        <AccordionDetails   sx={{ padding: 0 }}>
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
                sx={{ borderColor: "#0b1640", borderRightWidth: 2 }}
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
        sx={{ borderColor: "#0b1640", borderBottomWidth: 1 }}
      /> */}
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
        <AccordionDetails sx={{ padding: 0, paddingBottom: 1 }}>
          {latestNews &&
            latestNews?.slice(0, 4).map((item: any, index: number) => (
              <Fragment key={index}>
                {" "}
                <Stack direction="column" spacing={1} py={1.5}>
                  <Stack direction="column" spacing={0}>
                    <Typography
                      sx={{
                        color: "#1afeb0",
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
                        {item && Parser(item?.title.substring(0, 80))}...
                      </a>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#747474",
                        fontWeight: 500,
                        fontSize: ".75rem",
                      }}
                      pt={0.3}
                    >
                      {item &&
                        moment(new Date(item?.date)).format("DD MMM YYYY")}{" "}
                      -{" "}
                      <span style={{ color: "#FDA400" }}>
                        {item && moment(new Date(item?.date)).fromNow()}
                      </span>
                    </Typography>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 400,
                        fontSize: ".85rem",
                      }}
                    >
                      {item && Parser(item?.excerpt.substring(0, 200))}...
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#5FD6E9", fontWeight: 400 }}
                    >
                      {item && item?.author}
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      sx={{ color: "#494A4A", fontWeight: 500 }}
                    >
                      {item && moment(new Date(item?.date)).fromNow()}
                    </Typography> */}
                  </Stack>
                </Stack>
                <Divider
                  variant="fullWidth"
                  flexItem
                  orientation={"horizontal"}
                  sx={{ borderColor: "#181921", borderBottomWidth: 1 }}
                />
              </Fragment>
            ))}

          <SlideDown className={"my-dropdown-slidedown"} closed={newsMore}>
            {latestNews &&
              latestNews
                .slice(4, latestNews?.length)
                ?.map((item: any, index: number) => (
                  <Fragment key={index}>
                    {" "}
                    <Stack direction="column" spacing={1} py={1.5}>
                      <Stack direction="column" spacing={0}>
                        <Typography
                          sx={{
                            color: "#1afeb0",
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
                            {item && Parser(item?.title.substring(0, 80))}...
                          </a>
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#747474",
                            fontWeight: 500,
                            fontSize: ".75rem",
                          }}
                          pt={0.3}
                        >
                          {item &&
                            moment(new Date(item?.date)).format(
                              "DD MMM YYYY"
                            )}{" "}
                          -{" "}
                          <span style={{ color: "#FDA400" }}>
                            {item && moment(new Date(item?.date)).fromNow()}
                          </span>
                        </Typography>
                        <Typography
                          sx={{
                            color: "#FFFFFF",
                            fontWeight: 400,
                            fontSize: ".85rem",
                          }}
                        >
                          {item && Parser(item?.excerpt.substring(0, 200))}...
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1}>
                        <Typography
                          variant="body2"
                          sx={{ color: "#5FD6E9", fontWeight: 500 }}
                        >
                          {item && item?.author}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Divider
                      variant="fullWidth"
                      flexItem
                      orientation={"horizontal"}
                      sx={{ borderColor: "#181921", borderBottomWidth: 1 }}
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
