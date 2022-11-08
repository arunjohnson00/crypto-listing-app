import appRequest from "../../utils/fetchhandler";
import { COIN } from "../types";

// export const adsSummaryRequest = (
//   values: any,
//   successHandler: any,
//   errorHandler: any
// ) => {
//   const fetchOptions = {
//     // //url: `api/b/v1/exchange`,
//     // url: `api/b/v1/airdrops?page=${values?.pageCount}`,
//     // method: "GET",
//     secure: true,
//     actionType: ADS.ADS_SUMMARY,
//   };
//   return appRequest(fetchOptions, successHandler, errorHandler);
// };
// export const adsSummaryRequest = ADS.ADS_SUMMARY;
// export const removeFromAdsSummaryRequest = ADS.REMOVE_FROM_ADS_SUMMARY;
export const coinOnloadVerificationRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-on-load-verification/${values} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_ONLOAD_VERIFICATION,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinDetailFirstBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-detail-first-block/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_DETAIL_FIRST_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinOverviewBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-overview-block/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_OVERVIEW_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinAboutBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-about-block/${values} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_ABOUT_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinSocialGraphRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-social-graph/${values} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_SOCIAL_GRAPH,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinRatingBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-rating-block/${values} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_RATING_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinHistoricalDataBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-historical-data/${values} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_HISTORICAL_DATA_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinTodaysPriceBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-todays-price/${values} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_TODAYS_PRICE_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinCommunityBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-community-graph/${values?.slug}/${values?.name} `,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_COMMUNITY_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinFAQBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-faq-block/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_FAQ_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinPriceGraphBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-price-widget/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_PRICE_GRAPH_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinEventBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-events/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_EVENTS_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinPresaleBlockRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-presale/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_PRESALE_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinVisitedCounterRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-visit-counter/${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.MOST_VISITED,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinlatestNewsRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,

    url:
      values?.term === "" || values?.term === undefined
        ? `api/f/v1/news-feed/${values?.count}`
        : `api/f/v1/news-feed/${values?.count}/${values?.term}`,
    method: "GET",
    secure: false,
    actionType: COIN.NEWS_BLOCK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinRecentlyAddedRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/recently-added?page=${values}`,
    method: "GET",
    secure: false,
    actionType: COIN.COIN_RECENTLY_ADDED,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinReviewSubmitRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/review/create`,
    method: "POST",
    secure: true,
    body: values,
    fileUpload: true,
    actionType: COIN.COIN_REVIEW_SUBMIT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinMarketListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-market-lists/${values}`,
    method: "GET",
    secure: false,
    //body: values,
    fileUpload: false,
    actionType: COIN.COIN_MARKET_LIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinWatchListRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    url: `api/f/v1/watchlist/create`,
    method: "POST",
    secure: true,
    body: values,
    // body: values,
    fileUpload: true,
    actionType: COIN.COIN_WATCHLIST,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinSocialGraphTwitterRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-social-graph/${values}/twitter`,
    method: "GET",
    secure: false,
    //body: values,
    fileUpload: false,
    actionType: COIN.SOCIAL_GRAPH_TWITTER,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinSocialGraphTelegramRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-social-graph/${values}/telegram`,
    method: "GET",
    secure: false,
    //body: values,
    fileUpload: false,
    actionType: COIN.SOCIAL_GRAPH_TELEGRAM,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinSocialGraphRedditRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-social-graph/${values}/reddit`,
    method: "GET",
    secure: false,
    //body: values,
    fileUpload: false,
    actionType: COIN.SOCIAL_GRAPH_REDDIT,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinSocialGraphFacebookRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-social-graph/${values}/facebook`,
    method: "GET",
    secure: false,
    //body: values,
    fileUpload: false,
    actionType: COIN.SOCIAL_GRAPH_FACEBOOK,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinSocialGraphGithubRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-social-graph/${values}/github`,
    method: "GET",
    secure: false,
    //body: values,
    fileUpload: false,
    actionType: COIN.SOCIAL_GRAPH_GITHUB,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};

export const coinSocialGraphDiscordRequest = (
  values: any,
  successHandler: any,
  errorHandler: any
) => {
  const fetchOptions = {
    //url: `api/b/v1/exchange`,
    url: `api/f/v1/coin-social-graph/${values}/discord`,
    method: "GET",
    secure: false,
    //body: values,
    fileUpload: false,
    actionType: COIN.SOCIAL_GRAPH_GITHUB,
  };
  return appRequest(fetchOptions, successHandler, errorHandler);
};
