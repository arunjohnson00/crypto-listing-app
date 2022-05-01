import { CHAT } from "../types";

const initialState = {
  coinChatListAll: "",
};
const listCoinChatReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case CHAT.LIST_CHAT:
      return {
        ...state,
        coinChatListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listCoinChatReducer;
