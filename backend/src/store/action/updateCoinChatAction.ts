import appRequest from "../../utils/fetchhandler";
import { CHAT } from "../types";

export const updateCoinChatRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-chat/${values.get("id")}`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHAT.UPDATE_CHAT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
