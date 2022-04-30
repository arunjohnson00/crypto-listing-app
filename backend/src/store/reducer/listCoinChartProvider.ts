import { CHART_PROVIDER } from "../types";

const initialState = {
  chartProviderListAll: "",
};
const listCoinChartProviderReducer = (
  state: any = initialState,
  action: any
) => {
  switch (action.type) {
    case CHART_PROVIDER.LIST_CHART_PROVIDER:
      return {
        ...state,
        chartProviderListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listCoinChartProviderReducer;
