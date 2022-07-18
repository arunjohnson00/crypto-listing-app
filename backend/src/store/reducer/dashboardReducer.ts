import { DASHBOARD } from "../types";

const initialState = {
  coin_listing_per_days: "",
  month_wise_coin_listing: "",
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

    default:
      return state;
  }
};

export default dashboardReducer;
