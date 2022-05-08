import { COMMON } from "../types";

const initialState = {
  userNotifications: "",
};
const userNotificationReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COMMON.NOTIFICATION_LIST:
      return {
        ...state,
        userNotifications: action?.payload.data,
      };

    default:
      return state;
  }
};

export default userNotificationReducer;
