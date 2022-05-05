import { COMMON } from "../types";

const initialState = {
  notificationListAll: "",
};
const userNotificationReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COMMON.NOTIFICATION_LIST:
      return {
        ...state,
        notificationListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default userNotificationReducer;
