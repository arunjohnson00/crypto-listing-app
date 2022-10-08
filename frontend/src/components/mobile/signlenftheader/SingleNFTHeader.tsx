import {
  Avatar,
  Box,
  CardMedia,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

import ToolTipImage from "../../../assets/singlepagenft/tool-tip.png";
import CoinGeckoImage from "../../../assets/singlepagenft/coingecko.png";
import CoinMarketcapImage from "../../../assets/singlepagenft/coinmarketcap.png";
import BscScanImage from "../../../assets/singlepagenft/bscscan.png";
import FacebookImage from "../../../assets/singlepagenft/facebook.png";
import InstagramImage from "../../../assets/singlepagenft/instagram.png";
import RedditImage from "../../../assets/singlepagenft/reddit.png";
import TelegramImage from "../../../assets/singlepagenft/telegram.png";
import TwitterImage from "../../../assets/singlepagenft/twitter.png";

import SourcecodeImage from "../../../assets/singlepagenft/sourcecode.png";
import WhitepaperImage from "../../../assets/singlepagenft/Whitepaper.png";
import DocsImage from "../../../assets/singlepagenft/doc.png";

import ClockImage from "../../../assets/singlepagenft/clock_icon.png";
import OpenLinkImage from "../../../assets/singlepagenft/link_icon.png";
import NFTImage from "../../../assets/singlepagenft/nft_icon.png";
import VoteImage from "../../../assets/singlepagenft/vote_icon.png";

import LinkImage from "../../../assets/singlepagenft/globe.gif";

import MobileSingleCoinChip from "../coinpagechip/MobileSingleCoinChip";

const SingleNFTHeader = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="column" spacing={2.5} alignItems="flex-start">
        <Stack
          direction="column"
          spacing={2.5}
          alignItems="center"
          width={"100%"}
        >
          <Box
            sx={{
              backgroundColor: "#000000",
              borderRadius: 6,
              border: "1px solid #0b1640",
              width: "max-content",
            }}
            p={3}
          >
            <Avatar
              variant="square"
              src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000"
              alt="green iguana"
              sx={{ width: 200, height: 200 }}
            />
          </Box>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography
            sx={{ color: "#FFFFFF", fontSize: "1.4rem", fontWeight: 500 }}
          >
            Bored Ape
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              sx={{ color: "#3C4C88", fontSize: ".85rem", fontWeight: 500 }}
            >
              Listed :
            </Typography>
            <Typography
              sx={{ color: "#00F6AE", fontSize: ".85rem", fontWeight: 500 }}
            >
              36 Minutes ago
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              sx={{ color: "#3C4C88", fontSize: ".85rem", fontWeight: 500 }}
            >
              Network :
            </Typography>
            <Typography
              sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 500 }}
            >
              Binance SmartChain
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 30, height: 18, borderRadius: 0 }}
            />
          </Stack>
        </Stack>
        <Divider
          variant="fullWidth"
          flexItem
          orientation={"horizontal"}
          sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
        />
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <Stack direction="column" spacing={0}>
            <Typography
              sx={{ color: "#00F6AE", fontSize: ".85rem", fontWeight: 500 }}
            >
              Pre-Sale Mint Price
            </Typography>
            <Stack direction="row" spacing={1}>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "1.1rem", fontWeight: 500 }}
              >
                $1245.15
              </Typography>
              <Typography
                sx={{ color: "#437DFF", fontSize: "1.1rem", fontWeight: 500 }}
              >
                ETH
              </Typography>
            </Stack>
          </Stack>
          <Divider
            variant="middle"
            flexItem
            orientation={"vertical"}
            sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
          />
          <Stack direction="column" spacing={0}>
            <Typography
              sx={{ color: "#00F6AE", fontSize: ".85rem", fontWeight: 500 }}
            >
              Public Mint Price
            </Typography>
            <Stack direction="row" spacing={1}>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "1.1rem", fontWeight: 500 }}
              >
                $1245.15
              </Typography>
              <Typography
                sx={{ color: "#437DFF", fontSize: "1.1rem", fontWeight: 500 }}
              >
                ETH
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Divider
          variant="fullWidth"
          flexItem
          orientation={"horizontal"}
          sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
        />
        <Stack direction="column" spacing={0}>
          <Typography
            sx={{ color: "#435394", fontSize: ".85rem", fontWeight: 500 }}
          >
            Presale starts in
          </Typography>
          <Typography
            sx={{ color: "#CEE478", fontSize: "1rem", fontWeight: 500 }}
          >
            23 Day 15 Hour 23 Minutes 23 Seconds
          </Typography>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2}>
            <Stack
              direction="row"
              spacing={1.2}
              alignItems="flex-start"
              pt={0}
              flexGrow={1}
            >
              {" "}
              <Avatar
                alt="Remy Sharp"
                src={ClockImage}
                sx={{ width: 25, height: 25, borderRadius: 0 }}
              />
              <Stack direction="column" spacing={0}>
                <Typography
                  sx={{ color: "#00C7AF", fontSize: ".75rem", fontWeight: 500 }}
                >
                  Presale Start Date
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: ".9rem", fontWeight: 500 }}
                >
                  21 Sep 2022
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={1.2}
              alignItems="flex-start"
              pt={0}
              flexGrow={1}
            >
              {" "}
              <Avatar
                alt="Remy Sharp"
                src={ClockImage}
                sx={{ width: 25, height: 25, borderRadius: 0 }}
              />
              <Stack direction="column" spacing={0}>
                <Typography
                  sx={{ color: "#00C7AF", fontSize: ".75rem", fontWeight: 500 }}
                >
                  Presale End Date
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: ".9rem", fontWeight: 500 }}
                >
                  21 Sep 2022
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Stack
              direction="row"
              spacing={1.2}
              alignItems="flex-start"
              pt={0}
              flexGrow={1}
            >
              {" "}
              <Avatar
                alt="Remy Sharp"
                src={ClockImage}
                sx={{ width: 25, height: 25, borderRadius: 0 }}
              />
              <Stack direction="column" spacing={0}>
                <Typography
                  sx={{ color: "#00D2FF", fontSize: ".75rem", fontWeight: 500 }}
                >
                  Public Mint Start Date
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: ".9rem", fontWeight: 500 }}
                >
                  21 Sep 2022
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={1.2}
              alignItems="flex-start"
              pt={0}
              flexGrow={1}
            >
              {" "}
              <Avatar
                alt="Remy Sharp"
                src={ClockImage}
                sx={{ width: 25, height: 25, borderRadius: 0 }}
              />
              <Stack direction="column" spacing={0}>
                <Typography
                  sx={{ color: "#00D2FF", fontSize: ".75rem", fontWeight: 500 }}
                >
                  Public Mint End Date
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: ".9rem", fontWeight: 500 }}
                >
                  21 Sep 2022
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider
          variant="fullWidth"
          flexItem
          orientation={"horizontal"}
          sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
        />
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <Stack direction="row" spacing={1.2} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={NFTImage}
              sx={{ width: 25, height: 25, borderRadius: 0 }}
            />
            <Stack direction="column" spacing={0.2}>
              <Typography
                sx={{ color: "#00F6AE", fontSize: ".75rem", fontWeight: 500 }}
              >
                Total Supply
              </Typography>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 500 }}
              >
                100,00000
              </Typography>
            </Stack>
          </Stack>
          <Divider
            variant="middle"
            flexItem
            orientation={"vertical"}
            sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
          />
          <Stack direction="row" spacing={1.2} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={VoteImage}
              sx={{ width: 25, height: 25, borderRadius: 0 }}
            />
            <Stack direction="column" spacing={0.2}>
              <Typography
                sx={{ color: "#00F6AE", fontSize: ".75rem", fontWeight: 500 }}
              >
                Total Votes
              </Typography>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 500 }}
              >
                8756
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Divider
          variant="fullWidth"
          flexItem
          orientation={"horizontal"}
          sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
        />

        <Stack direction="column" spacing={1.2} px={1.5}>
          <Typography
            sx={{ color: "#435495", fontSize: "1rem", fontWeight: 500 }}
          >
            Available on
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="space-between">
            <Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 20, height: 20, borderRadius: 0 }}
              />
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 500 }}
              >
                Rarible
              </Typography>

              <Avatar
                alt="Remy Sharp"
                src={OpenLinkImage}
                sx={{ width: 15, height: 15, borderRadius: 0 }}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 20, height: 20, borderRadius: 0 }}
              />
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 500 }}
              >
                Rarible
              </Typography>

              <Avatar
                alt="Remy Sharp"
                src={OpenLinkImage}
                sx={{ width: 15, height: 15, borderRadius: 0 }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Divider
          variant="fullWidth"
          flexItem
          orientation={"horizontal"}
          sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
        />

        <Stack direction="column" spacing={3} px={1.5}>
          <Stack direction="row" spacing={1} alignItems="flex-start">
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
                <Avatar
                  src={ToolTipImage}
                  sx={{ width: 9, height: 9 }}
                ></Avatar>
              </Tooltip>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ flexWrap: "wrap" }}
            >
              <MobileSingleCoinChip
                src={LinkImage}
                title="safemoon.com"
                variant="website"
              />
              <MobileSingleCoinChip
                src={LinkImage}
                title="safemooncommunityindia.com"
                variant="website"
              />
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="flex-start">
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
                <Avatar
                  src={ToolTipImage}
                  sx={{ width: 9, height: 9 }}
                ></Avatar>
              </Tooltip>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ flexWrap: "wrap" }}
            >
              <MobileSingleCoinChip
                src={FacebookImage}
                title="Facebook"
                variant="communities"
              />
              <MobileSingleCoinChip
                src={TwitterImage}
                title="Twitter"
                variant="communities"
              />
              <MobileSingleCoinChip
                src={InstagramImage}
                title="Instagram"
                variant="communities"
              />
            </Stack>
          </Stack>
        </Stack>
        <Divider
          variant="fullWidth"
          flexItem
          orientation={"horizontal"}
          sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
        />
      </Stack>
    </Box>
  );
};

export default SingleNFTHeader;
