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
