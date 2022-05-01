import { CHAT } from "../types";

const initialState = {
  newCoinChatDetails: "",
};
const addCoinChatReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CHAT.ADD_CHAT:
      return {
        ...state,
        newCoinChatDetails: action?.payload.data,
      };

    default:
      return state;
  }
};

export default addCoinChatReducer;
