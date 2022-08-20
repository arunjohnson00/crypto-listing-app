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

import LinkImage from "../../../assets/singlepagenft/link.png";

import MobileSingleCoinChip from "../coinpagechip/MobileSingleCoinChip";

const SingleNFTHeader = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="column" spacing={4}>
        <Box
          sx={{
            backgroundColor: "#000000",
            borderRadius: 6,
            border: "1.5px solid #120C76",
          }}
          p={3}
        >
          <CardMedia
            component="img"
            height="350"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </Box>

        <Stack direction="column" spacing={1} px={1.5}>
          <Typography
            sx={{ color: "#FFFFFF", fontSize: "1.7rem", fontWeight: 500 }}
          >
            Bored Ape
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              sx={{ color: "#3C4C88", fontSize: "1.05rem", fontWeight: 500 }}
            >
              Listed :
            </Typography>
            <Typography
              sx={{ color: "#00F6AE", fontSize: "1.05rem", fontWeight: 500 }}
            >
              36 Minutes ago
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography
              sx={{ color: "#3C4C88", fontSize: "1.05rem", fontWeight: 500 }}
            >
              Network :
            </Typography>
            <Typography
              sx={{ color: "#FFFFFF", fontSize: "1.05rem", fontWeight: 500 }}
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
          sx={{ borderColor: "#02133C", borderBottomWidth: 2 }}
        />
        <Stack
          direction="row"
          spacing={1}
          px={1.5}
          justifyContent="space-between"
        >
          <Stack direction="column" spacing={0}>
            <Typography
              sx={{ color: "#00F6AE", fontSize: "1.3rem", fontWeight: 500 }}
            >
              Pre-Sale Mint Price
            </Typography>
            <Stack direction="row" spacing={1}>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 500 }}
              >
                $1245.15
              </Typography>
              <Typography
                sx={{ color: "#437DFF", fontSize: "1.5rem", fontWeight: 500 }}
              >
                ETH
              </Typography>
            </Stack>
          </Stack>
          <Divider
            variant="middle"
            flexItem
            orientation={"vertical"}
            sx={{ borderColor: "#02133C", borderRightWidth: 2 }}
          />
          <Stack direction="column" spacing={0}>
            <Typography
              sx={{ color: "#00F6AE", fontSize: "1.3rem", fontWeight: 500 }}
            >
              Public Mint Price
            </Typography>
            <Stack direction="row" spacing={1}>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 500 }}
              >
                $1245.15
              </Typography>
              <Typography
                sx={{ color: "#437DFF", fontSize: "1.5rem", fontWeight: 500 }}
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
          sx={{ borderColor: "#02133C", borderBottomWidth: 2 }}
        />
        <Stack direction="column" spacing={0} px={1.5}>
          <Typography
            sx={{ color: "#435394", fontSize: "1.1rem", fontWeight: 500 }}
          >
            Presale starts in
          </Typography>
          <Typography
            sx={{ color: "#CEE478", fontSize: "1.2rem", fontWeight: 500 }}
          >
            23Day 15Hour 23Minutes 23Seconds
          </Typography>
        </Stack>
        <Stack direction="column" spacing={0} px={1.5}>
          <Stack direction="row" spacing={0} justifyContent="space-between">
            <Stack direction="row" spacing={1.2} alignItems="center" pt={2}>
              {" "}
              <Avatar
                alt="Remy Sharp"
                src={ClockImage}
                sx={{ width: 40, height: 40, borderRadius: 0 }}
              />
              <Stack direction="column" spacing={0}>
                <Typography
                  sx={{ color: "#00C7AF", fontSize: ".9rem", fontWeight: 500 }}
                >
                  Presale Start Date
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 500 }}
                >
                  21 Sep 2022
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1.2} alignItems="center" pt={2}>
              {" "}
              <Avatar
                alt="Remy Sharp"
                src={ClockImage}
                sx={{ width: 40, height: 40, borderRadius: 0 }}
              />
              <Stack direction="column" spacing={0}>
                <Typography
                  sx={{ color: "#00C7AF", fontSize: ".9rem", fontWeight: 500 }}
                >
                  Presale End Date
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 500 }}
                >
                  21 Sep 2022
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={0} justifyContent="space-between">
            <Stack direction="row" spacing={1.2} alignItems="center" pt={2}>
              {" "}
              <Avatar
                alt="Remy Sharp"
                src={ClockImage}
                sx={{ width: 40, height: 40, borderRadius: 0 }}
              />
              <Stack direction="column" spacing={0}>
                <Typography
                  sx={{ color: "#00D2FF", fontSize: ".9rem", fontWeight: 500 }}
                >
                  Public Mint Start Date
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 500 }}
                >
                  21 Sep 2022
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1.2} alignItems="center" pt={2}>
              {" "}
              <Avatar
                alt="Remy Sharp"
                src={ClockImage}
                sx={{ width: 40, height: 40, borderRadius: 0 }}
              />
              <Stack direction="column" spacing={0}>
                <Typography
                  sx={{ color: "#00D2FF", fontSize: ".9rem", fontWeight: 500 }}
                >
                  Public Mint End Date
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 500 }}
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
          sx={{ borderColor: "#02133C", borderBottomWidth: 2 }}
        />
        <Stack
          direction="row"
          spacing={1}
          px={1.5}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1.2} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={NFTImage}
              sx={{ width: 40, height: 40, borderRadius: 0 }}
            />
            <Stack direction="column" spacing={0.2}>
              <Typography
                sx={{ color: "#00F6AE", fontSize: ".78rem", fontWeight: 500 }}
              >
                Total Supply
              </Typography>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 500 }}
              >
                100,00000
              </Typography>
            </Stack>
          </Stack>
          <Divider
            variant="middle"
            flexItem
            orientation={"vertical"}
            sx={{ borderColor: "#02133C", borderRightWidth: 2 }}
          />
          <Stack direction="row" spacing={1.2} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={VoteImage}
              sx={{ width: 40, height: 40, borderRadius: 0 }}
            />
            <Stack direction="column" spacing={0.2}>
              <Typography
                sx={{ color: "#00F6AE", fontSize: ".78rem", fontWeight: 500 }}
              >
                Total Votes
              </Typography>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 500 }}
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
          sx={{ borderColor: "#02133C", borderBottomWidth: 2 }}
        />

        <Stack direction="column" spacing={1} px={1.5}>
          <Typography
            sx={{ color: "#435495", fontSize: "1.1rem", fontWeight: 500 }}
          >
            Available on
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 40, height: 40, borderRadius: 0 }}
              />
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 500 }}
              >
                Rarible
              </Typography>

              <Avatar
                alt="Remy Sharp"
                src={OpenLinkImage}
                sx={{ width: 23, height: 23, borderRadius: 0 }}
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
                sx={{ width: 40, height: 40, borderRadius: 0 }}
              />
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 500 }}
              >
                Rarible
              </Typography>

              <Avatar
                alt="Remy Sharp"
                src={OpenLinkImage}
                sx={{ width: 23, height: 23, borderRadius: 0 }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Divider
          variant="fullWidth"
          flexItem
          orientation={"horizontal"}
          sx={{ borderColor: "#02133C", borderBottomWidth: 2 }}
        />

        <Stack direction="column" spacing={3} px={1.5}>
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{ flexGrow: 1, minWidth: 120, maxWidth: 120 }}
            >
              <Tooltip title="Delete">
                <Avatar
                  src={ToolTipImage}
                  sx={{ width: 14, height: 14 }}
                ></Avatar>
              </Tooltip>
              <Typography
                variant="body2"
                sx={{ color: "#23E2A0", fontWeight: 500 }}
              >
                Website
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ flexWrap: "wrap" }}
            >
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
                <Avatar
                  src={ToolTipImage}
                  sx={{ width: 14, height: 14 }}
                ></Avatar>
              </Tooltip>
              <Typography
                variant="body2"
                sx={{ color: "#23E2A0", fontWeight: 500 }}
              >
                Community
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ flexWrap: "wrap" }}
            >
              <MobileSingleCoinChip src={FacebookImage} title="Facebook" />
              <MobileSingleCoinChip src={TwitterImage} title="Twitter" />
              <MobileSingleCoinChip src={InstagramImage} title="Instagram" />
            </Stack>
          </Stack>
        </Stack>
        <Divider
          variant="fullWidth"
          flexItem
          orientation={"horizontal"}
          sx={{ borderColor: "#02133C", borderBottomWidth: 2 }}
        />
        <Stack direction="column" spacing={2} px={1.5}>
          <Typography
            sx={{ color: "#00FFE0", fontSize: "1.4rem", fontWeight: 600 }}
          >
            About Bored Ape
          </Typography>
          <Typography
            sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 400 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SingleNFTHeader;
