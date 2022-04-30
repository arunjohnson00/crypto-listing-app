import { COMMUNITY } from "../types";

const initialState = {
  editCoinCommunityDetails: "",
};
const updateCoinCommunityReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COMMUNITY.UPDATE_COMMUNITY:
      return {
        ...state,
        editCoinCommunityDetails: action?.payload.data,
      };

    default:
      return state;
  }
};

export default updateCoinCommunityReducer;
