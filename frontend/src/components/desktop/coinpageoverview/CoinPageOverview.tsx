import { useEffect, useState } from "react";
import {
  Grid,
  Stack,
  Typography,
  NativeSelect,
  Box,
  Avatar,
  Tooltip,
  Divider,
  CardMedia,
  Link,
  Button,
  IconButton,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import moment from "moment";
import ReactPlayer from "react-player";
import LinearProgress from "@mui/material/LinearProgress";
import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Iframe from "react-iframe";
import CoinPageChart from "../coinpagechart/CoinPageChart";
import { useLocation } from "react-router-dom";
import {
  coinOverviewBlockRequest,
  coinPriceGraphBlockRequest,
  coinRecentlyAddedRequest,
  recentlyAddedRequest,
} from "../../../store/action";
import DiscoverRecentCryptoCard from "../cards/discoverrecentcryptocard/DiscoverRecentCryptoCard";

const CoinPageOverview = () => {
  const dispatch: any = useDispatch();
  const location = useLocation();
  const [resStatus, setResStatus] = useState<any>();
  const [priceFilter, setPriceFilter] = useState(1);
  const coinDetailOverview = useSelector((data: any) => {
    return data?.coinReducer?.coin_overview_block?.data;
  });

  const priceMaxMinHandler = (val: any) => {
    setPriceFilter(parseInt(val));
  };
  const filteredBNB =
    coinDetailOverview &&
    coinDetailOverview[0]?.address?.filter(
      (result: any) => parseInt(result.id) === 2
    );
  const coinPriceWidget = useSelector((data: any) => {
    return data?.coinReducer?.coin_price_graph_block?.data;
  });

  const [viewMore, setViewMore] = useState(true);
  const [copyValue, setCopyValue] = useState<any>("");
  const [copied, setCopied] = useState(false);
  const viewmoreHandler = () => {
    setViewMore(!viewMore);
  };
  const copyHandler = (e: any) => {
    setCopied(true);
    setTimeout(function () {
      setCopied(false);
    }, 500);
  };

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(
      coinOverviewBlockRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, []);

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

  return (
    <Grid container>
      <Grid xs={12} sm={12} md={3.5} lg={3.5} xl={3.5}>
        {coinDetailOverview &&
          coinDetailOverview[0]?.video_url !== null &&
          coinDetailOverview[0]?.video_url !== "" &&
          coinDetailOverview[0]?.video_url !== undefined && (
            <Grid xs={12} mb={5}>
              <ReactPlayer
                url={coinDetailOverview && coinDetailOverview[0]?.video_url}
                width="100%"
                height={300}
              />
            </Grid>
          )}
        <Grid xs={12} mb={5}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#FFFFF5",
              "&::after": {
                content: '""',
                display: "block",
                width: "20%",
                borderBottom: "2px solid #23E2A0",
              },
            }}
          >
            Information
          </Typography>

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
                {coinDetailOverview && coinDetailOverview[0]?.price !== null ? (
                  String(Math.trunc(parseFloat(coinDetailOverview[0]?.price)))
                    .length > 2 ? (
                    "$" +
                    Number(
                      parseFloat(coinDetailOverview[0]?.price).toFixed(2)
                    ).toLocaleString()
                  ) : coinDetailOverview &&
                    Math.abs(coinDetailOverview[0]?.price) > 1 ? (
                    "$" +
                    parseFloat(coinDetailOverview[0]?.price)
                      .toFixed(4)
                      .toLocaleString()
                  ) : (
                    "$" +
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
                sx={{ color: "#FFFFF5", fontSize: "0.65rem" }}
              >
                Low:{" "}
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
                    "$" +
                    Number(
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.one?.min
                      ).toFixed(2)
                    ).toLocaleString()
                  ) : coinDetailOverview &&
                    Math.abs(coinDetailOverview[0]?.low_high_price?.one?.min) >
                      1 ? (
                    "$" +
                    parseFloat(coinDetailOverview[0]?.low_high_price?.one?.min)
                      .toFixed(4)
                      .toLocaleString()
                  ) : (
                    "$" +
                    parseFloat(coinDetailOverview[0]?.low_high_price?.one?.min)
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
                    "$" +
                    Number(
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.seven?.min
                      ).toFixed(2)
                    ).toLocaleString()
                  ) : coinDetailOverview &&
                    Math.abs(
                      coinDetailOverview[0]?.low_high_price?.seven?.min
                    ) > 1 ? (
                    "$" +
                    parseFloat(
                      coinDetailOverview[0]?.low_high_price?.seven?.min
                    )
                      .toFixed(4)
                      .toLocaleString()
                  ) : (
                    "$" +
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
                coinDetailOverview[0]?.low_high_price?.fifteen?.min !== null ? (
                  String(
                    Math.trunc(
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.fifteen?.min
                      )
                    )
                  ).length > 2 ? (
                    "$" +
                    Number(
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.fifteen?.min
                      ).toFixed(2)
                    ).toLocaleString()
                  ) : coinDetailOverview &&
                    Math.abs(
                      coinDetailOverview[0]?.low_high_price?.fifteen?.min
                    ) > 1 ? (
                    "$" +
                    parseFloat(
                      coinDetailOverview[0]?.low_high_price?.fifteen?.min
                    )
                      .toFixed(4)
                      .toLocaleString()
                  ) : (
                    "$" +
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
                coinDetailOverview[0]?.low_high_price?.thirty?.min !== null ? (
                  String(
                    Math.trunc(
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.thirty?.min
                      )
                    )
                  ).length > 2 ? (
                    "$" +
                    Number(
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.thirty?.min
                      ).toFixed(2)
                    ).toLocaleString()
                  ) : coinDetailOverview &&
                    Math.abs(
                      coinDetailOverview[0]?.low_high_price?.thirty?.min
                    ) > 1 ? (
                    "$" +
                    parseFloat(
                      coinDetailOverview[0]?.low_high_price?.thirty?.min
                    )
                      .toFixed(4)
                      .toLocaleString()
                  ) : (
                    "$" +
                    parseFloat(
                      coinDetailOverview[0]?.low_high_price?.thirty?.min
                    )
                      .toFixed(9)
                      .toLocaleString()
                  )
                ) : (
                  <span style={{ color: "#7a7a7a" }}></span>
                )}
              </Typography>
              <Stack direction="row" spacing={1}>
                <NativeSelect
                  id="select"
                  onChange={(e: any) => priceMaxMinHandler(e.target.value)}
                  sx={{
                    color: "#B6B6B9",
                    backgroundColor: "#010519",
                    fontSize: "0.55rem",
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
                  sx={{ color: "#FFFFF5", fontSize: "0.65rem" }}
                >
                  High:{" "}
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
                      "$" +
                      Number(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.one?.max
                        ).toFixed(2)
                      ).toLocaleString()
                    ) : coinDetailOverview &&
                      Math.abs(
                        coinDetailOverview[0]?.low_high_price?.one?.max
                      ) > 1 ? (
                      "$" +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.one?.max
                      )
                        .toFixed(4)
                        .toLocaleString()
                    ) : (
                      "$" +
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
                  coinDetailOverview[0]?.low_high_price?.seven?.max !== null ? (
                    String(
                      Math.trunc(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.seven?.max
                        )
                      )
                    ).length > 2 ? (
                      "$" +
                      Number(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.seven?.max
                        ).toFixed(2)
                      ).toLocaleString()
                    ) : coinDetailOverview &&
                      Math.abs(
                        coinDetailOverview[0]?.low_high_price?.seven?.max
                      ) > 1 ? (
                      "$" +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.seven?.max
                      )
                        .toFixed(4)
                        .toLocaleString()
                    ) : (
                      "$" +
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
                      "$" +
                      Number(
                        parseFloat(
                          coinDetailOverview[0]?.low_high_price?.thirty?.max
                        ).toFixed(2)
                      ).toLocaleString()
                    ) : coinDetailOverview &&
                      Math.abs(
                        coinDetailOverview[0]?.low_high_price?.thirty?.max
                      ) > 1 ? (
                      "$" +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.thirty?.max
                      )
                        .toFixed(4)
                        .toLocaleString()
                    ) : (
                      "$" +
                      parseFloat(
                        coinDetailOverview[0]?.low_high_price?.thirty?.max
                      )
                        .toFixed(9)
                        .toLocaleString()
                    )
                  ) : (
                    <span style={{ color: "#7a7a7a" }}></span>
                  )}
                </Typography>
              </Stack>
            </Stack>
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
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
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
                                    //color: "#FFFFF5",
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
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  API need
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
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
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
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
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
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.all_time_high_date !== null &&
                  coinDetailOverview[0]?.all_time_high_date !== ""
                    ? moment(
                        new Date(coinDetailOverview[0]?.all_time_high_date)
                      ).format(" DD MMM YY")
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
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.volume_24h !== null &&
                  coinDetailOverview[0]?.volume_24h !== ""
                    ? Math.floor(
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
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.market_cap !== null &&
                  coinDetailOverview[0]?.market_cap !== ""
                    ? Math.floor(
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
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.fully_diluted_market_cap !== null &&
                  coinDetailOverview[0]?.fully_diluted_market_cap !== ""
                    ? Math.floor(
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
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
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
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
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
        </Grid>
        {/* <Divider
          variant="fullWidth"
          flexItem
          orientation="horizontal"
          sx={{ borderColor: "#342D61", borderBottomWidth: 2 }}
        /> */}
        {/* <Grid xs={12} mt={4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#FFFFF5",
              "&::after": {
                content: '""',
                display: "block",
                width: "20%",
                borderBottom: "2px solid #23E2A0",
              },
            }}
          >
            Liquidity Pool
          </Typography>

          <Stack direction="row" mt={3} spacing={3}>
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

          <Stack direction="column" mt={4} spacing={2}>
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
            <Link sx={{ color: "#FFFFF5" }} onClick={viewmoreHandler}>
              {viewMore === true ? "View More" : "View Less"}
            </Link>
          </Stack>
        </Grid> */}
      </Grid>

      <Grid
        xs={12}
        sm={12}
        md={8.5}
        lg={8.5}
        xl={8.5}
        px={{ xs: 0, sm: 0, md: 0 }}
        pl={{ md: 4 }}
        mt={{ xs: 2, sm: 2, md: 0 }}
      >
        <CardMedia
          component="img"
          height="80"
          image="https://iili.io/UtY5Kv.jpg"
          alt="green iguana"
          sx={{ objectFit: "unset" }}
        />

        {coinDetailOverview &&
        parseInt(coinDetailOverview[0]?.show_widget) === 1 ? (
          <Grid xs={12} pt={4}>
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
          </Grid>
        ) : (
          <Grid xs={12} pt={4}>
            {coinPriceWidget &&
              coinPriceWidget?.price?.length !== 0 &&
              resStatus !== false && (
                <CoinPageChart data={coinPriceWidget && coinPriceWidget} />
              )}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default CoinPageOverview;
