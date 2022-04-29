import { MENUCARD } from "../types";

const initialState = {
  editMenuCardDetails: "",
};
const updateMenuCardReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case MENUCARD.UPDATE_MENUCARD:
      return {
        ...state,
        editMenuCardDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default updateMenuCardReducer;
