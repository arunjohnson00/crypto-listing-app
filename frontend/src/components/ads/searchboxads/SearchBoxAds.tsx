import { Avatar, Box, Stack, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchAdsRequest } from "../../../store/action";

const SearchBoxAds = () => {
  const dispatch: any = useDispatch();
  const [random, setRandom] = useState(0);
  const searchBoxAds = useSelector((data: any) => {
    return data?.adsReducer?.search_ads?.data;
  });

  useEffect(() => {
    searchBoxAds?.data?.length > 1 &&
      setInterval(() => {
        searchBoxAds?.data && searchBoxAds?.data?.length - 1 === random
          ? setRandom(0)
          : setRandom(random + 1);
      }, 10000);
  });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(searchAdsRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  const serverAPIUrl = process.env.REACT_APP_API_URL;
  return (
    <>
      {searchBoxAds && searchBoxAds?.response === true && (
        <Fragment>
          {searchBoxAds &&
            searchBoxAds?.data?.length > 0 &&
            searchBoxAds?.data[random] && (
              <Box pl={2}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Avatar
                    alt={searchBoxAds?.data[random]?.banner_name}
                    src={`${serverAPIUrl}public/uploads/banner_ads/${searchBoxAds?.data[random]?.banner_image}`}
                    sx={{ width: 70, height: 70, borderRadius: 0, mt: 1 }}
                  />
                  <Stack direction="column" spacing={1} alignItems="flex-start">
                    <Stack
                      direction="column"
                      spacing={0}
                      alignItems="flex-start"
                      pr={2}
                    >
                      <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}>
                        {searchBoxAds?.data[random]?.banner_name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: ".8rem",
                          fontWeight: 400,
                          //wordWrap: "wrap",
                          wordBreak: "break-word",
                        }}
                      >
                        {searchBoxAds?.data[random]?.search_ad_description}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <a
                        href={searchBoxAds?.data[random]?.banner_target_link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {" "}
                        <Typography
                          sx={{
                            fontSize: ".837rem",
                            fontWeight: 500,
                            color: "#7F85B4",
                          }}
                        >
                          {searchBoxAds?.data[random]?.button_name}
                        </Typography>
                      </a>
                      <a
                        href={searchBoxAds?.data[random]?.banner_target_link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {" "}
                        <Typography
                          sx={{
                            fontSize: ".837rem",
                            fontWeight: 500,
                            color: "#282828",
                          }}
                        >
                          Sponsored
                        </Typography>
                      </a>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            )}
        </Fragment>
      )}
    </>
  );
};

export default SearchBoxAds;
