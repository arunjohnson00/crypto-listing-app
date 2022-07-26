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

export const sideBarMenu = [
  { id: "1", title: "Dashboard", icon: dashboardIcon },
  {
    id: "2",
    title: "Coins",
    icon: coinListingIcon,
    subMenu: [
      { id: "21", title: "coins-audit", icon: "receipt" },
      { id: "22", title: "coins-chart-provider", icon: "receipt" },
      //  { id: "23", title: "coins-community", icon: "receipt" },
      { id: "24", title: "coins-chat", icon: "receipt" },
      { id: "25", title: "coins-socials", icon: "receipt" },
    ],
  },
  { id: "3", title: "Exchange", icon: exchnageIcon },
  {
    id: "4",
    title: "nft-listing",
    icon: nftListingIcon,
    subMenu: [
      { id: "41", title: "nft-listing-category", icon: "store" },
      { id: "42", title: "nft-listing-currency", icon: "store" },
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
      { id: "91", title: "a", icon: "store" },
      { id: "92", title: "a", icon: "store" },
      { id: "93", title: "a", icon: "store" },
    ],
  },
  {
    id: "10",
    title: "Videos",
    icon: videosIcon,
    // subMenu: [
    //   { id: "101", title: "a", icon: "store" },
    //   { id: "102", title: "a", icon: "store" },
    //   { id: "103", title: "a", icon: "store" },
    // ],
  },
  { id: "11", title: "Menu-cards", icon: menucardIcon },
  { id: "12", title: "Rating-Reviews", icon: ratingIcon },
  {
    id: "13",
    title: "Events",
    icon: eventIcon,
    subMenu: [
      { id: "131", title: "events-category", icon: "store" },
      { id: "132", title: "reward-address", icon: "store" },
    ],
  },
  { id: "14", title: "Affiliates", icon: affiliatesIcon },
  { id: "15", title: "Badges", icon: badgesIcon },
];

export const sideBarIcons = ["All mail", "Trash", "Spam"];
