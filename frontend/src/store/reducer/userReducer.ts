import { USER } from "../types";

const initialState = {
  //latest_news: "",
  user_register: "",
  user_login: "",
  user_logout: "",
  user_coin_list: "",
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

    default:
      return state;
  }
};

export default userReducer;
