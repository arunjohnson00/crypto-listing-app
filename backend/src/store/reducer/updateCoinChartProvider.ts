import { CHART_PROVIDER } from "../types";

const initialState = {
  editChartProviderDetails: "",
};
const updateCoinChartProviderReducer = (
  state: any = initialState,
  action: any
) => {
  switch (action.type) {
    case CHART_PROVIDER.ADD_CHART_PROVIDER:
      return {
        ...state,
        editChartProviderDetails: action?.payload.data,
      };

    default:
      return state;
  }
};

export default updateCoinChartProviderReducer;
