import appRequest from "../../utils/fetchhandler";
import { DASHBOARD } from "../types";

export const coinListingPerDaysRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/dashboard/coin-listing-count`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: DASHBOARD.COIN_LISTING_PER_DAYS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const monthWiseCoinListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/dashboard/month-wise-coin-listing`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: DASHBOARD.MONTH_WISE_COIN_LISTING,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinStatusCountRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/dashboard/coin-status-count`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: DASHBOARD.COIN_STATUS_COUNT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
