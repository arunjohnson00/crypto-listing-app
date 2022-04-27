import { useState } from "react";
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

//import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { addCoinRequest } from "../../../store/action";
import Link from "@mui/material/Link";
import NetworkDetails from "./NetworkDetails";
import ExchangeDetails from "./ExchangeDetails";
import AuditDetails from "./AuditDetails";
import ChartDetails from "./ChartDetails";
import CommunityDetails from "./CommunityDetails";
import ChatDetails from "./ChatDetails";
import SocialDetails from "./SocialDetails";

const CoinListingAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  const [coinStatus, setCoinStatus] = useState("Presale");

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

  //console.log(coinStatus);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const coinAddHandler = (e: any) => {
    var formData = new FormData(document.querySelector("#coinForm") as any);
    console.log(...formData);
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
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };

    dispatch(addCoinRequest(formData, successHandler, errorHandler));
    setTimeout(() => {
      //  navigate("/networks");
    }, 3000);
  };

  return (
    <Grid container spacing={2}>
      <form id="coinForm">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={2}>
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
              Add new coin
              <Typography variant="caption">({coinStatus})</Typography>
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
                  <InputText placeholder="Eg: 09s8jgggffffay63733773" />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                  <InputSelectCoin />
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

                  <InputText placeholder="Eg: Bitcoin" />
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

                  <InputText placeholder="Enter Exchange url" />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Logo
                  </Typography>

                  <CoinUploader />
                </Grid>
              </Grid>
              <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
                  <InputTextArea />
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
                  />
                </Grid>
              </Grid>

              {coinStatus === "Presale" ? (
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

                      <InputText placeholder="Enter Price(Eg: $5.89)" />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Circularity Supply (Optional)
                      </Typography>

                      <InputText placeholder="Enter ircularity Supply(Eg: 100,0000)" />
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

                      <InputText placeholder="Enter Max/Total Supply(Eg: 100,000000)" />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Marketap (Optional)
                      </Typography>

                      <InputText placeholder="Enter marketcap(Eg: $100,0000)" />
                    </Grid>
                  </Stack>
                </Grid>
              ) : (
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

                      <InputDateTime />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Presale end Date & Time (UTC)
                      </Typography>

                      <InputDateTime />
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

                      <InputText placeholder="Eg: faffhaafasgdasdsafdywdtdw" />
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Presale Link
                      </Typography>

                      <InputText placeholder="Enter presale address" />
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
                  <InputSelectCoin name={`network[1]`} id={`network_1`} />
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
                  <InputText placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf" />
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
            {networkCount.map((network, index) => {
              return (
                <div>
                  <NetworkDetails
                    networkCount={networkCount}
                    index={index}
                    key={index}
                    networkremoveHandle={networkremoveHandle}
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
                  <InputSelectCoin />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Exchange URL
                  </Typography>
                  <InputText placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf" />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Block explorer URL 1
                  </Typography>
                  <InputText placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf" />
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

            {exchangeCount.map((exchange, index) => {
              return (
                <div>
                  <ExchangeDetails
                    exchangeCount={exchangeCount}
                    index={index}
                    key={index}
                    exchangeremoveHandle={exchangeremoveHandle}
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
              <Stack direction="row" spacing={3}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Github URL
                  </Typography>
                  <InputText placeholder="Enter github url" />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Medium URL
                  </Typography>
                  <InputText placeholder="Enter Medium URL" />
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
                  <InputText placeholder="Enter whitepaper URL" />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Docs URL 1
                  </Typography>
                  <InputText placeholder="Enter docs URL" />
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
                  <InputSelectCoin />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Audit URL
                  </Typography>
                  <InputText placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf" />
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
            {auditCount.map((audit, index) => {
              return (
                <div>
                  <AuditDetails
                    auditCount={auditCount}
                    index={index}
                    key={index}
                    auditremoveHandle={auditremoveHandle}
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
                  <InputSelectCoin />
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Chart URL
                  </Typography>
                  <InputText placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf" />
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
            {chartCount.map((chart, index) => {
              return (
                <div>
                  <ChartDetails
                    chartCount={chartCount}
                    index={index}
                    key={index}
                    chartremoveHandle={chartremoveHandle}
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
                      <InputText placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf" />
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
                      <CommunityDetails
                        communityCount={communityCount}
                        index={index}
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
                          control={<InputCheckbox />}
                          label="Coin marketcap"
                          sx={{ fontSize: "10px" }}
                        />

                        <InputText placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf" />
                      </Stack>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Stack direction="row" spacing={3}>
                        <FormControlLabel
                          control={<InputCheckbox />}
                          label="Coingecko"
                          sx={{ fontSize: "10px" }}
                        />

                        <InputText placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf" />
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
                      <InputSelectCoin />
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Chat URL
                      </Typography>
                      <InputText placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf" />
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
                      <ChatDetails
                        chatCount={chatCount}
                        index={index}
                        key={index}
                        chatremoveHandle={chatremoveHandle}
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
                      <InputSelectCoin />
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                        mb={1}
                      >
                        Social URL
                      </Typography>
                      <InputText placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf" />
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
                      <SocialDetails
                        socialCount={socialCount}
                        index={index}
                        key={index}
                        socialremoveHandle={socialremoveHandle}
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
                  <InputText placeholder="Eg:1" />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={4}>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left" }}
                    mb={1}
                  >
                    Publishing Status
                  </Typography>
                  <InputSelectCoin />
                </Grid>
              </Grid>
            </Stack>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={5}>
              <Stack direction="row" spacing={3}>
                <Grid item xl={7} lg={7} md={7} sm={7} xs={12}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <FormControlLabel
                      control={<InputCheckbox />}
                      label="I agree terms and conditions"
                      sx={{ fontSize: "10px" }}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={3}>
                    <FormControlLabel
                      control={<InputCheckbox />}
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
                    <LargeBtn Title="Add Coin" lgBtnHandler={coinAddHandler} />
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

export default CoinListingAdd;
