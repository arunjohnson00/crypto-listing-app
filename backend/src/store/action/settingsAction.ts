import appRequest from "../../utils/fetchhandler";
import { SETTINGS } from "../types";

export const viewRandomVoteStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/random-votes-store?show=${values.show}`,
    method: "GET",
    // body: JSON.stringify(values),
    secure: true,
    actionType: SETTINGS.VIEW_RANDOM_VOTES_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateRandomVoteStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/random-votes-store`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.UPDATE_RANDOM_VOTES_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewDiscountStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/discount-store?show=${values.show}`,
    method: "GET",
    secure: true,
    // body: values,
    actionType: SETTINGS.VIEW_DISCOUNT_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateDiscountStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/discount-store`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.UPDATE_RANDOM_VOTES_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewPrivacyPolicyStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/privacy-policy-store?show=${values.show}`,
    method: "GET",
    //body: values,
    secure: true,
    actionType: SETTINGS.VIEW_PRIVACY_POLICY_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updatePrivacyPolicyStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/privacy-policy-store`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.UPDATE_PRIVACY_POLICY_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewDisclaimerStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/disclaimer-store?show=${values.show}`,
    method: "GET",
    // body: values,
    secure: true,
    actionType: SETTINGS.VIEW_DISCLAIMER_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateDisclaimerStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/disclaimer-store`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.UPDATE_DISCLAIMER_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewTermsAndConditionStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/terms-and-conditions-store?show=${values.show}`,
    method: "GET",
    // body: values,
    secure: true,
    actionType: SETTINGS.VIEW_TERMS_CONDITIONS_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateTermsAndConditionStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/terms-and-conditions-store`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.UPDATE_TERMS_CONDITIONS_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const viewTopBarNotificationStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/top-bar-notification-store?show=${values.show}`,
    //  body: values,
    method: "GET",
    secure: true,
    actionType: SETTINGS.VIEW_TOP_BAR_NOTIFICATION_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateTopBarNotificationStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/top-bar-notification-store`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.UPDATE_TOP_BAR_NOTIFICATION_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateChangePasswordStore = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/change-password`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.CHANGE_PASSWORD_STORE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const listDashboardImageSlider = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/dashboard-image-slider?show=${values.show}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.LIST_DASHBOARD_IMAGE_SLIDER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const deleteDashboardImageSlider = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/dashboard-image-slider?index=${values}`,
    method: "DELETE",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.DELETE_DASHBOARD_IMAGE_SLIDER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
export const updateDashboardImageSlider = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/dashboard-image-slider`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.UPDATE_DASHBOARD_IMAGE_SLIDER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const listDashboardInfoBanner = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/dashboard-info-banner?show=${values.show}`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.LIST_DASHBOARD_INFO_BANNER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const deleteDashboardInfoBanner = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/dashboard-info-banner?index=${values}`,
    method: "DELETE",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.DELETE_DASHBOARD_INFO_BANNER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const updateDashboardInfoBanner = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/settings/dashboard-info-banner`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SETTINGS.UPDATE_DASHBOARD_INFO_BANNER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
