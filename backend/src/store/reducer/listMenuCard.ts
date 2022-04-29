import { MENUCARD } from "../types";

const initialState = {
  menuCardListAll: "",
};
const listMenuCardReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case MENUCARD.LIST_MENUCARD:
      return {
        ...state,
        menuCardListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listMenuCardReducer;
