import { VIDEOS } from "../types";

const initialState = {
  editVideoDetails: "",
};
const updateVideosReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case VIDEOS.UPDATE_VIDEOS:
      return {
        ...state,
        editVideoDetails: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default updateVideosReducer;
