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
} from "@mui/material";
import LargeBtn from "../../../../components/useradmin/form/button/large/LargeBtn";
import InputText from "../../../../components/useradmin/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import LoadingButton from "@mui/lab/LoadingButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormControlLabel } from "@mui/material";

import InputTextArea from "../../../../components/useradmin/form/textarea/InputTextArea";
import InputSelectCoin from "../../../../components/useradmin/form/selectcoin/InputSelectCoin";
import CoinUploader from "../../../../components/useradmin/form/input/file/coinlogo/CoinUploader";
import InputSelectMultiple from "../../../../components/useradmin/form/selectmultiple/InputSelectMultiple";
import InputDate from "../../../../components/useradmin/form/input/date/InputDate";
import InputTime from "../../../../components/useradmin/form/input/time/InputTime";
import InputCheckbox from "../../../../components/useradmin/form/input/checkbox/InputCheckbox";
import InputCoinStatusSelect from "../../../../components/useradmin/form/selectcoinstatus/InputCoinStatusSelect";
import InputDateTime from "../../../../components/useradmin/form/input/datetime/InputDateTime";

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
} from "../../../../store/action";

const NFTListingAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Scheduled", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

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

    const successHandler = (res: any) => {
      console.log(res.data.message);
      setLoading(true);
      toast.success(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        navigate("/user-dashboard");
      }, 3000);
    };

    const errorHandler = (err: any) => {
      console.log(err);

      toast.error(`${err.error.message.response.request.responseText}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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
      <form id="coinForm">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3} pb={2}>
          <Stack
            direction={{ xs: "row", sm: "row", md: "row" }}
            spacing={1}
            sx={{ alignItems: "flex-start", justifyContent: "flex-start" }}
            px={2}
            pt={3}
          >
            {/* <IconButton>
              <ArrowBackIosTwoToneIcon
                onClick={() => {
                  navigate("/nft-listing");
                }}
              />
            </IconButton> */}

            <Typography
              variant="h5"
              sx={{ textAlign: "left", color: "#FFFFFF" }}
            >
              Add Nft
            </Typography>
          </Stack>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} spacing={0}>
          <Box
            sx={{ width: "auto", background: "#030921", borderRadius: "7px" }}
            px={{ xs: 3, sm: 3, md: 5 }}
            py={5}
            mb={5}
          >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={2}
              >
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", color: "#D7DADB" }}
                      mb={2}
                    >
                      Event Title
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputText
                        placeholder="Eg: 09s8jgggffffay63733773"
                        id="title"
                        name="title"
                        width="auto"
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", color: "#D7DADB" }}
                      mb={2}
                    >
                      Event Description
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputTextArea
                        placeholder="Eg: 09s8jgggffffay63733773"
                        name="description"
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", color: "#D7DADB" }}
                      mb={2}
                    >
                      Select Event MarketPlace
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
                              fontWeight: 600,
                              color: "#13C086",
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
                          />
                        </Grid>
                        <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textAlign: "left",
                              fontSize: ".9rem",
                              fontWeight: 600,
                              color: "#13C086",
                            }}
                            mb={1}
                          >
                            Marketplace URL
                          </Typography>
                          <InputText
                            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
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
                <Divider orientation="vertical" flexItem />
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pl={2} pt={5}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", color: "#D7DADB" }}
                      mb={2}
                    >
                      Event Image
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <CoinUploader
                        name="image"
                        id="image"
                        setAddIcon={setCoinLogo}
                        addIconData={addCoinLogo}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                        color: "#13C086",
                      }}
                      mb={2}
                    >
                      Event Token Currency
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputSelectCoin
                        name="currancy_id"
                        data={nftListingCurrencyList}
                        height={40}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                        color: "#13C086",
                      }}
                      mb={2}
                    >
                      What is the maximum number of items in your collection?*
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputText
                        placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                        name="max_num_items"
                        id="max_num_items"
                        // width="auto"
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
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
                          fontWeight: 600,
                          color: "#13C086",
                        }}
                      >
                        Event Category*
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        <span style={{ color: "#234A84", fontWeight: 600 }}>
                          {" "}
                          (Multiple selection allowed)
                        </span>
                      </Typography>
                    </Stack>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputSelectMultiple
                        setInputSelectMultipleValue={setEventCategoryMultiple}
                        getInputSelectMultiplevalue={eventCategoryMultiple}
                        selectOptions={nftListingCategoryList}
                        // name="category_id "
                      />
                    </Grid>
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
                      fontWeight: 600,
                      color: "#13C086",
                    }}
                    mt={5}
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
                        fontWeight: 600,
                        color: "#13C086",
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
                      fontWeight: 600,
                      color: "#13C086",
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
                        fontWeight: 600,
                        color: "#13C086",
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
                        color: "#13C086",
                      }}
                      mt={5}
                    >
                      Don't you know launch date?
                    </Typography>
                  </Stack>
                </Grid>{" "}
              </Grid>
              <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    fontSize: ".9rem",
                    fontWeight: 600,
                    marginleft: 0,
                    color: "#13C086",
                  }}
                  mt={5}
                  mb={1}
                >
                  NFT Network
                </Typography>
                <Box maxWidth="300px">
                  <InputSelectCoin
                    name="nft_network_id"
                    id="nft_network_id"
                    data={allNFTNetwork}
                    height={40}
                    varient="nft_network"
                  />
                </Box>
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12} pt={0}>
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
                          fontWeight: 600,
                          marginleft: 0,
                          color: "#13C086",
                        }}
                        mt={{ xs: 3, sm: 3, md: 5 }}
                        mb={1}
                      >
                        Pre-Sale Mint Price
                      </Typography>
                      <InputText
                        placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                        name="pre_sale_mint_price"
                        id="pre_sale_mint_price"
                        // width="auto"
                        InputProps={{
                          endAdornment: (
                            <Button
                              variant="contained"
                              sx={{
                                background: "#0e155a",
                                color: "#FFFFFF",
                                boxShadow: "none",
                                "&:hover": {
                                  backgroundColor: "#0e155a",
                                  color: "#FFFFFF",
                                  boxShadow: "none",
                                },
                              }}
                            >
                              ETH
                            </Button>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12} pt={0}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 600,
                          marginleft: 0,
                          color: "#13C086",
                        }}
                        mt={{ xs: 3, sm: 3, md: 5 }}
                        mb={1}
                      >
                        Public Mint Price
                      </Typography>
                      <InputText
                        placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                        name="public_mint_price"
                        id="public_mint_price"
                        // width="auto"

                        InputProps={{
                          endAdornment: (
                            <Button
                              variant="contained"
                              sx={{
                                background: "#0e155a",
                                color: "#FFFFFF",
                                boxShadow: "none",
                                "&:hover": {
                                  backgroundColor: "#0e155a",
                                  color: "#FFFFFF",
                                  boxShadow: "none",
                                },
                              }}
                            >
                              ETH
                            </Button>
                          ),
                        }}
                      />
                    </Grid>
                  </Stack>
                </Grid>

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
                      Please provide information about NFT.
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
                            fontWeight: 600,
                            color: "#13C086",
                          }}
                          mb={1}
                        >
                          Website URL
                        </Typography>
                        <InputText
                          placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
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
                      Chat Details
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left", color: "#b4b4b4" }}
                      mb={2}
                    >
                      Please provide information about NFT.
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
                            fontWeight: 600,
                            color: "#13C086",
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
                        />
                      </Grid>
                      <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            fontSize: ".9rem",
                            fontWeight: 600,
                            color: "#13C086",
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
                  </Grid>

                  {chatCount.map((chat, index) => {
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
                  })}
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
                      Socials
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left", color: "#b4b4b4" }}
                      mb={2}
                    >
                      Please provide information about NFT.
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
                            fontWeight: 600,
                            color: "#13C086",
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
                        />
                      </Grid>
                      <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            fontSize: ".9rem",
                            fontWeight: 600,
                            color: "#13C086",
                          }}
                          mb={1}
                        >
                          Social URL
                        </Typography>
                        <InputText
                          placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
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
                          sx={{ fontSize: ".8rem", color: "#FFFFFF" }}
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
                          sx={{ fontSize: ".8rem", color: "#FFFFFF" }}
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
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={2}
                sx={{
                  alignItems: "center",
                }}
                pb={5}
                mr={5}
              >
                {/* <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 600,
                      color: "#13C086",
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
                      Title="Add new NFT"
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
