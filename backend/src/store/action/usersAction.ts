import appRequest from "../../utils/fetchhandler";
import { USERS } from "../types";

export const listUserRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/users?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: USERS.LIST_USERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addUserRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  console.log(...values);
  const fetchOptions = {
    url: `api/b/v1/users`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USERS.ADD_USERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editUserRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/users/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USERS.EDIT_USERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateUserRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/users/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USERS.UPDATE_USERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewUserRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/users/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USERS.VIEW_USERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const searchUserRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/users-search/${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USERS.SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
