import { USERS } from "../types";

const initialState = {
  updateUserDetails: "",
};
const updateUsersReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case USERS.UPDATE_USERS:
      return {
        ...state,
        updateUserDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default updateUsersReducer;
