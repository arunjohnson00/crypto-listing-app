import appRequest from "../../utils/fetchhandler";
import { SOCIALS } from "../types";

export const listCoinSocialRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-socials`,
    method: "GET",
    secure: true,
    actionType: SOCIALS.LIST_SOCIALS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
