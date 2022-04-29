import appRequest from "../../utils/fetchhandler";
import { MENUCARD } from "../types";
export const updateMenuCardRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/b/v1/menucard/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: MENUCARD.UPDATE_MENUCARD,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
