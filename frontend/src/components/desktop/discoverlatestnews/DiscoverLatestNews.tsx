import { Grid, Box, Stack, Divider, Typography, Link } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import Parser from "html-react-parser";

import { discoverLatestNewsListRequest } from "../../../store/action";
const DiscoverLatestNews = () => {
  const dispatch: any = useDispatch();
  const latestNews = useSelector((data: any) => {
    return data?.discoverReducer?.latest_news?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(discoverLatestNewsListRequest(10, successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        borderRadius: 4,
        backgroundColor: "#020727",
      }}
      mb={7}
    >
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={5}
        width="100%"
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          spacing={2}
          width="100%"
        >
          <Stack
            direction={{ xs: "row", sm: "row", md: "row" }}
            alignItems="center"
            spacing={1}
          >
            <CampaignIcon sx={{ color: "#2DCEAF", fontSize: 20 }} />
            <Typography variant="h6" sx={{ color: "#2DCEAF", fontWeight: 500 }}>
              News
            </Typography>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            spacing={0.5}
          >
            {latestNews &&
              latestNews?.map((item: any, index: number) => (
                <Stack
                  key={index}
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  alignItems="center"
                  spacing={10}
                  justifyContent="space-between"
                  pl={3.8}
                  pt={0}
                >
                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#6e6e6ed1", fontWeight: 300, fontSize: 12 }}
                    >
                      {item && index + 1}.
                    </Typography>
                    <Link
                      href={item && item?.link}
                      target="_blank"
                      sx={{ textDecoration: "none" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "#FFFFF5", fontWeight: 300, fontSize: 12 }}
                      >
                        {item && item?.title?.length >= 150
                          ? Parser(item?.title.slice(0, 150)) + "..."
                          : Parser(item?.title)}
                        .
                      </Typography>
                    </Link>
                    <Link
                      href={item && item?.link}
                      target="_blank"
                      sx={{ textDecoration: "none" }}
                    >
                      <OpenInNewIcon sx={{ color: "#21C879", fontSize: 14 }} />
                    </Link>
                  </Stack>

                  <Typography
                    variant="caption"
                    sx={{ color: "#21C879", fontWeight: 600, fontSize: 10 }}
                  >
                    {item && moment(new Date(item?.date)).fromNow()}
                  </Typography>
                </Stack>
              ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DiscoverLatestNews;
