import { ADS } from "../types";

const initialState = {
  ads_summary: [],
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

    default:
      return state;
  }
};

export default adsReducer;
