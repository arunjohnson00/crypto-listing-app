import appRequest from "../../utils/fetchhandler";
import { BADGES } from "../types";

export const listBadgeRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/badges?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: BADGES.LIST_BADGES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addBadgeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/badges`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: BADGES.ADD_BADGES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editBadgeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/badges/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: BADGES.EDIT_BADGES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateBadgeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/badges/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: BADGES.UPDATE_BADGES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewBadgeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/badges/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: BADGES.VIEW_BADGES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
