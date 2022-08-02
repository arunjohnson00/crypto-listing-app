import { HOME } from "../types";

const initialState = {
  recently_added: "",
  biggest_gainers: "",
  biggest_loosers: "",
  featured_coin_list: "",
  crypto_currencies_list: "",
  crypto_currencies_new: "",
  crypto_currencies_presale: "",
  crypto_currencies_todays_best: "",
  crypto_currencies_tab: 0,
};
const homeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case HOME.RECENTLY_ADDED:
      //console.log(action);
      return {
        ...state,
        recently_added: action?.payload?.data,
      };

    case HOME.BIGGEST_GAINERS:
      //console.log(action);
      return {
        ...state,
        biggest_gainers: action?.payload?.data,
      };
    case HOME.BIGGEST_LOOSERS:
      //console.log(action);
      return {
        ...state,
        biggest_loosers: action?.payload?.data,
      };

    case HOME.FEATURED_COIN_LIST:
      //console.log(action);
      return {
        ...state,
        featured_coin_list: action?.payload?.data,
      };
    case HOME.CRYPTO_CURRENCIES_LIST:
      //console.log(action);
      return {
        ...state,
        crypto_currencies_list: action?.payload?.data,
      };

    case HOME.CRYPTO_CURRENCIES_NEW:
      //console.log(action);
      return {
        ...state,
        crypto_currencies_new: action?.payload?.data,
      };

    case HOME.CRYPTO_CURRENCIES_PRESALE:
      //console.log(action);
      return {
        ...state,
        crypto_currencies_presale: action?.payload?.data,
      };

    case HOME.CRYPTO_CURRENCIES_TODAYS_BEST:
      //console.log(action);
      return {
        ...state,
        crypto_currencies_todays_best: action?.payload?.data,
      };

    case HOME.CRYPTO_CURRENCIES_TAB:
      //console.log(action);
      return {
        ...state,
        crypto_currencies_tab: action?.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
