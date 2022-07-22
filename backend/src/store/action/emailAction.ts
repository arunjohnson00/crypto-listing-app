import appRequest from "../../utils/fetchhandler";
import { EMAIL } from "../types";

export const sendNotificationEmailRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/send-notification/${values}/send`,
    method: "GET",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: EMAIL.SEND_NOTIFICATION_EMAIL,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
