import appRequest from "../../utils/fetchhandler";
import { COINS } from "../types";

export const listCoinRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins`,
    method: "GET",
    secure: true,
    actionType: COINS.LIST_COINS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addCoinRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COINS.ADD_COINS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editCoinRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins/${values.get("id")}/edit`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COINS.EDIT_COINS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateCoinRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COINS.UPDATE_COINS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewCoinRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins/${values.get("id")}/show`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COINS.VIEW_COINS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
