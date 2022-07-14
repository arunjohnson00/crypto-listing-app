import { useState } from "react";
import {
  Grid,
  Stack,
  Box,
  Avatar,
  Typography,
  Divider,
  Chip,
  Button,
  Tooltip,
  IconButton,
  CircularProgress,
  Rating,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import PresaleCardChip from "../../presalecardchip/PresaleCardChip";
import ToolTipImage from "../../../../assets/singlepagecoin/tool-tip.png";
import CoinGeckoImage from "../../../../assets/singlepagecoin/coingecko.png";
import CoinMarketcapImage from "../../../../assets/singlepagecoin/coinmarketcap.png";
import BscScanImage from "../../../../assets/singlepagecoin/bscscan.png";
import FacebookImage from "../../../../assets/singlepagecoin/facebook.png";
import InstagramImage from "../../../../assets/singlepagecoin/instagram.png";
import RedditImage from "../../../../assets/singlepagecoin/reddit.png";
import TelegramImage from "../../../../assets/singlepagecoin/telegram.png";
import TwitterImage from "../../../../assets/singlepagecoin/twitter.png";
import SourcecodeImage from "../../../../assets/singlepagecoin/sourcecode.png";
import WhitepaperImage from "../../../../assets/singlepagecoin/Whitepaper.png";
import DocsImage from "../../../../assets/singlepagecoin/doc.png";
import LinkImage from "../../../../assets/singlepagecoin/link.png";
import VoteCard from "../votecard/VoteCard";

const LeaderBoardMostVotedCard = () => {
  const [copyValue, setCopyValue] = useState(
    "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5"
  );
  const [copied, setCopied] = useState(false);
  return (
    <Box
      sx={{
        borderRadius: 8,
        backgroundColor: "#020011",
        border: "1px solid #151345",
      }}
      px={2}
      py={2}
      m={1}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{ alignItems: "center" }}
        width="100%"
      >
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 60, height: 60 }}
        />
        <Stack
          direction="column"
          spacing={0}
          sx={{ alignItems: "center" }}
          width="100%"
        >
          <Typography variant="h6" sx={{ color: "#FFFFFF", fontWeight: 500 }}>
            Top 3 Most Voted coin in
          </Typography>
          <Typography
            sx={{ color: "#918DEF", fontWeight: 500, fontSize: "1.1rem" }}
          >
            In Last 24 Hours
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={0}
        sx={{ alignItems: "center", justifyContent: "center" }}
        width="100%"
        pt={9}
      >
        <VoteCard position="2" variant="medium" />{" "}
        <VoteCard position="1" variant="large" />{" "}
        <VoteCard position="3" variant="medium" />
      </Stack>
    </Box>
  );
};

export default LeaderBoardMostVotedCard;
