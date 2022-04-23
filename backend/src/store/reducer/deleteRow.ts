import { COMMON } from "../types";

const initialState = {
  deleteRowDetails: "",
};
const deleteRowReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case COMMON.DELETE_ROW:
      return {
        ...state,
        deleteRowDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default deleteRowReducer;
