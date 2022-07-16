import { EVENTS_CATEGORY } from "../types";

const initialState = {
  listEventsCategory: "",
  addEventsCategory: "",
  editEventsCategory: "",
  updateEventsCategory: "",
  viewEventsCategory: "",
  search_result: "",
};
const eventsCategoryReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case EVENTS_CATEGORY.LIST_EVENTS_CATEGORY:
      return {
        ...state,
        listEventsCategory: action?.payload?.data,
      };

    case EVENTS_CATEGORY.ADD_EVENTS_CATEGORY:
      return {
        ...state,
        addEventsCategory: action?.payload?.data,
      };

    case EVENTS_CATEGORY.EDIT_EVENTS_CATEGORY:
      return {
        ...state,
        editEventsCategory: action?.payload?.data,
      };

    case EVENTS_CATEGORY.UPDATE_EVENTS_CATEGORY:
      return {
        ...state,
        updateEventsCategory: action?.payload?.data,
      };

    case EVENTS_CATEGORY.VIEW_EVENTS_CATEGORY:
      return {
        ...state,
        viewEventsCategory: action?.payload?.data,
      };

    case EVENTS_CATEGORY.SEARCH:
      return {
        ...state,
        search_result: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default eventsCategoryReducer;
