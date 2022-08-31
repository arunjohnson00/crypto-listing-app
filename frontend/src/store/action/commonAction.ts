import appRequest from "../../utils/fetchhandler";
import { COMMON } from "../types";

// export const latestNewsRequest = COMMON.LATEST_NEWS;

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
  // console.log(values);
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/recent-search`,
    method: "POST",
    secure: false,
    body: values,
    fileUpload: true,
    actionType: COMMON.RECENT_SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const latestNewsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,

    url:
      values?.term === "" || values?.term === undefined
        ? `api/f/v1/news-feed/${values?.count}`
        : `api/f/v1/news-feed/${values?.count}/${values?.term}`,
    method: "GET",
    secure: false,
    actionType: COMMON.LATEST_NEWS_FEED,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
