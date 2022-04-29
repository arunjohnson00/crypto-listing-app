import appRequest from "../../utils/fetchhandler";
import { MENUCARD } from "../types";

export const listMenuCardRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/menu-cards`,
    method: "GET",
    secure: true,
    actionType: MENUCARD.LIST_MENUCARD,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
