import appRequest from "../../utils/fetchhandler";
import { EVENTS_CATEGORY } from "../types";

export const listEventsCategoryRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/events-category?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: EVENTS_CATEGORY.LIST_EVENTS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addEventsCategoryRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/events-category`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS_CATEGORY.ADD_EVENTS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editEventsCategoryRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/events-category/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS_CATEGORY.EDIT_EVENTS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateEventsCategoryRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/events-category/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS_CATEGORY.UPDATE_EVENTS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewEventsCategoryRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/events-category/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS_CATEGORY.VIEW_EVENTS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const allEventsCategoryRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/events-category-all`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EVENTS_CATEGORY.ALL_EVENTS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
