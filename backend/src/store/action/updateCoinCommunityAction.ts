import appRequest from "../../utils/fetchhandler";
import { COMMUNITY } from "../types";
export const updateCoinCommunityRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-community/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COMMUNITY.UPDATE_COMMUNITY,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
