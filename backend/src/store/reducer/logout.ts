import { COMMON } from "../types";

const initialState = {
  logoutStatus: "",
};
const logoutReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COMMON.LOG_OUT:
      return {
        ...state,
        logoutStatus: action?.payload.data,
      };

    default:
      return state;
  }
};

export default logoutReducer;
