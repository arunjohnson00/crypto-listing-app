import appRequest from "../../utils/fetchhandler";
import { NFT_MARKETPLACES } from "../types";

export const listNftMarketPlaceRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-marketplaces`,
    method: "GET",
    secure: true,
    actionType: NFT_MARKETPLACES.LIST_NFT_MARKETPLACES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addNftMarketPlaceRequest = (
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
    actionType: NFT_MARKETPLACES.ADD_NFT_MARKETPLACES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editNftMarketPlaceRequest = (
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
    actionType: NFT_MARKETPLACES.EDIT_NFT_MARKETPLACES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateNftMarketPlaceRequest = (
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
    actionType: NFT_MARKETPLACES.UPDATE_NFT_MARKETPLACES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewNftMarketPlaceRequest = (
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
    actionType: NFT_MARKETPLACES.VIEW_NFT_MARKETPLACES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
