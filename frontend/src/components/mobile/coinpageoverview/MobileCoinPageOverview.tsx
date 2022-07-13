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
          <MobileSingleCoinChip src={LinkImage} title="safemoon.com" />
          <MobileSingleCoinChip
            src={LinkImage}
            title="safemooncommunityindia.com"
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
            Explorers
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ flexWrap: "wrap" }}>
          <MobileSingleCoinChip src={LinkImage} title="BscScan" />
          <MobileSingleCoinChip src={LinkImage} title="EtherScan" />
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
          <MobileSingleCoinChip src={FacebookImage} title="Facebook" />
          <MobileSingleCoinChip src={TwitterImage} title="Twitter" />
          <MobileSingleCoinChip src={InstagramImage} title="Instagram" />
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
          <MobileSingleCoinChip icon={false} title="Whitepaper" />
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
          <MobileSingleCoinChip icon={false} title="Certik" />
          <MobileSingleCoinChip icon={false} title="Kraken" />
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
          <MobileSingleCoinChip icon={false} title="Poocoin" />
          <MobileSingleCoinChip icon={false} title="Dextool" />
          <MobileSingleCoinChip icon={false} title="Geckoterminal" />
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
            4.9
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
            4349
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
