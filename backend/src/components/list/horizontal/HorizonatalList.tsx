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
        <Breadcrumbs separator="|" aria-label="breadcrumb" maxItems={22}>
          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              Coins Listed :{" "}
              <span style={{ color: "#0000FF" }}>
                {" "}
                {topbarCount &&
                  topbarCount[0]?.coinsCount &&
                  topbarCount[0]?.coinsCount}
              </span>
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              Total User:{" "}
              <span style={{ color: "#0000FF" }}>
                {topbarCount &&
                  topbarCount[0]?.usersCount &&
                  topbarCount[0]?.usersCount}
              </span>
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              Total Networks:{" "}
              <span style={{ color: "#0000FF" }}>
                {topbarCount &&
                  topbarCount[0]?.networksCount &&
                  topbarCount[0]?.networksCount}
              </span>
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              Exchanges Listed:{" "}
              <span style={{ color: "#0000FF" }}>
                {topbarCount &&
                  topbarCount[0]?.exchangeCount &&
                  topbarCount[0]?.exchangeCount}
              </span>
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              NFT's Listed:{" "}
              <span style={{ color: "#0000FF" }}>
                {topbarCount &&
                  topbarCount[0]?.nftlstingCount &&
                  topbarCount[0]?.nftlstingCount}
              </span>
            </Typography>
          </Link>
          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              AirDrops Listed:{" "}
              <span style={{ color: "#0000FF" }}>
                {topbarCount &&
                  topbarCount[0]?.airdropCount &&
                  topbarCount[0]?.airdropCount}
              </span>
            </Typography>
          </Link>
          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              Total Events:
              <span style={{ color: "#0000FF" }}>
                {topbarCount &&
                  topbarCount[0]?.eventCount &&
                  topbarCount[0]?.eventCount}
              </span>
            </Typography>
          </Link>
          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              NFT Marketplaces:{" "}
              <span style={{ color: "#0000FF" }}>
                {topbarCount &&
                  topbarCount[0]?.nftMarketplaceCount &&
                  topbarCount[0]?.nftMarketplaceCount}
              </span>
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              Videos:{" "}
              <span style={{ color: "#0000FF" }}>
                {topbarCount &&
                  topbarCount[0]?.videosCount &&
                  topbarCount[0]?.videosCount}
              </span>
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              Audit Partners:{" "}
              <span style={{ color: "#0000FF" }}>
                {topbarCount &&
                  topbarCount[0]?.auditPartnersCount &&
                  topbarCount[0]?.auditPartnersCount}
              </span>
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              Ratings received :{" "}
              <span style={{ color: "#0000FF" }}>
                {topbarCount &&
                  topbarCount[0]?.ratingsCount &&
                  topbarCount[0]?.ratingsCount}
              </span>
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              Total Socials:{" "}
              <span style={{ color: "#0000FF" }}>
                {topbarCount &&
                  topbarCount[0]?.socialsCount &&
                  topbarCount[0]?.socialsCount}
              </span>
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#000000" }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, fontSize: ".7rem" }}
            >
              Chart Providers:{" "}
              <span style={{ color: "#0000FF" }}>
                {topbarCount &&
                  topbarCount[0]?.chartProvidersCount &&
                  topbarCount[0]?.chartProvidersCount}
              </span>
            </Typography>
          </Link>
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};

export default HorizonatalList;
