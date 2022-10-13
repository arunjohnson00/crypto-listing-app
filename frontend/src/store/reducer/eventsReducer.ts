import { EVENTS } from "../types";

const initialState = {
  events_category: "",
  events_recently_added: "",
  events_upcoming: "",
  events_past: "",
  events_single_page: "",
};
const eventsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case EVENTS.EVENTS_CATEGORY:
      //console.log(action);
      return {
        ...state,
        events_category: action?.payload,
      };

    case EVENTS.EVENTS_RECENLTY_ADDED:
      //console.log(action);
      return {
        ...state,
        events_recently_added: action?.payload,
      };
    case EVENTS.EVENTS_UPCOMING:
      //console.log(action);
      return {
        ...state,
        events_upcoming: action?.payload,
      };
    case EVENTS.EVENTS_PAST:
      //console.log(action);
      return {
        ...state,
        events_past: action?.payload,
      };

    case EVENTS.EVENTS_SINGLE_PAGE:
      //console.log(action);
      return {
        ...state,
        events_single_page: action?.payload,
      };
    default:
      return state;
  }
};

export default eventsReducer;
