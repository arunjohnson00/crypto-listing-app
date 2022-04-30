import appRequest from "../../utils/fetchhandler";
import { COMMUNITY } from "../types";
export const addCoinCommunityRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-community`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COMMUNITY.ADD_COMMUNITY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
