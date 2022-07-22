import { DASHBOARD } from "../types";

const initialState = {
  coin_listing_per_days: "",
  month_wise_coin_listing: "",
  coin_status_count: "",
  live_ads_overview: "",
  incoming_ad_request: "",
  recent_listings: "",
};

const dashboardReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case DASHBOARD.COIN_LISTING_PER_DAYS:
      return {
        ...state,
        coin_listing_per_days: action?.payload?.data,
      };
    case DASHBOARD.MONTH_WISE_COIN_LISTING:
      return {
        ...state,
        month_wise_coin_listing: action?.payload?.data,
      };

    case DASHBOARD.COIN_STATUS_COUNT:
      return {
        ...state,
        coin_status_count: action?.payload?.data,
      };
    case DASHBOARD.LIVE_ADS_OVERVIEW:
      return {
        ...state,
        live_ads_overview: action?.payload?.data,
      };
    case DASHBOARD.INCOMING_AD_REQUEST:
      return {
        ...state,
        incoming_ad_request: action?.payload?.data,
      };
    case DASHBOARD.RECENT_LISTINGS:
      return {
        ...state,
        recent_listings: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
