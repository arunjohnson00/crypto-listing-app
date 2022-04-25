import { USERS } from "../types";

const initialState = {
  newUserDetails: "",
};
const addUserReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case USERS.ADD_USERS:
      return {
        ...state,
        newUserDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default addUserReducer;
