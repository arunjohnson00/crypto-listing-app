import { DASHBOARD_COIN } from "../types";

const initialState = {
  network_list: "",
  exchange_list: "",
  audit_list: "",
  chart_provider_list: "",
  chat_platform_list: "",
  social_platform_list: "",
  add_coin: "",
  edit_coin: "",
  update_coin: "",
  delete_coin: "",
};
const dashboardCoinReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case DASHBOARD_COIN.DELETE_COIN:
      //console.log(action);
      return {
        ...state,
        delete_coin: action?.payload?.data,
      };

    case DASHBOARD_COIN.UPDATE_COIN:
      //console.log(action);
      return {
        ...state,
        update_coin: action?.payload?.data,
      };

    case DASHBOARD_COIN.EDIT_COIN:
      //console.log(action);
      return {
        ...state,
        edit_coin: action?.payload?.data,
      };

    case DASHBOARD_COIN.ADD_COIN:
      //console.log(action);
      return {
        ...state,
        add_coin: action?.payload?.data,
      };

    case DASHBOARD_COIN.SOCIAL_PLATFORM_LIST:
      //console.log(action);
      return {
        ...state,
        social_platform_list: action?.payload?.data,
      };

    case DASHBOARD_COIN.CHAT_PLATFORM_LIST:
      //console.log(action);
      return {
        ...state,
        chat_platform_list: action?.payload?.data,
      };

    case DASHBOARD_COIN.CHART_PROVIDER_LIST:
      //console.log(action);
      return {
        ...state,
        chart_provider_list: action?.payload?.data,
      };

    case DASHBOARD_COIN.AUDIT_LIST:
      //console.log(action);
      return {
        ...state,
        audit_list: action?.payload?.data,
      };

    case DASHBOARD_COIN.EXCHANGE_LIST:
      //console.log(action);
      return {
        ...state,
        exchange_list: action?.payload?.data,
      };

    case DASHBOARD_COIN.NETWORK_LIST:
      //console.log(action);
      return {
        ...state,
        network_list: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default dashboardCoinReducer;
