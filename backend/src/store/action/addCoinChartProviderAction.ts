import appRequest from "../../utils/fetchhandler";
import { CHART_PROVIDER } from "../types";
export const addChartProviderRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  //console.log(JSON.stringify(values));
  const fetchOptions = {
    url: `api/b/v1/coins-chart-provider`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: CHART_PROVIDER.ADD_CHART_PROVIDER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
