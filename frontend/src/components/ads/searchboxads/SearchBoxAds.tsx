import { Avatar, Box, Stack, Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchAdsRequest } from "../../../store/action";

const SearchBoxAds = () => {
  const dispatch: any = useDispatch();
  const searchBoxAds = useSelector((data: any) => {
    return data?.adsReducer?.search_ads?.data;
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
            searchBoxAds?.data?.slice(0, 1).map((item: any, index: number) => (
              <Box pl={2}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Avatar
                    alt={item?.banner_name}
                    src={`${serverAPIUrl}public/uploads/banner_ads/${item?.banner_image}`}
                    sx={{ width: 70, height: 70, borderRadius: 0 }}
                  />
                  <Stack direction="column" spacing={1} alignItems="flex-start">
                    <Stack
                      direction="column"
                      spacing={0}
                      alignItems="flex-start"
                      pr={2}
                    >
                      <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}>
                        {item?.banner_name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: ".8rem",
                          fontWeight: 400,
                          //wordWrap: "wrap",
                          wordBreak: "break-word",
                        }}
                      >
                        {item?.search_ad_description}
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
                        href={item?.banner_target_link}
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
                          Register Now
                        </Typography>
                      </a>
                      <a
                        href={item?.banner_target_link}
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
            ))}
        </Fragment>
      )}
    </>
  );
};

export default SearchBoxAds;
