import { MENUCARD } from "../types";

const initialState = {
  newMenuCardDetails: "",
};
const addMenuCardReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case MENUCARD.ADD_MENUCARD:
      return {
        ...state,
        newMenuCardDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default addMenuCardReducer;
