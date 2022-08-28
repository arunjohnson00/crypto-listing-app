import { useState } from "react";
import {
  Grid,
  Stack,
  Typography,
  Rating,
  Divider,
  CardMedia,
  Box,
  Avatar,
  Checkbox,
  LinearProgress,
  Link,
  Button,
} from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import { coinFAQBlockRequest } from "../../../store/action";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CoinPageNews = () => {
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const coinFAQ = useSelector((data: any) => {
    return data?.coinReducer?.coin_faq_block?.data;
  });

  const [expand, setExpand] = useState(false);

  const readmoreHandler = () => {
    setExpand(!expand);
  };
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(
      coinFAQBlockRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  return (
    <Grid container xs={12}>
      <Grid xs={12}>
        {/* <Stack direction={{ xs: "column", sm: "column", md: "row" }} mt={2}>
          <Grid xs={12} sm={12} md={4}>
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
            ></Typography>
          </Grid>
          <Grid xs={12} sm={12} md={8} mt={{ xs: 2, sm: 2, md: 0 }}>
            <CardMedia
              component="img"
              height="70"
              image="https://iili.io/UtY5Kv.jpg"
              alt="green iguana"
              sx={{ objectFit: "unset" }}
            />
          </Grid>
        </Stack> */}
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid xs={12} mb={5}>
          <Stack
            direction="column"
            mt={{ xs: 0, sm: 0, md: 4 }}
            mx={{ xs: 0, sm: 0, md: 0 }}
            spacing={2}
          >
            <Stack direction="column" spacing={0.8}>
              <Typography
                variant="h6"
                sx={{ color: "#FFFFFF", fontWeight: 600 }}
              >
                In American culture, there exists a brutal expectation to be
                happy, said ...
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                According to reports, the US SEC Securities and Exchange
                Commission has refused to reach a verdict on VanEcks BTC spot
                ETF Exchange-traded Fund. The regulator noted that it would make
                a decision in the next 45 days. Meanwhile, the company submitted
                the application in July. US SEC Postpones Verdict on VanEcks
                Spot ETF Application by{" "}
                <span
                  style={{ color: "#108B73" }}
                  onClick={readmoreHandler}
                >{`(${expand === true ? "read less" : "read more"})`}</span>
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FDA400", fontWeight: 400, fontSize: ".85rem" }}
              >
                24 min ago
              </Typography>
            </Stack>
            <Divider
              sx={{ borderBottomColor: "#111138", borderBottomWidth: 2 }}
              flexItem
              orientation="horizontal"
              variant="fullWidth"
            />
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoinPageNews;
