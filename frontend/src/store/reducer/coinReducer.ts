import { COIN } from "../types";

const initialState = {
  coin_detail_first_block: "",
  coin_overview_block: "",
  coin_about_block: "",
  coin_onload_verification: "",
  coin_social_graph: "",
  coin_rating_block: "",
  coin_historical_data_block: "",
  coin_todays_price_block: "",
  coin_community_block: "",
  coin_faq_block: "",
  coin_price_graph_block: "",
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

    case COIN.COIN_HISTORICAL_DATA_BLOCK:
      //console.log(action);
      return {
        ...state,
        coin_historical_data_block: action?.payload?.data,
      };
    case COIN.COIN_TODAYS_PRICE_BLOCK:
      //console.log(action);
      return {
        ...state,
        coin_todays_price_block: action?.payload?.data,
      };

    case COIN.COIN_COMMUNITY_BLOCK:
      //console.log(action);
      return {
        ...state,
        coin_community_block: action?.payload?.data,
      };
    case COIN.COIN_FAQ_BLOCK:
      //console.log(action);
      return {
        ...state,
        coin_faq_block: action?.payload?.data,
      };
    case COIN.COIN_PRICE_GRAPH_BLOCK:
      //console.log(action);
      return {
        ...state,
        coin_price_graph_block: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default coinReducer;
