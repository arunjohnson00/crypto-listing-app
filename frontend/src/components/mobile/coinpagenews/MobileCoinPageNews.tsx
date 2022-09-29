import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Parser from "html-react-parser";
import { Grid, Stack, Typography, Divider } from "@mui/material";
import moment from "moment";

import {
  coinlatestNewsRequest,
  coinsBiggestLosersRequest,
  latestNewsRequest,
} from "../../../store/action";

const MobileCoinPageNews = () => {
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const [expand, setExpand] = useState(false);
  const latestNews = useSelector((data: any) => {
    return data?.coinReducer?.news_block?.data;
  });

  const readmoreHandler = () => {
    setExpand(!expand);
  };
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(
      coinlatestNewsRequest(
        {
          count: 100,
          term: location?.pathname?.split("/").pop().split("-")[0],
        },
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
                <Stack direction="row" spacing={2} key={index}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#FFFFFF", fontWeight: 600 }}
                  >
                    {index + 1}
                  </Typography>
                  <Stack direction="column" spacing={3}>
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
                          {Parser(item?.title)}
                        </a>
                      </Typography>

                      <Stack
                        direction="column"
                        spacing={0}
                        alignItems="flex-end"
                      >
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
                      </Stack>

                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
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
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              Read More
                            </a>
                          </span>
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#FDA400",
                            fontWeight: 400,
                            fontSize: ".85rem",
                          }}
                        >
                          {item &&
                            moment(
                              new Date(item?.date ? item?.date : null)
                            ).fromNow()}
                        </Typography>
                      </Stack>
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
                </Stack>
              ))}
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileCoinPageNews;
