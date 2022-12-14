import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Grid,
  Typography,
  Box,
  Stack,
  Divider,
  IconButton,
  FormControlLabel,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import dateFormat, { masks } from "dateformat";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import InputText from "../../../components/form/input/text/InputText";
import InputSelectCoin from "../../../components/form/selectcoin/InputSelectCoin";
import CoinUploader from "../../../components/form/input/file/coinlogo/CoinUploader";
import InputTextArea from "../../../components/form/textarea/InputTextArea";
import InputRadio from "../../../components/form/input/radio/InputRadio";
import InputDateTime from "../../../components/form/input/datetime/InputDateTime";
import InputCheckbox from "../../../components/form/input/checkbox/InputCheckbox";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import InputCoinStatusSelect from "../../../components/form/selectcoinstatus/InputCoinStatusSelect";

import Link from "@mui/material/Link";
import NetworkDetails from "./NetworkDetails";
import ExchangeDetails from "./ExchangeDetails";
import AuditDetails from "./AuditDetails";
import ChartDetails from "./ChartDetails";
import CommunityDetails from "./CommunityDetails";
import ChatDetails from "./ChatDetails";
import SocialDetails from "./SocialDetails";

import { allExchangeRequest } from "../../../store/action";
import { allNetworkRequest } from "../../../store/action";
import { allCoinAuditRequest } from "../../../store/action";
import { allCoinChatRequest } from "../../../store/action";
import { allCoinSocialRequest } from "../../../store/action";
import { allChartProviderRequest } from "../../../store/action";
import { updateCoinRequest } from "../../../store/action";
import { editCoinRequest } from "../../../store/action";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const CoinListingEdit = () => {
  const location: any = useLocation();
  const dispatch = useDispatch();
  let { id } = useParams();
  const navigate = useNavigate();

  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
    { title: "Processing", value: 4 },
  ];
  const [richText, setRichText] = useState({ details: "", description: "" });
  const [editCoin, setEditCoin] = useState<any>({
    address: "",
    admin_id: "",
    approved_at: "",
    audit_report_link: "",
    chart_link: "",
    circulating_supply: "",
    coingecko_url: "",
    created_at: "",
    created_from: "",
    crypto_sector_cat_id: "",
    date_created: "",
    deleted_at: "",
    description: "",
    details: "",
    discord_url: "",
    docs_link: "",
    docs_url: "",
    explorer_link: "",
    facebook_link: "",
    github_link: "",
    source_code_url: "",
    has_many_audits: "",
    has_many_charts: "",
    has_many_chats: "",
    has_many_communitys: "",
    has_many_exchanges: "",
    has_many_networks: "",
    has_many_socials: "",
    i_agree: "",
    i_declare: "",
    id: "",
    impressions: "",
    instagram_link: "",
    is_launched: "",
    is_listed_coingecko: "",
    is_listed_market_cap: "",
    is_presale: "",
    is_scheduled: "",
    is_token_or_coin: "",
    logo: "",
    market_cap: "",
    market_cap_url: "",
    max_supply: "",
    medium_link: "",
    name: "",
    network_id: "",
    official_email: "",
    presale_address: "",
    presale_date: "",
    presale_end_date: "",
    presale_link: "",
    presale_start_date: "",
    price: "",
    promote_amount: "",
    reddit_link: "",
    schedule_date: "",
    slug: "",
    status: "",
    symbol: "",
    telegram_link: "",
    tiktok_link: "",
    todays_vote: "",
    token_listed_link: "",
    twitter_link: "",
    updated_at: "",
    user_id: "",
    vote: "",
    website_url: "",
    whitepaper_link: " ",
    youtube_link: "",
    video_url: "",
  });

  const exchangeList = useSelector((exList: any) => {
    return exList.exchangesReducer.allExchanges.data;
  });

  const networkList = useSelector((ntList: any) => {
    return ntList.networksReducer.allNetworks.data;
  });
  const coinAuditList = useSelector((auditList: any) => {
    return auditList.auditReducer.allAudit.data;
  });
  const coinChartProviderList = useSelector((chartProviderList: any) => {
    return chartProviderList.chartProviderReducer.allChartProvider.data;
  });

  const coinChatList = useSelector((chatList: any) => {
    return chatList.chatReducer.allChat.data;
  });

  const coinSocialList = useSelector((socialList: any) => {
    return socialList.socialsReducer.allSocials.data;
  });

  const [coinStatus, setCoinStatus] = useState(
    parseInt(editCoin?.is_presale) === 1
      ? "Presale"
      : parseInt(editCoin?.is_launched) === 1
      ? "Launched"
      : 0
  );

  const [addCoinLogo, setCoinLogo] = useState({ coinLogo: "" });

  const [dateTime, setDateTime] = useState<any>({
    start_date: new Date(),
    end_date: new Date(),
  });

  const [checked, setChecked] = useState<any>({
    is_listed_market_cap: false,
    is_listed_coingecko: false,
    i_agree: false,
    i_declare: false,
  });

  const [networkCount, setNetworkCount] = useState<any[]>([]);

  const networkaddHandle = () => {
    setNetworkCount([...networkCount, { network: "" }]);
  };
  const networkremoveHandle = (index: any) => {
    let networkListDlt = [...networkCount];
    networkListDlt.splice(-1, 1);
    setNetworkCount(networkListDlt);
    const networklist = editCoin?.has_many_networks?.filter((item: any) => {
      return item?.id !== index;
    });

    setEditCoin({ ...editCoin, has_many_networks: networklist });
  };

  const [exchangeCount, setExchangeCount] = useState<any[]>([]);
  const exchangeaddHandle = () => {
    setExchangeCount([...exchangeCount, { exchange: "" }]);
  };

  const exchangeremoveHandle = (index: any) => {
    let exchangeList = [...exchangeCount];
    exchangeList.splice(-1, 1);
    setExchangeCount(exchangeList);
    const exchangelist = editCoin?.has_many_exchanges?.filter((item: any) => {
      return item?.id !== index;
    });

    //console.log(sociallist, index);
    setEditCoin({ ...editCoin, has_many_exchanges: exchangelist });
  };
  const [auditCount, setauditCount] = useState<any[]>([]);

  const auditaddHandle = () => {
    setauditCount([...auditCount, { audit: "" }]);
  };

  const auditremoveHandle = (index: any) => {
    let auditList = [...auditCount];
    auditList.splice(-1, 1);
    setauditCount(auditList);
    const auditlist = editCoin?.has_many_audits?.filter((item: any) => {
      return item?.id !== index;
    });

    //console.log(sociallist, index);
    setEditCoin({ ...editCoin, has_many_audits: auditlist });
  };

  const [chartCount, setchartCount] = useState<any[]>([]);

  const chartaddHandle = () => {
    setchartCount([...chartCount, { chart: "" }]);
  };

  const chartremoveHandle = (index: any) => {
    let chartList = [...chartCount];
    chartList.splice(-1, 1);
    setchartCount(chartList);
    const chartlist = editCoin?.has_many_charts?.filter((item: any) => {
      return item?.id !== index;
    });

    //console.log(sociallist, index);
    setEditCoin({ ...editCoin, has_many_charts: chartlist });
  };

  const [communityCount, setcommunityCount] = useState<any[]>([]);

  const communityaddHandle = () => {
    setcommunityCount([...communityCount, { community: "" }]);
  };

  const communityremoveHandle = (index: any) => {
    let communityList = [...communityCount];
    communityList.splice(-1, 1);
    setcommunityCount(communityList);

    const communitylist = editCoin?.has_many_communitys?.filter((item: any) => {
      return item?.id !== index;
    });

    //console.log(sociallist, index);
    setEditCoin({ ...editCoin, has_many_communitys: communitylist });
  };

  const [chatCount, setchatCount] = useState<any[]>([]);

  const chataddHandle = () => {
    setchatCount([...chatCount, { chat: "" }]);
  };

  const chatremoveHandle = (index: any) => {
    let chatList = [...chatCount];
    chatList.splice(-1, 1);
    setchatCount(chatList);

    const chatlist = editCoin?.has_many_chats?.filter((item: any) => {
      return item?.id !== index;
    });

    //console.log(sociallist, index);
    setEditCoin({ ...editCoin, has_many_chats: chatlist });
  };

  const [socialCount, setsocialCount] = useState<any[]>([]);

  const socialaddHandle = () => {
    setsocialCount([...socialCount, { social: "" }]);
  };

  const socialremoveHandle = (index: any) => {
    let socialList = [...socialCount];
    socialList.splice(-1, 1);
    setsocialCount(socialList);

    const sociallist = editCoin?.has_many_socials?.filter((item: any) => {
      return item?.id !== index;
    });

    //console.log(sociallist, index);
    setEditCoin({ ...editCoin, has_many_socials: sociallist });
  };

  const [coinPublishStatus, setPublishCoinStatus] = useState<any>({
    status: editCoin?.status && editCoin?.status,
    statusDateTime: new Date(),
    is_scheduled: 0,
  });

  const [loading, setLoading] = useState(false);

  const coinEditHandler = (e: any) => {
    var formData = new FormData(document.querySelector("#coinForm") as any);

    formData.append("id", location.state.id);
    addCoinLogo.coinLogo !== "" &&
      typeof addCoinLogo.coinLogo !== "string" &&
      formData.append("logo", addCoinLogo.coinLogo);

    formData.append(
      "presale_start_date",
      dateFormat(dateTime.start_date, "yyyy-mm-dd")
    );
    formData.append(
      "presale_end_date",
      dateFormat(dateTime.end_date, "yyyy-mm-dd")
    );
    formData.append("status", coinPublishStatus?.status);
    formData.append(
      "schedule_date",
      dateFormat(coinPublishStatus?.statusDateTime, "dd-mm-yyyy H:MM:ss")
    );
    formData.append("is_scheduled", coinPublishStatus?.is_scheduled);
    // formData.append("description", richText?.description);
    const presaleStatus: any = coinStatus === "Presale" ? 1 : 0;
    formData.append("is_presale", presaleStatus);

    const launchedStatus: any = coinStatus === "Launched" ? 1 : 0;
    formData.append("is_launched", launchedStatus);

    const successHandler = (res: any) => {
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
        navigate("/coins");
      }, 3000);
    };

    const errorHandler = (err: any) => {
      toast.error(`${err.error.message.response.request.responseText}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    dispatch(updateCoinRequest(formData, successHandler, errorHandler));
  };

  useEffect(() => {
    const successHandler = (res: any) => {};

    const errorHandler = (err: any) => {};

    dispatch(allExchangeRequest("emptyformData", successHandler, errorHandler));
    dispatch(allNetworkRequest("emptyformData", successHandler, errorHandler));

    dispatch(
      allCoinAuditRequest("emptyformData", successHandler, errorHandler)
    );
    dispatch(
      allChartProviderRequest("emptyformData", successHandler, errorHandler)
    );
    dispatch(allCoinChatRequest("emptyformData", successHandler, errorHandler));
    dispatch(
      allCoinSocialRequest("emptyformData", successHandler, errorHandler)
    );
  }, [dispatch, location]);

  useEffect(() => {
    const successHandler = (res: any) => {
      res && setEditCoin(res?.data?.data);
      console.log(res.data.data);
      setCoinStatus(
        parseInt(res?.data?.data?.is_presale) === 1
          ? "Presale"
          : parseInt(res?.data?.data?.is_launched) === 1
          ? "Launched"
          : 0
      );
    };

    const errorHandler = (err: any) => {};
    dispatch(editCoinRequest({ id: id }, successHandler, errorHandler));
  }, [dispatch, id]);
  console.log(dateTime);
  return (
    <Grid container spacing={0}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form id="coinForm">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={2} ml={2}>
          <HorizonatalList />
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={2} mb={2}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <IconButton
              onClick={() => {
                navigate("/coins");
              }}
            >
              <ArrowBackIosTwoToneIcon />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Edit coin
              <Typography variant="caption">
                {parseInt(editCoin?.is_presale) === 1 &&
                parseInt(editCoin?.is_presale) !== 0
                  ? " (Presale)"
                  : "(Launched)"}
              </Typography>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}></Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            sx={{ width: "100%", background: "white", borderRadius: "7px" }}
            px={5}
            py={5}
            mb={5}
          >
            <Grid container mb={5} mt={5}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                  Status of coin
                </Typography>

                <InputRadio
                  coinStatus={coinStatus}
                  setCoinStatus={setCoinStatus}
                  serverIsLanuched={parseInt(editCoin?.is_launched)}
                  serverIsPresale={parseInt(editCoin?.is_presale)}
                />
              </Grid>
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={2}>
              <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                Basic Details
              </Typography>
              {/* <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Enter contract address
              </Typography>
              <Stack direction="row" spacing={3}>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                  <InputText
                    placeholder="Eg: 09s8jgggffffay63733773"
                    id="address"
                    name="address"
                    value={editCoin?.address}
                  />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                  <InputSelectCoin
                    name="network_id"
                    id="network_id"
                    data={networkList}
                    selectedValue={editCoin?.network_id}
                    height={40}
                      variant="network"
                  />
                </Grid>
              </Stack> */}
            </Grid>
            {/* <Divider /> */}
            <Grid container mb={5} mt={0}>
              <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 600,
                    }}
                    mb={1}
                  >
                    Coin Name
                  </Typography>

                  <InputText
                    placeholder="Eg: Bitcoin"
                    name="name"
                    id="name"
                    value={editCoin?.name}
                  />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 600,
                    }}
                    mb={1}
                  >
                    Coin Symbol
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      (Don't put a $ sign if there is none in the ticker){" "}
                    </Typography>
                  </Typography>

                  <InputText
                    placeholder="Eg: BTC"
                    name="symbol"
                    id="symbol"
                    value={editCoin?.symbol}
                  />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 600,
                    }}
                    mb={1}
                  >
                    Logo
                  </Typography>

                  <CoinUploader
                    name="logo"
                    id="logo"
                    setAddIcon={setCoinLogo}
                    addIconData={addCoinLogo}
                    image={`${serverAPIUrl}public/uploads/coin_logo/${editCoin?.logo}`}
                  />
                </Grid>
              </Grid>
              <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 600,
                    }}
                    mb={1}
                  >
                    Project Description
                  </Typography>

                  <InputTextArea
                    //variant="richtextdescription"
                    name="description"
                    id="description"
                    placeholder="Enter Detailed Project Details. Recommended word count 450 - 950."
                    value={editCoin?.description}
                    data={editCoin}
                    setData={setEditCoin}
                    richText={richText}
                    setRichText={setRichText}
                  />
                </Grid>
              </Grid>

              {/* <Grid container mb={5} mt={5}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                    Coin Status
                  </Typography>

                  <InputRadio
                    coinStatus={coinStatus}
                    setCoinStatus={setCoinStatus}
                    serverIsLanuched={parseInt(editCoin?.is_launched)}
                    serverIsPresale={parseInt(editCoin?.is_presale)}
                  />
                </Grid>
              </Grid>
              {coinStatus === "Presale" ? (
                <Grid container mb={5} mt={1}>
                  <Stack direction="row" spacing={3} mb={2}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 600,
                        }}
                        mb={1}
                      >
                        Presale start Date & Time (UTC)
                      </Typography>

                      <InputDateTime
                        dateTime={dateTime}
                        setDateTime={setDateTime}
                        start_date={true}
                        ServerValue={editCoin?.presale_start_date}
                      />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 600,
                        }}
                        mb={1}
                      >
                        Presale end Date & Time (UTC)
                      </Typography>

                      <InputDateTime
                        dateTime={dateTime}
                        setDateTime={setDateTime}
                        start_date={false}
                        ServerValue={editCoin?.presale_end_date}
                      />
                    </Grid>
                  </Stack>

                  <Stack direction="row" spacing={3}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 600,
                        }}
                        mb={1}
                      >
                        Presale address (Optional)
                      </Typography>

                      <InputText
                        placeholder="Eg: faffhaafasgdasdsafdywdtdw"
                        id="presale_address"
                        name="presale_address"
                        value={editCoin?.presale_address}
                      />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 600,
                        }}
                        mb={1}
                      >
                        Presale Link
                      </Typography>

                      <InputText
                        placeholder="Enter presale address"
                        name="presale_link"
                        id="presale_link"
                        value={editCoin?.presale_link}
                      />
                    </Grid>
                  </Stack>
                </Grid>
              ) : (
                <Grid container mb={5} mt={1}>
                  <Stack direction="row" spacing={3} mb={1}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 600,
                        }}
                        mb={1}
                      >
                        Price
                      </Typography>

                      <InputText
                        placeholder="Enter Price(Eg: $5.89)"
                        id="price"
                        name="price"
                        value={editCoin?.price}
                      />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 600,
                        }}
                        mb={1}
                      >
                        Circularity Supply (Optional)
                      </Typography>

                      <InputText
                        placeholder="Enter ircularity Supply(Eg: 100,0000)"
                        id="circulating_supply"
                        name="circulating_supply"
                        value={editCoin?.circulating_supply}
                      />
                    </Grid>
                  </Stack>

                  <Stack direction="row" spacing={3} mb={1}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 600,
                        }}
                        mb={1}
                      >
                        Max/Total Supply
                      </Typography>

                      <InputText
                        placeholder="Enter Max/Total Supply(Eg: 100,000000)"
                        id="max_supply"
                        name="max_supply"
                        value={editCoin?.max_supply}
                      />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 600,
                        }}
                        mb={1}
                      >
                        Marketap (Optional)
                      </Typography>

                      <InputText
                        placeholder="Enter marketcap(Eg: $100,0000)"
                        id="market_cap"
                        name="market_cap"
                        value={editCoin?.market_cap}
                      />
                    </Grid>
                  </Stack>
                </Grid>
              )} */}
            </Grid>
          </Box>
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            sx={{ width: "100%", background: "white", borderRadius: "7px" }}
            px={5}
            py={5}
            mb={5}
          >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                Network Details
              </Typography>
              <Typography variant="caption" sx={{ textAlign: "left" }} mb={2}>
                Please specify the chain that you are on (Eg: Binance Smart
                Chain, Ethereum, Heco)
              </Typography>
            </Grid>

            {editCoin &&
            editCoin?.has_many_networks &&
            editCoin?.has_many_networks.length !== 0 &&
            editCoin?.has_many_networks !== undefined ? (
              editCoin?.has_many_networks.map(
                (networks: any, index: number) => {
                  return (
                    <Grid
                      item
                      xl={12}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      key={index}
                    >
                      <Stack
                        direction="row"
                        spacing={3}
                        sx={{ alignItems: "center" }}
                        id={`network${index}`}
                      >
                        <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textAlign: "left",
                              fontSize: ".9rem",
                              fontWeight: 600,
                            }}
                            mb={1}
                          >
                            Network {index + 1}
                          </Typography>
                          <InputSelectCoin
                            name={`network[${index + 1}]`}
                            id={`network_${index + 1}`}
                            data={networkList}
                            selectedValue={networks.network_id}
                            height={40}
                            title="Select Network"
                            variant="network"
                          />
                        </Grid>
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
                            Contract address {index + 1}
                          </Typography>
                          <InputText
                            placeholder="Eg: 0x2170ed0880ac9a755fd29b2688956bd959f933f8"
                            name={`network_address[${index + 1}]`}
                            id={`network_address_${index + 1}`}
                            value={networks.address}
                          />
                        </Grid>
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
                            Block explorer URL {index + 1}
                          </Typography>
                          <InputText
                            placeholder="Eg: https://bscscan.com/token/0x2170ed0880ac9a755fd29b2688956bd959f933f8 "
                            name={`network_explorer_link[${index + 1}]`}
                            id={`network_explorer_link_${index + 1}`}
                            value={networks.explorer_link}
                          />
                        </Grid>

                        <Grid
                          item
                          xl={2}
                          lg={2}
                          md={2}
                          sm={2}
                          xs={12}
                          sx={{ paddingTop: "37px" }}
                        >
                          {editCoin?.has_many_networks.length - 1 === index ? (
                            <Link onClick={networkaddHandle} underline="none">
                              Add more +
                            </Link>
                          ) : (
                            <IconButton
                              aria-label="delete"
                              size="large"
                              onClick={() => networkremoveHandle(networks?.id)}
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
                  <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Network 1
                    </Typography>
                    <InputSelectCoin
                      name={`network[1]`}
                      id={`network_1`}
                      data={networkList}
                      height={40}
                      title="Select Network"
                      variant="network"
                    />
                  </Grid>
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
                      Contract address 1
                    </Typography>
                    <InputText
                      placeholder="Eg: 0x2170ed0880ac9a755fd29b2688956bd959f933f8"
                      name={`network_address[1]`}
                      id={`network_address_1`}
                    />
                  </Grid>
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
                      Block explorer URL 1
                    </Typography>
                    <InputText
                      placeholder="Eg: https://bscscan.com/token/0x2170ed0880ac9a755fd29b2688956bd959f933f8 "
                      name={`network_explorer_link[1]`}
                      id={`network_explorer_link_1`}
                    />
                  </Grid>

                  <Grid
                    item
                    xl={2}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={12}
                    sx={{ paddingTop: "37px" }}
                  >
                    <Link onClick={networkaddHandle} underline="none">
                      Add more +
                    </Link>
                  </Grid>
                </Stack>
              </Grid>
            )}

            {networkCount.map((network, index) => {
              return (
                <div>
                  <NetworkDetails
                    networkCount={networkCount}
                    index={
                      editCoin?.has_many_networks &&
                      editCoin?.has_many_networks !== undefined
                        ? editCoin?.has_many_networks.length - 1 + index
                        : index
                    }
                    key={index}
                    networkremoveHandle={networkremoveHandle}
                    data={networkList}
                  />
                  {
                    // networkCount.length - 1
                  }
                </div>
              );
            })}
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={4}>
              <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                Exchange Details
              </Typography>
              <Typography variant="caption" sx={{ textAlign: "left" }} mb={2}>
                Provide exchange details where token is listed.
              </Typography>
            </Grid>

            {editCoin &&
            editCoin?.has_many_exchanges.length !== 0 &&
            editCoin?.has_many_exchanges !== undefined ? (
              editCoin?.has_many_exchanges.map(
                (exchanges: any, index: number) => {
                  return (
                    <Grid
                      item
                      xl={12}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      key={index}
                    >
                      <Stack direction="row" spacing={3}>
                        <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textAlign: "left",
                              fontSize: ".9rem",
                              fontWeight: 600,
                            }}
                            mb={1}
                          >
                            Exchange {index + 1}
                          </Typography>
                          <InputSelectCoin
                            name={`exchange_id[${index + 1}]`}
                            id={`exchange_id_${index + 1}`}
                            data={exchangeList}
                            selectedValue={exchanges.exchange_id}
                            height={40}
                            title="Select Exchange"
                            variant="exchange"
                          />
                        </Grid>
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
                            Exchange URL {index + 1}
                          </Typography>
                          <InputText
                            placeholder="Eg: https://www.binance.com/en/trade/BTC_USDT"
                            name={`url[${index + 1}]`}
                            id={`url_${index + 1}`}
                            value={exchanges.url}
                          />
                        </Grid>
                        {/* <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "left" }}
                            mb={1}
                          >
                            Block explorer URL {index + 1}
                          </Typography>
                          <InputText
                            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                            name={`exchange_explorer_link[${index + 1}]`}
                            id={`exchange_explorer_link_${index + 1}`}
                            value={exchanges.explorer_link}
                          />
                        </Grid> */}
                        <Grid
                          item
                          xl={2}
                          lg={2}
                          md={2}
                          sm={2}
                          xs={12}
                          sx={{ paddingTop: "37px" }}
                        >
                          {editCoin?.has_many_exchanges.length - 1 === index ? (
                            <Link onClick={exchangeaddHandle} underline="none">
                              Add more +
                            </Link>
                          ) : (
                            <IconButton
                              aria-label="delete"
                              size="large"
                              onClick={() =>
                                exchangeremoveHandle(exchanges?.id)
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
                  <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Exchange 1
                    </Typography>
                    <InputSelectCoin
                      name={`exchange_id[1]`}
                      id={`exchange_id_1`}
                      data={exchangeList}
                      height={40}
                      title="Select Exchange"
                      variant="exchange"
                    />
                  </Grid>
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
                      Exchange URL 1
                    </Typography>
                    <InputText
                      placeholder="Eg: https://www.binance.com/en/trade/BTC_USDT"
                      name={`url[1]`}
                      id={`url_1`}
                    />
                  </Grid>
                  {/* <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                      mb={1}
                    >
                      Block explorer URL 1
                    </Typography>
                    <InputText
                      placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                      name={`exchange_explorer_link[1]`}
                      id={`exchange_explorer_link_1`}
                    />
                  </Grid> */}
                  <Grid
                    item
                    xl={2}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={12}
                    sx={{ paddingTop: "37px" }}
                  >
                    <Link onClick={exchangeaddHandle} underline="none">
                      Add more +
                    </Link>
                  </Grid>
                </Stack>
              </Grid>
            )}

            {exchangeCount.map((exchange, index) => {
              return (
                <div>
                  <ExchangeDetails
                    exchangeCount={exchangeCount}
                    index={
                      editCoin?.has_many_exchanges &&
                      editCoin?.has_many_exchanges !== undefined
                        ? editCoin?.has_many_exchanges.length - 1 + index
                        : index
                    }
                    key={index}
                    exchangeremoveHandle={exchangeremoveHandle}
                    data={exchangeList}
                  />
                </div>
              );
            })}
          </Box>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            sx={{ width: "100%", background: "white", borderRadius: "7px" }}
            px={5}
            py={5}
            mb={5}
          >
            {coinStatus === "Presale" ? (
              <Grid container mb={5} mt={1}>
                <Stack direction="row" spacing={3} mb={2}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Presale start Date & Time (UTC)
                    </Typography>

                    <InputDateTime
                      dateTime={dateTime}
                      setDateTime={setDateTime}
                      start_date={true}
                      ServerValue={editCoin && editCoin?.presale_start_date}
                    />
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Presale end Date & Time (UTC)
                    </Typography>

                    <InputDateTime
                      dateTime={dateTime}
                      setDateTime={setDateTime}
                      start_date={false}
                      ServerValue={editCoin && editCoin?.presale_end_date}
                    />
                  </Grid>
                </Stack>

                <Stack direction="row" spacing={3}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Presale address{" "}
                      <Typography
                        variant="caption"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        (Optional)
                      </Typography>
                    </Typography>

                    <InputText
                      placeholder="Eg: 0x2170ed0880ac9a755fd29b2688956bd959f933f8"
                      id="presale_address"
                      name="presale_address"
                      value={editCoin?.presale_address}
                    />
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Presale Link
                    </Typography>

                    <InputText
                      placeholder="Enter presale url"
                      name="presale_link"
                      id="presale_link"
                      value={editCoin?.presale_link}
                    />
                  </Grid>
                </Stack>
                <Stack direction="row" spacing={3} mb={1} pt={2}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Circulating Supply{" "}
                      <Typography
                        variant="caption"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        (Optional)
                      </Typography>
                    </Typography>

                    <InputText
                      placeholder="Eg: 100000000000"
                      id="circulating_supply"
                      name="circulating_supply"
                      value={editCoin?.circulating_supply}
                      type="number"
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Max/Total Supply
                    </Typography>

                    <InputText
                      placeholder="Eg: 100000000000"
                      id="max_supply"
                      name="max_supply"
                      value={editCoin?.max_supply}
                      type="number"
                    />
                  </Grid>
                </Stack>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 600,
                    }}
                    mb={1}
                  >
                    Marketcap{" "}
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      (Optional)
                    </Typography>
                  </Typography>

                  <InputText
                    placeholder="Eg: 100000000000"
                    id="market_cap"
                    name="market_cap"
                    value={editCoin?.market_cap}
                    type="number"
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid container mb={5} mt={1}>
                <Stack direction="row" spacing={3} mb={1}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Price{" "}
                      <Typography
                        variant="caption"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        (Don't put any currency symbol in price)
                      </Typography>
                    </Typography>

                    <InputText
                      placeholder="Eg: 5.89"
                      id="price"
                      name="price"
                      value={editCoin?.price}
                      type="number"
                    />
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Circulating Supply{" "}
                      <Typography
                        variant="caption"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        (Optional)
                      </Typography>
                    </Typography>

                    <InputText
                      placeholder="Eg: 100000000000"
                      id="circulating_supply"
                      name="circulating_supply"
                      value={editCoin?.circulating_supply}
                      type="number"
                    />
                  </Grid>
                </Stack>

                <Stack direction="row" spacing={3} mb={1}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Max/Total Supply
                    </Typography>

                    <InputText
                      placeholder="Eg: 100000000000"
                      id="max_supply"
                      name="max_supply"
                      value={editCoin?.max_supply}
                      type="number"
                    />
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Marketcap{" "}
                      <Typography
                        variant="caption"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        (Optional)
                      </Typography>
                    </Typography>

                    <InputText
                      placeholder="Eg: 100000000000"
                      id="market_cap"
                      name="market_cap"
                      value={editCoin?.market_cap}
                      type="number"
                    />
                  </Grid>
                </Stack>
              </Grid>
            )}
          </Box>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            sx={{ width: "100%", background: "white", borderRadius: "7px" }}
            px={5}
            py={5}
            mb={5}
          >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={4}>
              <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                Source Code ,Docs & Whitepaper Details
              </Typography>
              <Typography variant="caption" sx={{ textAlign: "left" }} mb={2}>
                Please provide information about coin.
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack direction="row" spacing={3} pb={2}>
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
                    SourceCode URL
                  </Typography>
                  <InputText
                    placeholder="Enter sourcecode url"
                    id="source_code_url"
                    name="source_code_url"
                    value={editCoin?.source_code_url}
                  />
                </Grid>
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
                    Medium URL
                  </Typography>
                  <InputText
                    placeholder="Enter Medium url"
                    id="medium_link"
                    name="medium_link"
                    value={editCoin?.medium_link}
                  />
                </Grid>
              </Stack>
            </Grid>
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
                    Whitepaper URL
                  </Typography>
                  <InputText
                    placeholder="Enter Whitepaper url"
                    id="whitepaper_link"
                    name="whitepaper_link"
                    value={editCoin?.whitepaper_link}
                  />
                </Grid>
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
                    Docs URL 1
                  </Typography>
                  <InputText
                    placeholder="Enter Docs url"
                    id="docs_link"
                    name="docs_link"
                    value={editCoin?.docs_link}
                  />
                </Grid>
              </Stack>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
              <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                Audit Details
              </Typography>
              <Typography variant="caption" sx={{ textAlign: "left" }} mb={2}>
                Please Provide the audit details
              </Typography>
            </Grid>

            {editCoin &&
            editCoin?.has_many_audits.length !== 0 &&
            editCoin?.has_many_audits !== undefined ? (
              editCoin?.has_many_audits.map((audits: any, index: number) => {
                return (
                  <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    key={index}
                  >
                    <Stack direction="row" spacing={3}>
                      <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            fontSize: ".9rem",
                            fontWeight: 600,
                          }}
                          mb={1}
                        >
                          Audited By {index + 1}
                        </Typography>
                        <InputSelectCoin
                          name={`audited_by[${index + 1}]`}
                          id={`audited_by_${index + 1}`}
                          data={coinAuditList}
                          selectedValue={parseInt(audits.audited_by)}
                          height={40}
                          title="Select Audit Provider"
                          variant="audit"
                        />
                      </Grid>
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
                          Audit URL {index + 1}
                        </Typography>
                        <InputText
                          placeholder="Enter Audit URL"
                          name={`audit_link[${index + 1}]`}
                          id={`audit_link_${index + 1}`}
                          value={audits.audit_link}
                        />
                      </Grid>
                      <Grid
                        item
                        xl={2}
                        lg={2}
                        md={2}
                        sm={2}
                        xs={12}
                        sx={{ paddingTop: "37px" }}
                      >
                        {editCoin?.has_many_audits.length - 1 === index ? (
                          <Link onClick={auditaddHandle} underline="none">
                            Add more +
                          </Link>
                        ) : (
                          <IconButton
                            aria-label="delete"
                            size="large"
                            onClick={() => auditremoveHandle(audits?.id)}
                          >
                            <DeleteIcon fontSize="inherit" />
                          </IconButton>
                        )}
                      </Grid>
                    </Stack>
                  </Grid>
                );
              })
            ) : (
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Stack direction="row" spacing={3}>
                  <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Audited By
                    </Typography>
                    <InputSelectCoin
                      name="audited_by[1]"
                      id="audited_by_1"
                      data={coinAuditList}
                      height={40}
                      title="Select Audit Provider"
                      variant="audit"
                    />
                  </Grid>
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
                      Audit URL
                    </Typography>
                    <InputText
                      placeholder="Enter Audit URL"
                      name="audit_link[1]"
                      id="audit_link_1"
                    />
                  </Grid>
                  <Grid
                    item
                    xl={2}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={12}
                    sx={{ paddingTop: "37px" }}
                  >
                    <Link onClick={auditaddHandle} underline="none">
                      Add more +
                    </Link>
                  </Grid>
                </Stack>
              </Grid>
            )}

            {auditCount.map((audit, index) => {
              return (
                <div>
                  <AuditDetails
                    auditCount={auditCount}
                    index={
                      editCoin?.has_many_audits &&
                      editCoin?.has_many_audits !== undefined
                        ? editCoin?.has_many_audits.length - 1 + index
                        : index
                    }
                    key={index}
                    auditremoveHandle={auditremoveHandle}
                    data={coinAuditList}
                  />
                </div>
              );
            })}

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
              <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                Chart Details
              </Typography>
              <Typography variant="caption" sx={{ textAlign: "left" }} mb={2}>
                Please Provide the Chart information
              </Typography>
            </Grid>

            {editCoin &&
            editCoin?.has_many_charts.length !== 0 &&
            editCoin?.has_many_charts !== undefined ? (
              editCoin?.has_many_charts.map((charts: any, index: number) => {
                return (
                  <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    key={index}
                  >
                    <Stack direction="row" spacing={3}>
                      <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            textAlign: "left",
                            fontSize: ".9rem",
                            fontWeight: 600,
                          }}
                          mb={1}
                        >
                          Chart Provider {index + 1}
                        </Typography>
                        <InputSelectCoin
                          name={`chart_provider[${index + 1}]`}
                          id={`chart_provider_${index + 1}`}
                          data={coinChartProviderList}
                          selectedValue={parseInt(charts.chart_provider)}
                          height={40}
                          title="Please select"
                          variant="chart"
                        />
                      </Grid>
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
                          Chart URL {index + 1}
                        </Typography>
                        <InputText
                          placeholder="Eg: https://in.tradingview.com/chart/?symbol=BTC"
                          name={`chart_link[${index + 1}]`}
                          id={`chart_link_${index + 1}`}
                          value={charts.chart_link}
                        />
                      </Grid>
                      <Grid
                        item
                        xl={2}
                        lg={2}
                        md={2}
                        sm={2}
                        xs={12}
                        sx={{ paddingTop: "37px" }}
                      >
                        {editCoin?.has_many_charts.length - 1 === index ? (
                          <Link onClick={chartaddHandle} underline="none">
                            Add more +
                          </Link>
                        ) : (
                          <IconButton
                            aria-label="delete"
                            size="large"
                            onClick={() => chartremoveHandle(charts?.id)}
                          >
                            <DeleteIcon fontSize="inherit" />
                          </IconButton>
                        )}
                      </Grid>
                    </Stack>
                  </Grid>
                );
              })
            ) : (
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Stack direction="row" spacing={3}>
                  <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textAlign: "left",
                        fontSize: ".9rem",
                        fontWeight: 600,
                      }}
                      mb={1}
                    >
                      Chart Provider
                    </Typography>
                    <InputSelectCoin
                      name="chart_provider[1]"
                      id="chart_provider_1"
                      data={coinChartProviderList}
                      height={40}
                      title="Please select"
                      variant="chart"
                    />
                  </Grid>
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
                      Chart URL
                    </Typography>
                    <InputText
                      placeholder="Eg: https://in.tradingview.com/chart/?symbol=BTC"
                      name="chart_link[1]"
                      id="chart_link_1"
                    />
                  </Grid>
                  <Grid
                    item
                    xl={2}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={12}
                    sx={{ paddingTop: "37px" }}
                  >
                    <Link onClick={chartaddHandle} underline="none">
                      Add more +
                    </Link>
                  </Grid>
                </Stack>
              </Grid>
            )}
            {chartCount.map((chart, index) => {
              return (
                <div>
                  <ChartDetails
                    chartCount={chartCount}
                    index={
                      editCoin?.has_many_charts &&
                      editCoin?.has_many_charts !== undefined
                        ? editCoin?.has_many_charts.length - 1 + index
                        : index
                    }
                    key={index}
                    chartremoveHandle={chartremoveHandle}
                    data={coinChartProviderList}
                  />
                </div>
              );
            })}
            <Stack direction="row" spacing={3} pt={3}>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
                  <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                    Community Details
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ textAlign: "left" }}
                    mb={2}
                  >
                    Please Provide the Social details
                  </Typography>
                </Grid>

                {editCoin &&
                editCoin?.has_many_communitys?.length !== 0 &&
                editCoin?.has_many_communitys !== undefined ? (
                  editCoin?.has_many_communitys?.map(
                    (communitys: any, index: number) => {
                      return (
                        <Grid
                          item
                          xl={12}
                          lg={12}
                          md={12}
                          sm={12}
                          xs={12}
                          key={index}
                        >
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
                              {editCoin?.has_many_communitys.length - 1 ===
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
                )}

                {communityCount.map((community, index) => {
                  return (
                    <div>
                      <CommunityDetails
                        communityCount={communityCount}
                        index={
                          editCoin?.has_many_communitys &&
                          editCoin?.has_many_communitys !== undefined
                            ? editCoin?.has_many_communitys.length - 1 + index
                            : index
                        }
                        key={index}
                        communityremoveHandle={communityremoveHandle}
                      />
                    </div>
                  );
                })}

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
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
                        Coin Video URL
                      </Typography>
                      <InputText
                        placeholder="Eg:https://www.youtube.com/watch?v=4ZSUxzeWLlc"
                        name="video_url"
                        id="video_url"
                        value={editCoin?.video_url}
                      />
                    </Grid>
                    {/* <Grid
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
                    </Grid> */}
                  </Stack>
                </Grid>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
                  <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                    Listed on
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ textAlign: "left" }}
                    mb={2}
                  >
                    (Please check your coin is listed in the following website)
                  </Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Stack direction="column" spacing={3} pt={3}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack direction="row" spacing={3}>
                        <FormControlLabel
                          control={
                            <InputCheckbox
                              name="is_listed_market_cap"
                              id="is_listed_market_cap"
                              checked={checked}
                              setChecked={setChecked}
                              condition="is_listed_market_cap"
                              value={checked.is_listed_market_cap}
                              serverCheckedRef={editCoin?.is_listed_market_cap}
                            />
                          }
                          label={
                            <Typography sx={{ fontSize: ".85rem" }}>
                              Coin Marketcap
                            </Typography>
                          }
                          sx={{ fontSize: "10px" }}
                        />

                        <InputText
                          placeholder="Enter coinmarketcap url"
                          checkboxStatus={checked.is_listed_market_cap}
                          id="coin_market_cap_url"
                          name="coin_market_cap_url"
                          value={editCoin?.market_cap_url}
                        />
                      </Stack>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack direction="row" spacing={3}>
                        <FormControlLabel
                          control={
                            <InputCheckbox
                              id="is_listed_coingecko"
                              name="is_listed_coingecko"
                              checked={checked}
                              setChecked={setChecked}
                              condition="is_listed_coingecko"
                              value={checked.is_listed_coingecko}
                              serverCheckedRef={editCoin?.is_listed_coingecko}
                            />
                          }
                          label={
                            <Typography sx={{ fontSize: ".85rem" }}>
                              Coingecko
                            </Typography>
                          }
                          sx={{ fontSize: "10px" }}
                        />

                        <InputText
                          placeholder="Enter coingecko url"
                          checkboxStatus={checked.is_listed_coingecko}
                          name="coingecko_url"
                          id="coingecko_url"
                          value={editCoin?.coingecko_url}
                        />
                      </Stack>
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" spacing={3} pt={4}>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
                  <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                    Chat Details
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ textAlign: "left" }}
                    mb={2}
                  >
                    Please Provide the information about coin
                  </Typography>
                </Grid>

                {editCoin?.has_many_chats.length !== 0 &&
                editCoin?.has_many_chats !== undefined ? (
                  editCoin?.has_many_chats.map((chats: any, index: number) => {
                    return (
                      <Grid
                        item
                        xl={12}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        key={index}
                      >
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
                              name={`chat_platform[${index + 1}]`}
                              id={`chat_platform_${index + 1}`}
                              data={coinChatList}
                              selectedValue={parseInt(chats.chat_platform)}
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
                            {" "}
                            {editCoin?.has_many_chats.length - 1 === index ? (
                              <Link onClick={chataddHandle} underline="none">
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
                  })
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
                          name="chat_platform[1]"
                          id="chat_platform_1"
                          data={coinChatList}
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
                      <ChatDetails
                        chatCount={chatCount}
                        index={
                          editCoin?.has_many_chats &&
                          editCoin?.has_many_chats !== undefined
                            ? editCoin?.has_many_chats.length - 1 + index
                            : index
                        }
                        key={index}
                        chatremoveHandle={chatremoveHandle}
                        data={coinChatList}
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

                {editCoin &&
                editCoin?.has_many_socials.length !== 0 &&
                editCoin?.has_many_socials !== undefined ? (
                  editCoin?.has_many_socials.map(
                    (socials: any, index: number) => {
                      return (
                        <Grid
                          item
                          xl={12}
                          lg={12}
                          md={12}
                          sm={12}
                          xs={12}
                          key={index}
                        >
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
                                name={`social_platform[${index + 1}]`}
                                id={`social_platform_${index + 1}`}
                                data={coinSocialList}
                                selectedValue={parseInt(
                                  socials.social_platform
                                )}
                                height={40}
                                title="Select website"
                                variant="social_platform"
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
                              {editCoin?.has_many_socials.length - 1 ===
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
                          name="social_platform[1]"
                          id="social_platform_1"
                          data={coinSocialList}
                          height={40}
                          title="Select website"
                          variant="social_platform"
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
                      <SocialDetails
                        socialCount={socialCount}
                        index={
                          editCoin?.has_many_socials &&
                          editCoin?.has_many_socials !== undefined
                            ? editCoin?.has_many_socials.length - 1 + index
                            : index
                        }
                        key={index}
                        socialremoveHandle={socialremoveHandle}
                        data={coinSocialList}
                      />
                    </div>
                  );
                })}
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xl={4} lg={4} md={4} sm={4} xs={12} pt={3}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 600,
                    }}
                    mb={1}
                  >
                    Random Vote
                  </Typography>
                  <InputText
                    placeholder="Eg:1"
                    name="vote"
                    id="vote"
                    value={editCoin?.vote}
                  />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={4}>
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
                  <Stack direction="row" spacing={3}>
                    <InputCoinStatusSelect
                      name="status"
                      id="status"
                      selectOptions={selectOptions}
                      setInputSelectValue={setPublishCoinStatus}
                      getInputSelectvalue={coinPublishStatus}
                      serverStatus={editCoin?.status}
                    />
                    {/* 
                    {coinPublishStatus.status === 2 && (
                      <InputDateTime
                        dateTime={coinPublishStatus}
                        setDateTime={setPublishCoinStatus}
                        statusTime={true}
                      />
                    )} */}
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={5}>
              <Stack direction="row" spacing={3}>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <FormControlLabel
                      control={
                        <InputCheckbox
                          name="i_agree"
                          id="i_agree"
                          value={checked.i_agree}
                          checked={checked}
                          setChecked={setChecked}
                          condition="i_agree"
                          serverCheckedRef={editCoin?.i_agree}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: ".9rem" }}>
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
                          serverCheckedRef={editCoin?.i_declare}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: ".9rem" }}>
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
                <Grid item xl={5} lg={5} md={5} sm={5} xs={12} pt={5}>
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
                      Title="Update Coin"
                      lgBtnHandler={coinEditHandler}
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

export default CoinListingEdit;
