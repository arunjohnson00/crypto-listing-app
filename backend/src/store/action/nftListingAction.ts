import appRequest from "../../utils/fetchhandler";
import { NFT_LISTINGS } from "../types";

export const listNftListingRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: NFT_LISTINGS.LIST_NFT_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addNftListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS.ADD_NFT_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editNftListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS.EDIT_NFT_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateNftListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS.UPDATE_NFT_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewNftListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing/${values.get("id")}/show`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS.VIEW_NFT_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const searchNftListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/nft-listing-search/${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS.SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const allNftListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/nft-all `,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS.ALL_NFT_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
