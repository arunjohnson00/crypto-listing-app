import todaysPerformerIcon from "../../../assets/home/todays_performer_icon.png";
import recentlyAddedIcon from "../../../assets/home/recently_added_icon.png";
import biggestLosersIcon from "../../../assets/home/biggest_losers_icon.png";
import biggestGainersIcon from "../../../assets/home/biggest_gainers_icon.png";

export const coinMenu = [
  { icon: recentlyAddedIcon, title: "Recently added", link: "/new-coins" },
  {
    icon: biggestGainersIcon,
    title: "Biggest Gainers",
    link: "/biggest-gainers",
  },
  { icon: biggestLosersIcon, title: "Top Losers", link: "/top-losers" },
  { icon: "", title: "Trending", link: "/trending-coins" },
  { icon: "", title: "Most Voted", link: "#" },
];

export const nftMenu = [
  { icon: recentlyAddedIcon, title: "Recently added", link: "#" },
  {
    icon: biggestGainersIcon,
    title: "NFT Collections",
    link: "#",
  },
];

export const airdropsMenu = [
  { icon: recentlyAddedIcon, title: "Recently added", link: "#" },
  {
    icon: biggestGainersIcon,
    title: "Airdrops Calender",
    link: "#",
  },
];
