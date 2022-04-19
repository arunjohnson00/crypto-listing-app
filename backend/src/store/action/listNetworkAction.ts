import appRequest from "../../utils/fetchhandler";
import { NETWORK } from "../types";

export const listNetworkRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/networks`,
    method: "GET",
    secure: true,
    actionType: NETWORK.LIST_NETWORK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
