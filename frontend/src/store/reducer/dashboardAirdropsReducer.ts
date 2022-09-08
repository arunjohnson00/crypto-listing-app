import { DASHBOARD_AIRDROPS } from "../types";

const initialState = {
  coin_list: "",
  add_airdrops: "",
  edit_airdrops: "",
  update_airdrops: "",
  delete_airdrops: "",
};
const dashboardAirdropsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case DASHBOARD_AIRDROPS.DELETE_AIRDROPS:
      //console.log(action);
      return {
        ...state,
        delete_airdrops: action?.payload?.data,
      };

    case DASHBOARD_AIRDROPS.UPDATE_AIRDROPS:
      //console.log(action);
      return {
        ...state,
        update_airdrops: action?.payload?.data,
      };

    case DASHBOARD_AIRDROPS.EDIT_AIRDROPS:
      //console.log(action);
      return {
        ...state,
        edit_airdrops: action?.payload?.data,
      };

    case DASHBOARD_AIRDROPS.ADD_AIRDROPS:
      //console.log(action);
      return {
        ...state,
        add_airdrops: action?.payload?.data,
      };

    case DASHBOARD_AIRDROPS.COIN_LIST:
      //console.log(action);
      return {
        ...state,
        coin_list: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default dashboardAirdropsReducer;
