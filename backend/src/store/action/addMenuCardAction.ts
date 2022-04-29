import appRequest from "../../utils/fetchhandler";
import { MENUCARD } from "../types";
export const addMenuCardRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/menu-cards`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: MENUCARD.ADD_MENUCARD,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
