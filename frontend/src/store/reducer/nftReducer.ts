import { NFT } from "../types";

const initialState = {
  nft_listings: "",
};
const nftReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NFT.NFT_LISTINGS:
      //console.log(action);
      return {
        ...state,
        nft_listings: action?.payload,
      };

    default:
      return state;
  }
};

export default nftReducer;
