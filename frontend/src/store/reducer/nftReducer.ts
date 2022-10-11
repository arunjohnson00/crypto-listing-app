import { NFT } from "../types";

const initialState = {
  nft_listings: "",
  nft_most_popular: "",
  nft_recently_added: "",
};
const nftReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NFT.NFT_LISTINGS:
      //console.log(action);
      return {
        ...state,
        nft_listings: action?.payload,
      };

    case NFT.NFT_MOST_POPULAR:
      //console.log(action);
      return {
        ...state,
        nft_most_popular: action?.payload,
      };
    case NFT.NFT_RECENTLTY_ADDED:
      //console.log(action);
      return {
        ...state,
        nft_recently_added: action?.payload,
      };

    default:
      return state;
  }
};

export default nftReducer;
