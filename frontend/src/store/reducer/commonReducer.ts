import { COMMON } from "../types";

const initialState = {
  latest_news: "",
  top_bar_search_result: "",
};
const commonReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COMMON.LATEST_NEWS:
      //console.log(action);
      return {
        ...state,
        latest_news: action?.payload,
      };

    case COMMON.TOPBAR_SEARCH:
      //console.log(action);
      return {
        ...state,
        top_bar_search_result: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default commonReducer;
