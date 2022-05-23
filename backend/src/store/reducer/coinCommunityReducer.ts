import { COMMUNITY } from "../types";

const initialState = {
  listCommunity: "",
  addCommunity: "",
  editCommunity: "",
  updateCommunity: "",
  viewCommunity: "",
  allCommunity: "",
};
const communityReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COMMUNITY.LIST_COMMUNITY:
      return {
        ...state,
        listCommunity: action?.payload?.data,
      };

    case COMMUNITY.ADD_COMMUNITY:
      return {
        ...state,
        addCommunity: action?.payload?.data,
      };

    case COMMUNITY.EDIT_COMMUNITY:
      return {
        ...state,
        editCommunity: action?.payload?.data,
      };

    case COMMUNITY.UPDATE_COMMUNITY:
      return {
        ...state,
        updateCommunity: action?.payload?.data,
      };

    case COMMUNITY.VIEW_COMMUNITY:
      return {
        ...state,
        viewCommunity: action?.payload?.data,
      };

    case COMMUNITY.ALL_COMMUNITY:
      return {
        ...state,
        allCommunity: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default communityReducer;
