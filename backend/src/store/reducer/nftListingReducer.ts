import { NFT_LISTINGS } from "../types";

const initialState = {
  listNftListings: "",
  addNftListings: "",
  editNftListings: "",
  updateNftListings: "",
  viewNftListings: "",
  search_result: "",
};
const nftListingsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NFT_LISTINGS.LIST_NFT_LISTINGS:
      return {
        ...state,
        listNftListings: action?.payload?.data,
      };

    case NFT_LISTINGS.ADD_NFT_LISTINGS:
      return {
        ...state,
        addNftListings: action?.payload?.data,
      };

    case NFT_LISTINGS.EDIT_NFT_LISTINGS:
      return {
        ...state,
        editNftListings: action?.payload?.data,
      };

    case NFT_LISTINGS.UPDATE_NFT_LISTINGS:
      return {
        ...state,
        updateNftListings: action?.payload?.data,
      };

    case NFT_LISTINGS.VIEW_NFT_LISTINGS:
      return {
        ...state,
        viewNftListings: action?.payload?.data,
      };

    case NFT_LISTINGS.SEARCH:
      return {
        ...state,
        search_result: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default nftListingsReducer;
