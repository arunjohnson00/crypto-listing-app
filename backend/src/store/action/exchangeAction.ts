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
    url: `api/b/v1/exchange/${values.id}/edit`,
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
    url: `api/b/v1/exchange/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EXCHANGE.VIEW_EXCHANGE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const allExchangeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/exchange-all`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EXCHANGE.ALL_EXCHANGE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
