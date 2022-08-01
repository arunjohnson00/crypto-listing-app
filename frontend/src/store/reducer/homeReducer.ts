import { HOME } from "../types";

const initialState = {
  recently_added: "",
  biggest_gainers: "",
  biggest_loosers: "",
  featured_coin_list: "",
};
const homeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case HOME.RECENTLY_ADDED:
      //console.log(action);
      return {
        ...state,
        recently_added: action?.payload?.data,
      };

    case HOME.BIGGEST_GAINERS:
      //console.log(action);
      return {
        ...state,
        biggest_gainers: action?.payload?.data,
      };
    case HOME.BIGGEST_LOOSERS:
      //console.log(action);
      return {
        ...state,
        biggest_loosers: action?.payload?.data,
      };

    case HOME.FEATURED_COIN_LIST:
      //console.log(action);
      return {
        ...state,
        featured_coin_list: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default homeReducer;
