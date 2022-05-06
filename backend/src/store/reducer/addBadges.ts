import { BADGES } from "../types";

const initialState = {
  newBadgesDetails: "",
};
const addBadgesReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case BADGES.ADD_BADGES:
      return {
        ...state,
        newBadgesDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default addBadgesReducer;
