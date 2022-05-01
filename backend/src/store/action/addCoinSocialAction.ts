import appRequest from "../../utils/fetchhandler";
import { SOCIALS } from "../types";

export const addCoinSocialRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-socials`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SOCIALS.ADD_SOCIALS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
