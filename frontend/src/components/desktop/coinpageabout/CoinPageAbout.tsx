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
import { coinAboutBlockRequest } from "../../../store/action";

const CoinPageAbout = () => {
  const dispatch: any = useDispatch();
  const location = useLocation();
  const coinAboutBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_about_block?.data;
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

  console.log(coinAboutBlock && coinAboutBlock[0]?.first_pragraph[0]?.price);

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
              <span style={{ color: "#037bfd" }}>
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
              <span style={{ color: "#037bfd" }}>
                {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph[0]?.volume_24h !== null
                  ? coinAboutBlock &&
                    coinAboutBlock[0]?.first_pragraph[0]?.volume_24h
                  : "NA"}
              </span>{" "}
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
              {` in the Last 1 Hour . The current Coinxhigh
              ranking is `}
              <span style={{ color: "#037bfd" }}>
                {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph[0]?.rank !== null
                  ? coinAboutBlock &&
                    "#" + coinAboutBlock[0]?.first_pragraph[0]?.rank
                  : "NA"}
              </span>
              {` , with a live market cap of `}
              <span style={{ color: "#037bfd" }}>
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
              <span style={{ color: "#037bfd" }}>
                {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph[0]?.circulating_supply !==
                  null
                  ? coinAboutBlock &&
                    "$" +
                      Math.floor(
                        Math.abs(
                          coinAboutBlock[0]?.first_pragraph[0]
                            ?.circulating_supply
                        )
                      ).toLocaleString()
                  : "NA"}
              </span>
              {` .`}{" "}
              <span style={{ fontWeight: 700 }}>
                {" "}
                {coinAboutBlock && coinAboutBlock[0]?.name}
              </span>{" "}
              {` coins and a
              max. supply of `}
              <span style={{ color: "#037bfd" }}>
                {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph[0]?.max_supply !== null
                  ? coinAboutBlock &&
                    "$" +
                      Math.floor(
                        Math.abs(
                          coinAboutBlock[0]?.first_pragraph[0]?.max_supply
                        )
                      ).toLocaleString()
                  : "NA"}
              </span>{" "}
              <span style={{ fontWeight: 700 }}>
                {" "}
                {coinAboutBlock && coinAboutBlock[0]?.name}
              </span>{" "}
              {`coins. The current
              rating of `}{" "}
              <span style={{ fontWeight: 700 }}>
                {" "}
                {coinAboutBlock && coinAboutBlock[0]?.name}
              </span>{" "}
              {`on Coinxhigh is `}
              <span style={{ color: "#037bfd" }}>
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
              high of $0.003382723655 on Jan 05, 2022 (212 Days ago). `}
            </Typography>

            <Typography sx={{ color: "#FFFFF5", fontSize: ".85rem" }}>
              You can read the{" "}
              <a
                href={`https://news.coinxhigh.com/?s=${
                  coinAboutBlock && coinAboutBlock[0]?.name.toLowerCase()
                }`}
                target="_blank"
                rel="noreferrer"
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
        <CardMedia
          component="img"
          height="80"
          image="https://iili.io/UtY5Kv.jpg"
          alt="green iguana"
          sx={{ objectFit: "unset" }}
        />

        <Grid xs={12} pt={4}>
          <Iframe
            url="https://coinbrain.com/embed/0x55d398326f99059ff775485246999027b3197955?theme=dark&chart=1&trades=1"
            width="100%"
            height="1190"
            id="myId"
            className="myClassname"
            display="block"
            position="relative"
            frameBorder={0}
          />
        </Grid>
        <Grid xs={12} pt={4}></Grid>
      </Grid>
    </Grid>
  );
};

export default CoinPageAbout;
