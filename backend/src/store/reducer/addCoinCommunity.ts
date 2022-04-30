import { COMMUNITY } from "../types";

const initialState = {
  newCoinCommunityDetails: "",
};
const addCoinCommunityReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COMMUNITY.ADD_COMMUNITY:
      return {
        ...state,
        newCoinCommunityDetails: action?.payload.data,
      };

    default:
      return state;
  }
};

export default addCoinCommunityReducer;
