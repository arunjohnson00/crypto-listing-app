import {
  Grid,
  Stack,
  Box,
  CardMedia,
  Typography,
  Avatar,
  Divider,
  Popover,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";
import { defaultColor } from "../../../../common/common";
import { Link } from "react-router-dom";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileNftCollectionCard = ({ data, index }: any) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  return (
    <Box
      sx={{
        backgroundColor: "#01061A",
        border: "2px solid #090F2F",
        borderTopLeftRadius: { xs: 20, sm: 20, md: 20 },
        borderTopRightRadius: { xs: 20, sm: 20, md: 20 },
        borderBottomLeftRadius: { xs: 20, sm: 20, md: 20 },
        borderBottomRightRadius: { xs: 20, sm: 20, md: 20 },
        width: { xs: "100%", sm: "100%", md: "auto" },
      }}
    >
      <Link
        to={{
          pathname: `/nft/${data?.slug}`,
        }}
        state={{ coin_id: data?.id }}
        style={{ textDecoration: "none", color: "#FFFFFF" }}
      >
        <Stack direction="column" alignItems="center" spacing={1.5}>
          <Avatar
            src={`${serverAPIUrl}public/uploads/nft_listing_image/${data?.image}`}
            alt={data && data?.title}
            variant="square"
            sx={{
              borderTopLeftRadius: { xs: 20, sm: 20, md: 20 },
              borderTopRightRadius: { xs: 20, sm: 20, md: 20 },
              width: "100%",
              height: "100px",
            }}
          />

          <Typography
            variant="body2"
            sx={{
              color: "#FFFFFF",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            {data && data?.title}
          </Typography>
          <Stack
            direction="column"
            alignItems="center"
            width="100%"
            spacing={1}
            pb={2}
          >
            <Stack
              direction="column"
              alignItems="center"
              spacing={0}
              width="-webkit-fill-available"
              px={3}
            >
              <Divider
                variant="middle"
                flexItem
                orientation="horizontal"
                sx={{ borderColor: "#0b1640", borderBottomWidth: 1, mb: 1 }}
              />
              <Typography variant="caption" sx={{ color: "#FFFFFF" }}>
                Price
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "0.9rem",
                  fontWeight: "bolder",
                  backgroundImage:
                    "linear-gradient(to right, #A828B9, #AF0A47)",
                  filter: "drop-shadow(0 20px 30px #28d8ff33)",

                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  WebkitBoxDecorationBreak: "clone",
                }}
              >
                {data && data?.public_mint_price} {data && data?.symbol}
              </Typography>
              <Divider
                variant="middle"
                flexItem
                orientation="horizontal"
                sx={{ borderColor: "#0b1640", borderBottomWidth: 1, mt: 1 }}
              />
            </Stack>
            <div>
              <Typography
                variant="caption"
                sx={{ color: "#FFFFFF" }}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                {data && data?.network_name?.length >= 16
                  ? data?.network_name?.slice(0, 14) + "..."
                  : data?.network_name}
              </Typography>
              <Popover
                id="mouse-over-popover"
                PaperProps={{
                  style: {
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    borderRadius: 7,
                    border: "1px solid #091851",
                  },
                }}
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ px: 1.2, py: 0.5, fontSize: ".8rem" }}>
                  {data?.network_name}
                </Typography>
              </Popover>
            </div>
            {data && data?.network_icon === null ? (
              <Avatar
                variant="square"
                sx={{
                  bgcolor: defaultColor[index],
                  width: 22,
                  height: 22,
                }}
              >
                <Typography sx={{ fontSize: ".6rem" }}>
                  {data && data?.title[0]}
                </Typography>
              </Avatar>
            ) : (
              <Avatar
                variant="square"
                alt={data && data?.name}
                src={`${serverAPIUrl}public/uploads/network_icons/${
                  data?.network_icon !== undefined
                    ? data?.network_icon
                    : data?.network_logo !== undefined && data?.network_logo
                }`}
                //src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 22, height: 22 }}
              />
            )}
          </Stack>
        </Stack>
      </Link>
    </Box>
  );
};

export default MobileNftCollectionCard;
