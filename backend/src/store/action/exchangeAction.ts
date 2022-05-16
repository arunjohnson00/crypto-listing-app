import appRequest from "../../utils/fetchhandler";
import { EXCHANGE } from "../types";

export const listExchangeRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/exchange`,
    method: "GET",
    secure: true,
    actionType: EXCHANGE.LIST_EXCHANGE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addExchangeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/exchange`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EXCHANGE.ADD_EXCHANGE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editExchangeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/exchange/${values}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EXCHANGE.EDIT_EXCHANGE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateExchangeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/exchange/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EXCHANGE.UPDATE_EXCHANGE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewExchangeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/exchange/${values.get("id")}/show`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EXCHANGE.VIEW_EXCHANGE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};