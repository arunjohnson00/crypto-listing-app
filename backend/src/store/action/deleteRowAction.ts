import appRequest from "../../utils/fetchhandler";
import { COMMON } from "../types";
export const deleteRowRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1${values.pathname}/${values.id}`,
    method: "DELETE",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COMMON.DELETE_ROW,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
