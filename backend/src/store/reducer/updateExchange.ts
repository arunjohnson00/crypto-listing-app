import { EXCHANGE } from "../types";

const initialState = {
  editExchangeDetails: "",
};
const updateExchangeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case EXCHANGE.UPDATE_EXCHANGE:
      return {
        ...state,
        editExchangeDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default updateExchangeReducer;
