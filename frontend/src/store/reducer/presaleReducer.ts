import { PRESALE } from "../types";

const initialState = {
  presale_listings: "",
  presale_listings_active: "",
  presale_listings_upcoming: "",
  presale_listings_expired: "",
};
const presaleReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case PRESALE.PRESALE_LISTINGS:
      //console.log(action);
      return {
        ...state,
        presale_listings: action?.payload,
      };
    case PRESALE.PRESALE_LISTINGS_ACTIVE:
      //console.log(action);
      return {
        ...state,
        presale_listings_active: action?.payload,
      };

    case PRESALE.PRESALE_LISTINGS_UPCOMING:
      //console.log(action);
      return {
        ...state,
        presale_listings_upcoming: action?.payload,
      };

    case PRESALE.PRESALE_LISTINGS_EXPIRED:
      //console.log(action);
      return {
        ...state,
        presale_listings_expired: action?.payload,
      };

    default:
      return state;
  }
};

export default presaleReducer;
