import { VIDEOS } from "../types";

const initialState = {
  listVideos: "",
  addVideos: "",
  editVideos: "",
  updateVideos: "",
  viewVideos: "",
};
const videosReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case VIDEOS.LIST_VIDEOS:
      return {
        ...state,
        listVideos: action?.payload?.data,
      };

    case VIDEOS.ADD_VIDEOS:
      return {
        ...state,
        addVideos: action?.payload?.data,
      };

    case VIDEOS.EDIT_VIDEOS:
      return {
        ...state,
        editVideos: action?.payload?.data,
      };

    case VIDEOS.UPDATE_VIDEOS:
      return {
        ...state,
        updateVideos: action?.payload?.data,
      };

    case VIDEOS.VIEW_VIDEOS:
      return {
        ...state,
        viewVideos: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default videosReducer;
