import appRequest from "../../utils/fetchhandler";
import { AUDIT } from "../types";
export const updateCoinAuditRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-audit/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: AUDIT.UPDATE_AUDIT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
