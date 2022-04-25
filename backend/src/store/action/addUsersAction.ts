import appRequest from "../../utils/fetchhandler";
import { USERS } from "../types";
export const addUsersRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  console.log(...values);
  const fetchOptions = {
    url: `api/b/v1/users`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USERS.ADD_USERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
