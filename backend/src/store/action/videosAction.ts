import appRequest from "../../utils/fetchhandler";
import { VIDEOS } from "../types";

export const listVideoRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/videos`,
    method: "GET",
    secure: true,
    actionType: VIDEOS.LIST_VIDEOS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const addVideoRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  console.log(...values);
  const fetchOptions = {
    url: `api/b/v1/videos`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: VIDEOS.ADD_VIDEOS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const editVideoRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  console.log(...values);
  const fetchOptions = {
    url: `api/b/v1/videos/${values.get("id")}/edit`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: VIDEOS.EDIT_VIDEOS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateVideoRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  console.log(...values);
  const fetchOptions = {
    url: `api/b/v1/videos/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: VIDEOS.UPDATE_VIDEOS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewVideoRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  console.log(...values);
  const fetchOptions = {
    url: `api/b/v1/videos/${values.get("id")}/show`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: VIDEOS.VIEW_VIDEOS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
