import { EXCHANGE } from "../types";

const initialState = {
  viewExchangeDetails: "",
};
const viewExchangeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case EXCHANGE.VIEW_EXCHANGE:
      return {
        ...state,
        viewExchangeDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default viewExchangeReducer;
