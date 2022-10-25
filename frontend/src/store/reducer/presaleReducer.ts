import { PRESALE } from "../types";

const initialState = {
  presale_listings: "",
};
const presaleReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case PRESALE.PRESALE_LISTINGS:
      //console.log(action);
      return {
        ...state,
        presale_listings: action?.payload,
      };

    default:
      return state;
  }
};

export default presaleReducer;
