import appRequest from "../../utils/fetchhandler";
import { DASHBOARD_COIN } from "../types";

export const dashboardCoinNetworkListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/networks`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_COIN.NETWORK_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardCoinExchangeListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/exchanges`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_COIN.EXCHANGE_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardCoinAuditListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/auditors`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_COIN.AUDIT_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardCoinChartProviderListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/chart-providers`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_COIN.CHART_PROVIDER_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardCoinChatPlatformListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/chat-platforms`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_COIN.CHAT_PLATFORM_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardCoinSocialPlatformListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/social-platforms`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_COIN.SOCIAL_PLATFORM_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardAddCoinRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/coin/create`,
    method: "POST",
    secure: true,
    body: values,
    // body: values,
    fileUpload: true,
    actionType: DASHBOARD_COIN.ADD_COIN,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardEditCoinRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/coin/edit`,
    method: "GET",
    secure: true,
    body: JSON.stringify(Object.fromEntries(values)),
    // body: values,
    fileUpload: false,
    actionType: DASHBOARD_COIN.EDIT_COIN,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardUpdateCoinRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/coin/update`,
    method: "GET",
    secure: true,
    body: JSON.stringify(Object.fromEntries(values)),
    // body: values,
    fileUpload: false,
    actionType: DASHBOARD_COIN.UPDATE_COIN,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardDeleteCoinRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/coin/delete`,
    method: "GET",
    secure: true,
    body: JSON.stringify(Object.fromEntries(values)),
    // body: values,
    fileUpload: false,
    actionType: DASHBOARD_COIN.DELETE_COIN,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
