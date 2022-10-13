import appRequest from "../../utils/fetchhandler";
import { AIRDROP } from "../types";

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

export const airdropPageListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/airdrop-listing`,
    method: "GET",
    secure: false,
    actionType: AIRDROP.AIRDROP_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const airdropSinglePageDetailsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/airdrop/${values}`,
    method: "GET",
    secure: false,
    actionType: AIRDROP.AIRDROP_SINGLE_PAGE_DETAILS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
