import { BADGES } from "../types";

const initialState = {
  listBadges: "",
  addBadges: "",
  editBadges: "",
  updateBadges: "",
  viewBadges: "",
  search_result: "",
};
const badgesReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case BADGES.LIST_BADGES:
      return {
        ...state,
        listBadges: action?.payload?.data,
      };

    case BADGES.ADD_BADGES:
      return {
        ...state,
        addBadges: action?.payload?.data,
      };

    case BADGES.EDIT_BADGES:
      return {
        ...state,
        editBadges: action?.payload?.data,
      };

    case BADGES.UPDATE_BADGES:
      return {
        ...state,
        updateBadges: action?.payload?.data,
      };

    case BADGES.VIEW_BADGES:
      return {
        ...state,
        viewBadges: action?.payload?.data,
      };
    case BADGES.SEARCH:
      return {
        ...state,
        search_result: action?.payload?.data,
      };
    default:
      return state;
  }
};

export default badgesReducer;
