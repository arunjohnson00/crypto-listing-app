import appRequest from "../../utils/fetchhandler";
import { HOME } from "../types";

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

export const recentlyAddedRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/recently-added`,
    method: "GET",
    secure: false,
    actionType: HOME.RECENTLY_ADDED,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const biggestGainersRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/biggest-gainers`,
    method: "GET",
    secure: false,
    actionType: HOME.BIGGEST_GAINERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const biggestLosersRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/biggest-loosers`,
    method: "GET",
    secure: false,
    actionType: HOME.BIGGEST_LOOSERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const featuredCoinListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/featured-coin-list`,
    method: "GET",
    secure: false,
    actionType: HOME.FEATURED_COIN_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const cryptoCurrenciesListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-list?page=${values}`,
    method: "GET",
    secure: false,
    actionType: HOME.CRYPTO_CURRENCIES_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const cryptoCurrenciesNewRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-new`,
    method: "GET",
    secure: false,
    actionType: HOME.CRYPTO_CURRENCIES_NEW,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const cryptoCurrenciesPresaleRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-presale`,
    method: "GET",
    secure: false,
    actionType: HOME.CRYPTO_CURRENCIES_PRESALE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const cryptoCurrenciesTodaysBestRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-todays-best`,
    method: "GET",
    secure: false,
    actionType: HOME.CRYPTO_CURRENCIES_TODAYS_BEST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const cryptoCurrenciesTabRequest = HOME.CRYPTO_CURRENCIES_TAB;

export const menuCardRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/menu-cards`,
    method: "GET",
    secure: false,
    actionType: HOME.MENU_CARDS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const nftListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/nft-listings`,
    method: "GET",
    secure: false,
    actionType: HOME.NFT_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const videoListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/get-videos`,
    method: "GET",
    secure: false,
    actionType: HOME.VIDEO_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const trendingCoinListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/trending-coin-list`,
    method: "GET",
    secure: false,
    actionType: HOME.TRENDING_COIN_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const eventListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-events`,
    method: "GET",
    secure: false,
    actionType: HOME.EVENTS_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
