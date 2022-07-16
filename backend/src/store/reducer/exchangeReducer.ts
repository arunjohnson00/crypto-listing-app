import { EXCHANGE } from "../types";

const initialState = {
  listExchanges: "",
  addExchanges: "",
  editExchanges: "",
  updateExchanges: "",
  viewExchanges: "",
  allExchanges: "",
  search_result: "",
};
const exchangesReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case EXCHANGE.LIST_EXCHANGE:
      return {
        ...state,
        listExchanges: action?.payload?.data,
      };

    case EXCHANGE.ADD_EXCHANGE:
      return {
        ...state,
        addExchanges: action?.payload?.data,
      };

    case EXCHANGE.EDIT_EXCHANGE:
      return {
        ...state,
        editExchanges: action?.payload?.data,
      };

    case EXCHANGE.UPDATE_EXCHANGE:
      return {
        ...state,
        updateExchanges: action?.payload?.data,
      };

    case EXCHANGE.VIEW_EXCHANGE:
      return {
        ...state,
        viewExchanges: action?.payload?.data,
      };

    case EXCHANGE.ALL_EXCHANGE:
      return {
        ...state,
        allExchanges: action?.payload?.data,
      };

    case EXCHANGE.SEARCH:
      return {
        ...state,
        search_result: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default exchangesReducer;
