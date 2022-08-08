import { COMMON } from "../types";

const initialState = {
  latest_news: "",
};
const commonReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COMMON.LATEST_NEWS:
      //console.log(action);
      return {
        ...state,
        latest_news: action?.payload,
      };

    default:
      return state;
  }
};

export default commonReducer;
