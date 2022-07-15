import appRequest from "../../utils/fetchhandler";
import { CHART_PROVIDER } from "../types";

export const listChartProviderRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-chart-provider?page=${pageData?.pageCount}`,
    method: "GET",
    secure: true,
    actionType: CHART_PROVIDER.LIST_CHART_PROVIDER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addChartProviderRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-chart-provider`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHART_PROVIDER.ADD_CHART_PROVIDER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editChartProviderRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-chart-provider/${values.id}/edit`,
    method: "GEt",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHART_PROVIDER.EDIT_CHART_PROVIDER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateChartProviderRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-chart-provider/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHART_PROVIDER.UPDATE_CHART_PROVIDER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewChartProviderRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-chart-provider/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHART_PROVIDER.VIEW_CHART_PROVIDER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const allChartProviderRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-chart-provider-all`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHART_PROVIDER.ALL_CHART_PROVIDER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
