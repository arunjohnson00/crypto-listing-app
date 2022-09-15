import { DISCOVER } from "../types";

const initialState = {
  latest_coin: "",
  latest_presale: "",
  latest_news: "",
  latest_airdrop: "",
  latest_nft: "",
  latest_events: "",
  video_list: "",
  nft_market_places: "",
  biggest_gainers: "",
  biggest_losers: "",
};

const discoverReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case DISCOVER.LATEST_COIN:
      //console.log(action);
      return {
        ...state,
        latest_coin: action?.payload?.data,
      };

    case DISCOVER.LATEST_PRESALE:
      //console.log(action);
      return {
        ...state,
        latest_presale: action?.payload?.data,
      };
    case DISCOVER.LATEST_NEWS:
      //console.log(action);
      return {
        ...state,
        latest_news: action?.payload?.data,
      };
    case DISCOVER.LATEST_AIRDROPS:
      //console.log(action);
      return {
        ...state,
        latest_airdrop: action?.payload?.data,
      };
    case DISCOVER.LATEST_NFT:
      //console.log(action);
      return {
        ...state,
        latest_nft: action?.payload?.data,
      };
    case DISCOVER.LATEST_EVENTS:
      //console.log(action);
      return {
        ...state,
        latest_events: action?.payload?.data,
      };
    case DISCOVER.NFT_MARKET_PLACES:
      //console.log(action);
      return {
        ...state,
        nft_market_places: action?.payload?.data,
      };

    case DISCOVER.BIGGEST_GAINERS:
      //console.log(action);
      return {
        ...state,
        biggest_gainers: action?.payload?.data,
      };
    case DISCOVER.BIGGEST_LOOSERS:
      //console.log(action);
      return {
        ...state,
        biggest_losers: action?.payload?.data,
      };

    case DISCOVER.VIDEO_LIST:
      //console.log(action);
      return {
        ...state,
        video_list: action?.payload,
      };

    default:
      return state;
  }
};

export default discoverReducer;
