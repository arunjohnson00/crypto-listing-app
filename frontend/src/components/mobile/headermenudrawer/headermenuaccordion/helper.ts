import todaysPerformerCoinIcon from "../../../../assets/home/todays_performer_icon.png";
import recentlyAddedCoinIcon from "../../../../assets/header/recently_added_icon.png";
import biggestLosersCoinIcon from "../../../../assets/header/biggest_losers_icon.png";
import biggestGainersCoinIcon from "../../../../assets/header/biggest_gainers_icon.png";

import trendingCoinIcon from "../../../../assets/header/trending_icon.png";
import mostVotedCoinIcon from "../../../../assets/header/most_voted_icon.png";
import recentlyAddedNFTIcon from "../../../../assets/header/recently_added_nft_icon.png";
import nftCollectionIcon from "../../../../assets/header/nft_collections_icon.png";

import recentlyAddedAirDropIcon from "../../../../assets/header/recently_added_airdrops_icon.png";
import airdropCalenderIcon from "../../../../assets/header/airdrops_calendar_icon.png";

import recentlyAddedEventIcon from "../../../../assets/header/recetly_added_events_icon.png";
import upcomingEventIcon from "../../../../assets/header/upcoming_events_icon.png";
import pastEventIcon from "../../../../assets/header/past_events_icon.png";

export const coinMenu = [
  {
    icon: recentlyAddedCoinIcon,
    title: "Recently added",
    link: "/coins/recently-added",
  },
  {
    icon: biggestGainersCoinIcon,
    title: "Biggest Gainers",
    link: "/coins/biggest-gainers",
  },
  {
    icon: biggestLosersCoinIcon,
    title: "Top Losers",
    link: "/coins/biggest-losers",
  },
  { icon: trendingCoinIcon, title: "Trending", link: "/coins/trending-coins" },
  { icon: mostVotedCoinIcon, title: "Most Voted", link: "/coins/most-voted" },
];

export const nftMenu = [
  { icon: recentlyAddedNFTIcon, title: "Recently added", link: "#" },
  {
    icon: nftCollectionIcon,
    title: "NFT Collections",
    link: "#",
  },
];

export const airdropsMenu = [
  { icon: recentlyAddedAirDropIcon, title: "Recently added", link: "#" },
  {
    icon: airdropCalenderIcon,
    title: "Airdrops Calender",
    link: "#",
  },
];

export const eventsMenu = [
  { icon: recentlyAddedEventIcon, title: "Recently added", link: "#" },
  {
    icon: upcomingEventIcon,
    title: "Upcoming Events",
    link: "#",
  },

  {
    icon: pastEventIcon,
    title: "Past Events",
    link: "#",
  },
];
