import { DASHBOARD_NFT_LISTING } from "../types";

const initialState = {
  nft_marketplaces_list: "",
  nft_network_list: "",
  chat_platform_list: "",
  social_platform_list: "",
  nft_currency_list: "",
  nft_event_category_list: "",
  add_nft_listing: "",
  edit_nft_listing: "",
  update_nft_listing: "",
  delete_nft_listing: "",
};
const dashboardNFTListingReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case DASHBOARD_NFT_LISTING.DELETE_NFT_LISTING:
      //console.log(action);
      return {
        ...state,
        delete_nft_listing: action?.payload?.data,
      };

    case DASHBOARD_NFT_LISTING.UPDATE_NFT_LISTING:
      //console.log(action);
      return {
        ...state,
        update_nft_listing: action?.payload?.data,
      };

    case DASHBOARD_NFT_LISTING.EDIT_NFT_LISTING:
      //console.log(action);
      return {
        ...state,
        edit_nft_listing: action?.payload?.data,
      };

    case DASHBOARD_NFT_LISTING.ADD_NFT_LISTING:
      //console.log(action);
      return {
        ...state,
        add_nft_listing: action?.payload?.data,
      };

    case DASHBOARD_NFT_LISTING.SOCIAL_PLATFORM_LIST:
      //console.log(action);
      return {
        ...state,
        social_platform_list: action?.payload?.data,
      };

    case DASHBOARD_NFT_LISTING.CHAT_PLATFORM_LIST:
      //console.log(action);
      return {
        ...state,
        chat_platform_list: action?.payload?.data,
      };

    case DASHBOARD_NFT_LISTING.NFT_CURRENCY_LIST:
      //console.log(action);
      return {
        ...state,
        nft_currency_list: action?.payload?.data,
      };

    case DASHBOARD_NFT_LISTING.NFT_EVENT_CATEGORY_LIST:
      //console.log(action);
      return {
        ...state,
        nft_event_category_list: action?.payload?.data,
      };

    case DASHBOARD_NFT_LISTING.NFT_MARKETPLACES_LIST:
      //console.log(action);
      return {
        ...state,
        nft_marketplaces_list: action?.payload?.data,
      };

    case DASHBOARD_NFT_LISTING.NFT_NETWORK_LIST:
      //console.log(action);
      return {
        ...state,
        nft_network_list: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default dashboardNFTListingReducer;
