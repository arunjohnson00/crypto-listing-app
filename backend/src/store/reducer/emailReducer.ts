import { EMAIL } from "../types";

const initialState = {
  send_notification_email: "",
};

const emailReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case EMAIL.SEND_NOTIFICATION_EMAIL:
      return {
        ...state,
        send_notification_email: action?.payload?.data,
      };
    default:
      return state;
  }
};

export default emailReducer;
