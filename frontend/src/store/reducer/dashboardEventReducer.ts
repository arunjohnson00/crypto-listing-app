import { DASHBOARD_EVENTS } from "../types";

const initialState = {
  coin_list: "",
  event_category_list: "",
  event_reward_address_list: "",
  add_events: "",
  edit_events: "",
  update_events: "",
  delete_events: "",
};
const dashboardEventReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case DASHBOARD_EVENTS.DELETE_EVENTS:
      //console.log(action);
      return {
        ...state,
        delete_events: action?.payload?.data,
      };

    case DASHBOARD_EVENTS.UPDATE_EVENTS:
      //console.log(action);
      return {
        ...state,
        update_events: action?.payload?.data,
      };

    case DASHBOARD_EVENTS.EDIT_EVENTS:
      //console.log(action);
      return {
        ...state,
        edit_events: action?.payload?.data,
      };

    case DASHBOARD_EVENTS.ADD_EVENTS:
      //console.log(action);
      return {
        ...state,
        add_events: action?.payload?.data,
      };

    case DASHBOARD_EVENTS.EVENT_CATEGORY_LIST:
      //console.log(action);
      return {
        ...state,
        event_category_list: action?.payload?.data,
      };

    case DASHBOARD_EVENTS.COIN_LIST:
      //console.log(action);
      return {
        ...state,
        coin_list: action?.payload?.data,
      };

    case DASHBOARD_EVENTS.EVENT_REWARD_ADDRESS_LIST:
      //console.log(action);
      return {
        ...state,
        event_reward_address_list: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default dashboardEventReducer;
