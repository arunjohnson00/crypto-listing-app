import { useState } from "react";
import {
  Grid,
  Stack,
  Typography,
  NativeSelect,
  Box,
  Avatar,
  Tooltip,
  Divider,
  CardMedia,
  Link,
} from "@mui/material";
import { useSelector } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Iframe from "react-iframe";

import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";
import CoinGeckoImage from "../../../assets/singlepagecoin/coingecko.png";
import CoinMarketcapImage from "../../../assets/singlepagecoin/coinmarketcap.png";
import BscScanImage from "../../../assets/singlepagecoin/bscscan.png";
import FacebookImage from "../../../assets/singlepagecoin/facebook.png";
import InstagramImage from "../../../assets/singlepagecoin/instagram.png";
import RedditImage from "../../../assets/singlepagecoin/reddit.png";
import TelegramImage from "../../../assets/singlepagecoin/telegram.png";
import TwitterImage from "../../../assets/singlepagecoin/twitter.png";

import SourcecodeImage from "../../../assets/singlepagecoin/sourcecode.png";
import WhitepaperImage from "../../../assets/singlepagecoin/Whitepaper.png";
import DocsImage from "../../../assets/singlepagecoin/doc.png";

import LinkImage from "../../../assets/singlepagecoin/link.png";
import MobileSingleCoinChip from "../coinpagechip/MobileSingleCoinChip";

const MobileCoinPageOverview = () => {
  const [viewMore, setViewMore] = useState(true);
  const coinDetailFirstBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_detail_first_block?.data;
  });

  const viewmoreHandler = () => {
    setViewMore(!viewMore);
  };

  return (
    <Stack direction="column" spacing={3}>
      <Stack direction="row" spacing={1.5} alignItems="flex-start">
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ flexGrow: 1, minWidth: 120, maxWidth: 120 }}
        >
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 14, height: 14 }}></Avatar>
          </Tooltip>
          <Typography
            variant="body2"
            sx={{ color: "#23E2A0", fontWeight: 500 }}
          >
            Website
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.website_url &&
            coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.website_url
              ?.slice(0, 1)
              .map((item: any, index: number) => (
                <MobileSingleCoinChip
                  key={index}
                  src={LinkImage}
                  title={item?.url}
                  link={item?.url}
                  varient="website"
                />
              ))}
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1.5} alignItems="flex-start">
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ flexGrow: 1, minWidth: 120, maxWidth: 120 }}
        >
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 14, height: 14 }}></Avatar>
          </Tooltip>
          <Typography
            variant="body2"
            sx={{ color: "#23E2A0", fontWeight: 500 }}
          >
            Explorers
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.network &&
            coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.network
              ?.slice(0, 1)
              .map((item: any, index: number) => (
                <MobileSingleCoinChip
                  key={index}
                  src={item?.logo}
                  title={item?.name}
                  link={item?.url}
                  varient="explorer"
                />
              ))}
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1.5} alignItems="flex-start">
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ flexGrow: 1, minWidth: 120, maxWidth: 120 }}
        >
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 14, height: 14 }}></Avatar>
          </Tooltip>
          <Typography
            variant="body2"
            sx={{ color: "#23E2A0", fontWeight: 500 }}
          >
            Community
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.communities &&
            coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.communities?.map(
              (item: any, index: number) => (
                <MobileSingleCoinChip
                  key={index}
                  src={
                    item?.name === "twitter"
                      ? TwitterImage
                      : item?.name === "telegram"
                      ? TelegramImage
                      : item?.name === "reddit"
                      ? RedditImage
                      : item?.name === "facebook"
                      ? FacebookImage
                      : item?.name === "instagram" && InstagramImage
                  }
                  title={item?.name}
                  link={item?.url}
                />
              )
            )}
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1.5} alignItems="flex-start">
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ flexGrow: 1, minWidth: 120, maxWidth: 120 }}
        >
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 14, height: 14 }}></Avatar>
          </Tooltip>
          <Typography
            variant="body2"
            sx={{ color: "#23E2A0", fontWeight: 500 }}
          >
            Sourcecode
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          <MobileSingleCoinChip icon={false} title="Github" />
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1.5} alignItems="flex-start">
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ flexGrow: 1, minWidth: 120, maxWidth: 120 }}
        >
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 14, height: 14 }}></Avatar>
          </Tooltip>
          <Typography
            variant="body2"
            sx={{ color: "#23E2A0", fontWeight: 500 }}
          >
            Whitepaper
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          <MobileSingleCoinChip
            src={DocsImage}
            title="Whitepaper"
            link={
              coinDetailFirstBlock &&
              coinDetailFirstBlock[0] &&
              coinDetailFirstBlock &&
              coinDetailFirstBlock[0]?.whitepaper_link
            }
          />
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1.5} alignItems="flex-start">
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ flexGrow: 1, minWidth: 120, maxWidth: 120 }}
        >
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 14, height: 14 }}></Avatar>
          </Tooltip>
          <Typography
            variant="body2"
            sx={{ color: "#23E2A0", fontWeight: 500 }}
          >
            Audit Report
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.audit
              ?.slice(0, 1)
              .map((item: any, index: number) => (
                <MobileSingleCoinChip
                  key={index}
                  src={SourcecodeImage}
                  title={item.name}
                  link={item.url}
                />
              ))}
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1.5} alignItems="flex-start">
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ flexGrow: 1, minWidth: 120, maxWidth: 120 }}
        >
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 14, height: 14 }}></Avatar>
          </Tooltip>
          <Typography
            variant="body2"
            sx={{ color: "#23E2A0", fontWeight: 500 }}
          >
            Chart
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.chart_link
              ?.slice(0, 1)
              .map((item: any, index: number) => (
                <MobileSingleCoinChip
                  key={index}
                  src={LinkImage}
                  title={item?.name}
                  link={item?.url}
                />
              ))}
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1.5} alignItems="flex-start">
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ flexGrow: 1, minWidth: 120, maxWidth: 120 }}
        >
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 14, height: 14 }}></Avatar>
          </Tooltip>
          <Typography
            variant="body2"
            sx={{ color: "#23E2A0", fontWeight: 500 }}
          >
            Rating
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          sx={{ flexWrap: "wrap" }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#00B1C3", fontWeight: 500 }}
          >
            {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.trust_score[0]?.rating !== null
              ? parseFloat(
                  coinDetailFirstBlock &&
                    coinDetailFirstBlock[0]?.trust_score[0]?.rating
                ).toFixed(1)
              : "--"}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#FFFFFF", fontWeight: 500 }}
          >
            from
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#00B1C3", fontWeight: 500 }}
          >
            {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.trust_score[0]?.review_count !== null
              ? coinDetailFirstBlock &&
                coinDetailFirstBlock[0]?.trust_score[0]?.review_count
              : "--"}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#FFFFFF", fontWeight: 500 }}
          >
            Reviews
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MobileCoinPageOverview;
