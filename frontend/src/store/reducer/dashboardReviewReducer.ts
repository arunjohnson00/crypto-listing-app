import { DASHBOARD_REVIEW } from "../types";

const initialState = {
  add_review: "",
  edit_review: "",
  update_review: "",
  delete_review: "",
};
const dashboardReviewReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case DASHBOARD_REVIEW.DELETE_REVIEW:
      //console.log(action);
      return {
        ...state,
        delete_review: action?.payload?.data,
      };

    case DASHBOARD_REVIEW.UPDATE_REVIEW:
      //console.log(action);
      return {
        ...state,
        update_review: action?.payload?.data,
      };

    case DASHBOARD_REVIEW.EDIT_REVIEW:
      //console.log(action);
      return {
        ...state,
        edit_review: action?.payload?.data,
      };

    case DASHBOARD_REVIEW.ADD_REVIEW:
      //console.log(action);
      return {
        ...state,
        add_review: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default dashboardReviewReducer;
