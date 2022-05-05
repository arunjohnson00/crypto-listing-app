import appRequest from "../../utils/fetchhandler";
import { COMMON } from "../types";

export const listUsersNotificationRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/user-notifications-all`,
    method: "GET",
    secure: true,
    actionType: COMMON.NOTIFICATION_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
