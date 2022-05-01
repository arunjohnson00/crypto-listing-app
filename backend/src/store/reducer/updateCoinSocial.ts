import { SOCIALS } from "../types";

const initialState = {
  editCoinSocialDetails: "",
};
const updateCoinSocialReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SOCIALS.UPDATE_SOCIALS:
      return {
        ...state,
        editCoinSocialDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default updateCoinSocialReducer;
