import { COIN } from "../types";

const initialState = {
  coin_detail_first_block: "",
  coin_overview_block: "",
  coin_about_block: "",
  coin_onload_verification: "",
  coin_social_graph: "",
  coin_rating_block: "",
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

    case COIN.COIN_RATING_BLOCK:
      //console.log(action);
      return {
        ...state,
        coin_rating_block: action?.payload?.data,
      };

    case COIN.COIN_ONLOAD_VERIFICATION:
      //console.log(action);
      return {
        ...state,
        coin_onload_verification: action?.payload?.data,
      };

    case COIN.COIN_SOCIAL_GRAPH:
      //console.log(action);
      return {
        ...state,
        coin_social_graph: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default coinReducer;
