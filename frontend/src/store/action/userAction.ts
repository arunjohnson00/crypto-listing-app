import appRequest from "../../utils/fetchhandler";
import { USER } from "../types";

export const userRegisterRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/register`,
    method: "POST",
    secure: false,
    body: JSON.stringify(Object.fromEntries(values)),
    fileUpload: false,
    actionType: USER.USER_REGISTER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const userLoginRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/login`,
    method: "POST",
    secure: false,
    body: JSON.stringify(Object.fromEntries(values)),
    fileUpload: false,
    actionType: USER.USER_LOGIN,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const userLogoutRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/logout`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USER.USER_LOGOUT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const userCoinListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/coin/list?page=${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USER.USER_COIN_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const userNFTListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/nft/list?page=${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USER.USER_NFT_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const userEventsListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/user-event/list?page=${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USER.USER_EVENTS_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const userAirdropsListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/user-airdrop/list?page=${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USER.USER_AIRDROP_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const userReviewListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/review/list?page=${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USER.USER_REVIEW_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const userWatchListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/watchlist/list?page=${values}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USER.USER_WATCHLIST_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const userAnnouncementsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/user-announcements`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USER.USER_ANNOUNCEMENTS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const userProfilePictureChangeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/change-profile-picture`,
    method: "POST",
    secure: true,
    body: values,
    // body: values,
    fileUpload: true,
    actionType: USER.USER_PROFILE_PICTURE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
