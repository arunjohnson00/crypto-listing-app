import { NETWORK } from "../types";

const initialState = {
  natworkListAll: "",
};
const listNetworkReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NETWORK.LIST_NETWORK:
      return {
        ...state,
        natworkListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listNetworkReducer;
