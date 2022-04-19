import { NETWORK } from "../types";

const initialState = {
  newNetworkDetails: "",
};
const addNetworkReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NETWORK.ADD_NETWORK:
      return {
        ...state,
        newNetworkDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default addNetworkReducer;
