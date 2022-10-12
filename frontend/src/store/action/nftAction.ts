import appRequest from "../../utils/fetchhandler";
import { NFT } from "../types";

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

export const nftPageListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/nft-listings`,
    method: "GET",
    secure: false,
    actionType: NFT.NFT_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const nftPageMostPopularRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/most-popular-nft`,
    method: "GET",
    secure: false,
    actionType: NFT.NFT_MOST_POPULAR,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const nftPageRecentlyAddedRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/recently-added-nft`,
    method: "GET",
    secure: false,
    actionType: NFT.NFT_RECENTLTY_ADDED,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const nftSinglePageDetailsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/nft-details/${values}`,
    method: "GET",
    secure: false,
    actionType: NFT.NFT_SINGLE_PAGE_DETAILS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
