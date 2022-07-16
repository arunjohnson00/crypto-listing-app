import { COINS } from "../types";

const initialState = {
  listCoins: "",
  addCoins: "",
  editCoins: "",
  updateCoins: "",
  viewCoins: "",
  allCoins: "",
  search_result: "",
};
const coinReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COINS.LIST_COINS:
      return {
        ...state,
        listCoins: action?.payload?.data,
      };

    case COINS.ADD_COINS:
      return {
        ...state,
        addCoins: action?.payload?.data,
      };

    case COINS.EDIT_COINS:
      return {
        ...state,
        editCoins: action?.payload?.data,
      };

    case COINS.UPDATE_COINS:
      return {
        ...state,
        updateCoins: action?.payload?.data,
      };

    case COINS.VIEW_COINS:
      return {
        ...state,
        viewCoins: action?.payload?.data,
      };

    case COINS.ALL_COINS:
      return {
        ...state,
        allCoins: action?.payload?.data,
      };

    case COINS.SEARCH:
      return {
        ...state,
        search_result: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default coinReducer;
