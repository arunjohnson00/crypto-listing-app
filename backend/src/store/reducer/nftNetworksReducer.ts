import { NFT_NETWORKS } from "../types";

const initialState = {
  listNFTNetworks: "",
  addNFTNetworks: "",
  editNFTNetworks: "",
  updateNFTNetworks: "",
  viewNFTNetworks: "",
  allNFTNetworks: "",
  search_result: "",
};
const nftNetworksReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NFT_NETWORKS.LIST_NFT_NETWORKS:
      return {
        ...state,
        listNFTNetworks: action?.payload?.data,
      };

    case NFT_NETWORKS.ADD_NFT_NETWORKS:
      return {
        ...state,
        addNFTNetworks: action?.payload?.data,
      };

    case NFT_NETWORKS.EDIT_NFT_NETWORKS:
      return {
        ...state,
        editNFTNetworks: action?.payload?.data,
      };

    case NFT_NETWORKS.UPDATE_NFT_NETWORKS:
      return {
        ...state,
        updateNFTNetworks: action?.payload?.data,
      };

    case NFT_NETWORKS.VIEW_NFT_NETWORKS:
      return {
        ...state,
        viewNFTNetworks: action?.payload?.data,
      };

    case NFT_NETWORKS.ALL_NFT_NETWORKS:
      return {
        ...state,
        allNFTNetworks: action?.payload?.data,
      };

    case NFT_NETWORKS.SEARCH:
      return {
        ...state,
        search_result: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default nftNetworksReducer;
