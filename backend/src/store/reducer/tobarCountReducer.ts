import { COMMON } from "../types";

const initialState = {
  topbarCounts: "",
};
const topbarCountReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COMMON.TOPBAR_COUNT:
      return {
        ...state,
        topbarCounts: action?.payload.data,
      };

    default:
      return state;
  }
};

export default topbarCountReducer;
