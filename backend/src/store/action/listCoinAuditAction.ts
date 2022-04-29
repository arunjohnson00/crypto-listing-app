import appRequest from "../../utils/fetchhandler";
import { AUDIT } from "../types";

export const listcoinAuditRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-audit`,
    method: "GET",
    secure: true,
    actionType: AUDIT.LIST_AUDIT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
