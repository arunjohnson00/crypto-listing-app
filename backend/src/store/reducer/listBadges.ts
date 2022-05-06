import { BADGES } from "../types";

const initialState = {
  badgesListAll: "",
};
const listBadgesReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case BADGES.LIST_BADGES:
      return {
        ...state,
        badgesListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listBadgesReducer;
