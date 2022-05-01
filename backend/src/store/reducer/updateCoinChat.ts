import { CHAT } from "../types";

const initialState = {
  editCoinChatDetails: "",
};
const updateCoinChatReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CHAT.UPDATE_CHAT:
      return {
        ...state,
        editCoinChatDetails: action?.payload.data,
      };

    default:
      return state;
  }
};

export default updateCoinChatReducer;
