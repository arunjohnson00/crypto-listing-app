import { forwardRef } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Stack,
  Typography,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import dateFormat, { masks } from "dateformat";
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
  const location = useLocation();
  TimeAgo.addLocale(en);
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  const timeAgo = new TimeAgo("en-US");
  const filteredData = data?.filter((item: any) => item?.id === id);

  const mapped = Object.entries(filteredData[0]).map(
    ([key, value]) =>
      key !== "thumb_icon" &&
      key !== "name" &&
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
      // key !== "explorer_link" &&
      // key !== "is_presale" &&
      key !== "is_launched" &&
      key !== "status" &&
      key !== "market_cap" &&
      key !== "max_supply" &&
      key !== "presale_date" &&
      key !== "date_created" &&
      key !== "price" &&
      key !== "presale_address" &&
      key !== "schedule_date" &&
      key !== "docs_url" && (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          pb={0.5}
          key={key}
        >
          <Box
            sx={{
              minWidth: 350,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" spacing={4} alignItems="center">
              <span
                style={{
                  color: "#433C6F",
                  textTransform: "capitalize",
                  fontWeight: 600,
                  fontSize: ".8rem",
                  minWidth: 150,
                  textAlign: "right",
                }}
              >
                {/* {location?.pathname?.replace(/[^a-zA-Z ]/g, " ")}{" "} */}
                {key.replace(/[^a-zA-Z ]/g, " ")}
                {" :"}
              </span>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <span
                  style={{ color: "#A0A3C8", minWidth: 150, maxWidth: 150 }}
                >
                  {
                    filteredData[0]["created_at"] &&
                      value === filteredData[0]["created_at"] && (
                        <span
                          style={{
                            color: "#E0DFE7",
                            fontWeight: 600,
                            fontSize: ".85rem",
                          }}
                        >
                          {/* {timeAgo.format(new Date(`${value}`))} */}
                          {dateFormat(
                            filteredData[0]["created_at"],
                            "dd mmmm yyyy"
                          )}
                        </span>
                      )
                    // {: (
                    //   <span>{`${value}`}</span>
                    // )}
                  }
                  {(filteredData[0]["is_presale"] &&
                    value === filteredData[0]["is_presale"] &&
                    parseInt(filteredData[0]["is_presale"]) === 1) ||
                  parseInt(`${value}`) === 1 ? (
                    <span
                      style={{
                        color: "#E0DFE7",
                        fontWeight: 600,
                        fontSize: ".85rem",
                      }}
                    >
                      Yes
                    </span>
                  ) : (
                    value === filteredData[0]["is_presale"] &&
                    parseInt(filteredData[0]["is_presale"]) !== 1 &&
                    parseInt(`${value}`) !== 1 && (
                      <span
                        style={{
                          color: "#E0DFE7",
                          fontWeight: 600,
                          fontSize: ".85rem",
                        }}
                      >
                        No
                      </span>
                    )
                  )}

                  {filteredData[0]["explorer_link"] &&
                    value === filteredData[0]["explorer_link"] && (
                      <span
                        style={{
                          color: "#0083FF",
                          fontWeight: 500,
                          fontSize: ".55rem",
                        }}
                      >
                        {filteredData[0]["explorer_link"]}
                      </span>
                    )}
                </span>
              </Stack>
            </Stack>
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
            maxHeight: 535,
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
          {location?.pathname?.replace(/[^a-zA-Z ]/g, "") === "coins" && (
            <Stack
              direction="column"
              spacing={1.3}
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                alt="Remy Sharp"
                src={`${serverAPIUrl}public/uploads/coin_logo/${filteredData[0]?.logo}`}
                sx={{ width: 65, height: 65 }}
              />
              <Stack
                direction="column"
                spacing={0}
                alignItems="center"
                justifyContent="center"
                pb={5}
              >
                <Typography variant="h5" sx={{ textAlign: "left" }}>
                  {filteredData[0]?.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left", color: "#84d5a3" }}
                >
                  {`(${filteredData[0]?.name})`}
                </Typography>
              </Stack>
            </Stack>
          )}
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
                Got to{" "}
                {location?.pathname?.replace(/[^a-zA-Z ]/g, "") === "coins"
                  ? "Coin"
                  : "Page"}
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
