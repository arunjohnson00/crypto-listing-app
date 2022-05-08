import { MENUCARD } from "../types";

const initialState = {
  listMenuCards: "",
  addMenuCards: "",
  editMenuCards: "",
  updateMenuCards: "",
  viewMenuCards: "",
};
const menuCardsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case MENUCARD.LIST_MENUCARD:
      return {
        ...state,
        listMenuCards: action?.payload?.data,
      };

    case MENUCARD.ADD_MENUCARD:
      return {
        ...state,
        addMenuCards: action?.payload?.data,
      };

    case MENUCARD.EDIT_MENUCARD:
      return {
        ...state,
        editMenuCards: action?.payload?.data,
      };

    case MENUCARD.UPDATE_MENUCARD:
      return {
        ...state,
        updateMenuCards: action?.payload?.data,
      };

    case MENUCARD.VIEW_MENUCARD:
      return {
        ...state,
        viewMenuCards: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default menuCardsReducer;
