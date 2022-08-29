import appRequest from "../../utils/fetchhandler";
import { COMMON } from "../types";

export const latestNewsRequest = COMMON.LATEST_NEWS;

export const topbarSearchRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/search/${values}`,
    method: "GET",
    secure: false,
    actionType: COMMON.TOPBAR_SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinVoteRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-vote/${values}`,
    method: "GET",
    secure: false,
    actionType: COMMON.COIN_VOTE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const recentSearchRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/recent-search/${values}`,
    method: "GET",
    secure: false,
    actionType: COMMON.RECENT_SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
