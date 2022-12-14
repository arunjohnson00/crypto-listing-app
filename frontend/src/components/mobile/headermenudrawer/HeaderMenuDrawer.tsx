import { useEffect, useState, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@mui/material/Drawer";
import { Avatar, Button, Popover, Stack, Typography, Box } from "@mui/material";

import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { StyledInputRoot, StyledInputPopUpRoot } from "./style";
import { StyledInputElement } from "./style";
import { InputAdornment } from "./style";
import { IconButton } from "./style";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TrendingIcon from "../../../assets/search/trending_icon.svg";
import { topbarSearchRequest } from "../../../store/action";
import logoWhite from "../../../assets/logo/logo.png";
import HeaderMenuAccordion from "./headermenuaccordion/HeaderMenuAccordion";
import ConnectWalletBtn from "../button/connectwalletbtn/ConnectWalletBtn";
import AddAsset from "../button/addasset/AddAsset";
import LoginHeaderBtn from "../button/loginheader/LoginHeaderBtn";
import { logoutHandler } from "../../../utils/logoutHandler";
import MyAccountHeaderBtn from "../button/myaccountheader/MyAccountHeaderBtn";
import FearAndGreedIndexInfo from "../fgindexinfo/FearAndGreedIndexInfo";

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

const HeaderMenuDrawer = ({ openDrawer, toggleDrawer }: any) => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const [values, setValues] = useState<any>();
  const [expand, setExpand] = useState<any>({
    coin: false,
    nft: false,
  });
  // const topBarSearchResult = useSelector((data: any) => {
  //   return data?.commonReducer?.top_bar_search_result?.data;
  // });

  const auth =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
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

  const logoutRequest = (navigate: any, dispatch: any) => {
    logoutHandler(navigate, dispatch);
    toggleDrawer();
  };
  return (
    <Drawer anchor={"left"} open={openDrawer?.left} onClose={toggleDrawer}>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          backgroundColor: "#000000",
          color: "#6E6E6E",

          minWidth: "100vw",
          overflowY: "scroll",
        }}
        pt={2}
        minHeight="100vh"
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          px={2}
          py={2}
        >
          {" "}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            onClick={toggleDrawer}
          >
            {" "}
            <img src={logoWhite} alt="coinxhigh" width="120px" />
          </Link>
          <IconButton edge="end" onClick={toggleDrawer}>
            {
              <CancelIcon
                style={{ color: "#ffffffad" }}
                sx={{ margin: 0, fontSize: "1.1rem" }}
              />
            }
          </IconButton>
        </Stack>
        <Stack
          direction="column"
          spacing={1}
          alignItems="flex-start"
          justifyContent="space-between"
          py={2}
        >
          <HeaderMenuAccordion toggleDrawer={toggleDrawer} />
          <Stack
            direction="column"
            spacing={1}
            alignItems="flex-start"
            justifyContent="space-between"
            px={2}
          >
            {/* <Link
              to={{
                pathname: `#`,
              }}
              state={{
                scroll: false,
              }}
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              onClick={toggleDrawer}
            >
              {" "}
              <Typography
                sx={{
                  p: 1,
                  fontSize: ".8rem",
                  color: "#FFFFFF",
                }}
              >
                Exchange
              </Typography>
            </Link> */}
            {/* <Link
              to={{
                pathname: `#`,
              }}
              state={{
                scroll: false,
              }}
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              onClick={toggleDrawer}
            >
              {" "}
              <Typography
                sx={{
                  p: 1,
                  fontSize: ".8rem",
                  color: "#FFFFFF",
                }}
              >
                Promote
              </Typography>
              </Link>*/}
            <Link
              to={{
                pathname: `/discover`,
              }}
              state={{
                scroll: false,
              }}
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              onClick={toggleDrawer}
            >
              {" "}
              <Typography
                sx={{
                  p: 1,
                  fontSize: ".8rem",
                  color: "#FFFFFF",
                }}
              >
                Discover
              </Typography>
            </Link>
            {/*<Link
              to={{
                pathname: `/chart`,
              }}
              state={{
                scroll: false,
              }}
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              onClick={toggleDrawer}
            >
              {" "}
              <Typography
                sx={{
                  p: 1,
                  fontSize: ".8rem",
                  color: "#FFFFFF",
                }}
              >
                Chart
              </Typography>
            </Link>
            <Link
              to={{
                pathname: `/leader-board`,
              }}
              state={{
                scroll: false,
              }}
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              onClick={toggleDrawer}
            >
              {" "}
              <Typography
                sx={{
                  p: 1,
                  fontSize: ".8rem",
                  color: "#FFFFFF",
                }}
              >
                Leader Board
              </Typography>
            </Link> */}
            <Link
              to={{
                pathname: `/presales`,
              }}
              state={{
                scroll: false,
              }}
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              onClick={toggleDrawer}
            >
              {" "}
              <Typography
                sx={{
                  p: 1,
                  fontSize: ".8rem",
                  color: "#FFFFFF",
                }}
              >
                Presales
              </Typography>
            </Link>
            <Link
              to={{
                pathname: `/news`,
              }}
              state={{
                scroll: false,
              }}
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              onClick={toggleDrawer}
            >
              {" "}
              <Typography
                sx={{
                  p: 1,
                  fontSize: ".8rem",
                  color: "#FFFFFF",
                }}
              >
                News
              </Typography>
            </Link>
            <Link
              to={{
                pathname: `/fear-greed-index`,
              }}
              state={{
                scroll: false,
              }}
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              onClick={toggleDrawer}
            >
              {" "}
              <Typography
                sx={{
                  p: 1,
                  fontSize: ".8rem",
                  color: "#FFFFFF",
                }}
              >
                F&G Index
              </Typography>
            </Link>
            <Link
              to={{
                pathname: `/videos`,
              }}
              state={{
                scroll: false,
              }}
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              onClick={toggleDrawer}
            >
              {" "}
              <Typography
                sx={{
                  p: 1,
                  fontSize: ".8rem",
                  color: "#FFFFFF",
                }}
              >
                Videos
              </Typography>
            </Link>
            <Stack direction="column" spacing={3} width="100%" py={2}>
              {/* <ConnectWalletBtn /> */}
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={3}
                width="100%"
                py={0}
              >
                <Link
                  to="/add-asset"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <AddAsset handler={toggleDrawer} />
                </Link>

                {!auth ? (
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <LoginHeaderBtn title="Login" handler={toggleDrawer} />
                  </Link>
                ) : (
                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    spacing={3}
                  >
                    {" "}
                    <Link
                      to="/user-dashboard"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <MyAccountHeaderBtn
                        title="My Account"
                        handler={logoutRequest}
                      />
                    </Link>
                    <LoginHeaderBtn title="Logout" handler={logoutRequest} />
                  </Stack>
                )}
              </Stack>
            </Stack>
            <FearAndGreedIndexInfo />
          </Stack>
        </Stack>
      </Stack>
    </Drawer>
  );
};
export default HeaderMenuDrawer;
