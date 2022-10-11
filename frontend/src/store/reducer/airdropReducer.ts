import { AIRDROP } from "../types";

const initialState = {
  airdrop_listings: "",
};
const airdropReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case AIRDROP.AIRDROP_LISTINGS:
      //console.log(action);
      return {
        ...state,
        airdrop_listings: action?.payload,
      };

    default:
      return state;
  }
};

export default airdropReducer;
