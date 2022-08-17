import { COINS } from "../types";

const initialState = {
  featured_coin_list: "",
  crypto_currencies_list: "",
  crypto_currencies_new: "",
  crypto_currencies_presale: "",
  crypto_currencies_todays_best: "",
  crypto_currencies_tab: 0,
  recently_added: "",
  biggest_gainers: "",
  biggest_loosers: "",
};
const coinsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COINS.RECENTLY_ADDED:
      //console.log(action);
      return {
        ...state,
        recently_added: action?.payload?.data,
      };

    case COINS.BIGGEST_GAINERS:
      //console.log(action);
      return {
        ...state,
        biggest_gainers: action?.payload?.data,
      };
    case COINS.BIGGEST_LOOSERS:
      //console.log(action);
      return {
        ...state,
        biggest_loosers: action?.payload?.data,
      };

    case COINS.FEATURED_COIN_LIST:
      //console.log(action);
      return {
        ...state,
        featured_coin_list: action?.payload?.data,
      };
    case COINS.CRYPTO_CURRENCIES_LIST:
      //console.log(action);
      return {
        ...state,
        crypto_currencies_list: action?.payload?.data,
      };

    case COINS.CRYPTO_CURRENCIES_NEW:
      //console.log(action);
      return {
        ...state,
        crypto_currencies_new: action?.payload?.data,
      };

    case COINS.CRYPTO_CURRENCIES_PRESALE:
      //console.log(action);
      return {
        ...state,
        crypto_currencies_presale: action?.payload?.data,
      };

    case COINS.CRYPTO_CURRENCIES_TODAYS_BEST:
      //console.log(action);
      return {
        ...state,
        crypto_currencies_todays_best: action?.payload?.data,
      };

    case COINS.CRYPTO_CURRENCIES_TAB:
      //console.log(action);
      return {
        ...state,
        crypto_currencies_tab: action?.payload,
      };

    default:
      return state;
  }
};

export default coinsReducer;
