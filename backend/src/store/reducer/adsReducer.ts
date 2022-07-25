import { ADS } from "../types";

const initialState = {
  ads_summary: [],
  airdrop_list_with_coin_search: "",
  events_list_with_coin_search: "",
};
const adsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADS.ADS_SUMMARY:
      //console.log(action);
      return {
        ...state,
        ads_summary: [...state.ads_summary, action?.payload],
      };

    case ADS.REMOVE_FROM_ADS_SUMMARY:
      var removedItem = state?.ads_summary.splice(parseInt(action?.payload), 1);
      console.log(removedItem);
      return {
        ...state,
        ads_summary: state?.ads_summary,
      };

    case ADS.AIRDROPS_LIST_WITH_COIN_SEARCH:
      return {
        ...state,
        airdrop_list_with_coin_search: action?.payload?.data,
      };

    case ADS.EVENTS_LIST_WITH_COIN_SEARCH:
      return {
        ...state,
        events_list_with_coin_search: action?.payload?.data,
      };
    default:
      return state;
  }
};

export default adsReducer;
