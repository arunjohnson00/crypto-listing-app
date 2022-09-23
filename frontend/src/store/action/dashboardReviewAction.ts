import appRequest from "../../utils/fetchhandler";
import { DASHBOARD_REVIEW } from "../types";

export const dashboardAddReviewRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/review/create`,
    method: "POST",
    secure: true,
    body: values,
    // body: values,
    fileUpload: true,
    actionType: DASHBOARD_REVIEW.ADD_REVIEW,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardEditReviewRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/review/edit`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: DASHBOARD_REVIEW.EDIT_REVIEW,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardUpdateReviewRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/review/update`,
    method: "POST",
    secure: true,
    //body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: true,
    actionType: DASHBOARD_REVIEW.UPDATE_REVIEW,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const dashboardDeleteReviewRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/review/delete`,
    method: "POST",
    secure: true,
    //body: JSON.stringify(Object.fromEntries(values)),
    body: values,
    fileUpload: true,
    actionType: DASHBOARD_REVIEW.DELETE_REVIEW,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
