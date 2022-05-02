import { NFT_MARKETPLACES } from "../types";

const initialState = {
  nftMarketPlcesListAll: "",
};
const listNftMarketPlcesReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NFT_MARKETPLACES.LIST_NFT_MARKETPLACES:
      return {
        ...state,
        nftMarketPlcesListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listNftMarketPlcesReducer;
