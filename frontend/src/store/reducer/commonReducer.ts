import { COMMON } from "../types";

const initialState = {
  //latest_news: "",
  top_bar_search_result: "",
  coin_vote: "",
  recent_search: "",
  latest_news_feed: "",
  fear_greed_index: "",
  add_watch_list: "",
  remove_watch_list: "",
};
const commonReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    // case COMMON.LATEST_NEWS:
    //   //console.log(action);
    //   return {
    //     ...state,
    //     latest_news: action?.payload,
    //   };

    case COMMON.TOPBAR_SEARCH:
      //console.log(action);
      return {
        ...state,
        top_bar_search_result: action?.payload?.data,
      };

    case COMMON.COIN_VOTE:
      //console.log(action);
      return {
        ...state,
        coin_vote: action?.payload?.data,
      };

    case COMMON.RECENT_SEARCH:
      //console.log(action);
      return {
        ...state,
        recent_search: action?.payload?.data,
      };
    case COMMON.LATEST_NEWS_FEED:
      //console.log(action);
      return {
        ...state,
        latest_news_feed: action?.payload?.data,
      };
    case COMMON.FEAR_GREED_INDEX:
      //console.log(action);
      return {
        ...state,
        fear_greed_index: action?.payload?.data,
      };
    case COMMON.ADD_WATCHLIST:
      //console.log(action);
      return {
        ...state,
        add_watch_list: action?.payload?.data,
      };

    case COMMON.REMOVE_WATCHLIST:
      //console.log(action);
      return {
        ...state,
        remove_watch_list: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default commonReducer;
