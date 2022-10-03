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

import LinkImage from "../../../assets/singlepagecoin/globe.gif";
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
          <Typography
            variant="body2"
            sx={{ color: "#787878", fontWeight: 400, fontSize: ".65rem" }}
          >
            Website
          </Typography>
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 9, height: 9 }}></Avatar>
          </Tooltip>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.website_url &&
            coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.website_url?.map(
              (item: any, index: number) => (
                <MobileSingleCoinChip
                  key={index}
                  src={LinkImage}
                  title={item?.url}
                  link={item?.url}
                  variant="website"
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
          <Typography
            variant="body2"
            sx={{ color: "#787878", fontWeight: 400, fontSize: ".65rem" }}
          >
            Explorers
          </Typography>
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 9, height: 9 }}></Avatar>
          </Tooltip>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.network &&
            coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.network?.map(
              (item: any, index: number) => (
                <MobileSingleCoinChip
                  key={index}
                  src={item?.logo}
                  title={item?.name}
                  link={item?.url}
                  variant="explorer"
                  //shape="square"
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
          <Typography
            variant="body2"
            sx={{ color: "#787878", fontWeight: 400, fontSize: ".65rem" }}
          >
            Community
          </Typography>
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 9, height: 9 }}></Avatar>
          </Tooltip>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.communities &&
            coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.communities?.map(
              (item: any, index: number) => (
                <MobileSingleCoinChip
                  src={item?.logo}
                  title={item?.name}
                  link={item?.url}
                  variant="communities"
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
          <Typography
            variant="body2"
            sx={{ color: "#787878", fontWeight: 400, fontSize: ".65rem" }}
          >
            Sourcecode
          </Typography>
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 9, height: 9 }}></Avatar>
          </Tooltip>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          <MobileSingleCoinChip
            src={SourcecodeImage}
            icon={true}
            title="Source Code"
            link={
              coinDetailFirstBlock && coinDetailFirstBlock[0]?.source_code_url
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
          <Typography
            variant="body2"
            sx={{ color: "#787878", fontWeight: 400, fontSize: ".65rem" }}
          >
            Whitepaper
          </Typography>
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 9, height: 9 }}></Avatar>
          </Tooltip>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          <MobileSingleCoinChip
            src={WhitepaperImage}
            title="Whitepaper"
            link={
              coinDetailFirstBlock && coinDetailFirstBlock[0]?.whitepaper_link
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
          <Typography
            variant="body2"
            sx={{ color: "#787878", fontWeight: 400, fontSize: ".65rem" }}
          >
            Docs
          </Typography>
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 9, height: 9 }}></Avatar>
          </Tooltip>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          <MobileSingleCoinChip
            src={DocsImage}
            title="Docs"
            link={coinDetailFirstBlock && coinDetailFirstBlock[0]?.docs_url}
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
          <Typography
            variant="body2"
            sx={{ color: "#787878", fontWeight: 400, fontSize: ".65rem" }}
          >
            Audit Report
          </Typography>
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 9, height: 9 }}></Avatar>
          </Tooltip>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.audit?.map((item: any, index: number) => (
              <MobileSingleCoinChip
                key={index}
                src={item?.thumb_icon}
                title={item.name}
                link={item.url}
                variant="audit"
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
          <Typography
            variant="body2"
            sx={{ color: "#787878", fontWeight: 400, fontSize: ".65rem" }}
          >
            Chart
          </Typography>
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 9, height: 9 }}></Avatar>
          </Tooltip>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          {coinDetailFirstBlock &&
            coinDetailFirstBlock[0]?.chart_link?.map(
              (item: any, index: number) => (
                <MobileSingleCoinChip
                  key={index}
                  src={item?.thumb_icon}
                  title={item?.name}
                  link={item?.url}
                  variant="chart"
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
          <Typography
            variant="body2"
            sx={{ color: "#787878", fontWeight: 400, fontSize: ".65rem" }}
          >
            Rating
          </Typography>
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 9, height: 9 }}></Avatar>
          </Tooltip>
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
