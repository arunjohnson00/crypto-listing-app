import appRequest from "../../utils/fetchhandler";
import { EVENTS_REWARD_ADDRESS } from "../types";

export const listEventsRewardAddressRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/reward-address?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: EVENTS_REWARD_ADDRESS.LIST_EVENTS_REWARD_ADDRESS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addEventsRewardAddressRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/reward-address`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS_REWARD_ADDRESS.ADD_EVENTS_REWARD_ADDRESS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editEventsRewardAddressRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/reward-address/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS_REWARD_ADDRESS.EDIT_EVENTS_REWARD_ADDRESS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateEventsRewardAddressRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/reward-address/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS_REWARD_ADDRESS.UPDATE_EVENTS_REWARD_ADDRESS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewEventsRewardAddressRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/reward-address/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS_REWARD_ADDRESS.VIEW_EVENTS_REWARD_ADDRESS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const allEventsRewardAddressRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/reward-address-all`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS_REWARD_ADDRESS.ALL_EVENTS_REWARD_ADDRESS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const searchEventsRewardAddressRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/event-reward-address-search/${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS_REWARD_ADDRESS.SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
