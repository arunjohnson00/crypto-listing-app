import appRequest from "../../utils/fetchhandler";
import { COMMUNITY } from "../types";

export const listCoinCommunityRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-community`,
    method: "GET",
    secure: true,
    actionType: COMMUNITY.LIST_COMMUNITY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
