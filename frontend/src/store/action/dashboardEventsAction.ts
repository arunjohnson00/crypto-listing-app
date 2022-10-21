import appRequest from "../../utils/fetchhandler";
import { DASHBOARD_EVENTS } from "../types";

export const dashboardEventsRewardAddressListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/reward-addresses`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_EVENTS.EVENT_REWARD_ADDRESS_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardEventsCoinListRequest = (
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
    actionType: DASHBOARD_EVENTS.COIN_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardEventsCategoryListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/list/event-categories`,
    method: "GET",
    secure: true,
    // body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: false,
    actionType: DASHBOARD_EVENTS.EVENT_CATEGORY_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardAddEventsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/user-event/create`,
    method: "POST",
    secure: true,
    body: values,
    // body: values,
    fileUpload: true,
    actionType: DASHBOARD_EVENTS.ADD_EVENTS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardEditEventsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/user-event/edit`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: DASHBOARD_EVENTS.EDIT_EVENTS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardUpdateEventsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/user-event/update`,
    method: "POST",
    secure: true,
    //body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: true,
    actionType: DASHBOARD_EVENTS.UPDATE_EVENTS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardDeleteEventsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/user-event/delete`,
    method: "POST",
    secure: true,
    //body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: true,
    actionType: DASHBOARD_EVENTS.DELETE_EVENTS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
