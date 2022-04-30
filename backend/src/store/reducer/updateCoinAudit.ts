import { AUDIT } from "../types";

const initialState = {
  editCoinAuditDetails: "",
};
const updateCoinAuditReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case AUDIT.ADD_AUDIT:
      return {
        ...state,
        editCoinAuditDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default updateCoinAuditReducer;
