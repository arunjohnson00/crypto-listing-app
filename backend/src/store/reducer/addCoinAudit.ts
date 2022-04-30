import { AUDIT } from "../types";

const initialState = {
  newCoinAuditDetails: "",
};
const addCoinAuditReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case AUDIT.ADD_AUDIT:
      return {
        ...state,
        newCoinAuditDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default addCoinAuditReducer;
