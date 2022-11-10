import { USERS } from "../types";

const initialState = {
  listUsers: "",
  addUsers: "",
  editUsers: "",
  updateUsers: "",
  viewUsers: "",
  search_result: "",
  user_register_count: "",
  month_wise_user_count: "",
};
const usersReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case USERS.LIST_USERS:
      return {
        ...state,
        listUsers: action?.payload?.data,
      };

    case USERS.ADD_USERS:
      return {
        ...state,
        addUsers: action?.payload?.data,
      };

    case USERS.EDIT_USERS:
      return {
        ...state,
        editUsers: action?.payload?.data,
      };

    case USERS.UPDATE_USERS:
      return {
        ...state,
        updateUsers: action?.payload?.data,
      };

    case USERS.VIEW_USERS:
      return {
        ...state,
        viewUsers: action?.payload?.data,
      };

    case USERS.SEARCH:
      return {
        ...state,
        search_result: action?.payload?.data,
      };

    case USERS.USER_REGISTER_COUNT:
      return {
        ...state,
        user_register_count: action?.payload?.data,
      };

    case USERS.MONTH_WISE_USER_COUNT:
      return {
        ...state,
        month_wise_user_count: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default usersReducer;
