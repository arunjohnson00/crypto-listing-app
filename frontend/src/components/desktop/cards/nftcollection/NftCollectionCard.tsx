import { Grid, Stack, Box, CardMedia, Typography, Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import { defaultColor } from "../../../../common/common";

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
    <Box mr={1}>
      <Stack direction="column">
        <Box
          sx={{
            flexGrow: 1,
            background: "#0B1643",
            borderRadius: "16px 16px 0px 0px",
          }}
          px={2}
          py={2}
        >
          <CardMedia
            component="img"
            height="143"
            src={`${serverAPIUrl}public/uploads/nft_listing_image/${data?.image}`}
            alt="green iguana"
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            background: "#09082d",
            height: "73px",
            borderRadius: " 0px 0px 16px 16px ",
          }}
          px={2}
          py={2}
        >
          <Typography
            variant="body2"
            sx={{ color: "#FFFFFF", fontSize: "0.878rem", fontWeight: 600 }}
          >
            {data && data?.title}
          </Typography>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
            pt={2}
          >
            <Stack direction="row" spacing={0.8} sx={{ alignItems: "center" }}>
              {/* <Avatar
                sx={{ width: 24, height: 24 }}
                variant="square"
                src={`${serverAPIUrl}public/uploads/nft_currency_icons/${data?.currency_icon}`}
              /> */}

              {data && data?.currency_icon === null ? (
                <Avatar
                  variant="square"
                  sx={{
                    bgcolor: defaultColor[index],
                    width: 24,
                    height: 24,
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
                  sx={{ width: 24, height: 24 }}
                />
              )}

              <Typography
                variant="caption"
                sx={{ color: "#1dffc0", fontSize: "0.698rem" }}
              >
                {data && data?.public_mint_price}{" "}
                <span style={{ color: "#ffffff" }}>{data && data?.symbol}</span>
              </Typography>
            </Stack>

            <StyledRating
              name="customized-color"
              defaultValue={2}
              // getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              max={1}
              size="small"
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default NftCollectionCard;
