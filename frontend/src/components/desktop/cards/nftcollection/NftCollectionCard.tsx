import {
  Grid,
  Stack,
  Box,
  CardMedia,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import { defaultColor } from "../../../../common/common";
import { Link } from "react-router-dom";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const NftCollectionCard = ({ data, index }: any) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  return (
    <Link
      to={{
        pathname: `/nft/${data?.slug}`,
      }}
      state={{ coin_id: data?.id }}
      style={{ textDecoration: "none", color: "#FFFFFF" }}
    >
      <Box
        mr={2}
        sx={{
          backgroundColor: "#01061A",
          border: "2px solid #090F2F",
          borderTopLeftRadius: 52,
          borderTopRightRadius: 52,
          borderBottomLeftRadius: 52,
          borderBottomRightRadius: 52,
        }}
      >
        <Stack direction="column" alignItems="center" spacing={1.5}>
          <Avatar
            src={`${serverAPIUrl}public/uploads/nft_listing_image/${data?.image}`}
            alt={data && data?.title}
            variant="square"
            sx={{
              borderTopLeftRadius: 52,
              borderTopRightRadius: 52,
              width: "100%",
              height: "250px",
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

            <Typography variant="caption" sx={{ color: "#FFFFFF" }}>
              {data && data?.currency_name}
            </Typography>
            {data && data?.currency_icon === null ? (
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
                src={`${serverAPIUrl}public/uploads/nft_currency_icons/${data?.currency_icon}`}
                //src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 22, height: 22 }}
              />
            )}
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default NftCollectionCard;
