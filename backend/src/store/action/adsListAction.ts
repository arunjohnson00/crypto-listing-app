import appRequest from "../../utils/fetchhandler";
import { ADS_LIST } from "../types";

export const listAdsListRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/adslist?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: ADS_LIST.LIST_ADS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addAdsListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/adslist`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: ADS_LIST.CREATE_ADS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editAdsListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/adslist/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: ADS_LIST.EDIT_ADS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateAdsListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/adslist/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: ADS_LIST.UPDATE_ADS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewAdsListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/adslist/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: ADS_LIST.VIEW_ADS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const searchAdsListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/adslist/${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: ADS_LIST.SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
