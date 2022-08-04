import { COIN } from "../types";

const initialState = {
  coin_detail_first_block: "",
  coin_overview_block: "",
  coin_about_block: "",
};
const coinReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COIN.COIN_DETAIL_FIRST_BLOCK:
      //console.log(action);
      return {
        ...state,
        coin_detail_first_block: action?.payload?.data,
      };

    case COIN.COIN_OVERVIEW_BLOCK:
      //console.log(action);
      return {
        ...state,
        coin_overview_block: action?.payload?.data,
      };
    case COIN.COIN_ABOUT_BLOCK:
      //console.log(action);
      return {
        ...state,
        coin_about_block: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default coinReducer;
