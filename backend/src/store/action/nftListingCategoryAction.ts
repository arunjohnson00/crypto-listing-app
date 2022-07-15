import appRequest from "../../utils/fetchhandler";
import { NFT_LISTINGS_CATEGORY } from "../types";

export const listNftListingCategoryRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-category?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: NFT_LISTINGS_CATEGORY.LIST_NFT_LISTINGS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addNftListingCategoryRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-category`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS_CATEGORY.ADD_NFT_LISTINGS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editNftListingCategoryRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-category/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS_CATEGORY.EDIT_NFT_LISTINGS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateNftListingCategoryRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-category/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS_CATEGORY.UPDATE_NFT_LISTINGS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewNftListingCategoryRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-category/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS_CATEGORY.VIEW_NFT_LISTINGS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const allNftListingCategoryRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/nft-listing-category-all`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NFT_LISTINGS_CATEGORY.ALL_NFT_LISTINGS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
