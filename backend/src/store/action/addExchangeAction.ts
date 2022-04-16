import appRequest from "../../utils/fetchhandler";
import { EXCHANGE } from "../types";

export const addExchangeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/exchange`,
    method: "POST",
    secure: true,
    body: JSON.stringify(values),
    actionType: EXCHANGE.ADD_EXCHANGE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
