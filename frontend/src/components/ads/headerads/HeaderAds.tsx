import { Box, CardMedia, Chip, Stack, useMediaQuery } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import headerAds from "../../../assets/ads/topads.gif";
import { mainBannerAdsRequest } from "../../../store/action";

const HeaderAds = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const [random, setRandom] = useState<any>(0);
  const dispatch: any = useDispatch();
  const mainBannerAds = useSelector((data: any) => {
    return data?.adsReducer?.main_banner_ads?.data;
  });

  useEffect(() => {
    mainBannerAds?.data?.length > 1 &&
      setInterval(() => {
        mainBannerAds?.data && mainBannerAds?.data?.length - 1 === random
          ? setRandom(0)
          : setRandom(random + 1);
      }, 10000);
  });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(mainBannerAdsRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  const serverAPIUrl = process.env.REACT_APP_API_URL;
  return (
    <>
      {mainBannerAds && mainBannerAds?.response === true && (
        <Fragment>
          {matches === true ? (
            <Box py={2} width="70%">
              {mainBannerAds &&
                mainBannerAds?.data?.length > 0 &&
                mainBannerAds?.data[random] && (
                  <a
                    href={mainBannerAds?.data[random]?.banner_target_link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CardMedia
                      component="img"
                      height="90"
                      image={`${serverAPIUrl}public/uploads/banner_ads/${mainBannerAds?.data[random]?.banner_image}`}
                      alt={mainBannerAds?.data[random]?.banner_name}
                      sx={{ objectFit: "unset" }}
                    />
                  </a>
                )}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Chip
                  label="Ad"
                  sx={{
                    background: "#FFFFFF",
                    color: "#000000",

                    height: 15,
                    fontSize: ".60rem",
                    position: "relative",
                    top: -20,
                    right: 10,
                    fontWeight: 600,
                  }}
                  size="small"
                />
              </Stack>
            </Box>
          ) : (
            <Box py={0.4} width="100%">
              {mainBannerAds &&
                mainBannerAds?.data?.length > 0 &&
                mainBannerAds?.data[random] && (
                  <a
                    href={mainBannerAds?.data[random]?.banner_target_link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <CardMedia
                      component="img"
                      height="auto"
                      image={`${serverAPIUrl}public/uploads/banner_ads/${mainBannerAds?.data[random]?.banner_image}`}
                      alt={mainBannerAds?.data[random]?.banner_name}
                      sx={{ objectFit: "unset" }}
                    />
                  </a>
                )}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Chip
                  label="Ad"
                  sx={{
                    background: "#FFFFFF",
                    color: "#000000",

                    height: 12,

                    fontSize: ".5rem",
                    position: "relative",
                    top: -15,
                    right: 2,
                    fontWeight: 600,
                  }}
                  size="small"
                />
              </Stack>
            </Box>
          )}
        </Fragment>
      )}
    </>
  );
};

export default HeaderAds;
