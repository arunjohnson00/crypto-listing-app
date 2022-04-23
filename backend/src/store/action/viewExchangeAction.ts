import appRequest from "../../utils/fetchhandler";
import { EXCHANGE } from "../types";
export const viewExchangeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  // console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/exchange/{id}/view`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EXCHANGE.VIEW_EXCHANGE,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
