import appRequest from "../../utils/fetchhandler";
import { COIN } from "../types";

// export const adsSummaryRequest = (
//   values: any,
//   successHandler: any,
//   errorHandler: any
// ) => {
//   const fetchOptions = {
//     // //url: `api/b/v1/exchange`,
//     // url: `api/b/v1/airdrops?page=${values?.pageCount}`,
//     // method: "GET",
//     secure: true,
//     actionType: ADS.ADS_SUMMARY,
//   };
//   return appRequest(fetchOptions, successHandler, errorHandler);
// };
// export const adsSummaryRequest = ADS.ADS_SUMMARY;
// export const removeFromAdsSummaryRequest = ADS.REMOVE_FROM_ADS_SUMMARY;
export const coinOnloadVerificationRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-on-load-verification/${values} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_ONLOAD_VERIFICATION,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinDetailFirstBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-detail-first-block/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_DETAIL_FIRST_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinOverviewBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-overview-block/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_OVERVIEW_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinAboutBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-about-block/${values} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_ABOUT_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinSocialGraphRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-social-graph/${values} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_SOCIAL_GRAPH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinRatingBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-rating-block/${values} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_RATING_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinHistoricalDataBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-historical-data/${values} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_HISTORICAL_DATA_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinTodaysPriceBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-todays-price/${values} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_TODAYS_PRICE_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinCommunityBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-community-graph/${values?.slug}/${values?.name} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_COMMUNITY_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinFAQBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-faq-block/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_FAQ_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinPriceGraphBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-price-widget/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_PRICE_GRAPH_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinEventBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-events/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_EVENTS_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinPresaleBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-presale/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_PRESALE_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
