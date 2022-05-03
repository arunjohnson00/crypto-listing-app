import { NFT_LISTINGS } from "../types";

const initialState = {
  nftListingsListAll: "",
};
const listNftLisingsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NFT_LISTINGS.LIST_NFT_LISTINGS:
      return {
        ...state,
        nftListingsListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listNftLisingsReducer;
