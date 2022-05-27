import appRequest from "../../utils/fetchhandler";
import { COMMON } from "../types";

export const topbarCountRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/dashboard/top-bar-count`,
    method: "GET",
    secure: true,
    actionType: COMMON.TOPBAR_COUNT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
