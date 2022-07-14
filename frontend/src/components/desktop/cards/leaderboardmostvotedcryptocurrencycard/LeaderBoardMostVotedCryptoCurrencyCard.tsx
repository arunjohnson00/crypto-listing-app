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

const LeaderBoardMostVotedCryptoCurrencyCard = () => {
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
      px={2.5}
      py={2.5}
      m={1}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 24, height: 24 }}
        />
        <Typography variant="body2" color="#FFFFFF" sx={{ fontWeight: 500 }}>
          Most voted cryptocurrencies
        </Typography>
      </Stack>

      <Stack direction="column" spacing={1} alignItems="flex-start" pt={2}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              Safemoon
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ flexGrow: 0.7 }}
          >
            {" "}
            <Typography
              color="#01B48E"
              sx={{ fontWeight: 600, fontSize: ".6rem" }}
            >
              SFM
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1234 Votes
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              Safemoon
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ flexGrow: 0.7 }}
          >
            {" "}
            <Typography
              color="#01B48E"
              sx={{ fontWeight: 600, fontSize: ".6rem" }}
            >
              SFM
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1234 Votes
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              Safemoon
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ flexGrow: 0.7 }}
          >
            {" "}
            <Typography
              color="#01B48E"
              sx={{ fontWeight: 600, fontSize: ".6rem" }}
            >
              SFM
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1234 Votes
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              Safemoon
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ flexGrow: 0.7 }}
          >
            {" "}
            <Typography
              color="#01B48E"
              sx={{ fontWeight: 600, fontSize: ".6rem" }}
            >
              SFM
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1234 Votes
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              Safemoon
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ flexGrow: 0.7 }}
          >
            {" "}
            <Typography
              color="#01B48E"
              sx={{ fontWeight: 600, fontSize: ".6rem" }}
            >
              SFM
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1234 Votes
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              Safemoon
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ flexGrow: 0.7 }}
          >
            {" "}
            <Typography
              color="#01B48E"
              sx={{ fontWeight: 600, fontSize: ".6rem" }}
            >
              SFM
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1234 Votes
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              Safemoon
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ flexGrow: 0.7 }}
          >
            {" "}
            <Typography
              color="#01B48E"
              sx={{ fontWeight: 600, fontSize: ".6rem" }}
            >
              SFM
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 14, height: 14 }}
            />
            <Typography
              color="#FFFFFF"
              sx={{ fontWeight: 400, fontSize: ".6rem" }}
            >
              1234 Votes
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LeaderBoardMostVotedCryptoCurrencyCard;
