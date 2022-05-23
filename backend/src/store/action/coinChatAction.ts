import appRequest from "../../utils/fetchhandler";
import { CHAT } from "../types";

export const listCoinChatRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-chat`,
    method: "GET",
    secure: true,
    actionType: CHAT.LIST_CHAT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addCoinChatRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-chat`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHAT.ADD_CHAT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editCoinChatRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-chat/${values.id}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHAT.EDIT_CHAT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateCoinChatRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-chat/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHAT.UPDATE_CHAT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewCoinChatRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-chat/${values.id}/show`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHAT.VIEW_CHAT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const allCoinChatRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-chat-all`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHAT.ALL_CHAT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
