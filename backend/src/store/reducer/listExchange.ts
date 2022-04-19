import { EXCHANGE } from "../types";

const initialState = {
  exchangeListAll: "",
};
const listExchangeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case EXCHANGE.LIST_EXCHANGE:
      return {
        ...state,
        exchangeListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listExchangeReducer;
