import { FEAR_GREED_INDEX } from "../types";

const initialState = {
  feer_greed_data: "",
  feer_greed_historical_data: "",
};
const feargreedReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case FEAR_GREED_INDEX.FREAR_GREED_DATA:
      //console.log(action);
      return {
        ...state,
        feer_greed_data: action?.payload?.data,
      };
    case FEAR_GREED_INDEX.FREAR_GREED_HISTORICAL_DATA:
      //console.log(action);
      return {
        ...state,
        feer_greed_historical_data: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default feargreedReducer;
