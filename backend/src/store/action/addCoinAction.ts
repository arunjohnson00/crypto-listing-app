import appRequest from "../../utils/fetchhandler";
import { COINS } from "../types";
export const addCoinRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COINS.ADD_COINS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
