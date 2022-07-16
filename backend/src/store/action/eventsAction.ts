import appRequest from "../../utils/fetchhandler";
import { EVENTS } from "../types";

export const listEventsRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/events?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: EVENTS.LIST_EVENTS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addEventsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/events`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS.ADD_EVENTS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editEventsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/events/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS.EDIT_EVENTS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateEventsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/events/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS.UPDATE_EVENTS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewEventsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/events/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS.VIEW_EVENTS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const searchEventsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/events-search/${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS.SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
