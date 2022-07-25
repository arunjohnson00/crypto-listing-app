import appRequest from "../../utils/fetchhandler";
import { ADS } from "../types";

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
export const adsSummaryRequest = ADS.ADS_SUMMARY;
export const removeFromAdsSummaryRequest = ADS.REMOVE_FROM_ADS_SUMMARY;

export const airDropListSearchWithCoinSearchRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/airdrops-search-with-coin/${values}`,
    method: "GET",
    secure: true,
    actionType: ADS.AIRDROPS_LIST_WITH_COIN_SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const eventsListSearchWithCoinSearchRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/events-search-with-coin/${values}`,
    method: "GET",
    secure: true,
    actionType: ADS.EVENTS_LIST_WITH_COIN_SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
