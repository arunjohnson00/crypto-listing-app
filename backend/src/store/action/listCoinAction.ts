import appRequest from "../../utils/fetchhandler";
import { COINS } from "../types";

export const listCoinRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins`,
    method: "GET",
    secure: true,
    actionType: COINS.LIST_COINS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
