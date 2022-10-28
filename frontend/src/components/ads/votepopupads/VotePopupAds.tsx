import { CardMedia } from "@mui/material";
import voteAds from "../../../assets/ads/voteads.jpeg";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteClickPopupAdsRequest } from "../../../store/action";

const VotePopupAds = () => {
  const dispatch: any = useDispatch();
  const [random, setRandom] = useState(0);
  const voteClickAds = useSelector((data: any) => {
    return data?.adsReducer?.vote_click_popup_ads?.data;
  });

  useEffect(() => {
    voteClickAds?.data?.length > 1 &&
      setInterval(() => {
        voteClickAds?.data && voteClickAds?.data?.length - 1 === random
          ? setRandom(0)
          : setRandom(random + 1);
      }, 10000);
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(voteClickPopupAdsRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  const serverAPIUrl = process.env.REACT_APP_API_URL;

  return (
    <>
      {voteClickAds && voteClickAds?.response === true && (
        <Fragment>
          {voteClickAds &&
            voteClickAds?.data?.length > 0 &&
            voteClickAds?.data[random] && (
              <a
                href={voteClickAds?.data[random]?.banner_target_link}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardMedia
                  component="img"
                  height="auto"
                  image={`${serverAPIUrl}public/uploads/banner_ads/${voteClickAds?.data[random]?.banner_image}`}
                  alt="green iguana"
                  sx={{ objectFit: "unset", borderRadius: 0 }}
                />
              </a>
            )}
        </Fragment>
      )}
    </>
  );
};

export default VotePopupAds;
