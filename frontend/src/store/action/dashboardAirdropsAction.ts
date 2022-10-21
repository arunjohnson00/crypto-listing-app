import appRequest from "../../utils/fetchhandler";
import { DASHBOARD_AIRDROPS } from "../types";

export const dashboardAirdropsCoinListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/coins-master`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_AIRDROPS.COIN_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardAddAirdropsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/airdrop/create-new`,
    method: "POST",
    secure: true,
    body: values,
    // body: values,
    fileUpload: true,
    actionType: DASHBOARD_AIRDROPS.ADD_AIRDROPS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardEditAirdropsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/airdrop/edit`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: DASHBOARD_AIRDROPS.EDIT_AIRDROPS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardUpdateAirdropsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/airdrop/update`,
    method: "POST",
    secure: true,
    //body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: true,
    actionType: DASHBOARD_AIRDROPS.UPDATE_AIRDROPS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardDeleteAirdropsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/airdrop/delete`,
    method: "POST",
    secure: true,
    //body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: true,
    actionType: DASHBOARD_AIRDROPS.DELETE_AIRDROPS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
