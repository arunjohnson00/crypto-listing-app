import { EVENTS } from "../types";

const initialState = {
  listEvents: "",
  addEvents: "",
  editEvents: "",
  updateEvents: "",
  viewEvents: "",
};
const eventsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case EVENTS.LIST_EVENTS:
      return {
        ...state,
        listEvents: action?.payload?.data,
      };

    case EVENTS.ADD_EVENTS:
      return {
        ...state,
        addEvents: action?.payload?.data,
      };

    case EVENTS.EDIT_EVENTS:
      return {
        ...state,
        editEvents: action?.payload?.data,
      };

    case EVENTS.UPDATE_EVENTS:
      return {
        ...state,
        updateEvents: action?.payload?.data,
      };

    case EVENTS.VIEW_EVENTS:
      return {
        ...state,
        viewEvents: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default eventsReducer;
