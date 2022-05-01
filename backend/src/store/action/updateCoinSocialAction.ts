import appRequest from "../../utils/fetchhandler";
import { SOCIALS } from "../types";

export const updateCoinSocialRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-socials/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: SOCIALS.UPDATE_SOCIALS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
