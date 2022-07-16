import appRequest from "../../utils/fetchhandler";
import { NETWORK } from "../types";

export const listNetworkRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/networks?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: NETWORK.LIST_NETWORK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  // console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/networks`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NETWORK.ADD_NETWORK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/networks/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NETWORK.EDIT_NETWORK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/networks/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NETWORK.UPDATE_NETWORK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/networks/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NETWORK.VIEW_NETWORK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const allNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/networks-all`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NETWORK.ALL_NETWORK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const searchNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/networksh-search/${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NETWORK.SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
