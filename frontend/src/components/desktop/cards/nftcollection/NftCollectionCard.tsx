import { Grid, Stack, Box, CardMedia, Typography, Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";

const NftCollectionCard = () => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  return (
    <Grid item xs={11}>
      <Stack direction="column">
        <Box sx={{ flexGrow: 1, background: "#0B1643" }} px={2} py={2}>
          <CardMedia
            component="img"
            height="143"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </Box>
        <Box
          sx={{ flexGrow: 1, background: "#282760", height: "73px" }}
          px={2}
          py={2}
        >
          <Typography
            variant="body2"
            sx={{ color: "white", fontSize: "0.778rem" }}
          >
            Bored Ape Yatch Club
          </Typography>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
            pt={2}
          >
            <Stack direction="row" spacing={0.8} sx={{ alignItems: "center" }}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                variant="square"
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
              >
                N
              </Avatar>
              <Typography
                variant="caption"
                sx={{ color: "white", fontSize: "0.698rem" }}
              >
                0.07 ETH
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
    </Grid>
  );
};

export default NftCollectionCard;