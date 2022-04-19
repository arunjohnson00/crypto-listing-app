import appRequest from "../../utils/fetchhandler";
import { NETWORK } from "../types";
export const addNetworkRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  // console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/networks`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: NETWORK.ADD_NETWORK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
