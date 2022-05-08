import appRequest from "../../utils/fetchhandler";
import { COMMUNITY } from "../types";

export const listCoinCommunityRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-community`,
    method: "GET",
    secure: true,
    actionType: COMMUNITY.LIST_COMMUNITY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addCoinCommunityRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-community`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COMMUNITY.ADD_COMMUNITY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editCoinCommunityRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-community/${values.get("id")}/edit`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COMMUNITY.EDIT_COMMUNITY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateCoinCommunityRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-community/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COMMUNITY.UPDATE_COMMUNITY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewCoinCommunityRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-community/${values.get("id")}/show`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COMMUNITY.VIEW_COMMUNITY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
