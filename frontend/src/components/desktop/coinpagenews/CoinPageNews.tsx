import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Parser from "html-react-parser";
import { Grid, Stack, Typography, Divider } from "@mui/material";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import { latestNewsRequest } from "../../../store/action";

const CoinPageNews = () => {
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const timeAgo = new TimeAgo("en");
  const [expand, setExpand] = useState(false);
  const latestNews = useSelector((data: any) => {
    return data?.commonReducer?.latest_news_feed?.data;
  });

  const coinAboutBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_about_block?.data;
  });

  const readmoreHandler = () => {
    setExpand(!expand);
  };
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(
      latestNewsRequest(
        { count: 100, term: coinAboutBlock && coinAboutBlock[0]?.name },
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
            {latestNews &&
              latestNews?.map((item: any, index: number) => (
                <Stack direction="column" spacing={3} key={index}>
                  <Stack direction="column" spacing={0}>
                    <Typography
                      variant="h6"
                      sx={{ color: "#FFFFFF", fontWeight: 600 }}
                    >
                      <a
                        href={item?.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {" "}
                        {item?.title}
                      </a>
                    </Typography>

                    <Stack direction="column" spacing={0} alignItems="flex-end">
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 400,
                          fontSize: ".85rem",
                        }}
                      >
                        {Parser(item?.excerpt)}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 400,
                          fontSize: ".85rem",
                        }}
                      >
                        <span
                          style={{ color: "#108B73" }}
                          onClick={readmoreHandler}
                        >
                          <a
                            href={item?.link}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "inherit", textDecoration: "none" }}
                          >
                            Read More
                          </a>
                        </span>
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FDA400",
                        fontWeight: 400,
                        fontSize: ".85rem",
                      }}
                    >
                      {item &&
                        timeAgo.format(
                          new Date(item?.date ? item?.date : null)
                        )}
                    </Typography>
                  </Stack>

                  <Divider
                    sx={{
                      borderBottomColor: "#111138",
                      borderBottomWidth: 2,
                    }}
                    flexItem
                    orientation="horizontal"
                    variant="fullWidth"
                  />
                </Stack>
              ))}
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoinPageNews;
