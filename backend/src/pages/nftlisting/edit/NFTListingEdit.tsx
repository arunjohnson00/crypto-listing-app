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
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormControlLabel } from "@mui/material";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";

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

import {
  allCoinChatRequest,
  allCoinSocialRequest,
  listCoinChatRequest,
} from "../../../store/action";
import { listCoinSocialRequest } from "../../../store/action";
import { listNftMarketPlaceRequest } from "../../../store/action";
import { allNftListingCurrencyRequest } from "../../../store/action";
import { allNftListingCategoryRequest } from "../../../store/action";
import { editNftListingRequest } from "../../../store/action";
import { updateNftListingRequest } from "../../../store/action";
import { allNFTNetworkRequest } from "../../../store/action";

import InputCoinStatusSelect from "../../../components/form/selectcoinstatus/InputCoinStatusSelect";
import InputDateTime from "../../../components/form/input/datetime/InputDateTime";
import dateFormat, { masks } from "dateformat";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const NFTListingEdit = () => {
  const [richText, setRichText] = useState({ details: "", description: "" });
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];
  const [nftListingData, setNftListingData] = useState<any>({});
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nftListingCurrencyList = useSelector((nftCurrencyList: any) => {
    return nftCurrencyList.nftListingCurrencyReducer.allNftListingCurrency.data;
  });

  const nftListingCategoryList = useSelector((nftCategoryList: any) => {
    return nftCategoryList.nftListingCategoryReducer.allNftListingCategory.data;
  });

  const nftMarketPlaceList = useSelector((nftList: any) => {
    return nftList.nftMarketPlacesReducer.listNftMarketPlaces.data;
  });

  const nftChatList = useSelector((chatList: any) => {
    return chatList.chatReducer.allChat.data;
  });
  const allNFTNetwork = useSelector((nftNetworkList: any) => {
    return nftNetworkList.nftNetworksReducer.allNFTNetworks.data;
  });
  const nftSocialList = useSelector((socialList: any) => {
    return socialList.socialsReducer.allSocials.data;
  });

  const [checked, setChecked] = useState<any>({
    i_agree: false,
    i_declare: false,
  });
  const [loading, setLoading] = useState(false);
  const [addCoinLogo, setCoinLogo] = useState({ coinLogo: "" });
  const [eventCategoryMultiple, setEventCategoryMultiple] = useState<any>([]);
  const [coinPublishStatus, setPublishCoinStatus] = useState<any>({
    status: "",
    statusDateTime: new Date(),
    is_scheduled: 0,
  });
  const [presaleDate, setPresaleDate] = useState<any>({
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: "",
  });
  const [publicMintDate, setPublicMintDate] = useState<any>({
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: "",
  });

  // Display the key/value pairs

  const nftListingAddHandler = () => {
    var formData = new FormData(document.querySelector("#coinForm") as any);

    for (var i = 0; i < eventCategoryMultiple.length; i++) {
      formData.append(`category_id[${i}]`, eventCategoryMultiple[i]);
    }
    formData.append("id", nftListingData.id);

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
    // formData.append("description", richText?.description);
    addCoinLogo.coinLogo !== "" &&
      formData.append("image", addCoinLogo.coinLogo);
    formData.append("status", coinPublishStatus.status);

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
        navigate("/nft-listing");
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

    dispatch(updateNftListingRequest(formData, successHandler, errorHandler));
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

  const [eventMarketCount, setEventMarketCount] = useState<any[]>([]);

  const eventMarketaddHandle = () => {
    setEventMarketCount([...eventMarketCount, { eventMarket: "" }]);
  };

  const eventMarketremoveHandle = (index: any) => {
    let eventMarketList = [...eventMarketCount];
    eventMarketList.splice(-1, 1);
    setEventMarketCount(eventMarketList);
    const eventmarketlist = nftListingData?.has_many_marketplaces?.filter(
      (item: any) => {
        return item?.id !== index;
      }
    );

    //console.log(sociallist, index);
    setNftListingData({
      ...nftListingData,
      has_many_marketplaces: eventmarketlist,
    });
  };

  const [communityCount, setcommunityCount] = useState<any[]>([]);

  const communityaddHandle = () => {
    setcommunityCount([...communityCount, { community: "" }]);
  };

  const communityremoveHandle = (index: any) => {
    let communityList = [...communityCount];
    communityList.splice(-1, 1);
    setcommunityCount(communityList);
    const communitylist = nftListingData?.has_many_communitys?.filter(
      (item: any) => {
        return item?.id !== index;
      }
    );

    //console.log(sociallist, index);
    setNftListingData({
      ...nftListingData,
      has_many_communitys: communitylist,
    });
  };

  const [chatCount, setchatCount] = useState<any[]>([]);

  const chataddHandle = () => {
    setchatCount([...chatCount, { chat: "" }]);
  };

  const chatremoveHandle = (index: any) => {
    let chatList = [...chatCount];
    chatList.splice(-1, 1);
    setchatCount(chatList);
    const chatlist = nftListingData?.has_many_chats?.filter((item: any) => {
      return item?.id !== index;
    });

    //console.log(sociallist, index);
    setNftListingData({ ...nftListingData, has_many_chats: chatlist });
  };

  const [socialCount, setsocialCount] = useState<any[]>([]);

  const socialaddHandle = () => {
    setsocialCount([...socialCount, { social: "" }]);
  };

  const socialremoveHandle = (index: any) => {
    let socialList = [...socialCount];
    socialList.splice(-1, 1);
    setsocialCount(socialList);

    const sociallist = nftListingData?.has_many_socials?.filter((item: any) => {
      return item?.id !== index;
    });

    //console.log(sociallist, index);
    setNftListingData({ ...nftListingData, has_many_socials: sociallist });
  };

  const [launchDate, setLaunchDate] = useState<boolean>(false);

  useEffect(() => {
    const successHandler = (res: any) => {
      //console.log(res);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };

    dispatch(allCoinChatRequest("emptyformData", successHandler, errorHandler));
    dispatch(
      allCoinSocialRequest("emptyformData", successHandler, errorHandler)
    );

    dispatch(
      listNftMarketPlaceRequest("emptyformData", successHandler, errorHandler)
    );
    dispatch(
      allNFTNetworkRequest("emptyformData", successHandler, errorHandler)
    );
    dispatch(
      allNftListingCurrencyRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );

    dispatch(
      allNftListingCategoryRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);

      //new Date(year, month, day, hours, minutes, seconds, milliseconds)

      // console.log(today);

      setNftListingData(res.data.data);
      setPresaleDate({
        start_date: res?.data?.data?.pre_sale_start_date,
        start_time: new Date(
          res?.data?.data?.pre_sale_start_date +
            " " +
            res?.data?.data?.pre_sale_start_time
        ),
        end_date: res?.data?.data?.pre_sale_end_date,
        end_time: new Date(
          res?.data?.data?.pre_sale_end_date +
            " " +
            res?.data?.data?.pre_sale_end_time
        ),
      });

      setPublicMintDate({
        start_date: res?.data?.data?.public_mint_start_date,
        start_time: new Date(
          res?.data?.data?.public_mint_start_date +
            " " +
            res?.data?.data?.public_mint_start_time
        ),
        end_date: res?.data?.data?.public_mint_end_date,
        end_time: new Date(
          res?.data?.data?.public_mint_end_date +
            " " +
            res?.data?.data?.public_mint_end_time
        ),
      });
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editNftListingRequest({ id: id }, successHandler, errorHandler));
  }, [dispatch, id]);
  return (
    <Grid container spacing={2} pt={2} pl={2}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form id="coinForm">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <HorizonatalList />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3} pb={2}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <IconButton>
              <ArrowBackIosTwoToneIcon
                onClick={() => {
                  navigate("/nft-listing");
                }}
              />
            </IconButton>

            <Stack
              direction={{ xs: "column" }}
              spacing={0}
              sx={{ alignItems: "flex-start", justifyContent: "flex-start" }}
            >
              <Typography
                variant="h5"
                sx={{ textAlign: "left", color: "#000000", fontWeight: 600 }}
              >
                Edit Your NFT Project
              </Typography>
              <Typography
                variant="caption"
                sx={{ textAlign: "left", color: "#000000" }}
              >
                In this page you can submit your NFT project, please make sure
                to upload all info as showing below.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} spacing={0}>
          <Box
            sx={{ width: "100%", background: "white", borderRadius: "5px" }}
            pt={3}
            pl={4}
            pr={4}
          >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack direction="row" spacing={2}>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography variant="h6" sx={{ textAlign: "left" }} mb={2}>
                      NFT Title
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputText
                        placeholder="Eg: Bored Ape"
                        id="title"
                        name="title"
                        width="auto"
                        value={nftListingData?.title}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography variant="h6" sx={{ textAlign: "left" }} mb={2}>
                      NFT Description
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputTextArea
                        // variant="richtextdescription"
                        placeholder="Enter Detailed Project Details. Recommended word count 450 - 950."
                        name="description"
                        value={nftListingData?.description}
                        width={600}
                        data={nftListingData}
                        setData={setNftListingData}
                        richText={richText}
                        setRichText={setRichText}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Typography variant="h6" sx={{ textAlign: "left" }} mb={2}>
                      Select NFT MarketPlace
                    </Typography>
                    {nftListingData?.has_many_marketplaces?.length !== 0 &&
                    nftListingData?.has_many_marketplaces !== undefined ? (
                      nftListingData?.has_many_marketplaces?.map(
                        (marketplaces: any, index: number) => {
                          return (
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                              <Stack direction="row" spacing={3} mb={2}>
                                <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      textAlign: "left",
                                      fontSize: ".9rem",
                                      fontWeight: 600,
                                    }}
                                    mb={1}
                                  >
                                    Marketplace {index + 1}
                                  </Typography>
                                  <InputSelectCoin
                                    data={nftMarketPlaceList}
                                    name={`marketplace_id[${index + 1}]`}
                                    id={`marketplace_id_${index + 1}`}
                                    value={marketplaces.marketplace_id}
                                    selectedValue={marketplaces.marketplace_id}
                                    height={40}
                                    variant="nft_marketplace"
                                    title="Select Marketplace"
                                  />
                                </Grid>
                                <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      textAlign: "left",
                                      fontSize: ".9rem",
                                      fontWeight: 600,
                                    }}
                                    mb={1}
                                  >
                                    Marketplace URL {index + 1}
                                  </Typography>
                                  <InputText
                                    placeholder="Enter NFT Marketplace url"
                                    // width="auto"
                                    name={`marketplace_url[${index + 1}]`}
                                    id={`marketplace_url_${index + 1}`}
                                    value={marketplaces.marketplace_url}
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
                                  {nftListingData?.has_many_marketplaces
                                    ?.length -
                                    1 ===
                                  index ? (
                                    <Link
                                      onClick={eventMarketaddHandle}
                                      underline="none"
                                    >
                                      Add MarketPlace +
                                    </Link>
                                  ) : (
                                    <IconButton
                                      aria-label="delete"
                                      size="large"
                                      onClick={() =>
                                        eventMarketremoveHandle(
                                          marketplaces?.id
                                        )
                                      }
                                    >
                                      <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                  )}
                                </Grid>
                              </Stack>
                            </Grid>
                          );
                        }
                      )
                    ) : (
                      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Stack direction="row" spacing={3} mb={2}>
                          <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                textAlign: "left",
                                fontSize: ".9rem",
                                fontWeight: 600,
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
                              title="Select Marketplace"
                            />
                          </Grid>
                          <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                textAlign: "left",
                                fontSize: ".9rem",
                                fontWeight: 600,
                              }}
                              mb={1}
                            >
                              Marketplace URL 1
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
                            sx={{ paddingTop: "37px" }}
                          >
                            <Link
                              onClick={eventMarketaddHandle}
                              underline="none"
                            >
                              Add MarketPlace +
                            </Link>
                          </Grid>
                        </Stack>
                      </Grid>
                    )}
                    {eventMarketCount.map((eventMarket, index) => {
                      return (
                        <div>
                          <EventMarketPlace
                            eventMarketCount={eventMarketCount}
                            index={
                              nftListingData?.has_many_marketplaces &&
                              nftListingData?.has_many_marketplaces !==
                                undefined
                                ? nftListingData?.has_many_marketplaces
                                    ?.length -
                                  1 +
                                  index
                                : index
                            }
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
                      NFT Image
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <CoinUploader
                        name="image"
                        id="image"
                        setAddIcon={setCoinLogo}
                        addIconData={addCoinLogo}
                        image={`${serverAPIUrl}public/uploads/nft_listing_image/${nftListingData?.image}`}
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
                      }}
                      mb={2}
                    >
                      Event Token Currency
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputSelectCoin
                        type="currency"
                        name="currancy_id"
                        data={nftListingCurrencyList}
                        selectedValue={
                          nftListingData && nftListingData?.currancy_id
                        }
                        height={40}
                        variant="nft_listing_currency"
                        title="Select currency"
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
                      }}
                      mb={2}
                    >
                      What is the maximum number of items in your collection?
                    </Typography>

                    <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                      <InputText
                        placeholder="Eg: 1000000"
                        name="max_num_items"
                        id="max_num_items"
                        // width="auto"
                        value={nftListingData?.max_num_items}
                        type="number"
                      />
                    </Grid>
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
                    <Stack direction="row" spacing={3} mb={2}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 600,
                        }}
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
                        selectOptions={nftListingCategoryList}
                        // name="category_id "
                        //  value={nftListingData?.description}
                        serverMultiRef={nftListingData?.has_many_event_category}
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
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 600,
                    }}
                    mt={5}
                  >
                    Presale start date time
                  </Typography>
                  <Stack direction="row" spacing={3} mb={2} mt={1}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      <InputDate
                        date={presaleDate}
                        setDate={setPresaleDate}
                        id="pre_sale_start_date"
                        presaleStart={true}
                        disabled={launchDate}
                        ServerValue={nftListingData?.pre_sale_start_date}
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      <InputTime
                        time={presaleDate}
                        setTime={setPresaleDate}
                        id="pre_sale_start_time"
                        presaleStart={true}
                        disabled={launchDate}
                        ServerValue={nftListingData?.pre_sale_start_time}
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      {!presaleEndDateTime && (
                        <Link
                          onClick={presaleEndTimeOpenHandler}
                          underline="none"
                        >
                          {nftListingData.pre_sale_end_date !== "" ||
                          nftListingData.pre_sale_end_time !== ""
                            ? "Show End Time +"
                            : "Add End Time +"}
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
                      }}
                      mt={2}
                    >
                      Presale end date time
                    </Typography>
                    <Stack direction="row" spacing={3} mb={2} mt={0}>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <InputDate
                          date={presaleDate}
                          setDate={setPresaleDate}
                          id="pre_sale_end_date"
                          presaleEnd={true}
                          disabled={launchDate}
                          ServerValue={nftListingData?.pre_sale_end_date}
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <InputTime
                          time={presaleDate}
                          setTime={setPresaleDate}
                          id="pre_sale_end_time"
                          presaleEnd={true}
                          disabled={launchDate}
                          ServerValue={nftListingData?.pre_sale_end_time}
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
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 600,
                    }}
                    mt={5}
                  >
                    Public mint start date time
                  </Typography>
                  <Stack direction="row" spacing={3} mb={2} mt={1}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      <InputDate
                        date={publicMintDate}
                        setDate={setPublicMintDate}
                        id="public_mint_start_date"
                        publicMintStart={true}
                        disabled={launchDate}
                        ServerValue={nftListingData?.public_mint_start_date}
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      <InputTime
                        time={publicMintDate}
                        setTime={setPublicMintDate}
                        id="public_mint_start_time"
                        publicMintStart={true}
                        disabled={launchDate}
                        ServerValue={nftListingData?.public_mint_start_time}
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                      {!publicMintEndDateTime && (
                        <Link
                          onClick={publicMintEndTimeOpenHandler}
                          underline="none"
                        >
                          {nftListingData.public_mint_end_date !== "" ||
                          nftListingData.public_mint_end_time !== ""
                            ? "Show End Time +"
                            : "Add End Time +"}
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
                      }}
                      mt={2}
                    >
                      Public mint end date time
                    </Typography>
                    <Stack direction="row" spacing={3} mb={2} mt={0}>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <InputDate
                          date={publicMintDate}
                          setDate={setPublicMintDate}
                          id="public_mint_end_date"
                          publicMintEnd={true}
                          disabled={launchDate}
                          ServerValue={nftListingData?.public_mint_end_date}
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={0}>
                        <InputTime
                          time={publicMintDate}
                          setTime={setPublicMintDate}
                          id="public_mint_end_time"
                          publicMintEnd={true}
                          disabled={launchDate}
                          ServerValue={nftListingData?.public_mint_end_time}
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
                      name="is_launch"
                      checked={launchDate}
                      setChecked={setLaunchDate}
                      condition="launch_date"
                      value={launchDate}
                      serverCheckedRef={nftListingData?.is_launch}
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        marginleft: 0,
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
                  }}
                  mt={5}
                  mb={1}
                >
                  What is your collection's blockchain? <br />
                  <Typography
                    variant="caption"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    ( If you don't know, it's likely Ethereum ){" "}
                  </Typography>
                </Typography>
                <InputSelectCoin
                  name="nft_network_id"
                  id="nft_network_id"
                  data={allNFTNetwork}
                  height={40}
                  variant="nft_network"
                  selectedValue={nftListingData?.nft_network_id}
                />
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
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 600,
                          marginleft: 0,
                        }}
                        mt={5}
                        mb={1}
                      >
                        Pre-Sale Mint Price
                      </Typography>
                      <InputText
                        placeholder="Eg: 7"
                        name="pre_sale_mint_price"
                        id="pre_sale_mint_price"
                        // width="auto"
                        value={nftListingData?.pre_sale_mint_price}
                        type="number"
                        // InputProps={{
                        //   endAdornment: (
                        //     <Button
                        //       variant="contained"
                        //       sx={{
                        //         background: "#E9ECEF",
                        //         color: "black",
                        //         boxShadow: "none",
                        //         "&:hover": {
                        //           backgroundColor: "#E9ECEF",
                        //           color: "black",
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
                          fontWeight: 600,
                          marginleft: 0,
                        }}
                        mt={5}
                        mb={1}
                      >
                        Public Mint Price
                      </Typography>
                      <InputText
                        placeholder="Eg: 7"
                        name="public_mint_price"
                        id="public_mint_price"
                        // width="auto"
                        value={nftListingData?.public_mint_price}
                        type="number"
                        // InputProps={{
                        //   endAdornment: (
                        //     <Button
                        //       variant="contained"
                        //       sx={{
                        //         background: "#E9ECEF",
                        //         color: "black",
                        //         boxShadow: "none",
                        //         "&:hover": {
                        //           backgroundColor: "#E9ECEF",
                        //           color: "black",
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
                      Please provide NFT community details
                    </Typography>
                  </Grid>
                  {nftListingData?.has_many_communitys?.length !== 0 &&
                  nftListingData?.has_many_communitys !== undefined ? (
                    nftListingData?.has_many_communitys?.map(
                      (communitys: any, index: number) => {
                        return (
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Stack direction="row" spacing={3}>
                              <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                                <Typography
                                  variant="subtitle1"
                                  sx={{
                                    textAlign: "left",
                                    fontSize: ".9rem",
                                    fontWeight: 600,
                                  }}
                                  mb={1}
                                >
                                  Website URL {index + 1}
                                </Typography>
                                <InputText
                                  placeholder="Enter official website url"
                                  name={`community_website_url[${index + 1}]`}
                                  id={`community_website_url_${index + 1}`}
                                  value={communitys.community_website_url}
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
                                {nftListingData?.has_many_communitys?.length -
                                  1 ===
                                index ? (
                                  <Link
                                    onClick={communityaddHandle}
                                    underline="none"
                                  >
                                    Add more +
                                  </Link>
                                ) : (
                                  <IconButton
                                    aria-label="delete"
                                    size="large"
                                    onClick={() =>
                                      communityremoveHandle(communitys?.id)
                                    }
                                  >
                                    <DeleteIcon fontSize="inherit" />
                                  </IconButton>
                                )}
                              </Grid>
                            </Stack>
                          </Grid>
                        );
                      }
                    )
                  ) : (
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack direction="row" spacing={3}>
                        <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textAlign: "left",
                              fontSize: ".9rem",
                              fontWeight: 600,
                            }}
                            mb={1}
                          >
                            Website URL
                          </Typography>
                          <InputText
                            placeholder="Enter official website url"
                            name={`community_website_url[1]`}
                            id={`community_website_url_1`}
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
                  )}

                  {communityCount.map((community, index) => {
                    return (
                      <div>
                        <CommunityNFTDetails
                          communityCount={communityCount}
                          index={
                            nftListingData?.has_many_communitys &&
                            nftListingData?.has_many_communitys !== undefined
                              ? nftListingData?.has_many_communitys?.length -
                                1 +
                                index
                              : index
                          }
                          key={index}
                          communityremoveHandle={communityremoveHandle}
                        />
                      </div>
                    );
                  })}

                  {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
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

                  {nftListingData?.has_many_chats?.length !== 0 &&
                  nftListingData?.has_many_chats !== undefined ? (
                    nftListingData?.has_many_chats?.map(
                      (chats: any, index: number) => {
                        return (
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Stack direction="row" spacing={3}>
                              <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                                <Typography
                                  variant="subtitle1"
                                  sx={{
                                    textAlign: "left",
                                    fontSize: ".9rem",
                                    fontWeight: 600,
                                  }}
                                  mb={1}
                                >
                                  Chat Platform {index + 1}
                                </Typography>
                                <InputSelectCoin
                                  //  name="chat_platform_id[1]"
                                  //  id="chat_platform_id_1"
                                  data={nftChatList}
                                  name={`chat_platform_id[${index + 1}]`}
                                  id={`chat_platform_id_${index + 1}`}
                                  selectedValue={parseInt(
                                    chats.chat_platform_id
                                  )}
                                  height={40}
                                  variant="chat"
                                />
                              </Grid>
                              <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                                <Typography
                                  variant="subtitle1"
                                  sx={{
                                    textAlign: "left",
                                    fontSize: ".9rem",
                                    fontWeight: 600,
                                  }}
                                  mb={1}
                                >
                                  Chat URL {index + 1}
                                </Typography>
                                <InputText
                                  placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                                  name={`chat_url[${index + 1}]`}
                                  id={`chat_url_${index + 1}`}
                                  value={chats.chat_url}
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
                                {nftListingData?.has_many_chats?.length - 1 ===
                                index ? (
                                  <Link
                                    onClick={chataddHandle}
                                    underline="none"
                                  >
                                    Add more +
                                  </Link>
                                ) : (
                                  <IconButton
                                    aria-label="delete"
                                    size="large"
                                    onClick={() => chatremoveHandle(chats?.id)}
                                  >
                                    <DeleteIcon fontSize="inherit" />
                                  </IconButton>
                                )}
                              </Grid>
                            </Stack>
                          </Grid>
                        );
                      }
                    )
                  ) : (
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack direction="row" spacing={3}>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textAlign: "left",
                              fontSize: ".9rem",
                              fontWeight: 600,
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
                                variant="chat"
                          />
                        </Grid>
                        <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textAlign: "left",
                              fontSize: ".9rem",
                              fontWeight: 600,
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
                          sx={{ paddingTop: "37px" }}
                        >
                          <Link onClick={chataddHandle} underline="none">
                            Add more +
                          </Link>
                        </Grid>
                      </Stack>
                    </Grid>
                  )}

                  {chatCount.map((chat, index) => {
                    return (
                      <div>
                        <ChatNFTDetails
                          chatCount={chatCount}
                          index={
                            nftListingData?.has_many_chats &&
                            nftListingData?.has_many_chats !== undefined
                              ? nftListingData?.has_many_chats?.length -
                                1 +
                                index
                              : index
                          }
                          key={index}
                          chatremoveHandle={chatremoveHandle}
                          data={nftChatList}
                        />
                      </div>
                    );
                  })} */}
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
                    <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                      Socials
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left" }}
                      mb={2}
                    >
                      Enter social details
                    </Typography>
                  </Grid>

                  {nftListingData?.has_many_socials?.length !== 0 &&
                  nftListingData?.has_many_socials !== undefined ? (
                    nftListingData?.has_many_socials?.map(
                      (socials: any, index: number) => {
                        return (
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Stack direction="row" spacing={3}>
                              <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                                <Typography
                                  variant="subtitle1"
                                  sx={{
                                    textAlign: "left",
                                    fontSize: ".9rem",
                                    fontWeight: 600,
                                  }}
                                  mb={1}
                                >
                                  Select Platform {index + 1}
                                </Typography>
                                <InputSelectCoin
                                  data={nftSocialList}
                                  name={`social_platform_id[${index + 1}]`}
                                  id={`social_platform_id_${index + 1}`}
                                  selectedValue={socials.social_platform_id}
                                  height={40}
                                  variant="social_platform"
                                  title="Select website"
                                />
                              </Grid>
                              <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                                <Typography
                                  variant="subtitle1"
                                  sx={{
                                    textAlign: "left",
                                    fontSize: ".9rem",
                                    fontWeight: 600,
                                  }}
                                  mb={1}
                                >
                                  Social URL {index + 1}
                                </Typography>
                                <InputText
                                  placeholder="Enter social url"
                                  name={`social_url[${index + 1}]`}
                                  id={`social_url_${index + 1}`}
                                  value={socials.social_url}
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
                                {nftListingData?.has_many_socials?.length -
                                  1 ===
                                index ? (
                                  <Link
                                    onClick={socialaddHandle}
                                    underline="none"
                                  >
                                    Add more +
                                  </Link>
                                ) : (
                                  <IconButton
                                    aria-label="delete"
                                    size="large"
                                    onClick={() =>
                                      socialremoveHandle(socials?.id)
                                    }
                                  >
                                    <DeleteIcon fontSize="inherit" />
                                  </IconButton>
                                )}
                              </Grid>
                            </Stack>
                          </Grid>
                        );
                      }
                    )
                  ) : (
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack direction="row" spacing={3}>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textAlign: "left",
                              fontSize: ".9rem",
                              fontWeight: 600,
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
                            variant="social_platform"
                            title="Select website"
                          />
                        </Grid>
                        <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textAlign: "left",
                              fontSize: ".9rem",
                              fontWeight: 600,
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
                          sx={{ paddingTop: "37px" }}
                        >
                          <Link onClick={socialaddHandle} underline="none">
                            Add more +
                          </Link>
                        </Grid>
                      </Stack>
                    </Grid>
                  )}

                  {socialCount.map((social, index) => {
                    return (
                      <div>
                        <SocialNFTDetails
                          socialCount={socialCount}
                          index={
                            nftListingData?.has_many_socials &&
                            nftListingData?.has_many_socials !== undefined
                              ? nftListingData?.has_many_socials?.length -
                                1 +
                                index
                              : index
                          }
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
                          serverCheckedRef={nftListingData?.i_agree}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: ".85rem" }}>
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
                          serverCheckedRef={nftListingData?.i_declare}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: ".85rem" }}>
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
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 600,
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
                      serverStatus={nftListingData?.status}
                    />

                    {/* {coinPublishStatus.status === 2 && (
                      <InputDateTime
                        dateTime={coinPublishStatus}
                        setDateTime={setPublishCoinStatus}
                        statusTime={true}
                      />
                    )} */}
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
                      Title="Update NFT"
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

export default NFTListingEdit;
