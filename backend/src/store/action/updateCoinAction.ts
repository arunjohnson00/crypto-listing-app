import appRequest from "../../utils/fetchhandler";
import { COINS } from "../types";
export const updateCoinsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COINS.UPDATE_COINS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
