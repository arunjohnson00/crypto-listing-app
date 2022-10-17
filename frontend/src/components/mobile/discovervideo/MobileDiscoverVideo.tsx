import {
  Grid,
  Box,
  Stack,
  Divider,
  Typography,
  Link,
  CardMedia,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import Parser from "html-react-parser";
import ReactPlayer from "react-player";
import { discoverVideoListRequest } from "../../../store/action";

const MobileDiscoverVideo = () => {
  const dispatch: any = useDispatch();
  const latestVideo = useSelector((data: any) => {
    return data?.discoverReducer?.video_list?.data?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(discoverVideoListRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: 500, color: "#FFFFF5" }}>
          Watch Videos
        </Typography>
      </Grid>

      <Grid item xs={12}>
        {latestVideo &&
          latestVideo?.map((item: any, index: number) => (
            <Box
              key={index}
              sx={{
                // flexGrow: 1,
                padding: 0,
                borderRadius: 0,
                backgroundColor: "#020419",
              }}
              width="100%"
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                justifyContent="space-between"
                alignItems={{
                  xs: "flex-end",
                  sm: "flex-end",
                  md: "flex-end",
                }}
                width="100%"
              >
                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  spacing={2}
                  width="100%"
                >
                  <div>
                    <ReactPlayer
                      url={item && item?.v_url}
                      width={"auto"}
                      height={"auto"}
                    />
                  </div>
                  <Stack
                    direction={{ xs: "column", sm: "column", md: "column" }}
                    spacing={0.6}
                    sx={{ maxWidth: 380 }}
                    alignItems={{
                      xs: "flex-start",
                      sm: "flex-start",
                      md: "flex-start",
                    }}
                  >
                    <Link
                      href={item?.v_url}
                      target="_blank"
                      sx={{ textDecoration: "none" }}
                    >
                      {" "}
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#FFFFF5",
                          fontWeight: 500,
                          fontSize: "1.1rem",
                          wordBreak: "break-all",
                        }}
                        textAlign={{
                          xs: "left",
                          sm: "left",
                          md: "left",
                        }}
                      >
                        {item && item?.v_title}.
                      </Typography>
                    </Link>

                    <Typography
                      variant="caption"
                      sx={{ color: "#939393", wordBreak: "break-all" }}
                      textAlign={{ xs: "left", sm: "left", md: "left" }}
                    >
                      {item && item?.v_sub_title}.
                    </Typography>
                  </Stack>
                </Stack>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#21C879",
                    fontWeight: 500,
                    fontSize: ".9rem",
                  }}
                >
                  {moment(new Date(item?.created_at)).format("DD MMM YYYY")}
                </Typography>
              </Stack>
            </Box>
          ))}
      </Grid>
    </Grid>
  );
};

export default MobileDiscoverVideo;
