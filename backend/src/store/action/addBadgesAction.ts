import appRequest from "../../utils/fetchhandler";
import { BADGES } from "../types";
export const addBadgesRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/exchange`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: BADGES.ADD_BADGES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
