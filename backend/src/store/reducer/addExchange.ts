import { EXCHANGE } from "../types";

const initialState = {
  newExchangeDetails: "",
};
const addExchangeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case EXCHANGE.ADD_EXCHANGE:
      return {
        ...state,
        newExchangeDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default addExchangeReducer;
