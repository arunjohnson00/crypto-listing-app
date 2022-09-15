import appRequest from "../../utils/fetchhandler";
import { DISCOVER } from "../types";

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

export const discoverLatestCoinRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/recently-added`,
    method: "GET",
    secure: false,
    actionType: DISCOVER.LATEST_COIN,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const discoverBiggestGainersRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/biggest-gainers`,
    method: "GET",
    secure: false,
    actionType: DISCOVER.BIGGEST_GAINERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const discoverBiggestLosersRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/biggest-loosers`,
    method: "GET",
    secure: false,
    actionType: DISCOVER.BIGGEST_LOOSERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const discoverLatestPresaleRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-presale`,
    method: "GET",
    secure: false,
    actionType: DISCOVER.LATEST_PRESALE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const discoverLatestNewsListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/news-feed/${values}`,
    method: "GET",
    secure: false,
    actionType: DISCOVER.LATEST_NEWS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const discoverLatestAirdropRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/airdrop`,
    method: "GET",
    secure: false,
    actionType: DISCOVER.LATEST_AIRDROPS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const discoverLatestNFTRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/nft-listings`,
    method: "GET",
    secure: false,
    actionType: DISCOVER.LATEST_NFT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const discoverLatestEventsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-events`,
    method: "GET",
    secure: false,
    actionType: DISCOVER.LATEST_EVENTS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const discoverVideoListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/get-videos`,
    method: "GET",
    secure: false,
    actionType: DISCOVER.VIDEO_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const discoverNFTMarketplacesRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/nft-marketplaces`,
    method: "GET",
    secure: false,
    actionType: DISCOVER.NFT_MARKET_PLACES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
