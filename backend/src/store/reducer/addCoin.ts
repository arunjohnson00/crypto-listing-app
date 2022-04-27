import { COINS } from "../types";

const initialState = {
  newCoinDetails: "",
};
const addCoinReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COINS.ADD_COINS:
      return {
        ...state,
        newCoinDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default addCoinReducer;
