import { USER } from "../types";

const initialState = {
  //latest_news: "",
  user_register: "",
  user_login: "",
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

    default:
      return state;
  }
};

export default userReducer;
