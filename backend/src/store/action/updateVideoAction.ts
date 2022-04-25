import appRequest from "../../utils/fetchhandler";
import { VIDEOS } from "../types";
export const updateVideosRequest = (
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
