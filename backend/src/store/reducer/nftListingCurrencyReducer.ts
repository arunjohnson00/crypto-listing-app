import { NFT_LISTINGS_CURRENCY } from "../types";

const initialState = {
  listNftListingCurrency: "",
  addNftListingCurrency: "",
  editNftListingCurrency: "",
  updateNftListingCurrency: "",
  viewNftListingCurrency: "",
  allNftListingCurrency: "",
  search_result: "",
};
const nftListingCurrencyReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NFT_LISTINGS_CURRENCY.LIST_NFT_LISTINGS_CURRENCY:
      return {
        ...state,
        listNftListingCurrency: action?.payload?.data,
      };

    case NFT_LISTINGS_CURRENCY.ADD_NFT_LISTINGS_CURRENCY:
      return {
        ...state,
        addNftListingCurrency: action?.payload?.data,
      };

    case NFT_LISTINGS_CURRENCY.EDIT_NFT_LISTINGS_CURRENCY:
      return {
        ...state,
        editNftListingCurrency: action?.payload?.data,
      };

    case NFT_LISTINGS_CURRENCY.UPDATE_NFT_LISTINGS_CURRENCY:
      return {
        ...state,
        updateNftListingCurrency: action?.payload?.data,
      };

    case NFT_LISTINGS_CURRENCY.VIEW_NFT_LISTINGS_CURRENCY:
      return {
        ...state,
        viewNftListingCurrency: action?.payload?.data,
      };
    case NFT_LISTINGS_CURRENCY.ALL_NFT_LISTINGS_CURRENCY:
      return {
        ...state,
        allNftListingCurrency: action?.payload?.data,
      };

    case NFT_LISTINGS_CURRENCY.SEARCH:
      return {
        ...state,
        search_result: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default nftListingCurrencyReducer;
