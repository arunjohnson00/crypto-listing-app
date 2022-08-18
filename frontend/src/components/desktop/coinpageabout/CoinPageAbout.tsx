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
import { useSelector } from "react-redux";
import Iframe from "react-iframe";

const CoinPageAbout = () => {
  const coinAboutBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_about_block?.data;
  });
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
            <Typography sx={{ color: "#FFFFF5", fontSize: ".85rem" }}>
              {coinAboutBlock && coinAboutBlock[0]?.first_pragraph + "."}{" "}
              {coinAboutBlock &&
                coinAboutBlock[0]?.first_pragraph &&
                `The live ${
                  coinAboutBlock && coinAboutBlock[0]?.name
                } price today is $5.631145622449 with a 24-hour
              trading volume of $26,254.16. ${
                coinAboutBlock && coinAboutBlock[0]?.name
              } is down 64.74% in the last
              24 hours and 18.56% up in the Last 1 Hour . The current Coinxhigh
              ranking is #418, with a live market cap of $45,792,809. It has a
              circulating supply of 562,103,091,188,157 ${
                coinAboutBlock && coinAboutBlock[0]?.name
              } coins and a
              max. supply of 1,000,000,000,000,000 ${
                coinAboutBlock && coinAboutBlock[0]?.name
              } coins. The current
              rating of ${
                coinAboutBlock && coinAboutBlock[0]?.name
              } on Coinxhigh is 4.9. ${
                  coinAboutBlock && coinAboutBlock[0]?.name
                } hit an all time
              high of $0.003382723655 on Jan 05, 2022 (212 Days ago). `}
            </Typography>

            <Typography sx={{ color: "#FFFFF5", fontSize: ".85rem" }}>
              You can read the Latest news about safemoon{" "}
              <a
                href={`https://news.coinxhigh.com/?s=${
                  coinAboutBlock && coinAboutBlock[0]?.name.toLowerCase()
                }`}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
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
