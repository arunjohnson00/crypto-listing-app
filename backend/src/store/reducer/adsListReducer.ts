import { ADS_LIST } from "../types";

const initialState = {
  list_ads: "",
  add_ads: "",
  edit_ads: "",
  update_ads: "",
  view_ads: "",
  search_result: "",
};
const adsListReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADS_LIST.LIST_ADS:
      return {
        ...state,
        list_ads: action?.payload?.data,
      };

    case ADS_LIST.CREATE_ADS:
      return {
        ...state,
        add_ads: action?.payload?.data,
      };

    case ADS_LIST.EDIT_ADS:
      return {
        ...state,
        edit_ads: action?.payload?.data,
      };

    case ADS_LIST.UPDATE_ADS:
      return {
        ...state,
        update_ads: action?.payload?.data,
      };

    case ADS_LIST.VIEW_ADS:
      return {
        ...state,
        view_ads: action?.payload?.data,
      };
    case ADS_LIST.SEARCH:
      return {
        ...state,
        search_result: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default adsListReducer;
