import { SOCIALS } from "../types";

const initialState = {
  coinSocialListAll: "",
};
const listCoinSocialReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SOCIALS.LIST_SOCIALS:
      return {
        ...state,
        coinSocialListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listCoinSocialReducer;
