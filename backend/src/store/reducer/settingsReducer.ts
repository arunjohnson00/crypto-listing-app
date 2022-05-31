import { SETTINGS } from "../types";

const initialState = {
  viewRandomVoteStore: "",
  updateRandomVoteStore: "",
  viewDiscountStore: "",
  updateDiscountStore: "",
  viewPrivacyPolicyStore: "",
  updatePrivacyPolicyStore: "",
  viewDisclaimerStore: "",
  updateDisclaimerStore: "",
  viewTermsAndConditionStore: "",
  updateTermsAndConditionStore: "",
  viewTopBarNotificationStore: "",
  updateTopBarNotificationStore: "",
  updateChangePasswordStore: "",
};
const settingsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SETTINGS.VIEW_RANDOM_VOTES_STORE:
      return {
        ...state,
        viewRandomVoteStore: action?.payload?.data,
      };

    case SETTINGS.UPDATE_RANDOM_VOTES_STORE:
      return {
        ...state,
        updateRandomVoteStore: action?.payload?.data,
      };

    case SETTINGS.VIEW_DISCOUNT_STORE:
      return {
        ...state,
        viewDiscountStore: action?.payload?.data,
      };

    case SETTINGS.UPDATE_DISCOUNT_STORE:
      return {
        ...state,
        updateDiscountStore: action?.payload?.data,
      };

    case SETTINGS.VIEW_PRIVACY_POLICY_STORE:
      return {
        ...state,
        viewPrivacyPolicyStore: action?.payload?.data,
      };

    case SETTINGS.UPDATE_PRIVACY_POLICY_STORE:
      return {
        ...state,
        updatePrivacyPolicyStore: action?.payload?.data,
      };
    case SETTINGS.VIEW_DISCLAIMER_STORE:
      return {
        ...state,
        viewDisclaimerStore: action?.payload?.data,
      };
    case SETTINGS.UPDATE_DISCLAIMER_STORE:
      return {
        ...state,
        updateDisclaimerStore: action?.payload?.data,
      };
    case SETTINGS.VIEW_TERMS_CONDITIONS_STORE:
      return {
        ...state,
        viewTermsAndConditionStore: action?.payload?.data,
      };
    case SETTINGS.UPDATE_TERMS_CONDITIONS_STORE:
      return {
        ...state,
        updateTermsAndConditionStore: action?.payload?.data,
      };

    case SETTINGS.VIEW_TOP_BAR_NOTIFICATION_STORE:
      return {
        ...state,
        viewTopBarNotificationStore: action?.payload?.data,
      };

    case SETTINGS.UPDATE_TOP_BAR_NOTIFICATION_STORE:
      return {
        ...state,
        updateTopBarNotificationStore: action?.payload?.data,
      };
    case SETTINGS.CHANGE_PASSWORD_STORE:
      return {
        ...state,
        updateChangePasswordStore: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default settingsReducer;