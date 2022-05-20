import appRequest from "../../utils/fetchhandler";
import { AIRDROPS } from "../types";

export const listAirDropsRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/airdrops`,
    method: "GET",
    secure: true,
    actionType: AIRDROPS.LIST_AIRDROPS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addAirDropsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/airdrops`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: AIRDROPS.ADD_AIRDROPS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editAirDropsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/airdrops/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: AIRDROPS.EDIT_AIRDROPS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateAirDropsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/airdrops/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: AIRDROPS.UPDATE_AIRDROPS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewAirDropsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/airdrops/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: AIRDROPS.VIEW_AIRDROPS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
