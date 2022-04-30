import { AUDIT } from "../types";

const initialState = {
  auditListAll: "",
};
const listCoinAuditReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case AUDIT.LIST_AUDIT:
      return {
        ...state,
        auditListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listCoinAuditReducer;
