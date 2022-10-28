import { Box, CardMedia, Chip, Stack, useMediaQuery } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import headerAds from "../../../assets/ads/topads.gif";
import { mainBannerAdsRequest } from "../../../store/action";
import { useInterval } from "react-interval-hook";

const HeaderAds = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const [random, setRandom] = useState<any>(0);
  const dispatch: any = useDispatch();
  const mainBannerAds = useSelector((data: any) => {
    return data?.adsReducer?.main_banner_ads?.data;
  });

  useInterval(() => {
    mainBannerAds?.data?.length > 1
      ? mainBannerAds?.data && mainBannerAds?.data?.length - 1 === random
        ? setRandom(0)
        : setRandom(random + 1)
      : setRandom(0);
  }, 15000);
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(mainBannerAdsRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  const serverAPIUrl = process.env.REACT_APP_API_URL;

  const bannerSelectHandler = (index: any) => {
    setRandom(index);
  };

  return (
    <>
      {mainBannerAds && mainBannerAds?.response === true && (
        <Fragment>
          {matches === true ? (
            <Box pt={2} pb={1} width="70%">
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
                      sx={{ objectFit: "unset", borderRadius: 2 }}
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
                    top: -9,
                    right: 18,
                    fontWeight: 600,
                  }}
                  size="small"
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                mt={-1}
                spacing={0.5}
              >
                {mainBannerAds &&
                  mainBannerAds?.data?.length > 0 &&
                  mainBannerAds?.data?.map((item: any, index: number) => (
                    <Box
                      sx={{
                        backgroundColor:
                          index === random ? "#192450" : "#5b5b5b4d",
                        width: 20,
                        height: 5,
                        borderRadius: 50,
                        // border:
                        //   index === random
                        //     ? ".5px solid #0d4a598c"
                        //     : ".5px solid transparent",
                        cursor: "pointer",
                      }}
                      onClick={() => bannerSelectHandler(index)}
                    ></Box>
                  ))}
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

                    height: 9,

                    fontSize: ".35rem",
                    position: "relative",
                    top: -6,
                    right: 4,
                    fontWeight: 600,
                    "&.MuiChip-root .MuiChip-label ": {
                      paddingX: 0.5,
                    },
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
