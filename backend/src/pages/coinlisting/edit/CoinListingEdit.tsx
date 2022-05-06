import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
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
import dateFormat, { masks } from "dateformat";

//import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";

import Link from "@mui/material/Link";
import NetworkDetails from "./NetworkDetails";
import ExchangeDetails from "./ExchangeDetails";
import AuditDetails from "./AuditDetails";
import ChartDetails from "./ChartDetails";
import CommunityDetails from "./CommunityDetails";
import ChatDetails from "./ChatDetails";
import SocialDetails from "./SocialDetails";

import { listExchangeRequest } from "../../../store/action";
import { listNetworkRequest } from "../../../store/action";
import { listCoinAuditRequest } from "../../../store/action";
import { listCoinChatRequest } from "../../../store/action";
import { listCoinSocialRequest } from "../../../store/action";
import { listChartProviderRequest } from "../../../store/action";
import { updateCoinsRequest } from "../../../store/action";

// import { listUsersRequest } from "../../../store/action";
// import { listVideoRequest } from "../../../store/action";
// import { listCoinRequest } from "../../../store/action";
// import { listMenuCardRequest } from "../../../store/action";
// import { listNftMarketPlacesRequest } from "../../../store/action";
// import { listNftListingsRequest } from "../../../store/action";

const CoinListingEdit = () => {
  const location: any = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const coinList = useSelector((cnList: any) => {
    return cnList.listCoinReducer.coinListAll.data;
  });
  let newArrList = coinList.filter(
    (userData: any) => userData.id === location.state.id
  );

  console.log(newArrList);
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Scheduled", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  const exchangeList = useSelector((exList: any) => {
    return exList.listExchangeReducer.exchangeListAll.data;
  });

  const networkList = useSelector((ntList: any) => {
    return ntList.listNetworkReducer.natworkListAll.data;
  });
  const coinAuditList = useSelector((auditList: any) => {
    return auditList.listCoinAuditReducer.auditListAll.data;
  });
  const coinChartProviderList = useSelector((chartProviderList: any) => {
    return chartProviderList.listCoinChartProviderReducer.chartProviderListAll
      .data;
  });

  const coinChatList = useSelector((chatList: any) => {
    return chatList.listCoinChatReducer.coinChatListAll.data;
  });

  const coinSocialList = useSelector((socialList: any) => {
    return socialList.listCoinSocialReducer.coinSocialListAll.data;
  });

  const [coinStatus, setCoinStatus] = useState(
    newArrList[0].is_presale === 1
      ? "Presale"
      : newArrList[0].is_launched === 1
      ? "Launched"
      : "Presale"
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
    console.log(networkCount);
  };

  const [exchangeCount, setExchangeCount] = useState<any[]>([]);
  const exchangeaddHandle = () => {
    setExchangeCount([...exchangeCount, { exchange: "" }]);
  };

  const exchangeremoveHandle = (index: any) => {
    let exchangeList = [...exchangeCount];
    exchangeList.splice(-1, 1);
    setExchangeCount(exchangeList);
  };
  const [auditCount, setauditCount] = useState<any[]>([]);

  const auditaddHandle = () => {
    setauditCount([...auditCount, { audit: "" }]);
  };

  const auditremoveHandle = (index: any) => {
    let auditList = [...auditCount];
    auditList.splice(-1, 1);
    setauditCount(auditList);
  };

  const [chartCount, setchartCount] = useState<any[]>([]);

  const chartaddHandle = () => {
    setchartCount([...chartCount, { chart: "" }]);
  };

  const chartremoveHandle = (index: any) => {
    let chartList = [...chartCount];
    chartList.splice(-1, 1);
    setchartCount(chartList);
  };

  const [communityCount, setcommunityCount] = useState<any[]>([]);

  const communityaddHandle = () => {
    setcommunityCount([...communityCount, { community: "" }]);
  };

  const communityremoveHandle = (index: any) => {
    let communityList = [...communityCount];
    communityList.splice(-1, 1);
    setcommunityCount(communityList);
  };

  const [chatCount, setchatCount] = useState<any[]>([]);

  const chataddHandle = () => {
    setchatCount([...chatCount, { chat: "" }]);
  };

  const chatremoveHandle = (index: any) => {
    let chatList = [...chatCount];
    chatList.splice(-1, 1);
    setchatCount(chatList);
  };

  const [socialCount, setsocialCount] = useState<any[]>([]);

  const socialaddHandle = () => {
    setsocialCount([...socialCount, { social: "" }]);
  };

  const socialremoveHandle = (index: any) => {
    let socialList = [...socialCount];
    socialList.splice(-1, 1);
    setsocialCount(socialList);
  };

  const [coinPublishStatus, setPublishCoinStatus] = useState<any>({
    status: newArrList[0].status && newArrList[0].status,
    statusDateTime: new Date(),
    is_scheduled: 0,
  });

  //console.log(coinPublishStatus);

  const [loading, setLoading] = useState(false);

  const coinEditHandler = (e: any) => {
    var formData = new FormData(document.querySelector("#coinForm") as any);

    formData.append("id", location.state.id);
    addCoinLogo.coinLogo !== "" &&
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
      //console.log(res);
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

    dispatch(updateCoinsRequest(formData, successHandler, errorHandler));
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      //console.log(res);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };

    dispatch(
      listExchangeRequest("emptyformData", successHandler, errorHandler)
    );
    dispatch(listNetworkRequest("emptyformData", successHandler, errorHandler));

    dispatch(
      listCoinAuditRequest("emptyformData", successHandler, errorHandler)
    );
    dispatch(
      listChartProviderRequest("emptyformData", successHandler, errorHandler)
    );
    dispatch(
      listCoinChatRequest("emptyformData", successHandler, errorHandler)
    );
    dispatch(
      listCoinSocialRequest("emptyformData", successHandler, errorHandler)
    );
  }, [dispatch, location]);

  return (
    <Grid container spacing={0}>
      <form id="coinForm">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={2} ml={2}>
          <HorizonatalList />
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={2} mb={2}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <IconButton>
              <ArrowBackIosTwoToneIcon
                onClick={() => {
                  navigate("/coins");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Edit coin
              <Typography variant="caption">
                {newArrList[0].is_presale === 1 &&
                newArrList[0].is_presale !== 0
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
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={5}>
              <Typography variant="h6" sx={{ textAlign: "left" }} mb={2}>
                Basic Details
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Enter contract address
              </Typography>
              <Stack direction="row" spacing={3}>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                  <InputText
                    placeholder="Eg: 09s8jgggffffay63733773"
                    id="address"
                    name="address"
                    value={newArrList[0].address}
                  />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                  <InputSelectCoin
                    name="network_id"
                    id="network_id"
                    data={networkList}
                    selectedValue={newArrList[0].network_id}
                  />
                </Grid>
              </Stack>
            </Grid>
            <Divider />
            <Grid container mb={5} mt={5}>
              <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Coin Name
                  </Typography>

                  <InputText
                    placeholder="Eg: Bitcoin"
                    name="name"
                    id="name"
                    value={newArrList[0].name}
                  />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
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
                    placeholder="Enter Exchange url"
                    name="symbol"
                    id="symbol"
                    value={newArrList[0].symbol}
                  />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Logo
                  </Typography>

                  <CoinUploader
                    name="logo"
                    id="logo"
                    setAddIcon={setCoinLogo}
                    addIconData={addCoinLogo}
                  />
                </Grid>
              </Grid>
              <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
                  <InputTextArea
                    name="description"
                    id="description"
                    placeholder="Detailed project description"
                    value={newArrList[0].description}
                  />
                </Grid>
              </Grid>

              <Grid container mb={5} mt={5}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                    Coin Status
                  </Typography>

                  <InputRadio
                    coinStatus={coinStatus}
                    setCoinStatus={setCoinStatus}
                    serverIsLanuched={newArrList[0].is_launched}
                    serverIsPresale={newArrList[0].is_presale}
                  />
                </Grid>
              </Grid>

              {coinStatus === "Presale" ? (
                <Grid container mb={5} mt={1}>
                  <Stack direction="row" spacing={3} mb={2}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Presale start Date & Time (UTC)
                      </Typography>

                      <InputDateTime
                        dateTime={dateTime}
                        setDateTime={setDateTime}
                        start_date={true}
                        ServerValue={newArrList[0].presale_start_date}
                      />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Presale end Date & Time (UTC)
                      </Typography>

                      <InputDateTime
                        dateTime={dateTime}
                        setDateTime={setDateTime}
                        start_date={false}
                        ServerValue={newArrList[0].presale_end_date}
                      />
                    </Grid>
                  </Stack>

                  <Stack direction="row" spacing={3}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Presale address (Optional)
                      </Typography>

                      <InputText
                        placeholder="Eg: faffhaafasgdasdsafdywdtdw"
                        id="presale_address"
                        name="presale_address"
                        value={newArrList[0].presale_address}
                      />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Presale Link
                      </Typography>

                      <InputText
                        placeholder="Enter presale address"
                        name="presale_link"
                        id="presale_link"
                        value={newArrList[0].presale_link}
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
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Price
                      </Typography>

                      <InputText
                        placeholder="Enter Price(Eg: $5.89)"
                        id="price"
                        name="price"
                        value={newArrList[0].price}
                      />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Circularity Supply (Optional)
                      </Typography>

                      <InputText
                        placeholder="Enter ircularity Supply(Eg: 100,0000)"
                        id="circulating_supply"
                        name="circulating_supply"
                        value={newArrList[0].circulating_supply}
                      />
                    </Grid>
                  </Stack>

                  <Stack direction="row" spacing={3} mb={1}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Max/Total Supply
                      </Typography>

                      <InputText
                        placeholder="Enter Max/Total Supply(Eg: 100,000000)"
                        id="max_supply"
                        name="max_supply"
                        value={newArrList[0].max_supply}
                      />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Marketap (Optional)
                      </Typography>

                      <InputText
                        placeholder="Enter marketcap(Eg: $100,0000)"
                        id="market_cap"
                        name="market_cap"
                        value={newArrList[0].market_cap}
                      />
                    </Grid>
                  </Stack>
                </Grid>
              )}
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
                Please specify the chain that you are on (Eg:Binance Smart
                Chain, Etherieum, Heco)
              </Typography>
            </Grid>

            {newArrList[0].has_many_networks.length !== 0 &&
            newArrList[0].has_many_networks !== undefined ? (
              newArrList[0].has_many_networks.map(
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
                            sx={{ textAlign: "left" }}
                            mb={1}
                          >
                            Network {index + 1}
                          </Typography>
                          <InputSelectCoin
                            name={`network[${index + 1}]`}
                            id={`network_${index + 1}`}
                            data={networkList}
                            selectedValue={networks.network_id}
                          />
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "left" }}
                            mb={1}
                          >
                            Contract address {index + 1}
                          </Typography>
                          <InputText
                            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                            name={`network_address[${index + 1}]`}
                            id={`network_address_${index + 1}`}
                            value={networks.address}
                          />
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "left" }}
                            mb={1}
                          >
                            Block explorer URL {index + 1}
                          </Typography>
                          <InputText
                            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
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
                          {newArrList[0].has_many_networks.length - 1 ===
                            index && (
                            <Link onClick={networkaddHandle} underline="none">
                              Add more +
                            </Link>
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
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      Network 1
                    </Typography>
                    <InputSelectCoin
                      name={`network[1]`}
                      id={`network_1`}
                      data={networkList}
                    />
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      Contract address 1
                    </Typography>
                    <InputText
                      placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                      name={`network_address[1]`}
                      id={`network_address_1`}
                    />
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      Block explorer URL 1
                    </Typography>
                    <InputText
                      placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
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
                      newArrList[0].has_many_networks &&
                      newArrList[0].has_many_networks !== undefined
                        ? newArrList[0].has_many_networks.length - 1 + index
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

            {newArrList[0].has_many_exchanges.length !== 0 &&
            newArrList[0].has_many_exchanges !== undefined ? (
              newArrList[0].has_many_exchanges.map(
                (exchanges: any, index: number) => {
                  return (
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack direction="row" spacing={3}>
                        <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "left" }}
                            mb={1}
                          >
                            Exchange {index + 1}
                          </Typography>
                          <InputSelectCoin
                            name={`exchange_id[${index + 1}]`}
                            id={`exchange_id_${index + 1}`}
                            data={exchangeList}
                            selectedValue={exchanges.exchange_id}
                          />
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "left" }}
                            mb={1}
                          >
                            Exchange URL {index + 1}
                          </Typography>
                          <InputText
                            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                            name={`url[${index + 1}]`}
                            id={`url_${index + 1}`}
                            value={exchanges.url}
                          />
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
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
                          {newArrList[0].has_many_exchanges.length - 1 ===
                            index && (
                            <Link onClick={exchangeaddHandle} underline="none">
                              Add more +
                            </Link>
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
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      Exchange 1
                    </Typography>
                    <InputSelectCoin
                      name={`exchange_id[1]`}
                      id={`exchange_id_1`}
                      data={exchangeList}
                    />
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      Exchange URL 1
                    </Typography>
                    <InputText
                      placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                      name={`url[1]`}
                      id={`url_1`}
                    />
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      Block explorer URL 1
                    </Typography>
                    <InputText
                      placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                      name={`exchange_explorer_link[1]`}
                      id={`exchange_explorer_link_1`}
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
                      newArrList[0].has_many_exchanges &&
                      newArrList[0].has_many_exchanges !== undefined
                        ? newArrList[0].has_many_exchanges.length - 1 + index
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
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Github URL
                  </Typography>
                  <InputText
                    placeholder="Enter github url"
                    id="github_link"
                    name="github_link"
                    value={newArrList[0].github_link}
                  />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Medium URL
                  </Typography>
                  <InputText
                    placeholder="Enter Medium URL"
                    id="medium_link"
                    name="medium_link"
                    value={newArrList[0].medium_link}
                  />
                </Grid>
              </Stack>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack direction="row" spacing={3}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Whitepaper URL
                  </Typography>
                  <InputText
                    placeholder="Enter whitepaper URL"
                    id="whitepaper_link"
                    name="whitepaper_link"
                    value={newArrList[0].whitepaper_link}
                  />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Docs URL 1
                  </Typography>
                  <InputText
                    placeholder="Enter docs URL"
                    id="docs_link"
                    name="docs_link"
                    value={newArrList[0].docs_url}
                  />
                </Grid>
              </Stack>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
              <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                Audit Details
              </Typography>
              <Typography variant="caption" sx={{ textAlign: "left" }} mb={2}>
                Please Provide the information about coin
              </Typography>
            </Grid>

            {newArrList[0].has_many_audits.length !== 0 &&
            newArrList[0].has_many_audits !== undefined ? (
              newArrList[0].has_many_audits.map(
                (audits: any, index: number) => {
                  return (
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack direction="row" spacing={3}>
                        <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "left" }}
                            mb={1}
                          >
                            Audited By {index + 1}
                          </Typography>
                          <InputSelectCoin
                            name={`audited_by[${index + 1}]`}
                            id={`audited_by_${index + 1}`}
                            data={coinAuditList}
                            selectedValue={parseInt(audits.audited_by)}
                          />
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "left" }}
                            mb={1}
                          >
                            Audit URL {index + 1}
                          </Typography>
                          <InputText
                            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
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
                          {newArrList[0].has_many_audits.length - 1 ===
                            index && (
                            <Link onClick={auditaddHandle} underline="none">
                              Add more +
                            </Link>
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
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      Audited By
                    </Typography>
                    <InputSelectCoin
                      name="audited_by[1]"
                      id="audited_by_1"
                      data={coinAuditList}
                    />
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      Audit URL
                    </Typography>
                    <InputText
                      placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
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
                      newArrList[0].has_many_audits &&
                      newArrList[0].has_many_audits !== undefined
                        ? newArrList[0].has_many_audits.length - 1 + index
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
                Please Provide the information about coin
              </Typography>
            </Grid>

            {newArrList[0].has_many_charts.length !== 0 &&
            newArrList[0].has_many_charts !== undefined ? (
              newArrList[0].has_many_charts.map(
                (charts: any, index: number) => {
                  return (
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack direction="row" spacing={3}>
                        <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "left" }}
                            mb={1}
                          >
                            Chart Provider {index + 1}
                          </Typography>
                          <InputSelectCoin
                            name={`chart_provider[${index + 1}]`}
                            id={`chart_provider_${index + 1}`}
                            data={coinChartProviderList}
                            selectedValue={parseInt(charts.chart_provider)}
                          />
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                          <Typography
                            variant="subtitle1"
                            sx={{ textAlign: "left" }}
                            mb={1}
                          >
                            Chart URL {index + 1}
                          </Typography>
                          <InputText
                            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
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
                          {newArrList[0].has_many_charts.length - 1 ===
                            index && (
                            <Link onClick={chartaddHandle} underline="none">
                              Add more +
                            </Link>
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
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      Chart Provider
                    </Typography>
                    <InputSelectCoin
                      name="chart_provider[1]"
                      id="chart_provider_1"
                      data={coinChartProviderList}
                    />
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "left" }}
                      mb={1}
                    >
                      Chart URL
                    </Typography>
                    <InputText
                      placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
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
                      newArrList[0].has_many_charts &&
                      newArrList[0].has_many_charts !== undefined
                        ? newArrList[0].has_many_charts.length - 1 + index
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
                    Please Provide the information about coin
                  </Typography>
                </Grid>

                {newArrList[0].has_many_communitys.length !== 0 &&
                newArrList[0].has_many_communitys !== undefined ? (
                  newArrList[0].has_many_communitys.map(
                    (communitys: any, index: number) => {
                      return (
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                          <Stack direction="row" spacing={3}>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                              <Typography
                                variant="subtitle1"
                                sx={{ textAlign: "left" }}
                                mb={1}
                              >
                                Website URL {index + 1}
                              </Typography>
                              <InputText
                                placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
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
                              {newArrList[0].has_many_communitys.length - 1 ===
                                index && (
                                <Link
                                  onClick={communityaddHandle}
                                  underline="none"
                                >
                                  Add more +
                                </Link>
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
                )}

                {communityCount.map((community, index) => {
                  return (
                    <div>
                      <CommunityDetails
                        communityCount={communityCount}
                        index={
                          newArrList[0].has_many_communitys &&
                          newArrList[0].has_many_communitys !== undefined
                            ? newArrList[0].has_many_communitys.length -
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
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
                  <Typography variant="h6" sx={{ textAlign: "left" }} mb={0}>
                    Listed on
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
                              serverCheckedRef={
                                newArrList[0].is_listed_market_cap
                              }
                            />
                          }
                          label="Coin marketcap"
                          sx={{ fontSize: "10px" }}
                        />

                        <InputText
                          placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                          checkboxStatus={checked.is_listed_market_cap}
                          id="coin_market_cap_url"
                          name="coin_market_cap_url"
                          value={newArrList[0].market_cap_url}
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
                              serverCheckedRef={
                                newArrList[0].is_listed_coingecko
                              }
                            />
                          }
                          label="Coingecko"
                          sx={{ fontSize: "10px" }}
                        />

                        <InputText
                          placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                          checkboxStatus={checked.is_listed_coingecko}
                          name="coingecko_url"
                          id="coingecko_url"
                          value={newArrList[0].coingecko_url}
                        />
                      </Stack>
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" spacing={3} pt={4}>
              <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
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

                {newArrList[0].has_many_chats.length !== 0 &&
                newArrList[0].has_many_chats !== undefined ? (
                  newArrList[0].has_many_chats.map(
                    (chats: any, index: number) => {
                      return (
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                          <Stack direction="row" spacing={3}>
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                              <Typography
                                variant="subtitle1"
                                sx={{ textAlign: "left" }}
                                mb={1}
                              >
                                Chat Platform {index + 1}
                              </Typography>
                              <InputSelectCoin
                                name={`chat_platform[${index + 1}]`}
                                id={`chat_platform_${index + 1}`}
                                data={coinChatList}
                                selectedValue={parseInt(chats.chat_platform)}
                              />
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                              <Typography
                                variant="subtitle1"
                                sx={{ textAlign: "left" }}
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
                              {newArrList[0].has_many_chats.length - 1 ===
                                index && (
                                <Link onClick={chataddHandle} underline="none">
                                  Add more +
                                </Link>
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
                          sx={{ textAlign: "left" }}
                          mb={1}
                        >
                          Chat Platform
                        </Typography>
                        <InputSelectCoin
                          name="chat_platform[1]"
                          id="chat_platform_1"
                          data={coinChatList}
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
                )}

                {chatCount.map((chat, index) => {
                  return (
                    <div>
                      <ChatDetails
                        chatCount={chatCount}
                        index={
                          newArrList[0].has_many_chats &&
                          newArrList[0].has_many_chats !== undefined
                            ? newArrList[0].has_many_chats.length - 1 + index
                            : index
                        }
                        key={index}
                        chatremoveHandle={chatremoveHandle}
                        data={coinChatList}
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
                    Please Provide the information about coin
                  </Typography>
                </Grid>

                {newArrList[0].has_many_socials.length !== 0 &&
                newArrList[0].has_many_socials !== undefined ? (
                  newArrList[0].has_many_socials.map(
                    (socials: any, index: number) => {
                      return (
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                          <Stack direction="row" spacing={3}>
                            <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                              <Typography
                                variant="subtitle1"
                                sx={{ textAlign: "left" }}
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
                              />
                            </Grid>
                            <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                              <Typography
                                variant="subtitle1"
                                sx={{ textAlign: "left" }}
                                mb={1}
                              >
                                Social URL {index + 1}
                              </Typography>
                              <InputText
                                placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
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
                              {newArrList[0].has_many_socials.length - 1 ===
                                index && (
                                <Link
                                  onClick={socialaddHandle}
                                  underline="none"
                                >
                                  Add more +
                                </Link>
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
                          sx={{ textAlign: "left" }}
                          mb={1}
                        >
                          Select Platform
                        </Typography>
                        <InputSelectCoin
                          name="social_platform[1]"
                          id="social_platform_1"
                          data={coinSocialList}
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
                )}
                {socialCount.map((social, index) => {
                  return (
                    <div>
                      <SocialDetails
                        socialCount={socialCount}
                        index={
                          newArrList[0].has_many_socials &&
                          newArrList[0].has_many_socials !== undefined
                            ? newArrList[0].has_many_socials.length - 1 + index
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
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Random Vote
                  </Typography>
                  <InputText
                    placeholder="Eg:1"
                    name="vote"
                    id="vote"
                    value={newArrList[0].vote}
                  />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={4}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
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
                      serverStatus={newArrList[0].status}
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
                          serverCheckedRef={newArrList[0].i_agree}
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
                          serverCheckedRef={newArrList[0].i_declare}
                        />
                      }
                      label="I declare the information provided on this form is accurate and complete to the best of my knowledge and the failure to fullfill the requirements may render my request in admissible"
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
