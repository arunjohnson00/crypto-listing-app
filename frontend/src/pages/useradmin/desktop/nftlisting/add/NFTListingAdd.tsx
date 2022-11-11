import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Stack,
  IconButton,
  Link,
  Divider,
  Button,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import LargeBtn from "../../../../../components/useradmin/form/button/large/LargeBtn";
import InputText from "../../../../../components/useradmin/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import LoadingButton from "@mui/lab/LoadingButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormControlLabel } from "@mui/material";

import InputTextArea from "../../../../../components/useradmin/form/textarea/InputTextArea";
import InputSelectCoin from "../../../../../components/useradmin/form/selectcoin/InputSelectCoin";
import CoinUploader from "../../../../../components/useradmin/form/input/file/coinlogo/CoinUploader";
import InputSelectMultiple from "../../../../../components/useradmin/form/selectmultiple/InputSelectMultiple";
import InputDate from "../../../../../components/useradmin/form/input/date/InputDate";
import InputTime from "../../../../../components/useradmin/form/input/time/InputTime";
import InputCheckbox from "../../../../../components/useradmin/form/input/checkbox/InputCheckbox";
import InputCoinStatusSelect from "../../../../../components/useradmin/form/selectcoinstatus/InputCoinStatusSelect";
import InputDateTime from "../../../../../components/useradmin/form/input/datetime/InputDateTime";

import CommunityNFTDetails from "./CommunityNFTDetails";
import SocialNFTDetails from "./SocialNFTDetails";
import ChatNFTDetails from "./ChatNFTDetails";
import EventMarketPlace from "./EventMarketPlace";

import dateFormat, { masks } from "dateformat";
import {
  dashboardAddNFTListingRequest,
  dashboardNFTListingChatPlatformListRequest,
  dashboardNFTListingEventCategoryListRequest,
  dashboardNFTListingMarketPlaceListRequest,
  dashboardNFTListingNetworkListRequest,
  dashboardNFTListingNFTCurrencyListRequest,
  dashboardNFTListingSocialPlatformListRequest,
} from "../../../../../store/action";
import { Helmet } from "react-helmet-async";

const NFTListingAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Scheduled", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];
  const [nftListingData, setNftListingData] = useState<any>({
    description: "",
  });
  const [richText, setRichText] = useState({ details: "", description: "" });
  const nftListingCurrencyList = useSelector((nftCurrencyList: any) => {
    return nftCurrencyList.dashboardNFTListingReducer.nft_currency_list.data;
  });

  const allNFTNetwork = useSelector((nftNetworkList: any) => {
    return nftNetworkList.dashboardNFTListingReducer.nft_network_list.data;
  });

  const nftListingCategoryList = useSelector((nftCategoryList: any) => {
    return nftCategoryList.dashboardNFTListingReducer.nft_event_category_list
      .data;
  });

  const nftMarketPlaceList = useSelector((nftList: any) => {
    return nftList.dashboardNFTListingReducer.nft_marketplaces_list.data;
  });

  const nftChatList = useSelector((chatList: any) => {
    return chatList.dashboardNFTListingReducer.chat_platform_list.data;
  });

  const nftSocialList = useSelector((socialList: any) => {
    return socialList.dashboardNFTListingReducer.social_platform_list.data;
  });

  const dispatch: any = useDispatch();

  const [checked, setChecked] = useState<any>({
    i_agree: false,
    i_declare: false,
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [addCoinLogo, setCoinLogo] = useState({ coinLogo: "" });
  const [eventCategoryMultiple, setEventCategoryMultiple] = useState<any>([]);

  const [coinPublishStatus, setPublishCoinStatus] = useState<any>({
    status: 1,
    statusDateTime: new Date(),
    is_scheduled: 0,
  });

  const [presaleDate, setPresaleDate] = useState<any>({
    start_date: new Date(),
    start_time: new Date(),
    end_date: new Date(),
    end_time: new Date(),
  });
  console.log(presaleDate);
  const [publicMintDate, setPublicMintDate] = useState<any>({
    start_date: new Date(),
    start_time: new Date(),
    end_date: new Date(),
    end_time: new Date(),
  });

  // Display the key/value pairs

  const nftListingAddHandler = () => {
    setLoading(true);
    var formData = new FormData(document.querySelector("#coinForm") as any);

    for (var i = 0; i < eventCategoryMultiple.length; i++) {
      formData.append(`category_id[${i}]`, eventCategoryMultiple[i]);
    }

    formData.append(
      "pre_sale_start_date",
      dateFormat(new Date(presaleDate.start_date), "yyyy-mm-dd")
    );
    formData.append(
      "pre_sale_start_time",
      dateFormat(new Date(presaleDate.start_time), " hh:MM tt")
    );

    formData.append(
      "pre_sale_end_date",
      dateFormat(new Date(presaleDate.end_date), "yyyy-mm-dd")
    );
    formData.append(
      "pre_sale_end_time",
      dateFormat(new Date(presaleDate.end_time), " hh:MM tt")
    );
    formData.append(
      "public_mint_start_date",
      dateFormat(new Date(publicMintDate.start_date), "yyyy-mm-dd")
    );
    formData.append(
      "public_mint_start_time",
      dateFormat(new Date(publicMintDate.start_time), " hh:MM tt")
    );
    formData.append(
      "public_mint_end_date",
      dateFormat(new Date(publicMintDate.start_date), "yyyy-mm-dd")
    );
    formData.append(
      "public_mint_end_time",
      dateFormat(new Date(publicMintDate.end_time), " hh:MM tt")
    );
    formData.append("image", addCoinLogo.coinLogo);
    formData.append("status", coinPublishStatus.status);
    // formData.append("description", richText?.description);
    const successHandler = (res: any) => {
      setLoading(true);
      toast.success(
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CheckCircleRoundedIcon sx={{ color: "#5CE32D", fontSize: 50 }} />
            <Typography sx={{ fontSize: ".85rem" }}>
              {res?.data?.message}
            </Typography>
          </Stack>
        </Box>,
        {
          position: "top-right",
          icon: false,
          //theme: "colored",
          className: "toast-success-container toast-success-container-after",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      setTimeout(() => {
        navigate("/user-dashboard/nft");
      }, 3000);
    };

    const errorHandler = (err: any) => {
      setLoading(false);
      toast.error(
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CancelRoundedIcon sx={{ color: "#ff3722", fontSize: 50 }} />
            <Typography sx={{ fontSize: ".85rem" }}>
              {err.error.message.response.request.responseText}
            </Typography>
          </Stack>
        </Box>,
        {
          icon: false,
          position: "top-right",
          className: "toast-error-container toast-error-container-after",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    };

    dispatch(
      dashboardAddNFTListingRequest(formData, successHandler, errorHandler)
    );
  };

  const [eventMarketCount, setEventMarketCount] = useState<any[]>([]);

  const eventMarketaddHandle = () => {
    setEventMarketCount([...eventMarketCount, { eventMarket: "" }]);
  };

  const eventMarketremoveHandle = (index: any) => {
    let eventMarketList = [...eventMarketCount];
    eventMarketList.splice(index, 1);
    setEventMarketCount(eventMarketList);
  };

  const [presaleEndDateTime, setPresaleEndDateTime] = useState<boolean>(false);

  const presaleEndTimeOpenHandler = () => {
    setPresaleEndDateTime(true);
  };

  const presaleEndTimeCloseHandler = () => {
    setPresaleEndDateTime(false);
  };
  const [publicMintEndDateTime, setPublicMintEndDateTime] =
    useState<boolean>(false);

  const publicMintEndTimeOpenHandler = () => {
    setPublicMintEndDateTime(true);
  };

  const publicMintEndTimeCloseHandler = () => {
    setPublicMintEndDateTime(false);
  };

  const [communityCount, setcommunityCount] = useState<any[]>([]);

  const communityaddHandle = () => {
    setcommunityCount([...communityCount, { community: "" }]);
  };

  const communityremoveHandle = (index: any) => {
    let communityList = [...communityCount];
    communityList.splice(index, 1);
    setcommunityCount(communityList);
  };

  const [chatCount, setchatCount] = useState<any[]>([]);

  const chataddHandle = () => {
    setchatCount([...chatCount, { chat: "" }]);
  };

  const chatremoveHandle = (index: any) => {
    let chatList = [...chatCount];
    chatList.splice(index, 1);
    setchatCount(chatList);
  };

  const [socialCount, setsocialCount] = useState<any[]>([]);

  const socialaddHandle = () => {
    setsocialCount([...socialCount, { social: "" }]);
  };

  const socialremoveHandle = (index: any) => {
    let socialList = [...socialCount];
    socialList.splice(index, 1);
    setsocialCount(socialList);
  };

  const [launchDate, setLaunchDate] = useState<boolean>(false);

  useEffect(() => {
    const successHandler = (res: any) => {
      //console.log(res);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };

    dispatch(
      dashboardNFTListingChatPlatformListRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );
    dispatch(
      dashboardNFTListingSocialPlatformListRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );
    dispatch(
      dashboardNFTListingNetworkListRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );
    dispatch(
      dashboardNFTListingMarketPlaceListRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );
    dispatch(
      dashboardNFTListingNFTCurrencyListRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );

    dispatch(
      dashboardNFTListingEventCategoryListRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  return (
    <Box width={{ xs: "99%", sm: "99%", md: "94%" }} pb={10}>
      <Helmet>
        <title>Add NFT Listing | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Add NFT Listing | CoinXhigh.com" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta
          property="og:image"
          content="https://coinxhigh.com/coinxhighlogo.webp"
        />
        <meta property="og:url" content="https://coinxhigh.com/" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form id="coinForm">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3} pb={2}>
          <Stack
            direction={{ xs: "row", sm: "row", md: "row" }}
            spacing={1}
            sx={{ alignItems: "center", justifyContent: "flex-start" }}
            px={0}
            pt={3}
          >
            <IconButton
              onClick={() => {
                navigate("/user-dashboard");
              }}
            >
              <ArrowBackIosTwoToneIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>
            <Stack
              direction={{ xs: "column" }}
              spacing={0}
              sx={{ alignItems: "flex-start", justifyContent: "flex-start" }}
            >
              <Typography
                variant="h5"
                sx={{ textAlign: "left", color: "#FFFFFF", fontWeight: 600 }}
              >
                Submit Your NFT Project
              </Typography>
              <Typography
                variant="caption"
                sx={{ textAlign: "left", color: "#FFFFFF" }}
              >
                In this page you can submit your NFT project, please make sure
                to upload all info as showing below.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} spacing={0}>
          <Box
            sx={{
              width: "auto",
              background: "linear-gradient(to bottom,#040B27 30%, #01061A 80%)",
              borderRadius: "7px",
            }}
            px={{ xs: 3, sm: 3, md: 5 }}
            py={5}
            mb={3}
          >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={2}
              >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={3}>
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 400,
                        color: "#00ff95",
                      }}
                      mb={2}
                    >
                      NFT Title
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputText
                        placeholder="Eg: Bored Ape"
                        id="title"
                        name="title"
                        //width="auto"
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={3}>
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 400,
                        color: "#00ff95",
                      }}
                      mb={2}
                    >
                      NFT Description
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputTextArea
                        // variant="richtextdescription"
                        placeholder="Enter Detailed Project Details. Recommended word count 450 - 950."
                        name="description"
                        data={nftListingData}
                        setData={setNftListingData}
                        richText={richText}
                        setRichText={setRichText}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={0}>
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 400,
                          color: "#00ff95",
                        }}
                        mb={2}
                      >
                        NFT Image
                      </Typography>

                      <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                        <CoinUploader
                          name="image"
                          id="image"
                          title="NFT Image"
                          setAddIcon={setCoinLogo}
                          addIconData={addCoinLogo}
                        />
                      </Grid>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={12} mb={3}>
                      <Stack
                        direction={{ xs: "column", sm: "column", md: "row" }}
                        spacing={{ xs: 0, sm: 0, md: 3 }}
                        mb={2}
                        mt={0}
                        alignItems={{
                          xs: "flex-start",
                          sm: "flex-start",
                          md: "center",
                        }}
                      >
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} pt={0}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textAlign: "left",
                              fontSize: ".9rem",
                              fontWeight: 400,
                              marginleft: 0,
                              color: "#00ff95",
                            }}
                            mt={{ xs: 3, sm: 3, md: 5 }}
                            mb={1}
                          >
                            Pre-Sale Mint Price
                          </Typography>
                          <InputText
                            placeholder="Eg: 7"
                            name="pre_sale_mint_price"
                            id="pre_sale_mint_price"
                            width={100}
                            type="number"
                            // InputProps={{
                            //   endAdornment: (
                            //     <Button
                            //       variant="contained"
                            //       sx={{
                            //         background: "#0e155a",
                            //         color: "#FFFFFF",
                            //         boxShadow: "none",
                            //         "&:hover": {
                            //           backgroundColor: "#0e155a",
                            //           color: "#FFFFFF",
                            //           boxShadow: "none",
                            //         },
                            //       }}
                            //     >
                            //       ETH
                            //     </Button>
                            //   ),
                            // }}
                          />
                        </Grid>

                        <Grid item xl={6} lg={6} md={6} sm={6} xs={12} pt={0}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textAlign: "left",
                              fontSize: ".9rem",
                              fontWeight: 400,
                              marginleft: 0,
                              color: "#00ff95",
                            }}
                            mt={{ xs: 3, sm: 3, md: 5 }}
                            mb={1}
                          >
                            Public Mint Price
                          </Typography>
                          <InputText
                            placeholder="Eg: 7"
                            name="public_mint_price"
                            id="public_mint_price"
                            // width="auto"
                            width={100}
                            type="number"
                            // InputProps={{
                            //   endAdornment: (
                            //     <Button
                            //       variant="contained"
                            //       sx={{
                            //         background: "#0e155a",
                            //         color: "#FFFFFF",
                            //         boxShadow: "none",
                            //         "&:hover": {
                            //           backgroundColor: "#0e155a",
                            //           color: "#FFFFFF",
                            //           boxShadow: "none",
                            //         },
                            //       }}
                            //     >
                            //       ETH
                            //     </Button>
                            //   ),
                            // }}
                          />
                        </Grid>
                      </Stack>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={3}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 400,
                          color: "#00ff95",
                        }}
                        mb={2}
                      >
                        Event Token Currency
                      </Typography>

                      <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                        <InputSelectCoin
                          title="Select currency"
                          name="currancy_id"
                          data={nftListingCurrencyList}
                          height={40}
                          width={{ xs: "auto", sm: "auto", md: 300 }}
                          variant="nft_listing_currency"
                        />
                      </Grid>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={3}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 400,
                          color: "#00ff95",
                        }}
                        mb={2}
                      >
                        What is the maximum number of items in your collection?*
                      </Typography>

                      <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                        <InputText
                          placeholder="Eg: 1000000"
                          name="max_num_items"
                          id="max_num_items"
                          type="number"
                          // width="auto"
                        />
                      </Grid>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={3}>
                      <Stack
                        direction={{ xs: "column", sm: "column", md: "row" }}
                        spacing={3}
                        mb={2}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            fontSize: ".9rem",
                            fontWeight: 400,
                            color: "#00ff95",
                          }}
                        >
                          Event Category*
                        </Typography>

                        <Typography
                          variant="caption"
                          sx={{ textAlign: "left" }}
                          mb={1}
                        >
                          <span style={{ color: "#234A84", fontWeight: 400 }}>
                            {" "}
                            (Multiple selection allowed)
                          </span>
                        </Typography>
                      </Stack>

                      <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                        <InputSelectMultiple
                          title="Select categories"
                          setInputSelectMultipleValue={setEventCategoryMultiple}
                          getInputSelectMultiplevalue={eventCategoryMultiple}
                          selectOptions={nftListingCategoryList}
                          // name="category_id "
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={3}>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", color: "#D7DADB" }}
                      mb={2}
                    >
                      Select NFT MarketPlace
                    </Typography>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack
                        direction={{ xs: "column", sm: "column", md: "row" }}
                        spacing={3}
                        mb={2}
                      >
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textAlign: "left",
                              fontSize: ".9rem",
                              fontWeight: 400,
                              color: "#00ff95",
                            }}
                            mb={1}
                          >
                            Marketplace 1
                          </Typography>
                          <InputSelectCoin
                            name="marketplace_id[1]"
                            id="marketplace_id_1"
                            data={nftMarketPlaceList}
                            height={40}
                            title="Select MarketPlace"
                            variant="nft_marketplace"
                          />
                        </Grid>
                        <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textAlign: "left",
                              fontSize: ".9rem",
                              fontWeight: 400,
                              color: "#00ff95",
                            }}
                            mb={1}
                          >
                            Marketplace URL
                          </Typography>
                          <InputText
                            placeholder="Enter NFT Marketplace url"
                            name="marketplace_url[1]"
                            id="marketplace_url_1"
                            // width="auto"
                          />
                        </Grid>
                        <Grid
                          item
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={12}
                          pt={{ xs: 0, sm: 0, md: 4.5, lg: 4.5, xl: 4.5 }}
                        >
                          <Link
                            onClick={eventMarketaddHandle}
                            underline="none"
                            sx={{ color: "#75ABCF", fontSize: ".8rem" }}
                          >
                            Add more +
                          </Link>
                        </Grid>
                      </Stack>
                    </Grid>

                    {eventMarketCount.map((eventMarket, index) => {
                      return (
                        <div>
                          <EventMarketPlace
                            eventMarketCount={eventMarketCount}
                            index={index}
                            key={index}
                            eventMarketremoveHandle={eventMarketremoveHandle}
                            data={nftMarketPlaceList}
                          />
                        </div>
                      );
                    })}
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Grid item xl={7} lg={7} md={7} sm={7} xs={12} pt={3}>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "left", color: "#D7DADB" }}
                >
                  Event Date
                </Typography>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 400,
                      color: "#00ff95",
                    }}
                    mt={2}
                  >
                    Presale start date time
                  </Typography>
                  <Stack
                    direction={{ xs: "column", sm: "column", md: "row" }}
                    spacing={3}
                    mb={2}
                    mt={1}
                  >
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      <InputDate
                        date={presaleDate}
                        setDate={setPresaleDate}
                        id="pre_sale_start_date"
                        presaleStart={true}
                        disabled={launchDate}
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      <InputTime
                        time={presaleDate}
                        setTime={setPresaleDate}
                        id="pre_sale_start_time"
                        presaleStart={true}
                        disabled={launchDate}
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      {!presaleEndDateTime && (
                        <Link
                          onClick={presaleEndTimeOpenHandler}
                          underline="none"
                          sx={{ color: "#75ABCF", fontSize: ".8rem" }}
                        >
                          Add End Time +
                        </Link>
                      )}
                    </Grid>
                  </Stack>
                </Grid>

                {presaleEndDateTime === true && (
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 400,
                        color: "#00ff95",
                      }}
                      mt={2}
                    >
                      Presale end date time
                    </Typography>
                    <Stack
                      direction={{ xs: "column", sm: "column", md: "row" }}
                      spacing={3}
                      mb={2}
                      mt={0}
                    >
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <InputDate
                          date={presaleDate}
                          setDate={setPresaleDate}
                          id="pre_sale_end_date"
                          presaleEnd={true}
                          disabled={launchDate}
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <InputTime
                          time={presaleDate}
                          setTime={setPresaleDate}
                          id="pre_sale_end_time"
                          presaleEnd={true}
                          disabled={launchDate}
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <IconButton
                          aria-label="delete"
                          size="large"
                          onClick={presaleEndTimeCloseHandler}
                        >
                          <DeleteIcon
                            fontSize="inherit"
                            sx={{ color: "#fff9" }}
                          />
                        </IconButton>
                      </Grid>
                    </Stack>
                  </Grid>
                )}
              </Grid>

              <Grid item xl={7} lg={7} md={7} sm={7} xs={12} pt={0}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 400,
                      color: "#00ff95",
                    }}
                    mt={5}
                  >
                    Public mint start date time
                  </Typography>
                  <Stack
                    direction={{ xs: "column", sm: "column", md: "row" }}
                    spacing={3}
                    mb={2}
                    mt={1}
                  >
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      <InputDate
                        date={publicMintDate}
                        setDate={setPublicMintDate}
                        id="public_mint_start_date"
                        publicMintStart={true}
                        disabled={launchDate}
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      <InputTime
                        time={publicMintDate}
                        setTime={setPublicMintDate}
                        id="public_mint_start_time"
                        publicMintStart={true}
                        disabled={launchDate}
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      {!publicMintEndDateTime && (
                        <Link
                          onClick={publicMintEndTimeOpenHandler}
                          underline="none"
                          sx={{ color: "#75ABCF", fontSize: ".8rem" }}
                        >
                          Add End Time +
                        </Link>
                      )}
                    </Grid>
                  </Stack>
                </Grid>

                {publicMintEndDateTime === true && (
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 400,
                        color: "#00ff95",
                      }}
                      mt={2}
                    >
                      Public mint end date time
                    </Typography>
                    <Stack
                      direction={{ xs: "column", sm: "column", md: "row" }}
                      spacing={3}
                      mb={2}
                      mt={0}
                    >
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <InputDate
                          date={publicMintDate}
                          setDate={setPublicMintDate}
                          id="public_mint_end_date"
                          publicMintEnd={true}
                          disabled={launchDate}
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <InputTime
                          time={publicMintDate}
                          setTime={setPublicMintDate}
                          id="public_mint_end_time"
                          publicMintEnd={true}
                          disabled={launchDate}
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <IconButton
                          aria-label="delete"
                          size="large"
                          onClick={publicMintEndTimeCloseHandler}
                        >
                          <DeleteIcon
                            fontSize="inherit"
                            sx={{ color: "#fff9" }}
                          />
                        </IconButton>
                      </Grid>
                    </Stack>
                  </Grid>
                )}
              </Grid>

              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={12} pt={0}>
                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    spacing={1}
                    mb={2}
                    mt={0}
                    alignItems={{
                      xs: "center",
                      sm: "center",
                      md: "center",
                    }}
                  >
                    <InputCheckbox
                      name="is_launch"
                      checked={launchDate}
                      setChecked={setLaunchDate}
                      condition="launch_date"
                      value={launchDate}
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        marginleft: 0,
                        color: "#00ff95",
                      }}
                      mt={5}
                    >
                      Don't you know launch date?
                    </Typography>
                  </Stack>
                </Grid>{" "}
              </Grid>
              <Grid item xl={3} lg={3} md={3} sm={12} xs={12} mt={5}>
                <Stack direction="column" spacing={0} mb={2}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 400,
                      marginleft: 0,
                      color: "#00ff95",
                    }}
                  >
                    What is your collection's blockchain?
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      textAlign: "left",
                      // fontSize: ".6rem",
                      fontWeight: 400,
                      marginleft: 0,
                      color: "#FFFFFF",
                    }}
                  >
                    ( If you don't know, it's likely Ethereum )
                  </Typography>
                </Stack>
                <Box maxWidth="300px">
                  <InputSelectCoin
                    name="nft_network_id"
                    id="nft_network_id"
                    data={allNFTNetwork}
                    height={40}
                    variant="nft_network"
                    title="Select Blockchain"
                  />
                </Box>
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12} pt={0}>
                  <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    pt={2}
                    pb={1}
                  >
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", color: "#D7DADB" }}
                      mb={0}
                    >
                      Community Details
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left", color: "#b4b4b4" }}
                      mb={2}
                    >
                      Please provide NFT community details
                    </Typography>
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack
                      direction={{ xs: "column", sm: "column", md: "row" }}
                      spacing={3}
                    >
                      <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            fontSize: ".9rem",
                            fontWeight: 400,
                            color: "#00ff95",
                          }}
                          mb={1}
                        >
                          Website URL
                        </Typography>
                        <InputText
                          placeholder="Enter official website url"
                          name="community_website_url[1]"
                          id="community_website_url_1"
                        />
                      </Grid>
                      <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={12}
                        pt={{ xs: 0, sm: 0, md: 4.5, lg: 4.5, xl: 4.5 }}
                      >
                        <Link
                          onClick={communityaddHandle}
                          underline="none"
                          sx={{ color: "#75ABCF", fontSize: ".8rem" }}
                        >
                          Add more +
                        </Link>
                      </Grid>
                    </Stack>
                  </Grid>
                  {communityCount.map((community, index) => {
                    return (
                      <div>
                        <CommunityNFTDetails
                          communityCount={communityCount}
                          index={index}
                          key={index}
                          communityremoveHandle={communityremoveHandle}
                        />
                      </div>
                    );
                  })}

                  {/* <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    pt={2}
                    pb={1}
                  >
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", color: "#D7DADB" }}
                      mb={0}
                    >
                      Chat Details
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left", color: "#b4b4b4" }}
                      mb={2}
                    >
                      Please provide information about NFT.
                    </Typography>
                  </Grid> */}
                  {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack
                      direction={{ xs: "column", sm: "column", md: "row" }}
                      spacing={3}
                    >
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            fontSize: ".9rem",
                            fontWeight: 400,
                            color: "#00ff95",
                          }}
                          mb={1}
                        >
                          Chat Platform
                        </Typography>
                        <InputSelectCoin
                          name="chat_platform_id[1]"
                          id="chat_platform_id_1"
                          data={nftChatList}
                          height={40}
                             variant="nft_chat_platform"
                        />
                      </Grid>
                      <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            fontSize: ".9rem",
                            fontWeight: 400,
                            color: "#00ff95",
                          }}
                          mb={1}
                        >
                          Chat URL
                        </Typography>
                        <InputText
                          placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                          name="chat_url[1]"
                          id="chat_url_1"
                        />
                      </Grid>

                      <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={12}
                        pt={{ xs: 0, sm: 0, md: 4.5, lg: 4.5, xl: 4.5 }}
                      >
                        <Link
                          onClick={chataddHandle}
                          underline="none"
                          sx={{ color: "#75ABCF", fontSize: ".8rem" }}
                        >
                          Add more +
                        </Link>
                      </Grid>
                    </Stack>
                  </Grid> */}

                  {/* {chatCount.map((chat, index) => {
                    return (
                      <div>
                        <ChatNFTDetails
                          chatCount={chatCount}
                          index={index}
                          key={index}
                          chatremoveHandle={chatremoveHandle}
                          data={nftChatList}
                        />
                      </div>
                    );
                  })} */}
                  <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    pt={2}
                    pb={1}
                  >
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", color: "#D7DADB" }}
                      mb={0}
                    >
                      Social Details
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left", color: "#b4b4b4" }}
                      mb={2}
                    >
                      Enter official website url
                    </Typography>
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack
                      direction={{ xs: "column", sm: "column", md: "row" }}
                      spacing={3}
                    >
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            fontSize: ".9rem",
                            fontWeight: 400,
                            color: "#00ff95",
                          }}
                          mb={1}
                        >
                          Select Platform
                        </Typography>
                        <InputSelectCoin
                          name="social_platform_id[1]"
                          id="social_platform_id_1"
                          data={nftSocialList}
                          height={40}
                          title="Select website"
                          variant="nft_social_platform"
                        />
                      </Grid>
                      <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            fontSize: ".9rem",
                            fontWeight: 400,
                            color: "#00ff95",
                          }}
                          mb={1}
                        >
                          Social URL
                        </Typography>
                        <InputText
                          placeholder="Enter social url"
                          name="social_url[1]"
                          id="social_url_1"
                        />
                      </Grid>
                      <Grid
                        item
                        xl={4}
                        lg={4}
                        md={4}
                        sm={4}
                        xs={12}
                        pt={{ xs: 0, sm: 0, md: 4.5, lg: 4.5, xl: 4.5 }}
                      >
                        <Link
                          onClick={socialaddHandle}
                          underline="none"
                          sx={{ color: "#75ABCF", fontSize: ".8rem" }}
                        >
                          Add more +
                        </Link>
                      </Grid>
                    </Stack>
                  </Grid>

                  {socialCount.map((social, index) => {
                    return (
                      <div>
                        <SocialNFTDetails
                          socialCount={socialCount}
                          index={index}
                          key={index}
                          socialremoveHandle={socialremoveHandle}
                          data={nftSocialList}
                        />
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={12} mt={5}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={3}>
                    <FormControlLabel
                      control={
                        <InputCheckbox
                          name="i_agree"
                          id="i_agree"
                          value={checked.i_agree}
                          checked={checked}
                          setChecked={setChecked}
                          condition="i_agree"
                        />
                      }
                      label={
                        <Typography
                          sx={{ fontSize: ".8rem", color: "#b4b4b4" }}
                        >
                          I agree terms and conditions
                        </Typography>
                      }
                      sx={{ fontSize: "10px" }}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={3}>
                    <FormControlLabel
                      control={
                        <InputCheckbox
                          name="i_declare"
                          id="i_declare"
                          value={checked.i_declare}
                          checked={checked}
                          setChecked={setChecked}
                          condition="i_declare"
                        />
                      }
                      label={
                        <Typography
                          sx={{ fontSize: ".8rem", color: "#b4b4b4" }}
                        >
                          I declare the information provided on this form is
                          accurate and complete to the best of my knowledge and
                          the failure to fullfill the requirements may render my
                          request in admissible
                        </Typography>
                      }
                      sx={{ fontSize: "10px" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3} mt={5}>
              <Stack
                spacing={2}
                sx={{
                  alignItems: { xs: "center", sm: "center", md: "flex-end" },
                }}
                pb={5}
                mr={{ xs: 0, sm: 0, md: 5 }}
              >
                {/* <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 400,
                      color: "#00ff95",
                    }}
                    mb={1}
                  >
                    Publishing Status
                  </Typography>
                  <Stack direction="column" spacing={3}>
                    <InputCoinStatusSelect
                      name="status"
                      id="status"
                      selectOptions={selectOptions}
                      setInputSelectValue={setPublishCoinStatus}
                      getInputSelectvalue={coinPublishStatus}
                    />

                    {coinPublishStatus.status === 2 && (
                      <InputDateTime
                        dateTime={coinPublishStatus}
                        setDateTime={setPublishCoinStatus}
                        statusTime={true}
                      />
                    )}
                  </Stack>
                </Grid> */}
                <Grid item xl={4} lg={4} md={4} sm={4} xs={4} pt={3}>
                  {loading ? (
                    <LoadingButton
                      color="secondary"
                      loading={loading}
                      loadingPosition="center"
                      // startIcon={<SaveIcon />}
                      variant="contained"
                      sx={{
                        width: "173px",
                        height: "41px",
                        backgroundColor: "rgb(61, 56, 122)",
                        borderRadius: "8px",
                        fontSize: "14px",
                        textTransform: "capitalize",
                        fontWeight: "300",
                      }}
                    >
                      Saving...Wait
                    </LoadingButton>
                  ) : (
                    <LargeBtn
                      Title="Submit your NFT"
                      lgBtnHandler={nftListingAddHandler}
                    />
                  )}
                </Grid>
              </Stack>
            </Grid>
          </Box>
        </Grid>
      </form>
    </Box>
  );
};

export default NFTListingAdd;
