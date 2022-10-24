import dashboardIcon from "../../../assets/icon/gray/dashboard_icon_gray.png";
import coinListingIcon from "../../../assets/icon/gray/coinlisting_icon_gray.png";
import exchnageIcon from "../../../assets/icon/gray/exchange_icon_gray.png";
import nftListingIcon from "../../../assets/icon/gray/nftlisting_icon_gray.png";
import nftMarketPlacesIcon from "../../../assets/icon/gray/nftmarketplace_icon_gray.png";
import airdropIcon from "../../../assets/icon/gray/airdrop_icon_gray.png";
import networksIcon from "../../../assets/icon/gray/networks_icon_gray.png";
import userIcon from "../../../assets/icon/gray/users_icon_gray.png";
import adsIcon from "../../../assets/icon/gray/ads_icon_gray.png";
import videosIcon from "../../../assets/icon/gray/videos_icon_gray.png";
import menucardIcon from "../../../assets/icon/gray/menucard_icon_gray.png";
import ratingIcon from "../../../assets/icon/gray/rating_icon_gray.png";
import eventIcon from "../../../assets/icon/gray/events_icon_gray.png";
import affiliatesIcon from "../../../assets/icon/gray/affiliates_icon_gray.png";
import badgesIcon from "../../../assets/icon/gray/badge_icon_gray.png";
import auditIcon from "../../../assets/icon/gray/audit_icon_gray.png";
import chartIcon from "../../../assets/icon/gray/chart_icon_gray.png";
import chatIcon from "../../../assets/icon/gray/chat_icon_gray.png";
import socialIcon from "../../../assets/icon/gray/social-media_icon_gray.png";
import eventCategoryIcon from "../../../assets/icon/gray/event_category_icon_gray.png";
import rewardIconIcon from "../../../assets/icon/gray/reward_icon_gray.png";
import nftListingCategoryIcon from "../../../assets/icon/gray/nft_listing_category_icon_gray.png";
import nftListingCurrencyIcon from "../../../assets/icon/gray/nft_listing_currency_icon_gray.png";
import settingsIcon from "../../../assets/icon/gray/setting_icon_gray.png";
export const sideBarMenu = [
  { id: "1", title: "Dashboard", icon: dashboardIcon },
  { id: "1123", title: "coin-listing-fee", icon: dashboardIcon },
  {
    id: "2",
    title: "Coins",
    icon: coinListingIcon,
    subMenu: [
      { id: "21", title: "coins-audit", icon: auditIcon },
      { id: "22", title: "coins-chart-provider", icon: chartIcon },
      //  { id: "23", title: "coins-community", icon: "receipt" },
      // { id: "24", title: "coins-chat", icon: chatIcon },
      // { id: "25", title: "coins-socials", icon: socialIcon },
    ],
  },

  {
    id: "17",
    title: "General Settings",
    icon: settingsIcon,
    subMenu: [
      { id: "171", title: "coins-chat", icon: chatIcon },
      { id: "172", title: "coins-socials", icon: socialIcon },
    ],
  },

  { id: "3", title: "Exchange", icon: exchnageIcon },
  {
    id: "4",
    title: "nft-listing",
    icon: nftListingIcon,
    subMenu: [
      { id: "41", title: "nft-listing-category", icon: nftListingCategoryIcon },
      { id: "42", title: "nft-listing-currency", icon: nftListingCurrencyIcon },
      { id: "43", title: "nft-listing-network", icon: nftListingCurrencyIcon },
    ],
  },
  { id: "5", title: "nft-marketplaces", icon: nftMarketPlacesIcon },
  { id: "6", title: "Airdrops", icon: airdropIcon },
  { id: "7", title: "Networks", icon: networksIcon },
  { id: "8", title: "Users", icon: userIcon },
  {
    id: "9",
    title: "Ads ",
    icon: adsIcon,
    subMenu: [
      { id: "90", title: "Adslist", icon: "store" },
      // { id: "91", title: "featured-coin", icon: "store" },
      // { id: "92", title: "main-banner", icon: "store" },
    ],
  },
  {
    id: "10",
    title: "ads-configuration",
    icon: adsIcon,
    subMenu: [
      // { id: "101", title: "ads-config-listing", icon: "store" },
      { id: "102", title: "ads-config-settings", icon: "store" },
    ],
  },
  {
    id: "11",
    title: "Videos",
    icon: videosIcon,
    // subMenu: [
    //   { id: "101", title: "a", icon: "store" },
    //   { id: "102", title: "a", icon: "store" },
    //   { id: "103", title: "a", icon: "store" },
    // ],
  },
  { id: "12", title: "Menu-cards", icon: menucardIcon },
  { id: "13", title: "Rating-Reviews", icon: ratingIcon },
  {
    id: "14",
    title: "Events",
    icon: eventIcon,
    subMenu: [
      { id: "141", title: "events-category", icon: eventCategoryIcon },
      { id: "142", title: "reward-address", icon: rewardIconIcon },
    ],
  },
  { id: "15", title: "Affiliates", icon: affiliatesIcon },
  { id: "16", title: "Badges", icon: badgesIcon },
];

export const sideBarIcons = ["All mail", "Trash", "Spam"];
