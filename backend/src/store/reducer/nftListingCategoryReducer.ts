import { NFT_LISTINGS_CATEGORY } from "../types";

const initialState = {
  listNftListingCategory: "",
  addNftListingCategory: "",
  editNftListingCategory: "",
  updateNftListingCategory: "",
  viewNftListingCategory: "",
  allNftListingCategory: "",
};
const nftListingCategoryReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NFT_LISTINGS_CATEGORY.LIST_NFT_LISTINGS_CATEGORY:
      return {
        ...state,
        listNftListingCategory: action?.payload?.data,
      };

    case NFT_LISTINGS_CATEGORY.ADD_NFT_LISTINGS_CATEGORY:
      return {
        ...state,
        addNftListingCategory: action?.payload?.data,
      };

    case NFT_LISTINGS_CATEGORY.EDIT_NFT_LISTINGS_CATEGORY:
      return {
        ...state,
        editNftListingCategory: action?.payload?.data,
      };

    case NFT_LISTINGS_CATEGORY.UPDATE_NFT_LISTINGS_CATEGORY:
      return {
        ...state,
        updateNftListingCategory: action?.payload?.data,
      };

    case NFT_LISTINGS_CATEGORY.VIEW_NFT_LISTINGS_CATEGORY:
      return {
        ...state,
        viewNftListingCategory: action?.payload?.data,
      };
    case NFT_LISTINGS_CATEGORY.ALL_NFT_LISTINGS_CATEGORY:
      return {
        ...state,
        allNftListingCategory: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default nftListingCategoryReducer;
