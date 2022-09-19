import { useEffect, useState, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@mui/material/Drawer";
import { Avatar, Button, Popover, Stack, Typography, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { StyledInputRoot, StyledInputPopUpRoot } from "./style";
import { StyledInputElement } from "./style";
import { InputAdornment } from "./style";
import { IconButton } from "./style";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TrendingIcon from "../../../assets/search/trending_icon.svg";
import { topbarSearchRequest } from "../../../store/action";
import MobileRecentSearchCard from "../cards/recentsearchcard/MobileRecentSearchCard";

const CustomInputPopup = forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { components, ...other } = props;
  return (
    <InputUnstyled
      components={{
        Root: StyledInputPopUpRoot,
        Input: StyledInputElement,
        ...components,
      }}
      {...other}
      ref={ref}
      style={{
        color: "#FFFFFF",
      }}
    />
  );
});
const serverAPIUrl = process.env.REACT_APP_API_URL;
const responsiveRecentSearch = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3.5,
  },
};
const SearchDrawer = ({ openDrawer, toggleDrawer }: any) => {
  const dispatch: any = useDispatch();
  const [values, setValues] = useState<any>();
  const [expand, setExpand] = useState<any>({
    coin: false,
    nft: false,
  });
  const trendingCoinList = useSelector((data: any) => {
    return data?.homeReducer?.trending_coin_list?.data;
  });
  const recentSearchResult = useSelector((data: any) => {
    return data?.commonReducer?.recent_search?.data;
  });

  const [searchResult, setSearchResult] = useState<any>();

  const handleChange = (event: any) => {
    setValues(event.target.value);
  };

  const coinExpandHandler = () => {
    setExpand({ ...expand, coin: !expand?.coin });
  };

  const nftExpandHandler = () => {
    setExpand({ ...expand, nft: !expand?.nft });
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      setSearchResult(res?.data?.data);
    };
    const errorHandler = (err: any) => {};
    dispatch(topbarSearchRequest(values, successHandler, errorHandler));
  }, [dispatch, values, setValues]);
  const newArray: any = JSON.parse(
    localStorage.getItem("recent_search") as any
  );

  const saveSearchHandler = (slug: any) => {
    // Put the object into storage
    if (
      (localStorage.getItem("recent_search") as any) === null ||
      (localStorage.getItem("recent_search") as any) === undefined ||
      localStorage.hasOwnProperty("recent_search") === false
    ) {
      localStorage.setItem("recent_search", JSON.stringify([slug]));
    } else {
      newArray.unshift(slug);
      localStorage.setItem(
        "recent_search",
        JSON.stringify(Array.from(new Set([...newArray])))
      );
    }
  };

  return (
    <Drawer anchor={"top"} open={openDrawer?.top} onClose={toggleDrawer}>
      <Stack
        direction="column"
        spacing={1}
        sx={{ backgroundColor: "#000000", color: "#6E6E6E" }}
        pt={2}
        px={2}
        height="100vh"
      >
        <CustomInputPopup
          id="outlined-adornment-password"
          type="text"
          value={values}
          //autoFocus={true}
          placeholder="Search coin, pair, contract address or exchange"
          onChange={(e: any) => handleChange(e)}
          style={{
            height: 34,
            color: "#FFFFFF",
          }}
          startAdornment={
            <InputAdornment>
              <IconButton edge="end">
                {<SearchIcon style={{ color: "#6252E7" }} sx={{ margin: 0 }} />}
              </IconButton>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment>
              <IconButton edge="end" onClick={toggleDrawer}>
                {
                  <CancelIcon
                    style={{ color: "#ffffffad" }}
                    sx={{ margin: 0, fontSize: "1.1rem" }}
                  />
                }
              </IconButton>
            </InputAdornment>
          }
        />

        {searchResult &&
        (searchResult?.COINS?.length !== 0 ||
          searchResult?.NFT?.length !== 0) &&
        values?.length !== 0 ? (
          <Stack
            direction="column"
            spacing={2}
            pt={0}
            sx={{ height: 500, overflowY: "scroll", background: "#000000" }}
            px={1}
          >
            <Stack
              direction="column"
              spacing={2}
              pt={0}
              sx={{ background: "#000000" }}
            >
              <Stack
                direction="row"
                spacing={0.5}
                alignItems="flex-start"
                sx={{
                  position: "sticky",
                  top: 0,
                  background: "#000000",
                  zIndex: 99,
                  py: 1.5,
                }}
              >
                {expand?.coin === false ? (
                  <Typography sx={{ fontSize: ".78rem", fontWeight: 600 }}>
                    COINS
                  </Typography>
                ) : (
                  <Button
                    startIcon={
                      <ArrowBackIosIcon sx={{ width: 14, height: 14 }} />
                    }
                    variant="text"
                    sx={{
                      fontSize: ".7rem",
                      padding: 0,
                      minWidth: 0,
                      cursor: "pointer",
                    }}
                    onClick={coinExpandHandler}
                  >
                    Back
                  </Button>
                )}
              </Stack>
              {searchResult?.COINS?.slice(
                0,
                expand?.coin === false ? 4 : searchResult?.COINS?.length
              ).map((item: any, index: number) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={0.5}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack
                    key={index}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Avatar
                      alt={item?.coin_name}
                      src={`${serverAPIUrl}public/uploads/coin_logo/${item?.coin_logo}`}
                      sx={{ width: 20, height: 20 }}
                    />
                    <Link
                      to={{
                        pathname: `/coin/${item?.coin_slug}`,
                      }}
                      onClick={() => saveSearchHandler(item?.coin_slug)}
                      target="_blank"
                      rel="noopener noreferrer"
                      state={{ coin_id: item?.coin_id }}
                      style={{ textDecoration: "none", color: "#FFFFFF" }}
                    >
                      <Typography sx={{ fontSize: ".8rem", fontWeight: 600 }}>
                        {item?.coin_name}
                      </Typography>
                    </Link>
                    <Typography
                      sx={{
                        fontSize: ".7rem",
                        color: "#767676",
                        fontWeight: 500,
                      }}
                    >
                      {item?.coin_symbol}
                    </Typography>
                  </Stack>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    {item?.ranking}
                  </Typography>
                </Stack>
              ))}
              <Button
                variant="text"
                sx={{ fontSize: ".7rem" }}
                onClick={coinExpandHandler}
              >
                {expand?.coin === false ? "See all result" : "Hide result"}
                {`(${searchResult?.COINS?.length})`}
              </Button>
            </Stack>
            <Stack direction="column" spacing={2} pt={0}>
              <Stack
                direction="row"
                spacing={0.5}
                alignItems="flex-start"
                sx={{
                  position: "sticky",
                  top: 0,
                  background: "#000000",
                  zIndex: 99,
                  py: 1.5,
                }}
              >
                {expand?.nft === false ? (
                  <Typography sx={{ fontSize: ".78rem", fontWeight: 600 }}>
                    NFT
                  </Typography>
                ) : (
                  <Button
                    startIcon={
                      <ArrowBackIosIcon sx={{ width: 14, height: 14 }} />
                    }
                    variant="text"
                    sx={{
                      fontSize: ".7rem",
                      padding: 0,
                      minWidth: 0,
                      cursor: "pointer",
                    }}
                    onClick={nftExpandHandler}
                  >
                    Back
                  </Button>
                )}
              </Stack>
              {searchResult?.NFT?.slice(
                0,
                expand?.nft === false ? 4 : searchResult?.NFT?.length
              ).map((item: any, index: number) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={0.5}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack
                    key={index}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Avatar
                      alt="Trending"
                      src={`${serverAPIUrl}public/uploads/nft_listing_image/${item?.nft_logo}`}
                      sx={{ width: 16, height: 16 }}
                    />
                    <Link
                      to={{
                        pathname: `/coin/${item?.nft_name
                          ?.replace(/ /g, "")
                          .toLowerCase()}/${item?.nft_id}`,
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      state={{ coin_id: item?.nft_id }}
                      style={{ textDecoration: "none", color: "#FFFFFF" }}
                    >
                      <Typography sx={{ fontSize: ".8rem", fontWeight: 600 }}>
                        {item?.nft_name}
                      </Typography>
                    </Link>
                    <Typography
                      sx={{
                        fontSize: ".7rem",
                        color: "#767676",
                        fontWeight: 500,
                      }}
                    >
                      {/* {item?.coin_symbol} */}
                    </Typography>
                  </Stack>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    {/* {item?.ranking} */}
                  </Typography>
                </Stack>
              ))}
              <Button
                variant="text"
                sx={{ fontSize: ".7rem" }}
                onClick={nftExpandHandler}
              >
                {expand?.nft === false ? "See all result" : "Hide result"}{" "}
                {`(${searchResult?.NFT?.length})`}
              </Button>
            </Stack>
          </Stack>
        ) : (
          <Stack
            direction="column"
            spacing={1}
            sx={{ height: 500, overflowY: "scroll", pl: 0 }}
          >
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              pt={3}
              pb={1}
            >
              <Typography sx={{ fontSize: ".78rem", fontWeight: 600 }}>
                Trending
              </Typography>
              <Avatar
                alt="Trending"
                src={TrendingIcon}
                sx={{ width: 14, height: 14 }}
              />
            </Stack>
            {trendingCoinList &&
              (values?.length === 0 || trendingCoinList?.length !== 0) &&
              trendingCoinList &&
              trendingCoinList?.slice(0, 6).map((item: any, index: number) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={0.5}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack
                    key={index}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Avatar
                      alt="Trending"
                      src={`${serverAPIUrl}public/uploads/coin_logo/${item?.logo}`}
                      sx={{ width: 16, height: 16 }}
                    />
                    <Link
                      to={{
                        pathname: `/coin/${item?.slug}`,
                      }}
                      onClick={() => saveSearchHandler(item?.slug)}
                      target="_blank"
                      rel="noopener noreferrer"
                      state={{ coin_id: item?.id }}
                      style={{ textDecoration: "none", color: "#FFFFFF" }}
                    >
                      <Typography sx={{ fontSize: ".8rem", fontWeight: 600 }}>
                        {item?.name}
                      </Typography>
                    </Link>
                    <Typography
                      sx={{
                        fontSize: ".7rem",
                        color: "#767676",
                        fontWeight: 500,
                      }}
                    >
                      {item?.symbol}
                    </Typography>
                  </Stack>
                  <Typography sx={{ fontSize: ".7rem" }}>
                    {item?.ranking}
                  </Typography>
                </Stack>
              ))}

            <Stack
              direction="column"
              spacing={0.5}
              alignItems="flex-start"
              pt={4}
            >
              <Typography sx={{ fontSize: ".78rem", fontWeight: 600 }}>
                Recent Searches
              </Typography>
              {/* <Avatar
          alt="Trending"
          src={TrendingIcon}
          sx={{ width: 14, height: 14 }}
        /> */}
            </Stack>
            <Box pt={1}>
              {recentSearchResult && (
                <Carousel
                  responsive={responsiveRecentSearch}
                  infinite={true}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  arrows={false}
                  autoPlay={false}
                  draggable={true}
                  swipeable={true}
                  minimumTouchDrag={10}
                  keyBoardControl={true}
                  shouldResetAutoplay={false}
                >
                  {recentSearchResult &&
                    recentSearchResult
                      ?.slice(0, 10)
                      .map((item: any, index: number) => (
                        <Box key={index}>
                          <MobileRecentSearchCard
                            item={item}
                            index={index}
                            saveSearchHandler={saveSearchHandler}
                          />
                        </Box>
                      ))}
                </Carousel>
              )}
            </Box>
          </Stack>
        )}
      </Stack>
    </Drawer>
  );
};
export default SearchDrawer;
