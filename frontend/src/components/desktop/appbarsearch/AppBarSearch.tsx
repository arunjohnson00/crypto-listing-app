import { useEffect, useState, forwardRef, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { StyledInputRoot, StyledInputPopUpRoot } from "./style";
import { StyledInputElement } from "./style";
import { InputAdornment } from "./style";
import { IconButton } from "./style";
import {
  Avatar,
  Backdrop,
  Button,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TrendingIcon from "../../../assets/search/trending_icon.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  recentSearchRequest,
  topbarSearchRequest,
  trendingCoinListRequest,
} from "../../../store/action";
import RecentSearchCard from "../cards/recentsearchcard/RecentSearchCard";

const CustomInput = forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { components, ...other } = props;
  return (
    <InputUnstyled
      components={{
        Root: StyledInputRoot,
        Input: StyledInputElement,
        ...components,
      }}
      {...other}
      ref={ref}
      style={{
        color: "#FFFFFF",
        cursor: "text",
      }}
    />
  );
});

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
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
const serverAPIUrl = process.env.REACT_APP_API_URL;
const AppBarSearch = () => {
  const dispatch: any = useDispatch();
  const selectInputRef = useRef<any>("");
  const [values, setValues] = useState<any>();
  const [expand, setExpand] = useState<any>({
    coin: false,
    nft: false,
  });

  const recentSearchResult = useSelector((data: any) => {
    return data?.commonReducer?.recent_search?.data;
  });
  const trendingCoinList = useSelector((data: any) => {
    return data?.homeReducer?.trending_coin_list?.data;
  });
  const [searchResult, setSearchResult] = useState<any>();
  const newArray: any = JSON.parse(
    localStorage.getItem("recent_search") as any
  );

  const formData: any = new FormData();
  formData.append("q", newArray?.toString());
  const handleChange = (event: any) => {
    setValues(event.target.value);
  };
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);

    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(recentSearchRequest(formData, successHandler, errorHandler));
  };

  const handleClose = () => {
    setAnchorEl(null);
    setValues("");
  };

  const coinExpandHandler = () => {
    setExpand({ ...expand, coin: !expand?.coin });
  };

  const nftExpandHandler = () => {
    setExpand({ ...expand, nft: !expand?.nft });
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    const successHandler = (res: any) => {
      setSearchResult(res?.data?.data);
    };
    const errorHandler = (err: any) => {};
    values !== undefined &&
      dispatch(topbarSearchRequest(values, successHandler, errorHandler));
  }, [dispatch, values, setValues]);

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
    <Box sx={{ display: "flex", "& > * + *": { ml: 0 } }}>
      <CustomInput
        id="outlined-adornment-password"
        type="text"
        value={values}
        autoFocus={false}
        placeholder="Search"
        onClick={handleClick}
        disabled={open}
        readOnly
        style={{ height: 34, color: "#FFFFFF", cursor: "text" }}
        startAdornment={
          <InputAdornment>
            <IconButton edge="end">
              {
                <SearchIcon
                  style={{ color: "#6252E7", fontSize: "1.4rem" }}
                  sx={{ margin: 0 }}
                />
              }
            </IconButton>
          </InputAdornment>
        }
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 0,
            horizontal: -110,
          }}
          PaperProps={{
            style: {
              width: 380,
              backgroundColor: "#000000",
              color: "#9b9b9b",
              border: "1px solid #6252E8",
              borderRadius: 10,
              padding: 20,
            },
          }}
          sx={{ borderRadius: 10 }}
        >
          <CustomInputPopup
            id="search"
            type="text"
            value={values}
            autoFocus={true}
            ref={selectInputRef}
            placeholder="Search coin, pair, contract address or exchange"
            onChange={(e: any) => handleChange(e)}
            style={{
              height: 34,
              color: "#FFFFFF",
            }}
            startAdornment={
              <InputAdornment>
                <IconButton edge="end">
                  {
                    <SearchIcon
                      style={{ color: "#6252E7" }}
                      sx={{ margin: 0 }}
                    />
                  }
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment>
                <IconButton edge="end" onClick={handleClose}>
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
          <Stack direction="column" spacing={2}>
            {searchResult &&
            (searchResult?.COINS?.length !== 0 ||
              searchResult?.NFT?.length !== 0) &&
            values?.length !== 0 ? (
              <Stack
                direction="column"
                spacing={2}
                pt={0}
                sx={{
                  height: "auto",
                  maxHeight: 300,
                  overflowY: "scroll",
                  background: "#000000",
                }}
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
                    expand?.coin === false ? 6 : searchResult?.COINS?.length
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
                          src={`${serverAPIUrl}public/uploads/coin_logo/${item?.coin_logo}`}
                          sx={{ width: 25, height: 25 }}
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
                          <Typography
                            sx={{ fontSize: ".8rem", fontWeight: 600 }}
                          >
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
                        {"#"}
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
                {searchResult?.NFT?.length !== 0 && (
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
                        <Typography
                          sx={{ fontSize: ".78rem", fontWeight: 600 }}
                        >
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
                            sx={{ width: 25, height: 25 }}
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
                            <Typography
                              sx={{ fontSize: ".8rem", fontWeight: 600 }}
                            >
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
                )}
              </Stack>
            ) : (
              <Stack
                direction="column"
                spacing={1}
                sx={{
                  height: "auto",
                  maxHeight: 300,
                  overflowY: "scroll",
                  pl: 0,
                }}
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
                  trendingCoinList
                    ?.slice(0, 6)
                    .map((item: any, index: number) => (
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
                            sx={{ width: 25, height: 25 }}
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
                            <Typography
                              sx={{ fontSize: ".8rem", fontWeight: 600 }}
                            >
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
                          {"#"}
                          {item?.ranking}
                        </Typography>
                      </Stack>
                    ))}

                {recentSearchResult && (
                  <Stack
                    direction="row"
                    spacing={0.5}
                    alignItems="center"
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
                )}
                {/* <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              pt={1}
              width="100%"
              sx={{ background: "red", height: 50 }}
            > */}
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
                              <RecentSearchCard
                                item={item}
                                index={index}
                                saveSearchHandler={saveSearchHandler}
                              />
                            </Box>
                          ))}
                    </Carousel>
                  )}
                </Box>
                {/* </Stack> */}
              </Stack>
            )}
            <Box pl={2}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Avatar
                  alt="Search Ads"
                  //src={`${serverAPIUrl}public/uploads/coin_logo/${item?.coin_logo}`}
                  src="https://www.logo.wine/a/logo/Binance/Binance-Icon-Logo.wine.svg"
                  sx={{ width: 70, height: 70, borderRadius: 0 }}
                />
                <Stack direction="column" spacing={1} alignItems="flex-start">
                  <Stack
                    direction="column"
                    spacing={0}
                    alignItems="flex-start"
                    pr={2}
                  >
                    <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}>
                      Trade Now. Earn Cakes
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: ".8rem",
                        fontWeight: 400,
                        //wordWrap: "wrap",
                        wordBreak: "break-word",
                      }}
                    >
                      Binance was launched in June 2017 and within 180 days grew
                      into the largest cryptocurrency exchange in the world
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Link
                      to="#"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <Typography
                        sx={{
                          fontSize: ".837rem",
                          fontWeight: 500,
                          color: "#7F85B4",
                        }}
                      >
                        Register Now
                      </Typography>
                    </Link>

                    <Link
                      to="#"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <Typography
                        sx={{
                          fontSize: ".837rem",
                          fontWeight: 500,
                          color: "#282828",
                        }}
                      >
                        Sponsored
                      </Typography>
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Popover>
      </Backdrop>
    </Box>
  );
};

export default AppBarSearch;
