import appRequest from "../../utils/fetchhandler";
import { AUDIT } from "../types";
export const addCoinAuditRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-audit`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: AUDIT.ADD_AUDIT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
