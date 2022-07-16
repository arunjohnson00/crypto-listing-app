import appRequest from "../../utils/fetchhandler";
import { NFT_MARKETPLACES } from "../types";

export const listNftMarketPlaceRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-marketplaces?page=${pageData?.pageCount}`,
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
    url: `api/b/v1/nft-marketplaces/${values.id}/edit`,
    method: "GET",
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
    url: `api/b/v1/nft-marketplaces/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_MARKETPLACES.VIEW_NFT_MARKETPLACES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const searchNftMarketPlaceRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/nft-marketplaces-search/${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_MARKETPLACES.SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
