import { AIRDROP } from "../types";

const initialState = {
  airdrop_listings: "",
  airdrop_single_page_details: "",
};
const airdropReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case AIRDROP.AIRDROP_LISTINGS:
      //console.log(action);
      return {
        ...state,
        airdrop_listings: action?.payload,
      };

    case AIRDROP.AIRDROP_SINGLE_PAGE_DETAILS:
      //console.log(action);
      return {
        ...state,
        airdrop_single_page_details: action?.payload,
      };

    default:
      return state;
  }
};

export default airdropReducer;
