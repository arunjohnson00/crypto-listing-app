import appRequest from "../../utils/fetchhandler";
import { ADS } from "../types";

export const mainBannerAdsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/get-main-banner`,
    method: "GET",
    secure: false,
    actionType: ADS.MAIN_BANNER_ADS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const squareBannerAdsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/get-square-banner`,
    method: "GET",
    secure: false,
    actionType: ADS.SQUARE_BANNER_ADS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const squareHalfBannerAdsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/get-square-banner-half`,
    method: "GET",
    secure: false,
    actionType: ADS.SQUARE_BANNER_HALF_ADS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const voteClickPopupAdsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/get-vote-click-popup`,
    method: "GET",
    secure: false,
    actionType: ADS.VOTE_CLICK_POPUP_ADS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const welcomePopupAdsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/get-welcome-popup`,
    method: "GET",
    secure: false,
    actionType: ADS.WELCOME_POPUP_ADS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const searchAdsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/get-search-ad `,
    method: "GET",
    secure: false,
    actionType: ADS.SEARCH_ADS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const videoAdsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/get-video-ad `,
    method: "GET",
    secure: false,
    actionType: ADS.VIDEO_ADS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
