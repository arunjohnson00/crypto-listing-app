import appRequest from "../../utils/fetchhandler";
import { NETWORK } from "../types";
export const updateNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  console.log(...values);
  const fetchOptions = {
    url: `api/b/v1/networks/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NETWORK.UPDATE_NETWORK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
