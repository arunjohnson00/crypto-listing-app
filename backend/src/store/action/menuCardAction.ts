import appRequest from "../../utils/fetchhandler";
import { MENUCARD } from "../types";

export const listMenuCardRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/menu-cards?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: MENUCARD.LIST_MENUCARD,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addMenuCardRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/menu-cards`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: MENUCARD.ADD_MENUCARD,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editMenuCardRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/menu-cards/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: MENUCARD.EDIT_MENUCARD,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateMenuCardRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/menu-cards/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: MENUCARD.UPDATE_MENUCARD,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewMenuCardRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/menu-cards/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: MENUCARD.VIEW_MENUCARD,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
