import appRequest from "../../utils/fetchhandler";
import { EVENTS } from "../types";

// export const adsSummaryRequest = (
//   values: any,
//   successHandler: any,
//   errorHandler: any
// ) => {
//   const fetchOptions = {
//     // //url: `api/b/v1/exchange`,
//     // url: `api/b/v1/airdrops?page=${values?.pageCount}`,
//     // method: "GET",
//     secure: true,
//     actionType: ADS.ADS_SUMMARY,
//   };
//   return appRequest(fetchOptions, successHandler, errorHandler);
// };
// export const adsSummaryRequest = ADS.ADS_SUMMARY;
// export const removeFromAdsSummaryRequest = ADS.REMOVE_FROM_ADS_SUMMARY;

export const eventsCategoriesRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/event-categories`,
    method: "GET",
    secure: false,
    actionType: EVENTS.EVENTS_CATEGORY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const eventsRecentlyAddedRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/recently-added-events`,
    method: "GET",
    secure: false,
    actionType: EVENTS.EVENTS_RECENLTY_ADDED,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const eventsUpcomingRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/upcoming-events`,
    method: "GET",
    secure: false,
    actionType: EVENTS.EVENTS_UPCOMING,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const eventsPastRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/past-events`,
    method: "GET",
    secure: false,
    actionType: EVENTS.EVENTS_PAST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
