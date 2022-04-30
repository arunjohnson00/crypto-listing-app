import appRequest from "../../utils/fetchhandler";
import { CHART_PROVIDER } from "../types";

export const listChartProviderRequest = (
  pageData: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/b/v1/coins-chart-provider`,
    method: "GET",
    secure: true,
    actionType: CHART_PROVIDER.LIST_CHART_PROVIDER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
