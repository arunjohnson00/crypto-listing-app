import appRequest from "../../utils/fetchhandler";
import { USERS } from "../types";
export const updateUserRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/users/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: USERS.UPDATE_USERS,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
