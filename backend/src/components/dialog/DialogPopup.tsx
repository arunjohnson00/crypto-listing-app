import { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Stack, Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogPopup = ({ handleClose, handleClickOpen, open, id, data }: any) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const filteredData = data?.filter((item: any) => item?.id === id);
  const location = useLocation();

  const mapped = Object.entries(filteredData[0]).map(
    ([key, value]) =>
      key !== "thumb_icon" &&
      key !== "id" &&
      key !== "slug" &&
      key !== "deleted_at" &&
      key !== "updated_at" &&
      key !== "email_verified" &&
      key !== "email_verified_at" &&
      key !== "receive_newsletter" &&
      key !== "i_agree" &&
      key !== "verify_token" &&
      key !== "verify_token_created_at" &&
      key !== "verify_token_updated_at" &&
      key !== "reset_token" &&
      key !== "reset_token_created_at" &&
      key !== "reset_token_updated_at" &&
      key !== "avatar" &&
      key !== "network_icon" &&
      key !== "about" &&
      key !== "approved_at" &&
      key !== "description" &&
      //   key !== "pre_sale_start_date" &&
      //   key !== "pre_sale_start_time" &&
      //   key !== "pre_sale_end_date" &&
      //   key !== "pre_sale_end_time" &&
      //   key !== "public_mint_start_date" &&
      //   key !== "public_mint_start_time" &&
      //   key !== "public_mint_end_date" &&
      //   key !== "public_mint_end_time" &&
      key !== "image" &&
      key !== "i_declare" &&
      key !== "is_launch" &&
      key !== "has_many_audits" &&
      key !== "has_many_charts" &&
      key !== "has_many_chats" &&
      key !== "has_many_communitys" &&
      key !== "has_many_exchanges" &&
      key !== "has_many_networks" &&
      key !== "has_many_socials" &&
      key !== "symbol" &&
      key !== "is_token_or_coin" &&
      key !== "token_listed_link" &&
      key !== "logo" &&
      key !== "crypto_sector_cat_id" &&
      key !== "official_email" &&
      key !== "details" &&
      key !== "website_url" &&
      key !== "telegram_link" &&
      key !== "twitter_link" &&
      key !== "reddit_link" &&
      key !== "facebook_link" &&
      key !== "instagram_link" &&
      key !== "youtube_link" &&
      key !== "tiktok_link" &&
      key !== "chart_link" &&
      key !== "audit_report_link" &&
      key !== "docs_link" &&
      key !== "created_from" &&
      key !== "admin_id" &&
      key !== "promote_amount" &&
      key !== "user_id" &&
      key !== "icon" &&
      key !== "network_id" &&
      key !== "todays_vote" &&
      key !== "impressions" &&
      key !== "circulating_supply" &&
      key !== "market_cap_url" &&
      key !== "medium_link" &&
      key !== "whitepaper_link" &&
      key !== "discord_url" &&
      key !== "github_link" &&
      key !== "explorer_link" &&
      key !== "market_cap" &&
      key !== "max_supply" &&
      key !== "presale_date" &&
      key !== "date_created" &&
      key !== "price" &&
      key !== "presale_address" &&
      key !== "schedule_date" && (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          pb={0.5}
        >
          <Box>
            <span
              style={{
                color: "#33313E",
                textTransform: "capitalize",
                fontWeight: 500,
              }}
            >
              {location?.pathname?.replace(/[^a-zA-Z ]/g, " ")}{" "}
              {key.replace(/[^a-zA-Z ]/g, " ")}
            </span>
            <span style={{ color: "#A0A3C8" }}>
              {" "}
              :{" "}
              {parseInt(filteredData[0]["status"]) === 1 &&
              parseInt(`${value}`) === 1 ? (
                <span style={{ color: "#3E9E19", fontWeight: 600 }}>
                  Approved/ Yes
                </span>
              ) : parseInt(filteredData[0]["status"]) === 2 &&
                parseInt(`${value}`) === 2 ? (
                <span style={{ color: "#D83235", fontWeight: 600 }}>
                  Processing/No
                </span>
              ) : parseInt(filteredData[0]["status"]) === 3 &&
                parseInt(`${value}`) === 3 ? (
                <span style={{ color: "#874AAF", fontWeight: 600 }}>
                  Suspended /Blocked
                </span>
              ) : (parseInt(filteredData[0]["is_presale"]) === 0 &&
                  parseInt(`${value}`) ===
                    parseInt(filteredData[0]["is_presale"])) ||
                (parseInt(filteredData[0]["is_launched"]) === 0 &&
                  parseInt(`${value}`) ===
                    parseInt(filteredData[0]["is_launched"])) ? (
                <span style={{ color: "#D83235", fontWeight: 600 }}>No</span>
              ) : filteredData[0]["created_at"] &&
                value === filteredData[0]["created_at"] ? (
                <span style={{ color: "#A8B335", fontWeight: 600 }}>
                  {timeAgo.format(new Date(`${value}`))}
                </span>
              ) : (
                value
              )}
            </span>
          </Box>
        </Stack>
      )
  );

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "80%",
            maxHeight: 435,
            backgroundColor: "#060030",
            color: "#D2CFEA",
            padding: 1,
          },
        }}
        maxWidth="md"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <DialogTitle></DialogTitle>

          <Stack
            direction="row"
            alignItems="center"
            onClick={handleClose}
            sx={{ cursor: "pointer" }}
          >
            <Typography sx={{ color: "#FFFFF5" }}>Close</Typography>
            <IconButton aria-label="delete">
              <CloseIcon sx={{ color: "#FFFFF5" }} />
            </IconButton>
          </Stack>
        </Stack>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {mapped}
          </DialogContentText>

          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            spacing={2}
            py={4}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{ background: "#3E9E19", borderRadius: 6, paddingX: 3 }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#FFFFF5",
                  textTransform: "capitalize",
                }}
                to={`${location.pathname}/edit/${id}`}
              >
                Edit
              </Link>
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{ background: "#5893FB", borderRadius: 6, paddingX: 3 }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "#FFFFF5",
                  textTransform: "capitalize",
                }}
                href={`${
                  filteredData[0]?.url
                    ? filteredData[0]?.url
                    : filteredData[0]?.v_url && filteredData[0]?.v_url
                }`}
                target="_blank"
                rel="noreferrer"
              >
                Got to Page
              </a>
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{ background: "#0083FF", borderRadius: 6, paddingX: 3 }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#FFFFF5",
                  textTransform: "capitalize",
                }}
                to={`${location.pathname}/edit/${id}`}
              >
                {" "}
                Visit Website
              </Link>
            </Button>
          </Stack>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default DialogPopup;
