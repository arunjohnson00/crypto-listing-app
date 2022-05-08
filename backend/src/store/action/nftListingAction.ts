import appRequest from "../../utils/fetchhandler";
import { NFT_LISTINGS } from "../types";

export const listNftListingRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-marketplaces`,
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
    url: `api/b/v1/nft-marketplaces`,
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
    url: `api/b/v1/nft-marketplaces/${values.get("id")}/edit`,
    method: "POST",
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
    url: `api/b/v1/nft-marketplaces/${values.get("id")}`,
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
    url: `api/b/v1/nft-marketplaces/${values.get("id")}/show`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS.VIEW_NFT_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
