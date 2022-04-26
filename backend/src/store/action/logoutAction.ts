import appRequest from "../../utils/fetchhandler";
import { COMMON } from "../types";
export const logOutRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/auth/logout`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COMMON.LOG_OUT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
