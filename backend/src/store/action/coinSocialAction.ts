import appRequest from "../../utils/fetchhandler";
import { SOCIALS } from "../types";

export const listCoinSocialRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-socials?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: SOCIALS.LIST_SOCIALS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addCoinSocialRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-socials`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SOCIALS.ADD_SOCIALS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editCoinSocialRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-socials/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SOCIALS.EDIT_SOCIALS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateCoinSocialRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-socials/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SOCIALS.UPDATE_SOCIALS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewCoinSocialRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-socials/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SOCIALS.VIEW_SOCIALS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const allCoinSocialRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-socials-all`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SOCIALS.ALL_SOCIALS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const searchCoinSocialRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-socials-search/${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SOCIALS.SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
