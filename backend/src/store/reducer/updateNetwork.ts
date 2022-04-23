import { NETWORK } from "../types";

const initialState = {
  editNetworkDetails: "",
};
const updateNetworkReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NETWORK.UPDATE_NETWORK:
      return {
        ...state,
        editNetworkDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default updateNetworkReducer;
