import { SOCIALS } from "../types";

const initialState = {
  newCoinSocialDetails: "",
};
const addCoinSocialReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SOCIALS.ADD_SOCIALS:
      return {
        ...state,
        newCoinSocialDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default addCoinSocialReducer;
