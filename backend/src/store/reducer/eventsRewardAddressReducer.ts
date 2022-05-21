import { EVENTS_REWARD_ADDRESS } from "../types";

const initialState = {
  listEventsRewardAddress: "",
  addEventsRewardAddress: "",
  editEventsRewardAddress: "",
  updateEventsRewardAddress: "",
  viewEventsRewardAddress: "",
};
const eventsRewardAddressReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case EVENTS_REWARD_ADDRESS.LIST_EVENTS_REWARD_ADDRESS:
      return {
        ...state,
        listEventsRewardAddress: action?.payload?.data,
      };

    case EVENTS_REWARD_ADDRESS.ADD_EVENTS_REWARD_ADDRESS:
      return {
        ...state,
        addEventsRewardAddress: action?.payload?.data,
      };

    case EVENTS_REWARD_ADDRESS.EDIT_EVENTS_REWARD_ADDRESS:
      return {
        ...state,
        editEventsRewardAddress: action?.payload?.data,
      };

    case EVENTS_REWARD_ADDRESS.UPDATE_EVENTS_REWARD_ADDRESS:
      return {
        ...state,
        updateEventsRewardAddress: action?.payload?.data,
      };

    case EVENTS_REWARD_ADDRESS.VIEW_EVENTS_REWARD_ADDRESS:
      return {
        ...state,
        viewEventsRewardAddress: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default eventsRewardAddressReducer;
