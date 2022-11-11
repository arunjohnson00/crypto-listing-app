import appRequest from "../../utils/fetchhandler";
import { COMMON } from "../types";

export const commonCoinAutoSearchRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-search/${values}`,
    method: "GET",
    secure: true,
    actionType: COMMON.COINS_SEARCH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
