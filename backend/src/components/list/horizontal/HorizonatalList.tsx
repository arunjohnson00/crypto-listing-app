import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Stack, Typography, Breadcrumbs, Link } from "@mui/material";
import { topbarCountRequest } from "../../../store/action";

const HorizonatalList = () => {
  const dispatch = useDispatch();
  const topbarCount: any = useSelector((topCount: any) => {
    return topCount?.topbarCountReducer?.topbarCounts?.data;
  });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(topbarCountRequest("emptyData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Box>
      <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
        <Breadcrumbs separator="|" aria-label="breadcrumb">
          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "rgb(65, 81, 167)" }}
          >
            <Typography variant="subtitle2">
              Coin Listed :{" "}
              {topbarCount &&
                topbarCount[0]?.coinsCount &&
                topbarCount[0]?.coinsCount}
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#FF4560" }}
          >
            <Typography variant="subtitle2">
              User:{" "}
              {topbarCount &&
                topbarCount[0]?.usersCount &&
                topbarCount[0]?.usersCount}
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#00E396" }}
          >
            <Typography variant="subtitle2">
              Networks:{" "}
              {topbarCount &&
                topbarCount[0]?.networksCount &&
                topbarCount[0]?.networksCount}
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#00E396" }}
          >
            <Typography variant="subtitle2">
              Exchanges:{" "}
              {topbarCount &&
                topbarCount[0]?.exchangeCount &&
                topbarCount[0]?.exchangeCount}
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#775DD0" }}
          >
            <Typography variant="subtitle2">
              NTF's:{" "}
              {topbarCount &&
                topbarCount[0]?.nftlstingCount &&
                topbarCount[0]?.nftlstingCount}
            </Typography>
          </Link>
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};

export default HorizonatalList;
