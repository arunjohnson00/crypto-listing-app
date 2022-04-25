import { VIDEOS } from "../types";

const initialState = {
  videoListAll: "",
};
const listVideoReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case VIDEOS.LIST_VIDEOS:
      return {
        ...state,
        videoListAll: action?.payload.data,
      };

    default:
      return state;
  }
};

export default listVideoReducer;
