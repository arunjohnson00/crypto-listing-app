import appRequest from "../../utils/fetchhandler";
import { BADGES } from "../types";

export const listBadgesRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/exchange`,
    method: "GET",
    secure: true,
    actionType: BADGES.LIST_BADGES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
