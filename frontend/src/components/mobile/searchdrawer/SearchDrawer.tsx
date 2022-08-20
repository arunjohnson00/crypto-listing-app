import { useEffect, useState, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@mui/material/Drawer";
import { Avatar, Button, Popover, Stack, Typography, Box } from "@mui/material";

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

const SearchDrawer = ({ openDrawer, toggleDrawer }: any) => {
  const dispatch: any = useDispatch();
  const [values, setValues] = useState<any>();
  const [expand, setExpand] = useState<any>({
    coin: false,
    nft: false,
  });
  // const topBarSearchResult = useSelector((data: any) => {
  //   return data?.commonReducer?.top_bar_search_result?.data;
  // });

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

        {searchResult && searchResult?.COINS?.length !== 0 ? (
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
                      alt="Trending"
                      src={`${serverAPIUrl}public/uploads/coin_logo/${item?.coin_logo}`}
                      sx={{ width: 16, height: 16 }}
                    />
                    <Link
                      to={{
                        pathname: `/coin/${item?.coin_name
                          ?.replace(/ /g, "")
                          .toLowerCase()}/${item?.coin_id}`,
                      }}
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
            spacing={0.5}
            sx={{ height: 500, overflowY: "scroll" }}
          >
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Typography sx={{ pl: 2, py: 2, fontSize: ".7rem" }}>
                Trending
              </Typography>
              <Avatar
                alt="Trending"
                src={TrendingIcon}
                sx={{ width: 14, height: 14 }}
              />
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <Typography sx={{ pl: 2, py: 2, fontSize: ".7rem" }}>
                Recent Searches
              </Typography>
              {/* <Avatar
            alt="Trending"
            src={TrendingIcon}
            sx={{ width: 14, height: 14 }}
          /> */}
            </Stack>
          </Stack>
        )}
      </Stack>
    </Drawer>
  );
};
export default SearchDrawer;