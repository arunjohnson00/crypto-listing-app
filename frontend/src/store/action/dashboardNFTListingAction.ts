import appRequest from "../../utils/fetchhandler";
import { DASHBOARD_NFT_LISTING } from "../types";

export const dashboardNFTListingNetworkListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/nft-networks`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_NFT_LISTING.NFT_NETWORK_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardNFTListingMarketPlaceListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/nft-marketplace`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_NFT_LISTING.NFT_MARKETPLACES_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardNFTListingEventCategoryListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/event-categories`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_NFT_LISTING.NFT_EVENT_CATEGORY_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardNFTListingNFTCurrencyListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/nft-currency-lists`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_NFT_LISTING.NFT_CURRENCY_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardNFTListingChatPlatformListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/chat-platforms`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_NFT_LISTING.CHAT_PLATFORM_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardNFTListingSocialPlatformListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/social-platforms`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_NFT_LISTING.SOCIAL_PLATFORM_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardAddNFTListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/nft/create`,
    method: "POST",
    secure: true,
    body: values,
    // body: values,
    fileUpload: true,
    actionType: DASHBOARD_NFT_LISTING.ADD_NFT_LISTING,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardEditNFTListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/nft/edit`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: DASHBOARD_NFT_LISTING.EDIT_NFT_LISTING,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardUpdateNFTListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/nft/update`,
    method: "POST",
    secure: true,
    //body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: true,
    actionType: DASHBOARD_NFT_LISTING.UPDATE_NFT_LISTING,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardDeleteNFTListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/nft/delete`,
    method: "POST",
    secure: true,
    //body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: true,
    actionType: DASHBOARD_NFT_LISTING.DELETE_NFT_LISTING,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
