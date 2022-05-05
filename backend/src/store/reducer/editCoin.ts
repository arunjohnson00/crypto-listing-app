import { COINS } from "../types";

const initialState = {
  editCoinAllDetails: "",
};
const editCoinReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COINS.EDIT_COINS:
      return {
        ...state,
        editCoinAllDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default editCoinReducer;
