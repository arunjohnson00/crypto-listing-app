import { NETWORK } from "../types";

const initialState = {
  listNetworks: "",
  addNetworks: "",
  editNetworks: "",
  updateNetworks: "",
  viewNetworks: "",
  allNetworks: "",
};
const networksReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case NETWORK.LIST_NETWORK:
      return {
        ...state,
        listNetworks: action?.payload?.data,
      };

    case NETWORK.ADD_NETWORK:
      return {
        ...state,
        addNetworks: action?.payload?.data,
      };

    case NETWORK.EDIT_NETWORK:
      return {
        ...state,
        editNetworks: action?.payload?.data,
      };

    case NETWORK.UPDATE_NETWORK:
      return {
        ...state,
        updateNetworks: action?.payload?.data,
      };

    case NETWORK.VIEW_NETWORK:
      return {
        ...state,
        viewNetworks: action?.payload?.data,
      };

    case NETWORK.ALL_NETWORK:
      return {
        ...state,
        allNetworks: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default networksReducer;
