import { NFT_LISTINGS } from "../types";

const initialState = {
  newNftListingsListAll: "",
};
const addNftListingsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NFT_LISTINGS.ADD_NFT_LISTINGS:
      return {
        ...state,
        newNftListingsListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default addNftListingsReducer;
