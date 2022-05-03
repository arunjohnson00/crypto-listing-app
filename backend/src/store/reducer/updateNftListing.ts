import { NFT_LISTINGS } from "../types";

const initialState = {
  editNftListingsListAll: "",
};
const updateNftListingsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NFT_LISTINGS.UPDATE_NFT_LISTINGS:
      return {
        ...state,
        editNftListingsListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default updateNftListingsReducer;
