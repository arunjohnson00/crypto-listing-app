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
