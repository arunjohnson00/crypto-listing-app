import appRequest from "../../utils/fetchhandler";
import { NETWORK } from "../types";

export const listNetworkRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/networks`,
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
  console.log(...values);
  const fetchOptions = {
    url: `api/b/v1/networks/${values.get("id")}/edit`,
    method: "POST",
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
  console.log(...values);
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
  console.log(...values);
  const fetchOptions = {
    url: `api/b/v1/networks/${values.get("id")}/show`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NETWORK.VIEW_NETWORK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};