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
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
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
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
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
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
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
            sx={{ color: "#00a4e3" }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
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
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              NTF's:{" "}
              {topbarCount &&
                topbarCount[0]?.nftlstingCount &&
                topbarCount[0]?.nftlstingCount}
            </Typography>
          </Link>
          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#FF9900" }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              AirDrops:{" "}
              {topbarCount &&
                topbarCount[0]?.airdropCount &&
                topbarCount[0]?.airdropCount}
            </Typography>
          </Link>
          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#990099" }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Events:
              {topbarCount &&
                topbarCount[0]?.eventCount &&
                topbarCount[0]?.eventCount}
            </Typography>
          </Link>
          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#DC3912" }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Marketplace:{" "}
              {topbarCount &&
                topbarCount[0]?.nftMarketplaceCount &&
                topbarCount[0]?.nftMarketplaceCount}
            </Typography>
          </Link>
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};

export default HorizonatalList;
