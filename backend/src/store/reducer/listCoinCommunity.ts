import { COMMUNITY } from "../types";

const initialState = {
  coinCommunityListAll: "",
};
const listCoinCommunityReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COMMUNITY.LIST_COMMUNITY:
      return {
        ...state,
        coinCommunityListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listCoinCommunityReducer;
