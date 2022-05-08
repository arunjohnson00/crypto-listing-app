import { CHAT } from "../types";

const initialState = {
  listChat: "",
  addChat: "",
  editChat: "",
  updateChat: "",
  viewChat: "",
};
const chatReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CHAT.LIST_CHAT:
      return {
        ...state,
        listChat: action?.payload?.data,
      };

    case CHAT.ADD_CHAT:
      return {
        ...state,
        addChat: action?.payload?.data,
      };

    case CHAT.EDIT_CHAT:
      return {
        ...state,
        editChat: action?.payload?.data,
      };

    case CHAT.UPDATE_CHAT:
      return {
        ...state,
        updateChat: action?.payload?.data,
      };

    case CHAT.VIEW_CHAT:
      return {
        ...state,
        viewChat: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default chatReducer;
