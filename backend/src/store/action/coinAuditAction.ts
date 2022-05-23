import appRequest from "../../utils/fetchhandler";
import { AUDIT } from "../types";

export const listCoinAuditRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-audit`,
    method: "GET",
    secure: true,
    actionType: AUDIT.LIST_AUDIT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addCoinAuditRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-audit`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: AUDIT.ADD_AUDIT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editCoinAuditRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-audit/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: AUDIT.EDIT_AUDIT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateCoinAuditRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-audit/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: AUDIT.UPDATE_AUDIT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewCoinAuditRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-audit/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: AUDIT.VIEW_AUDIT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const allCoinAuditRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-audit-all`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: AUDIT.ALL_AUDIT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
