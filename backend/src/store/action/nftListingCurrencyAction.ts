import appRequest from "../../utils/fetchhandler";
import { NFT_LISTINGS_CURRENCY } from "../types";

export const listNftListingCurrencyRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-currency?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: NFT_LISTINGS_CURRENCY.LIST_NFT_LISTINGS_CURRENCY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addNftListingCurrencyRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-currency`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS_CURRENCY.ADD_NFT_LISTINGS_CURRENCY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editNftListingCurrencyRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-currency/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS_CURRENCY.EDIT_NFT_LISTINGS_CURRENCY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateNftListingCurrencyRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-currency/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS_CURRENCY.UPDATE_NFT_LISTINGS_CURRENCY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewNftListingCurrencyRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-currency/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS_CURRENCY.VIEW_NFT_LISTINGS_CURRENCY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const allNftListingCurrencyRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-currency-all`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS_CURRENCY.ALL_NFT_LISTINGS_CURRENCY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const searchNftListingCurrencyRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/nft-listing-currency-search/${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS_CURRENCY.SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
