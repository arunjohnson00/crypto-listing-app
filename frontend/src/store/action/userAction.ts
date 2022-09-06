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
    url: `api/f/v1/coin/list`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USER.USER_COIN_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
