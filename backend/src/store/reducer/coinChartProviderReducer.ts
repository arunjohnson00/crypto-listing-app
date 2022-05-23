import { CHART_PROVIDER } from "../types";

const initialState = {
  listChartProvider: "",
  addChartProvider: "",
  editChartProvider: "",
  updateChartProvider: "",
  viewChartProvider: "",
  allChartProvider: "",
};
const chartProviderReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CHART_PROVIDER.LIST_CHART_PROVIDER:
      return {
        ...state,
        listChartProvider: action?.payload?.data,
      };

    case CHART_PROVIDER.ADD_CHART_PROVIDER:
      return {
        ...state,
        addChartProvider: action?.payload?.data,
      };

    case CHART_PROVIDER.EDIT_CHART_PROVIDER:
      return {
        ...state,
        editChartProvider: action?.payload?.data,
      };

    case CHART_PROVIDER.UPDATE_CHART_PROVIDER:
      return {
        ...state,
        updateChartProvider: action?.payload?.data,
      };

    case CHART_PROVIDER.VIEW_CHART_PROVIDER:
      return {
        ...state,
        viewChartProvider: action?.payload?.data,
      };

    case CHART_PROVIDER.ALL_CHART_PROVIDER:
      return {
        ...state,
        allChartProvider: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default chartProviderReducer;
