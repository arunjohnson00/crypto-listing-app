import { ADS } from "../types";

const initialState = {
  main_banner_ads: "",
  square_banner_ads: "",
  square_banner_half_ads: "",
  vote_click_popup_ads: "",
  welcome_popup_ads: "",
  search_ads: "",
  video_ads: "",
};
const adsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADS.MAIN_BANNER_ADS:
      //console.log(action);
      return {
        ...state,
        main_banner_ads: action?.payload,
      };
    case ADS.SQUARE_BANNER_ADS:
      //console.log(action);
      return {
        ...state,
        square_banner_ads: action?.payload,
      };
    case ADS.SQUARE_BANNER_HALF_ADS:
      //console.log(action);
      return {
        ...state,
        square_banner_half_ads: action?.payload,
      };

    case ADS.VOTE_CLICK_POPUP_ADS:
      //console.log(action);
      return {
        ...state,
        vote_click_popup_ads: action?.payload,
      };
    case ADS.WELCOME_POPUP_ADS:
      //console.log(action);
      return {
        ...state,
        welcome_popup_ads: action?.payload,
      };
    case ADS.SEARCH_ADS:
      //console.log(action);
      return {
        ...state,
        search_ads: action?.payload,
      };

    case ADS.VIDEO_ADS:
      //console.log(action);
      return {
        ...state,
        video_ads: action?.payload,
      };
    default:
      return state;
  }
};

export default adsReducer;
