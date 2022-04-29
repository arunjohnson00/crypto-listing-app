import appRequest from "../../utils/fetchhandler";
import { VIDEOS } from "../types";
export const addVideosRequest = (
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