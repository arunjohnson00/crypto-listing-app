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
  coin_events_block: "",
  coin_presale_block: "",
  most_visited: "",
  news_block: "",
  recently_added: "",
  coin_review_submit: "",
  coin_market_list: "",
  coin_watchlist: "",
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

    case COIN.COIN_EVENTS_BLOCK:
      //console.log(action);
      return {
        ...state,
        coin_events_block: action?.payload?.data,
      };

    case COIN.COIN_PRESALE_BLOCK:
      //console.log(action);
      return {
        ...state,
        coin_presale_block: action?.payload?.data,
      };

    case COIN.MOST_VISITED:
      //console.log(action);
      return {
        ...state,
        most_visited: action?.payload?.data,
      };

    case COIN.NEWS_BLOCK:
      //console.log(action);
      return {
        ...state,
        news_block: action?.payload?.data,
      };

    case COIN.COIN_RECENTLY_ADDED:
      //console.log(action);
      return {
        ...state,
        recently_added: action?.payload?.data,
      };
    case COIN.COIN_REVIEW_SUBMIT:
      //console.log(action);
      return {
        ...state,
        coin_review_submit: action?.payload?.data,
      };

    case COIN.COIN_MARKET_LIST:
      //console.log(action);
      return {
        ...state,
        coin_market_list: action?.payload?.data,
      };

    case COIN.COIN_WATCHLIST:
      //console.log(action);
      return {
        ...state,
        coin_watchlist: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default coinReducer;
