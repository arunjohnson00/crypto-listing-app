import { AIRDROPS } from "../types";

const initialState = {
  listAirdrops: "",
  addAirdrops: "",
  editAirdrops: "",
  updateAirdrops: "",
  viewAirdrops: "",
  search_result: "",
};
const airdropsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case AIRDROPS.LIST_AIRDROPS:
      return {
        ...state,
        listAirdrops: action?.payload?.data,
      };

    case AIRDROPS.ADD_AIRDROPS:
      return {
        ...state,
        addAirdrops: action?.payload?.data,
      };

    case AIRDROPS.EDIT_AIRDROPS:
      return {
        ...state,
        editAirdrops: action?.payload?.data,
      };

    case AIRDROPS.UPDATE_AIRDROPS:
      return {
        ...state,
        updateAirdrops: action?.payload?.data,
      };

    case AIRDROPS.VIEW_AIRDROPS:
      return {
        ...state,
        viewAirdrops: action?.payload?.data,
      };
    case AIRDROPS.SEARCH:
      return {
        ...state,
        search_result: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default airdropsReducer;
