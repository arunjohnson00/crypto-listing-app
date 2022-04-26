import appRequest from "../../utils/fetchhandler";
import { EXCHANGE } from "../types";

export const listExchangeRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/exchange`,
    method: "GET",
    secure: true,
    actionType: EXCHANGE.LIST_EXCHANGE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
