import appRequest from "../../utils/fetchhandler";
import { CHAT } from "../types";

export const addCoinChatRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-chat`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHAT.ADD_CHAT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
