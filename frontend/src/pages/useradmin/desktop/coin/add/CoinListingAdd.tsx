import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Grid,
  Typography,
  Box,
  Stack,
  Divider,
  IconButton,
  FormControlLabel,
  Link,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import dateFormat, { masks } from "dateformat";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
// import "material-react-toastify/dist/ReactToastify.css";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import InputText from "../../../../../components/useradmin/form/input/text/InputText";
import InputSelectCoin from "../../../../../components/useradmin/form/selectcoin/InputSelectCoin";
import CoinUploader from "../../../../../components/useradmin/form/input/file/coinlogo/CoinUploader";
import InputTextArea from "../../../../../components/useradmin/form/textarea/InputTextArea";
import InputRadio from "../../../../../components/useradmin/form/input/radio/InputRadio";
import InputDateTime from "../../../../../components/useradmin/form/input/datetime/InputDateTime";
import InputCheckbox from "../../../../../components/useradmin/form/input/checkbox/InputCheckbox";
import LargeBtn from "../../../../../components/useradmin/form/button/large/LargeBtn";
import InputCoinStatusSelect from "../../../../../components/useradmin/form/selectcoinstatus/InputCoinStatusSelect";

import NetworkDetails from "./NetworkDetails";
import ExchangeDetails from "./ExchangeDetails";
import AuditDetails from "./AuditDetails";
import ChartDetails from "./ChartDetails";
import CommunityDetails from "./CommunityDetails";
import ChatDetails from "./ChatDetails";
import SocialDetails from "./SocialDetails";
import {
  dashboardAddCoinRequest,
  dashboardCoinAuditListRequest,
  dashboardCoinChartProviderListRequest,
  dashboardCoinChatPlatformListRequest,
  dashboardCoinExchangeListRequest,
  dashboardCoinNetworkListRequest,
  dashboardCoinSocialPlatformListRequest,
} from "../../../../../store/action";

const CoinListingAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Scheduled", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];
  const location: any = useLocation();

  const exchangeList = useSelector((exList: any) => {
    return exList.dashboardCoinReducer.exchange_list.data;
  });

  const networkList = useSelector((ntList: any) => {
    return ntList.dashboardCoinReducer.network_list.data;
  });
  const coinAuditList = useSelector((auditList: any) => {
    return auditList.dashboardCoinReducer.audit_list.data;
  });
  const coinChartProviderList = useSelector((chartProviderList: any) => {
    return chartProviderList.dashboardCoinReducer.chart_provider_list.data;
  });

  const coinChatList = useSelector((chatList: any) => {
    return chatList.dashboardCoinReducer.chat_platform_list.data;
  });

  const coinSocialList = useSelector((socialList: any) => {
    return socialList.dashboardCoinReducer.social_platform_list.data;
  });

  const [coinStatus, setCoinStatus] = useState("Presale");

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
    let networkList = [...networkCount];
    networkList.splice(index, 1);
    setNetworkCount(networkList);
  };
  const [exchangeCount, setExchangeCount] = useState<any[]>([]);
  const exchangeaddHandle = () => {
    setExchangeCount([...exchangeCount, { exchange: "" }]);
  };

  const exchangeremoveHandle = (index: any) => {
    let exchangeList = [...exchangeCount];
    exchangeList.splice(index, 1);
    setExchangeCount(exchangeList);
  };
  const [auditCount, setauditCount] = useState<any[]>([]);

  const auditaddHandle = () => {
    setauditCount([...auditCount, { audit: "" }]);
  };

  const auditremoveHandle = (index: any) => {
    let auditList = [...auditCount];
    auditList.splice(index, 1);
    setauditCount(auditList);
  };

  const [chartCount, setchartCount] = useState<any[]>([]);

  const chartaddHandle = () => {
    setchartCount([...chartCount, { chart: "" }]);
  };

  const chartremoveHandle = (index: any) => {
    let chartList = [...chartCount];
    chartList.splice(index, 1);
    setchartCount(chartList);
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

  const [coinPublishStatus, setPublishCoinStatus] = useState<any>({
    status: 1,
    statusDateTime: new Date(),
    is_scheduled: 0,
  });

  //console.log(coinPublishStatus);
  const dispatch: any = useDispatch();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const coinAddHandler = (e: any) => {
    setLoading(true);
    var formData = new FormData(document.querySelector("#coinForm") as any);
    //var formData = new FormData();
    formData.append("logo", addCoinLogo.coinLogo);

    formData.append(
      "presale_start_date",
      dateFormat(dateTime.start_date, "yyyy-mm-dd")
    );
    formData.append(
      "presale_end_date",
      dateFormat(dateTime.end_date, "yyyy-mm-dd")
    );
    formData.append("status", coinPublishStatus.status);
    formData.append(
      "schedule_date",
      dateFormat(coinPublishStatus.statusDateTime, "dd-mm-yyyy H:MM:ss")
    );
    formData.append("is_scheduled", coinPublishStatus.is_scheduled);

    const presaleStatus: any = coinStatus === "Presale" ? 1 : 0;
    formData.append("is_presale", presaleStatus);

    const launchedStatus: any = coinStatus === "Launched" ? 1 : 0;
    formData.append("is_launched", launchedStatus);

    //console.log(...formData);
    const successHandler = (res: any) => {
      setLoading(true);
      toast.success(
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CheckCircleRoundedIcon sx={{ color: "#5CE32D", fontSize: 50 }} />
            <Typography sx={{ fontSize: ".85rem" }}>
              {res.data.data.original.message}
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
        navigate("/user-dashboard");
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
          position: "top-right",
          icon: false,
          className: "toast-error-container toast-error-container-after",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    };

    dispatch(dashboardAddCoinRequest(formData, successHandler, errorHandler));
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      //console.log(res);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };

    dispatch(
      dashboardCoinExchangeListRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );
    dispatch(
      dashboardCoinNetworkListRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );

    dispatch(
      dashboardCoinAuditListRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );
    dispatch(
      dashboardCoinChartProviderListRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );
    dispatch(
      dashboardCoinChatPlatformListRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );
    dispatch(
      dashboardCoinSocialPlatformListRequest(
        "emptyformData",
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  useEffect(() => {
    location?.state?.currentState !== undefined &&
      setCoinStatus(location?.state?.currentState);
  }, [location]);

  return (
    <Box width={{ xs: "99%", sm: "99%", md: "93%" }} pb={10}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form id="coinForm">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={2} mb={2}>
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
              direction="column"
              spacing={0.5}
              sx={{ alignItems: "flex-start", justifyContent: "center" }}
              px={2}
              pt={3}
            >
              <Typography
                variant="h5"
                sx={{ textAlign: "left", color: "#FFFFFF", fontWeight: 600 }}
              >
                Add New Coin
                {/* <Typography variant="caption"> ({coinStatus})</Typography> */}
              </Typography>
              <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                {" "}
                After submission, our expert team verifies the coin details and
                your coin will be visible on the New Listing page.{" "}
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            sx={{
              width: "auto",
              background: "linear-gradient(to bottom,#040B27 30%, #01061A 80%)",
              borderRadius: "7px",
            }}
            px={{ xs: 3, sm: 3, md: 5 }}
            py={5}
            mb={5}
          >
            <Grid container mb={5} mt={5}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "left", color: "#D7DADB" }}
                  mb={0}
                >
                  Status of coin
                </Typography>

                <InputRadio
                  coinStatus={coinStatus}
                  setCoinStatus={setCoinStatus}
                />
              </Grid>
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={2}>
              <Typography
                variant="h6"
                sx={{ textAlign: "left", color: "#D7DADB" }}
                mb={0}
              >
                Basic Details
              </Typography>
              {/* <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 400 }}
                mb={1}
              >
                Enter contract address
              </Typography>
              <Stack direction={{xs:"column",sm:"column",md:"row"}} spacing={3}>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                  <InputText
                    placeholder="Eg: 09s8jgggffffay63733773"
                    id="address"
                    name="address"
                  />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                  <InputSelectCoin
                    name="network_id"
                    id="network_id"
                    data={networkList}
                    height={40}
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
                      fontWeight: 400,
                      color: "#00ff95",
                    }}
                    mb={1}
                  >
                    Coin Name
                  </Typography>

                  <InputText placeholder="Eg: Bitcoin" name="name" id="name" />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
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
                    Coin Symbol
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      <span style={{ color: "#b4b4b4", fontWeight: 400 }}>
                        {" "}
                        (Don't put a $ sign if there is none in the ticker)
                      </span>
                    </Typography>
                  </Typography>

                  <InputText placeholder="Eg: BTC" name="symbol" id="symbol" />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
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
                    Logo
                  </Typography>

                  <CoinUploader
                    name="logo"
                    id="logo"
                    setAddIcon={setCoinLogo}
                    addIconData={addCoinLogo}
                    title="Coin Logo"
                  />
                </Grid>
              </Grid>
              <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
                <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  pt={{ xs: 3, sm: 3, md: 0 }}
                >
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
                    Project Description
                  </Typography>
                  <InputTextArea
                    name="description"
                    id="description"
                    placeholder="Enter Detailed Project Details. Recommended word count 450 - 950."
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
                  />
                </Grid>
              </Grid>

              {coinStatus === "Presale" ? (
                <Grid container mb={5} mt={1}>
                  <Stack direction={{xs:"column",sm:"column",md:"row"}} spacing={3} mb={2}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 400,
                        }}
                        mb={1}
                      >
                        Presale start Date & Time (UTC)
                      </Typography>

                      <InputDateTime
                        dateTime={dateTime}
                        setDateTime={setDateTime}
                        start_date={true}
                      />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 400,
                        }}
                        mb={1}
                      >
                        Presale end Date & Time (UTC)
                      </Typography>

                      <InputDateTime
                        dateTime={dateTime}
                        setDateTime={setDateTime}
                        start_date={false}
                      />
                    </Grid>
                  </Stack>

                  <Stack direction={{xs:"column",sm:"column",md:"row"}} spacing={3}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 400,
                        }}
                        mb={1}
                      >
                        Presale address (Optional)
                      </Typography>

                      <InputText
                        placeholder="Eg: faffhaafasgdasdsafdywdtdw"
                        id="presale_address"
                        name="presale_address"
                      />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 400,
                        }}
                        mb={1}
                      >
                        Presale Link
                      </Typography>

                      <InputText
                        placeholder="Enter presale address"
                        name="presale_link"
                        id="presale_link"
                      />
                    </Grid>
                  </Stack>
                </Grid>
              ) : (
                <Grid container mb={5} mt={1}>
                  <Stack direction={{xs:"column",sm:"column",md:"row"}} spacing={3} mb={1}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 400,
                        }}
                        mb={1}
                      >
                        Price
                      </Typography>

                      <InputText
                        placeholder="Enter Price(Eg: $5.89)"
                        id="price"
                        name="price"
                      />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 400,
                        }}
                        mb={1}
                      >
                        Circularity Supply (Optional)
                      </Typography>

                      <InputText
                        placeholder="Enter ircularity Supply(Eg: 100,0000)"
                        id="circulating_supply"
                        name="circulating_supply"
                      />
                    </Grid>
                  </Stack>

                  <Stack direction={{xs:"column",sm:"column",md:"row"}} spacing={3} mb={1}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 400,
                        }}
                        mb={1}
                      >
                        Max/Total Supply
                      </Typography>

                      <InputText
                        placeholder="Enter Max/Total Supply(Eg: 100,000000)"
                        id="max_supply"
                        name="max_supply"
                      />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "left",
                          fontSize: ".9rem",
                          fontWeight: 400,
                        }}
                        mb={1}
                      >
                        Marketcap (Optional)
                      </Typography>

                      <InputText
                        placeholder="Enter marketcap(Eg: $100,0000)"
                        id="market_cap"
                        name="market_cap"
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
            sx={{
              width: "auto",
              background: "linear-gradient(to bottom,#040B27 30%, #01061A 80%)",
              borderRadius: "7px",
            }}
            px={{ xs: 3, sm: 3, md: 5 }}
            py={5}
            mb={5}
          >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pb={2}>
              <Typography
                variant="h6"
                sx={{ textAlign: "left", color: "#D7DADB" }}
                mb={0}
              >
                Network Details
              </Typography>
              <Typography
                variant="caption"
                sx={{ textAlign: "left", color: "#b4b4b4" }}
                mb={2}
              >
                Please specify the chain that you are on (Eg: Binance Smart
                Chain, Ethereum, Heco)
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={3}
              >
                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
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
                    Network 1
                  </Typography>
                  <InputSelectCoin
                    name={`network[1]`}
                    id={`network_1`}
                    data={networkList}
                    height={40}
                    width={250}
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
                      fontWeight: 400,
                      color: "#00ff95",
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
                      fontWeight: 400,
                      color: "#00ff95",
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
                  pt={{ xs: 0, sm: 0, md: 4.5, lg: 4.5, xl: 4.5 }}
                >
                  <Link
                    onClick={networkaddHandle}
                    underline="none"
                    sx={{ color: "#75ABCF", fontSize: ".8rem" }}
                  >
                    Add more +
                  </Link>
                </Grid>
              </Stack>
            </Grid>
            {networkCount.map((network, index) => {
              return (
                <div>
                  <NetworkDetails
                    networkCount={networkCount}
                    index={index}
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
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={4} pb={2}>
              <Typography
                variant="h6"
                sx={{ textAlign: "left", color: "#D7DADB" }}
                mb={0}
              >
                Exchange Details
              </Typography>
              <Typography
                variant="caption"
                sx={{ textAlign: "left", color: "#b4b4b4" }}
                mb={2}
              >
                Provide exchange details where token is listed
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={3}
              >
                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
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
                    Exchange 1
                  </Typography>
                  <InputSelectCoin
                    name={`exchange_id[1]`}
                    id={`exchange_id_1`}
                    data={exchangeList}
                    height={40}
                    width={300}
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
                      fontWeight: 400,
                      color: "#00ff95",
                    }}
                    mb={1}
                  >
                    Exchange URL
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
                    sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 400 }}
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
                  pt={{ xs: 0, sm: 0, md: 4.5, lg: 4.5, xl: 4.5 }}
                >
                  <Link
                    onClick={exchangeaddHandle}
                    underline="none"
                    sx={{ color: "#75ABCF", fontSize: ".8rem" }}
                  >
                    Add more +
                  </Link>
                </Grid>
              </Stack>
            </Grid>

            {exchangeCount.map((exchange, index) => {
              return (
                <div>
                  <ExchangeDetails
                    exchangeCount={exchangeCount}
                    index={index}
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
            sx={{
              width: "auto",
              background: "linear-gradient(to bottom,#040B27 30%, #01061A 80%)",
              borderRadius: "7px",
            }}
            px={{ xs: 3, sm: 3, md: 5 }}
            py={5}
            mb={5}
          >
            {coinStatus === "Presale" ? (
              <Grid item xs={12} mb={5} mt={1}>
                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  spacing={3}
                  mb={2}
                >
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                      Presale start Date & Time (UTC)
                    </Typography>

                    <InputDateTime
                      dateTime={dateTime}
                      setDateTime={setDateTime}
                      start_date={true}
                    />
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                      Presale end Date & Time (UTC)
                    </Typography>

                    <InputDateTime
                      dateTime={dateTime}
                      setDateTime={setDateTime}
                      start_date={false}
                    />
                  </Grid>
                </Stack>

                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  spacing={3}
                >
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                      Presale address{" "}
                      {/* <span
                        style={{
                          color: "#234A84",
                          fontWeight: 400,
                          fontSize: ".7rem",
                        }}
                      >
                        {" "}
                        (Optional)
                      </span> */}
                    </Typography>

                    <InputText
                      placeholder="Eg: 0x2170ed0880ac9a755fd29b2688956bd959f933f8"
                      id="presale_address"
                      name="presale_address"
                    />
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                      Presale URL
                    </Typography>

                    <InputText
                      placeholder="Enter presale url"
                      name="presale_link"
                      id="presale_link"
                    />
                  </Grid>
                </Stack>

                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  spacing={3}
                  mb={1}
                  pt={2}
                >
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                      Circulating Supply{" "}
                      <span
                        style={{
                          color: "#234A84",
                          fontWeight: 400,
                          fontSize: ".7rem",
                        }}
                      >
                        {" "}
                        (Optional)
                      </span>
                    </Typography>

                    <InputText
                      placeholder="Eg: 100000000000"
                      id="circulating_supply"
                      name="circulating_supply"
                      type="number"
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                      Max/Total Supply
                    </Typography>

                    <InputText
                      placeholder="Eg: 100000000000"
                      id="max_supply"
                      name="max_supply"
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
                      fontWeight: 400,
                      color: "#00ff95",
                    }}
                    mb={1}
                  >
                    Marketcap{" "}
                    <span
                      style={{
                        color: "#234A84",
                        fontWeight: 400,
                        fontSize: ".7rem",
                      }}
                    >
                      {" "}
                      (Optional)
                    </span>
                  </Typography>

                  <InputText
                    placeholder="Eg: 100000000000"
                    id="market_cap"
                    name="market_cap"
                    type="number"
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid item xs={12} mb={5} mt={1}>
                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  spacing={3}
                  mb={1}
                >
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                      Price{" "}
                      <span
                        style={{
                          fontSize: ".8rem",
                          color: "#FFFFFF",
                          fontWeight: 400,
                        }}
                      >
                        (Don't put any currency symbol in price)
                      </span>
                    </Typography>

                    <InputText
                      placeholder="Eg: 5.89"
                      id="price"
                      name="price"
                      type="number"
                    />
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                      Circulating Supply{" "}
                      <span
                        style={{
                          color: "#234A84",
                          fontWeight: 400,
                          fontSize: ".7rem",
                        }}
                      >
                        {" "}
                        (Optional)
                      </span>
                    </Typography>

                    <InputText
                      placeholder="Eg: 100000000000"
                      id="circulating_supply"
                      name="circulating_supply"
                      type="number"
                    />
                  </Grid>
                </Stack>

                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  spacing={3}
                  mb={1}
                >
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                      Max/Total Supply
                    </Typography>

                    <InputText
                      placeholder="Eg: 100000000000"
                      id="max_supply"
                      name="max_supply"
                      type="number"
                    />
                  </Grid>

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                      Marketcap{" "}
                      <span
                        style={{
                          color: "#234A84",
                          fontWeight: 400,
                          fontSize: ".7rem",
                        }}
                      >
                        {" "}
                        (Optional)
                      </span>
                    </Typography>

                    <InputText
                      placeholder="Eg: 100000000000"
                      id="market_cap"
                      name="market_cap"
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
            sx={{
              width: "auto",
              background: "linear-gradient(to bottom,#040B27 30%, #01061A 80%)",
              borderRadius: "7px",
            }}
            px={{ xs: 3, sm: 3, md: 5 }}
            py={5}
            mb={5}
          >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={4} pb={2}>
              <Typography
                variant="h6"
                sx={{ textAlign: "left", color: "#D7DADB" }}
                mb={0}
              >
                Source Code, Docs & Whitepaper Details
              </Typography>
              <Typography
                variant="caption"
                sx={{ textAlign: "left", color: "#b4b4b4" }}
                mb={2}
              >
                Please provide information about coin.
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={3}
                pb={2}
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
                    Source Code URL
                  </Typography>
                  <InputText
                    placeholder="Enter source code url"
                    id="source_code_url"
                    name="source_code_url"
                  />
                </Grid>
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
                    Medium URL
                  </Typography>
                  <InputText
                    placeholder="Enter Medium url"
                    id="medium_link"
                    name="medium_link"
                  />
                </Grid>
              </Stack>
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
                    Whitepaper URL
                  </Typography>
                  <InputText
                    placeholder="Enter Whitepaper url"
                    id="whitepaper_link"
                    name="whitepaper_link"
                  />
                </Grid>
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
                    Docs URL
                  </Typography>
                  <InputText
                    placeholder="Enter Docs url"
                    id="docs_link"
                    name="docs_link"
                  />
                </Grid>
              </Stack>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2} pb={2}>
              <Typography
                variant="h6"
                sx={{ textAlign: "left", color: "#D7DADB" }}
                mb={0}
              >
                Audit Details
              </Typography>
              <Typography
                variant="caption"
                sx={{ textAlign: "left", color: "#b4b4b4" }}
                mb={2}
              >
                Please Provide the audit details
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={3}
              >
                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
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
                    Audited By
                  </Typography>
                  <InputSelectCoin
                    name="audited_by[1]"
                    id="audited_by_1"
                    data={coinAuditList}
                    height={40}
                    width={300}
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
                      fontWeight: 400,
                      color: "#00ff95",
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
                  pt={{ xs: 0, sm: 0, md: 4.5, lg: 4.5, xl: 4.5 }}
                >
                  <Link
                    onClick={auditaddHandle}
                    underline="none"
                    sx={{ color: "#75ABCF", fontSize: ".8rem" }}
                  >
                    Add more +
                  </Link>
                </Grid>
              </Stack>
            </Grid>
            {auditCount.map((audit, index) => {
              return (
                <div>
                  <AuditDetails
                    auditCount={auditCount}
                    index={index}
                    key={index}
                    auditremoveHandle={auditremoveHandle}
                    data={coinAuditList}
                  />
                </div>
              );
            })}

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2} pb={2}>
              <Typography
                variant="h6"
                sx={{ textAlign: "left", color: "#D7DADB" }}
                mb={0}
              >
                Chart Details
              </Typography>
              <Typography
                variant="caption"
                sx={{ textAlign: "left", color: "#b4b4b4" }}
                mb={2}
              >
                Please Provide the Chart information
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={3}
              >
                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
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
                    Chart Provider
                  </Typography>
                  <InputSelectCoin
                    name="chart_provider[1]"
                    id="chart_provider_1"
                    data={coinChartProviderList}
                    height={40}
                    width={300}
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
                      fontWeight: 400,
                      color: "#00ff95",
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
                  pt={{ xs: 0, sm: 0, md: 4.5, lg: 4.5, xl: 4.5 }}
                >
                  <Link
                    onClick={chartaddHandle}
                    underline="none"
                    sx={{ color: "#75ABCF", fontSize: ".8rem" }}
                  >
                    Add more +
                  </Link>
                </Grid>
              </Stack>
            </Grid>
            {chartCount.map((chart, index) => {
              return (
                <div>
                  <ChartDetails
                    chartCount={chartCount}
                    index={index}
                    key={index}
                    chartremoveHandle={chartremoveHandle}
                    data={coinChartProviderList}
                  />
                </div>
              );
            })}
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={3}
              pt={3}
            >
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  pt={2}
                  pb={2}
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
                    Please Provide the Social details
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
                      <CommunityDetails
                        communityCount={communityCount}
                        index={index}
                        key={index}
                        communityremoveHandle={communityremoveHandle}
                      />
                    </div>
                  );
                })}

                {/* 
<Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
                  <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                    Community Details
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ textAlign: "left" }}
                    mb={2}
                  >
                    Please Provide the information about coin
                  </Typography>
                </Grid> */}
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
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
                        Coin Video URL
                      </Typography>
                      <InputText
                        placeholder="Eg: https://www.youtube.com/watch?v=kt8rThtkf"
                        name="video_url"
                        id="video_url"
                      />
                    </Grid>
                    {/* <Grid
                      item
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={12}
                             pt={{ xs: 0, sm: 0, md: 4.5, lg: 4.5, xl: 4.5 }}
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
                  <Stack direction="column" spacing={0}>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "left", color: "#D7DADB" }}
                      mb={0}
                    >
                      Listed on
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ textAlign: "left", color: "#b4b4b4" }}
                      mb={0}
                    >
                      (Please check your coin is listed in the following
                      website)
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Stack direction="column" spacing={3} pt={3}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack
                        direction={{ xs: "column", sm: "column", md: "row" }}
                        spacing={3}
                      >
                        <FormControlLabel
                          control={
                            <InputCheckbox
                              name="is_listed_market_cap"
                              id="is_listed_market_cap"
                              checked={checked}
                              setChecked={setChecked}
                              condition="is_listed_market_cap"
                              value={checked.is_listed_market_cap}
                            />
                          }
                          label={
                            <Typography
                              sx={{ fontSize: ".85rem", color: "#00ff95" }}
                            >
                              Coin Marketcap
                            </Typography>
                          }
                          sx={{ fontSize: "10px" }}
                        />

                        <InputText
                          placeholder="Enter coinmarketcap url"
                          checkboxStatus={!checked.is_listed_market_cap}
                          id="coin_market_cap_url"
                          name="coin_market_cap_url"
                        />
                      </Stack>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack
                        direction={{ xs: "column", sm: "column", md: "row" }}
                        spacing={3}
                      >
                        <FormControlLabel
                          control={
                            <InputCheckbox
                              id="is_listed_coingecko"
                              name="is_listed_coingecko"
                              checked={checked}
                              setChecked={setChecked}
                              condition="is_listed_coingecko"
                              value={checked.is_listed_coingecko}
                            />
                          }
                          label={
                            <Typography
                              sx={{ fontSize: ".9rem", color: "#00ff95" }}
                            >
                              Coingecko
                            </Typography>
                          }
                          sx={{ fontSize: "10px" }}
                        />

                        <InputText
                          placeholder="Enter coingecko url"
                          checkboxStatus={!checked.is_listed_coingecko}
                          name="coingecko_url"
                          id="coingecko_url"
                        />
                      </Stack>
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={3}
              pt={4}
            >
              <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                {/* <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  pt={2}
                  pb={2}
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
                    Please Provide the information about coin
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
                        Chat Platform
                      </Typography>
                      <InputSelectCoin
                        name="chat_platform[1]"
                        id="chat_platform_1"
                        data={coinChatList}
                        height={40}
                        width={300}
                           variant="chat"
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
                </Grid>

                {chatCount.map((chat, index) => {
                  return (
                    <div>
                      <ChatDetails
                        chatCount={chatCount}
                        index={index}
                        key={index}
                        chatremoveHandle={chatremoveHandle}
                        data={coinChatList}
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
                  pb={2}
                >
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "left", color: "#D7DADB" }}
                    mb={0}
                  >
                    Socials Details
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ textAlign: "left", color: "#b4b4b4" }}
                    mb={2}
                  >
                    Enter social details
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
                        name="social_platform[1]"
                        id="social_platform_1"
                        data={coinSocialList}
                        height={40}
                        width={300}
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
                      <SocialDetails
                        socialCount={socialCount}
                        index={index}
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
                {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                    Random Vote
                  </Typography>
                  <InputText
                    placeholder="Eg:1"
                    name="vote"
                    id="vote"
                    value="0"
                  />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={4}>
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
                  <Stack direction={{xs:"column",sm:"column",md:"row"}} spacing={3}>
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
              </Grid>
            </Stack>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={5}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={3}
              >
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
                <Grid item xl={5} lg={5} md={5} sm={12} xs={12} pt={5}>
                  <Stack
                    spacing={2}
                    sx={{
                      alignItems: {
                        xs: "center",
                        sm: "center",
                        md: "flex-end",
                      },
                    }}
                    pb={5}
                    mr={{ xs: 0, sm: 0, md: 5 }}
                  >
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
                        Title="Add Coin"
                        lgBtnHandler={coinAddHandler}
                      />
                    )}
                  </Stack>
                </Grid>
              </Stack>
            </Grid>
          </Box>
        </Grid>
      </form>
    </Box>
  );
};

export default CoinListingAdd;
