import { NFT_MARKETPLACES } from "../types";

const initialState = {
  newNftMarketPlcesListAll: "",
};
const addNftMarketPlcesReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NFT_MARKETPLACES.ADD_NFT_MARKETPLACES:
      return {
        ...state,
        newNftMarketPlcesListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default addNftMarketPlcesReducer;
