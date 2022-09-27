import { useState, useEffect } from "react";
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
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Iframe from "react-iframe";
import moment from "moment";
import {
  coinAboutBlockRequest,
  coinPriceGraphBlockRequest,
} from "../../../store/action";

import MobileCoinPageChart from "../coinpagechart/MobileCoinPageChart";

const MobileCoinPageAbout = () => {
  const dispatch: any = useDispatch();
  const location = useLocation();
  const [resStatus, setResStatus] = useState<any>();
  const coinAboutBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_about_block?.data;
  });
  const coinPriceWidget = useSelector((data: any) => {
    return data?.coinReducer?.coin_price_graph_block?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(
      coinAboutBlockRequest(
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
      <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
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
            About {coinAboutBlock && coinAboutBlock[0]?.name}
          </Typography>

          <Stack direction="column" mt={2} spacing={2}>
            <Typography sx={{ color: "#FFFFF5", fontSize: ".8rem" }}>
              {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph &&
                `The live `}{" "}
              <span style={{ fontWeight: 700 }}>
                {" "}
                {coinAboutBlock && coinAboutBlock[0]?.name}
              </span>{" "}
              {`price today is `}
              <span style={{ color: "#19ffb0" }}>
                {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph[0]?.price !== null ? (
                  String(
                    Math.trunc(
                      parseFloat(coinAboutBlock[0]?.first_pragraph[0]?.price)
                    )
                  ).length > 2 ? (
                    "$" +
                    Number(
                      parseFloat(
                        coinAboutBlock[0]?.first_pragraph[0]?.price
                      ).toFixed(2)
                    ).toLocaleString()
                  ) : coinAboutBlock &&
                    Math.abs(coinAboutBlock[0]?.first_pragraph[0]?.price) >
                      1 ? (
                    "$" +
                    parseFloat(coinAboutBlock[0]?.first_pragraph[0]?.price)
                      .toFixed(4)
                      .toLocaleString()
                  ) : (
                    "$" +
                    parseFloat(coinAboutBlock[0]?.first_pragraph[0]?.price)
                      .toFixed(13)
                      .toLocaleString()
                  )
                ) : (
                  <span style={{ color: "#7a7a7a" }}>--</span>
                )}
              </span>
              {` with a 24-hour
              trading volume of`}{" "}
              <span style={{ color: "#19ffb0" }}>
                {"$"}
                {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph[0]?.volume_24h !== null
                  ? coinAboutBlock &&
                    coinAboutBlock[0]?.first_pragraph[0]?.volume_24h
                  : "NA"}
              </span>
              {".  "}
              <span style={{ fontWeight: 700 }}>
                {" "}
                {coinAboutBlock && coinAboutBlock[0]?.name}
              </span>{" "}
              {
                <span
                  style={{
                    color:
                      coinAboutBlock &&
                      Math.sign(
                        parseFloat(
                          coinAboutBlock[0]?.first_pragraph[0]
                            ?.percent_change_24h
                        )
                      ) === -1
                        ? "#ff0000"
                        : "#00ff00",
                    // fontWeight: 600,
                    fontSize: ".85rem",
                  }}
                >
                  {coinAboutBlock &&
                  Math.sign(
                    parseFloat(
                      coinAboutBlock[0]?.first_pragraph[0]?.percent_change_24h
                    )
                  ) === -1
                    ? "is down "
                    : "is up "}
                  {coinAboutBlock &&
                  coinAboutBlock[0]?.first_pragraph[0]?.percent_change_24h !==
                    null ? (
                    coinAboutBlock &&
                    parseFloat(
                      coinAboutBlock[0]?.first_pragraph[0]?.percent_change_24h
                    )
                      .toFixed(2)
                      .replace("-", "") + "% "
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </span>
              }
              {`in the last
              24 hours and `}{" "}
              {
                <span
                  style={{
                    color:
                      coinAboutBlock &&
                      Math.sign(
                        parseFloat(
                          coinAboutBlock[0]?.first_pragraph[0]
                            ?.percent_change_1h
                        )
                      ) === -1
                        ? "#ff0000"
                        : "#00ff00",
                    // fontWeight: 600,
                    fontSize: ".85rem",
                  }}
                >
                  {coinAboutBlock &&
                  coinAboutBlock[0]?.first_pragraph[0]?.percent_change_1h !==
                    null ? (
                    coinAboutBlock &&
                    parseFloat(
                      coinAboutBlock[0]?.first_pragraph[0]?.percent_change_1h
                    )
                      .toFixed(2)
                      .replace("-", "") + "% "
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                  {coinAboutBlock &&
                  Math.sign(
                    parseFloat(
                      coinAboutBlock[0]?.first_pragraph[0]?.percent_change_1h
                    )
                  ) === -1
                    ? "down "
                    : "up "}
                </span>
              }
              {` in the Last 1 Hour .`}
              <br />
              <br />
              {` The current Coinxhigh
              ranking is `}
              <span style={{ color: "#19ffb0" }}>
                {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph[0]?.rank !== null
                  ? coinAboutBlock &&
                    "#" + coinAboutBlock[0]?.first_pragraph[0]?.rank
                  : "NA"}
              </span>
              {` , with a live market cap of `}
              <span style={{ color: "#19ffb0" }}>
                {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph[0]?.market_cap !== null
                  ? coinAboutBlock &&
                    "$" +
                      Math.floor(
                        Math.abs(
                          coinAboutBlock[0]?.first_pragraph[0]?.market_cap
                        )
                      ).toLocaleString()
                  : "NA"}
              </span>
              {`. It has a
              circulating supply of `}
              <span style={{ color: "#19ffb0" }}>
                {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph[0]?.circulating_supply !==
                  null
                  ? coinAboutBlock &&
                    Math.floor(
                      Math.abs(
                        coinAboutBlock[0]?.first_pragraph[0]?.circulating_supply
                      )
                    ).toLocaleString()
                  : "NA"}
              </span>{" "}
              <span style={{ fontWeight: 700 }}>
                {" "}
                {coinAboutBlock && coinAboutBlock[0]?.name}
              </span>{" "}
              {`'s  and a
              max. supply of `}
              <span style={{ color: "#19ffb0" }}>
                {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph[0]?.max_supply !== null
                  ? coinAboutBlock &&
                    Math.floor(
                      Math.abs(coinAboutBlock[0]?.first_pragraph[0]?.max_supply)
                    ).toLocaleString()
                  : "NA"}
              </span>{" "}
              <span style={{ fontWeight: 700 }}>
                {" "}
                {coinAboutBlock && coinAboutBlock[0]?.name}
              </span>{" "}
              {`'s. The current
              rating of `}{" "}
              <span style={{ fontWeight: 700 }}>
                {" "}
                {coinAboutBlock && coinAboutBlock[0]?.name}
              </span>{" "}
              {`on Coinxhigh is `}
              <span style={{ color: "#19ffb0" }}>
                {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph[0]?.rating !== null
                  ? coinAboutBlock &&
                    parseInt(coinAboutBlock[0]?.rating).toFixed(1)
                  : "NA"}
              </span>
              {". "}
              <span style={{ fontWeight: 700 }}>
                {" "}
                {coinAboutBlock && coinAboutBlock[0]?.name}
              </span>{" "}
              {`hit an all time
              high of  `}
              <span style={{ color: "#19ffb0" }}>
                {"$"}
                {coinAboutBlock && coinAboutBlock[0]?.all_time_high}
              </span>
              {` (last 15 days) on `}
              <span style={{ color: "#19ffb0" }}>
                {coinAboutBlock &&
                  moment(
                    new Date(coinAboutBlock[0]?.all_time_high_date)
                  ).format("DD MMM YYYY")}
              </span>
              {" ("}{" "}
              {coinAboutBlock &&
                moment(
                  new Date(coinAboutBlock[0]?.all_time_high_date)
                ).fromNow()}
              {")"}
            </Typography>

            <Typography sx={{ color: "#FFFFF5", fontSize: ".85rem" }}>
              You can read the{" "}
              <a
                href={`https://news.coinxhigh.com/?s=${
                  coinAboutBlock && coinAboutBlock[0]?.name.toLowerCase()
                }`}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#5b86fb" }}
              >
                {" "}
                Latest news about{" "}
                <span style={{}}>
                  {coinAboutBlock && coinAboutBlock[0]?.name?.toLowerCase()}
                </span>{" "}
                here.
              </a>{" "}
            </Typography>

            <Typography sx={{ color: "#FFFFF5", fontSize: ".85rem" }}>
              {coinAboutBlock && coinAboutBlock[0]?.second_pragraph}
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Grid
        xs={12}
        sm={12}
        md={8}
        lg={8}
        xl={8}
        px={{ xs: 0, sm: 0, md: 0 }}
        pl={{ md: 4 }}
        mt={{ xs: 2, sm: 2, md: 0 }}
      >
        {/* <CardMedia
          component="img"
          height="80"
          image="https://iili.io/UtY5Kv.jpg"
          alt="green iguana"
          sx={{ objectFit: "unset" }}
        /> */}

        <Grid xs={12} pt={0}>
          {coinAboutBlock && parseInt(coinAboutBlock[0]?.address) !== null ? (
            <Grid xs={12} pt={0}>
              <Iframe
                url={`https://coinbrain.com/embed/bnb-${
                  coinAboutBlock && coinAboutBlock[0]?.address
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
              {coinAboutBlock &&
                coinAboutBlock?.price?.length !== 0 &&
                resStatus !== false && (
                  <MobileCoinPageChart
                    data={coinPriceWidget && coinPriceWidget}
                  />
                )}
            </Grid>
          )}
        </Grid>
        <Grid xs={12} pt={4}></Grid>
      </Grid>
    </Grid>
  );
};

export default MobileCoinPageAbout;
