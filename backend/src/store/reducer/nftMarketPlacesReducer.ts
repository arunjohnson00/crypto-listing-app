import { NFT_MARKETPLACES } from "../types";

const initialState = {
  listNftMarketPlaces: "",
  addNftMarketPlaces: "",
  editNftMarketPlaces: "",
  updateNftMarketPlaces: "",
  viewNftMarketPlaces: "",
  search_result: "",
};
const nftMarketPlacesReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NFT_MARKETPLACES.LIST_NFT_MARKETPLACES:
      return {
        ...state,
        listNftMarketPlaces: action?.payload?.data,
      };

    case NFT_MARKETPLACES.ADD_NFT_MARKETPLACES:
      return {
        ...state,
        addNftMarketPlaces: action?.payload?.data,
      };

    case NFT_MARKETPLACES.EDIT_NFT_MARKETPLACES:
      return {
        ...state,
        editNftMarketPlaces: action?.payload?.data,
      };

    case NFT_MARKETPLACES.UPDATE_NFT_MARKETPLACES:
      return {
        ...state,
        updateNftMarketPlaces: action?.payload?.data,
      };

    case NFT_MARKETPLACES.VIEW_NFT_MARKETPLACES:
      return {
        ...state,
        viewNftMarketPlaces: action?.payload?.data,
      };

    case NFT_MARKETPLACES.SEARCH:
      return {
        ...state,
        search_result: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default nftMarketPlacesReducer;
