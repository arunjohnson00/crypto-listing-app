import { USERS } from "../types";

const initialState = {
  userListAll: "",
};
const listUsersReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case USERS.LIST_USERS:
      return {
        ...state,
        userListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listUsersReducer;
