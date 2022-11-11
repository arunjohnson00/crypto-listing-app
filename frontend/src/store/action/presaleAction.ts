import appRequest from "../../utils/fetchhandler";
import { PRESALE } from "../types";

export const presalePageListingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-presale?page=${values}`,
    method: "GET",
    secure: false,
    actionType: PRESALE.PRESALE_LISTINGS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const presalePageListingActiveRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-presale-active?page=${values}`,
    method: "GET",
    secure: false,
    actionType: PRESALE.PRESALE_LISTINGS_ACTIVE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const presalePageListingUpcomingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-presale-upcoming?page=${values}`,
    method: "GET",
    secure: false,
    actionType: PRESALE.PRESALE_LISTINGS_UPCOMING,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const presalePageListingExpiredRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/crypto-currencies-presale-expired?page=${values}`,
    method: "GET",
    secure: false,
    actionType: PRESALE.PRESALE_LISTINGS_EXPIRED,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
