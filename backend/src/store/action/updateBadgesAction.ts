import appRequest from "../../utils/fetchhandler";
import { BADGES } from "../types";
export const updateBadgeRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/exchange/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: BADGES.UPDATE_BADGES,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
