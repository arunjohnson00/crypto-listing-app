import { CHART_PROVIDER } from "../types";

const initialState = {
  newChartProviderDetails: "",
};
const addCoinChartProviderReducer = (
  state: any = initialState,
  action: any
) => {
  switch (action.type) {
    case CHART_PROVIDER.ADD_CHART_PROVIDER:
      return {
        ...state,
        newChartProviderDetails: action?.payload.data,
      };

    default:
      return state;
  }
};

export default addCoinChartProviderReducer;
