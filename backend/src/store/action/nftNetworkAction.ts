import appRequest from "../../utils/fetchhandler";
import { NFT_NETWORKS } from "../types";

export const listNFTNetworkRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/nft-listing-network?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: NFT_NETWORKS.LIST_NFT_NETWORKS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addNFTNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  // console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/nft-listing-network`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_NETWORKS.ADD_NFT_NETWORKS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editNFTNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-network/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_NETWORKS.EDIT_NFT_NETWORKS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateNFTNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-network/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_NETWORKS.UPDATE_NFT_NETWORKS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewNFTNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-network/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_NETWORKS.VIEW_NFT_NETWORKS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const allNFTNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-network-all`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_NETWORKS.ALL_NFT_NETWORKS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const searchNFTNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/nft-listing-network-search/${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_NETWORKS.SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
