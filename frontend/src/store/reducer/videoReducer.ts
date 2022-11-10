import { VIDEO } from "../types";

const initialState = {
  video_list: "",
};
const videoReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case VIDEO.VIDEO_LIST:
      //console.log(action);
      return {
        ...state,
        video_list: action?.payload?.data,
      };

    default:
      return state;
  }
};

export default videoReducer;
