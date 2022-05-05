import appRequest from "../../utils/fetchhandler";
import { COINS } from "../types";
export const editCoinRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  console.log(JSON.stringify(values.id));
  const fetchOptions = {
    url: `api/b/v1/coins/${JSON.stringify(values.id)}/edit`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: false,
    actionType: COINS.EDIT_COINS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
