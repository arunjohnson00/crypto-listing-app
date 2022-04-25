import appRequest from "../../utils/fetchhandler";
import { USERS } from "../types";

export const listUsersRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/users`,
    method: "GET",
    secure: true,
    actionType: USERS.LIST_USERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
