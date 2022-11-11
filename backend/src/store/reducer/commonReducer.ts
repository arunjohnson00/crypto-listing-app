import { COMMON } from "../types";

const initialState = {
  coins_search: "",
};
const commonReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COMMON.COINS_SEARCH:
      return {
        ...state,
        coins_search: action?.payload?.data,
      };
    default:
      return state;
  }
};

export default commonReducer;
