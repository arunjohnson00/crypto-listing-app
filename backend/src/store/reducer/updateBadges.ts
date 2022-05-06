import { BADGES } from "../types";

const initialState = {
  editBadgesDetails: "",
};
const updateBadgesReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case BADGES.UPDATE_BADGES:
      return {
        ...state,
        editBadgesDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default updateBadgesReducer;
