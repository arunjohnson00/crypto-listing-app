import { COINS } from "../types";

const initialState = {
  updatedCoinsDetails: "",
};
const updateCoinsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COINS.UPDATE_COINS:
      return {
        ...state,
        updatedCoinsDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default updateCoinsReducer;
