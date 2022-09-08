import { USER } from "../types";

const initialState = {
  //latest_news: "",
  user_register: "",
  user_login: "",
  user_logout: "",
  user_coin_list: "",
  user_nft_list: "",
  user_events_list: "",
  user_airdrops_list: "",
  user_review_list: "",
};
const userReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case USER.USER_REGISTER:
      //console.log(action);
      return {
        ...state,
        user_register: action?.payload?.data,
      };

    case USER.USER_LOGIN:
      //console.log(action);
      return {
        ...state,
        user_login: action?.payload?.data,
      };

    case USER.USER_LOGOUT:
      //console.log(action);
      return {
        ...state,
        user_logout: action?.payload?.data,
      };

    case USER.USER_COIN_LIST:
      //console.log(action);
      return {
        ...state,
        user_coin_list: action?.payload?.data,
      };
    case USER.USER_NFT_LIST:
      //console.log(action);
      return {
        ...state,
        user_nft_list: action?.payload?.data,
      };

    case USER.USER_EVENTS_LIST:
      //console.log(action);
      return {
        ...state,
        user_events_list: action?.payload?.data,
      };

    case USER.USER_AIRDROP_LIST:
      //console.log(action);
      return {
        ...state,
        user_airdrops_list: action?.payload?.data,
      };

    case USER.USER_REVIEW_LIST:
      //console.log(action);
      return {
        ...state,
        user_review_list: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default userReducer;
