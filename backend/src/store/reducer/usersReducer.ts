import { USERS } from "../types";

const initialState = {
  listUsers: "",
  addUsers: "",
  editUsers: "",
  updateUsers: "",
  viewUsers: "",
  search_result: "",
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

    default:
      return state;
  }
};

export default usersReducer;
