import { VIDEOS } from "../types";

const initialState = {
  newVideosDetails: "",
};
const addVideoReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case VIDEOS.ADD_VIDEOS:
      return {
        ...state,
        newVideosDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default addVideoReducer;
