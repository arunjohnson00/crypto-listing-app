import { NFT_MARKETPLACES } from "../types";

const initialState = {
  editNftMarketPlcesListAll: "",
};
const updateNftMarketPlcesReducer = (
  state: any = initialState,
  action: any
) => {
  switch (action.type) {
    case NFT_MARKETPLACES.UPDATE_NFT_MARKETPLACES:
      return {
        ...state,
        editNftMarketPlcesListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default updateNftMarketPlcesReducer;
