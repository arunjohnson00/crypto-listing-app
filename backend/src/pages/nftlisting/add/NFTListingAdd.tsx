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
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormControlLabel } from "@mui/material";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { addNftListingsRequest } from "../../../store/action";
import InputTextArea from "../../../components/form/textarea/InputTextArea";
import InputSelectCoin from "../../../components/form/selectcoin/InputSelectCoin";
import EventMarketPlace from "./EventMarketPlace";
import CoinUploader from "../../../components/form/input/file/coinlogo/CoinUploader";
import InputSelectMultiple from "../../../components/form/selectmultiple/InputSelectMultiple";
import InputDate from "../../../components/form/input/date/InputDate";
import InputTime from "../../../components/form/input/time/InputTime";
import InputCheckbox from "../../../components/form/input/checkbox/InputCheckbox";
import CommunityNFTDetails from "./CommunityNFTDetails";
import SocialNFTDetails from "./SocialNFTDetails";
import ChatNFTDetails from "./ChatNFTDetails";

import { listCoinChatRequest } from "../../../store/action";
import { listCoinSocialRequest } from "../../../store/action";
import { listNftMarketPlacesRequest } from "../../../store/action";
import InputCoinStatusSelect from "../../../components/form/selectcoinstatus/InputCoinStatusSelect";
import InputDateTime from "../../../components/form/input/datetime/InputDateTime";

const NFTListingAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Scheduled", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];
  const nftMarketPlaceList = useSelector((nftList: any) => {
    return nftList.listNftMarketPlcesReducer.nftMarketPlcesListAll.data;
  });

  const nftChatList = useSelector((chatList: any) => {
    return chatList.listCoinChatReducer.coinChatListAll.data;
  });

  const nftSocialList = useSelector((socialList: any) => {
    return socialList.listCoinSocialReducer.coinSocialListAll.data;
  });

  const dispatch = useDispatch();

  const eventCategory = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const [checked, setChecked] = useState<any>({
    i_agree: false,
    i_declare: false,
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [addCoinLogo, setCoinLogo] = useState({ coinLogo: "" });
  const [eventCategoryMultiple, setEventCategoryMultiple] = useState<string[]>(
    []
  );

  const [coinPublishStatus, setPublishCoinStatus] = useState<any>({
    status: "",
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
    const successHandler = (res: any) => {
      console.log(res);

      setLoading(true);
      toast.success(`${res.data.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        navigate("/nft-listings");
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

    dispatch(addNftListingsRequest(formData, successHandler, errorHandler));
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
      listCoinChatRequest("emptyformData", successHandler, errorHandler)
    );
    dispatch(
      listCoinSocialRequest("emptyformData", successHandler, errorHandler)
    );

    dispatch(
      listNftMarketPlacesRequest("emptyformData", successHandler, errorHandler)
    );
  }, [dispatch]);

  return (
    <Grid container spacing={2} pt={2} pl={2}>
      <form id="coinForm">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <HorizonatalList />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3} pb={2}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <IconButton>
              <ArrowBackIosTwoToneIcon
                onClick={() => {
                  navigate("/nft-listings");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Add Nft
            </Typography>
          </Stack>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} spacing={0}>
          <Box
            sx={{ width: "100%", background: "white", borderRadius: "5px" }}
            pt={3}
            pl={4}
          >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack direction="row" spacing={2}>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography variant="h6" sx={{ textAlign: "left" }} mb={2}>
                      Event Title
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputText
                        placeholder="Eg: 09s8jgggffffay63733773"
                        id="address"
                        name="address"
                        width="auto"
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography variant="h6" sx={{ textAlign: "left" }} mb={2}>
                      Event Description
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputTextArea placeholder="Eg: 09s8jgggffffay63733773" />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography variant="h6" sx={{ textAlign: "left" }} mb={2}>
                      Select Event MarketPlace
                    </Typography>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack direction="row" spacing={3} mb={2}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "left" }}
                            mb={1}
                          >
                            Marketplace 1
                          </Typography>
                          <InputSelectCoin
                            name="market_place[1]"
                            id="market_place_1"
                            data={nftMarketPlaceList}
                          />
                        </Grid>
                        <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "left" }}
                            mb={1}
                          >
                            Marketplace URL
                          </Typography>
                          <InputText
                            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                            name="market_place_link[1]"
                            id="market_place_link_1"
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
                          sx={{ paddingTop: "37px" }}
                        >
                          <Link onClick={eventMarketaddHandle} underline="none">
                            Add MarketPlace +
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
                    <Typography variant="h6" sx={{ textAlign: "left" }} mb={2}>
                      Event Image
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <CoinUploader
                        name="logo"
                        id="logo"
                        setAddIcon={setCoinLogo}
                        addIconData={addCoinLogo}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "left" }}
                      mb={2}
                    >
                      Event Token Currency
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputSelectCoin />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "left" }}
                      mb={2}
                    >
                      What is the maximum number of items in your collection?*
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputText
                        placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                        name="market_place_link[1]"
                        id="market_place_link_1"
                        // width="auto"
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Stack direction="row" spacing={3} mb={2}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                      >
                        Event Category*
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          textAlign: "left",
                          marginLeft: "0",
                          marginTop: "4px",
                        }}
                      >
                        (Multiple selection allowed)
                      </Typography>
                    </Stack>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputSelectMultiple
                        setInputSelectMultipleValue={setEventCategoryMultiple}
                        getInputSelectMultiplevalue={eventCategoryMultiple}
                        selectOptions={eventCategory}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Grid item xl={7} lg={7} md={7} sm={7} xs={12} pt={3}>
                <Typography variant="h6" sx={{ textAlign: "left" }}>
                  Event Date
                </Typography>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mt={5}
                  >
                    Presale start date time
                  </Typography>
                  <Stack direction="row" spacing={3} mb={2} mt={1}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      <InputDate
                        date={presaleDate}
                        setDate={setPresaleDate}
                        name="presale_start_date[1]"
                        id="presale_start_date_1"
                        presaleStart={true}
                        disabled={launchDate}
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      <InputTime
                        time={presaleDate}
                        setTime={setPresaleDate}
                        name="presale_start_time[1]"
                        id="presale_start_time_1"
                        presaleStart={true}
                        disabled={launchDate}
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      {!presaleEndDateTime && (
                        <Link
                          onClick={presaleEndTimeOpenHandler}
                          underline="none"
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
                      sx={{ textAlign: "left" }}
                      mt={2}
                    >
                      Presale end date time
                    </Typography>
                    <Stack direction="row" spacing={3} mb={2} mt={0}>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <InputDate
                          date={presaleDate}
                          setDate={setPresaleDate}
                          name="presale_end_date[1]"
                          id="presale_end_date_1"
                          presaleEnd={true}
                          disabled={launchDate}
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <InputTime
                          time={presaleDate}
                          setTime={setPresaleDate}
                          name="presale_end_time[1]"
                          id="presale_end_time_1"
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
                          <DeleteIcon fontSize="inherit" />
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
                    sx={{ textAlign: "left" }}
                    mt={5}
                  >
                    Public mint start date time
                  </Typography>
                  <Stack direction="row" spacing={3} mb={2} mt={1}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      <InputDate
                        date={publicMintDate}
                        setDate={setPublicMintDate}
                        name="public_mint_start_date[1]"
                        id="public_mint_start_date_1"
                        publicMintStart={true}
                        disabled={launchDate}
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      <InputTime
                        time={publicMintDate}
                        setTime={setPublicMintDate}
                        name="public_mint_start_time[1]"
                        id="public_mint_start_time_1"
                        publicMintStart={true}
                        disabled={launchDate}
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      {!publicMintEndDateTime && (
                        <Link
                          onClick={publicMintEndTimeOpenHandler}
                          underline="none"
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
                      sx={{ textAlign: "left" }}
                      mt={2}
                    >
                      Presale end date time
                    </Typography>
                    <Stack direction="row" spacing={3} mb={2} mt={0}>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <InputDate
                          date={publicMintDate}
                          setDate={setPublicMintDate}
                          name="public_mint_end_date[1]"
                          id="public_mint_end_date_1"
                          publicMintEnd={true}
                          disabled={launchDate}
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <InputTime
                          time={publicMintDate}
                          setTime={setPublicMintDate}
                          name="public_mint_end_time[1]"
                          id="public_mint_end_time_1"
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
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </Grid>
                    </Stack>
                  </Grid>
                )}
              </Grid>

              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={12} pt={0}>
                  <Stack
                    direction="row"
                    spacing={3}
                    mb={2}
                    mt={0}
                    sx={{ alignItems: "center" }}
                  >
                    <InputCheckbox
                      name="launch_date"
                      checked={launchDate}
                      setChecked={setLaunchDate}
                      condition="launch_date"
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "left", marginleft: 0 }}
                      mt={5}
                    >
                      Don't you know launch date?
                    </Typography>
                  </Stack>
                </Grid>{" "}
              </Grid>

              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12} pt={0}>
                  <Stack
                    direction="row"
                    spacing={3}
                    mb={2}
                    mt={0}
                    sx={{ alignItems: "center" }}
                  >
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12} pt={0}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left", marginleft: 0 }}
                        mt={5}
                        mb={1}
                      >
                        Pre-Sale Mint Price
                      </Typography>
                      <InputText
                        placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                        name="market_place_link[1]"
                        id="market_place_link_1"
                        // width="auto"
                        InputProps={{
                          endAdornment: (
                            <Button
                              variant="contained"
                              sx={{
                                background: "#E9ECEF",
                                color: "black",
                                boxShadow: "none",
                                "&:hover": {
                                  backgroundColor: "#E9ECEF",
                                  color: "black",
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
                        sx={{ textAlign: "left", marginleft: 0 }}
                        mt={5}
                        mb={1}
                      >
                        Public Mint Price
                      </Typography>
                      <InputText
                        placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                        name="market_place_link[1]"
                        id="market_place_link_1"
                        // width="auto"

                        InputProps={{
                          endAdornment: (
                            <Button
                              variant="contained"
                              sx={{
                                background: "#E9ECEF",
                                color: "black",
                                boxShadow: "none",
                                "&:hover": {
                                  backgroundColor: "#E9ECEF",
                                  color: "black",
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
                    mb={2}
                  >
                    <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                      Community Details
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left" }}
                      mb={2}
                    >
                      Please Provide the information about NFT
                    </Typography>
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack direction="row" spacing={3}>
                      <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{ textAlign: "left" }}
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
                        sx={{ paddingTop: "37px" }}
                      >
                        <Link onClick={communityaddHandle} underline="none">
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

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
                    <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                      Chat Details
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left" }}
                      mb={2}
                    >
                      Please Provide the information about NFT
                    </Typography>
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack direction="row" spacing={3}>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{ textAlign: "left" }}
                          mb={1}
                        >
                          Chat Platform
                        </Typography>
                        <InputSelectCoin
                          name="chat_platform[1]"
                          id="chat_platform_1"
                          data={nftChatList}
                        />
                      </Grid>
                      <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{ textAlign: "left" }}
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
                        sx={{ paddingTop: "37px" }}
                      >
                        <Link onClick={chataddHandle} underline="none">
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
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
                    <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                      Socials
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left" }}
                      mb={2}
                    >
                      Please Provide the information about NFT
                    </Typography>
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack direction="row" spacing={3}>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{ textAlign: "left" }}
                          mb={1}
                        >
                          Select Platform
                        </Typography>
                        <InputSelectCoin
                          name="social_platform[1]"
                          id="social_platform_1"
                          data={nftSocialList}
                        />
                      </Grid>
                      <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{ textAlign: "left" }}
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
                        sx={{ paddingTop: "37px" }}
                      >
                        <Link onClick={socialaddHandle} underline="none">
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
                      label="I agree terms and conditions"
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
                      label="I declare the information provided on this form is accurate and complete to the best of my knowledge and the failure to fullfill the requirements may render my request in admissible"
                      sx={{ fontSize: "10px" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3} mt={5}>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  alignItems: "center",
                }}
                pb={5}
                mr={5}
              >
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
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
                </Grid>
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
    </Grid>
  );
};

export default NFTListingAdd;
