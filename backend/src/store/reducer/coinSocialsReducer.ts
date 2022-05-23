import { SOCIALS } from "../types";

const initialState = {
  listSocials: "",
  addSocials: "",
  editSocials: "",
  updateSocials: "",
  viewSocials: "",
  allSocials: "",
};
const socialsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SOCIALS.LIST_SOCIALS:
      return {
        ...state,
        listSocials: action?.payload?.data,
      };

    case SOCIALS.ADD_SOCIALS:
      return {
        ...state,
        addSocials: action?.payload?.data,
      };

    case SOCIALS.EDIT_SOCIALS:
      return {
        ...state,
        editSocials: action?.payload?.data,
      };

    case SOCIALS.UPDATE_SOCIALS:
      return {
        ...state,
        updateSocials: action?.payload?.data,
      };

    case SOCIALS.VIEW_SOCIALS:
      return {
        ...state,
        viewSocials: action?.payload?.data,
      };

    case SOCIALS.ALL_SOCIALS:
      return {
        ...state,
        allSocials: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default socialsReducer;
