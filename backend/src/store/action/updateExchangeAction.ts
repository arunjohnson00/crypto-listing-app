import appRequest from "../../utils/fetchhandler";
import { EXCHANGE } from "../types";
export const updateExchangeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/exchange/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EXCHANGE.UPDATE_EXCHANGE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
