import appRequest from "../../utils/fetchhandler";
import { COINS } from "../types";

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

export const coinsRecentlyAddedRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-recently-added?page=${values}`,
    method: "GET",
    secure: false,
    actionType: COINS.CRYPTO_CURRENCIES_RECENTLY_ADDED,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinsBiggestGainersRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-biggest-gainers?page=${values}`,
    method: "GET",
    secure: false,
    actionType: COINS.CRYPTO_CURRENCIES_BIGGEST_GAINERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinsBiggestLosersRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-biggest-loosers?page=${values}`,
    method: "GET",
    secure: false,
    actionType: COINS.CRYPTO_CURRENCIES_BIGGEST_LOOSERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinsFeaturedCoinListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/featured-coin-list`,
    method: "GET",
    secure: false,
    actionType: COINS.FEATURED_COIN_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinsCryptoCurrenciesListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-list?page=${values}`,
    method: "GET",
    secure: false,
    actionType: COINS.CRYPTO_CURRENCIES_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinsCryptoCurrenciesNewRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-new?page=${values}`,
    method: "GET",
    secure: false,
    actionType: COINS.CRYPTO_CURRENCIES_NEW,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinsCryptoCurrenciesPresaleRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-presale?page=${values}`,
    method: "GET",
    secure: false,
    actionType: COINS.CRYPTO_CURRENCIES_PRESALE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinsCryptoCurrenciesTodaysBestRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-todays-best?page=${values}`,
    method: "GET",
    secure: false,
    actionType: COINS.CRYPTO_CURRENCIES_TODAYS_BEST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinsCryptoCurrenciesMostVotedRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-most-voted?page=${values}`,
    method: "GET",
    secure: false,
    actionType: COINS.CRYPTO_CURRENCIES_MOST_VISITED,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
export const coinsCryptoCurrenciesWatchListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/watchlist/create`,
    method: "POST",
    secure: true,
    body: values,
    // body: values,
    fileUpload: true,
    actionType: COINS.CRYPTO_CURRENCIES_WATCHLIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinsCryptoCurrenciesTabRequest = COINS.CRYPTO_CURRENCIES_TAB;
