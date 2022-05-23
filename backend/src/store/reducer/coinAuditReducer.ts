import { AUDIT } from "../types";

const initialState = {
  listAudit: "",
  addAudit: "",
  editAudit: "",
  updateAudit: "",
  viewAudit: "",
  allAudit: "",
};
const auditReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case AUDIT.LIST_AUDIT:
      return {
        ...state,
        listAudit: action?.payload?.data,
      };

    case AUDIT.ADD_AUDIT:
      return {
        ...state,
        addAudit: action?.payload?.data,
      };

    case AUDIT.EDIT_AUDIT:
      return {
        ...state,
        editAudit: action?.payload?.data,
      };

    case AUDIT.UPDATE_AUDIT:
      return {
        ...state,
        updateAudit: action?.payload?.data,
      };

    case AUDIT.VIEW_AUDIT:
      return {
        ...state,
        viewAudit: action?.payload?.data,
      };

    case AUDIT.ALL_AUDIT:
      return {
        ...state,
        allAudit: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default auditReducer;
