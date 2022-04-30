import appRequest from "../../utils/fetchhandler";
import { CHAT } from "../types";

export const listCoinChatRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-chat`,
    method: "GET",
    secure: true,
    actionType: CHAT.LIST_CHAT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
