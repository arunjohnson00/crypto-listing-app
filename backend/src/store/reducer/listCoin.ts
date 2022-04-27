import { COINS } from "../types";

const initialState = {
  coinListAll: "",
};
const listCoinReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COINS.LIST_COINS:
      return {
        ...state,
        coinListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listCoinReducer;
