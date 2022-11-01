import { useState, useEffect, useRef, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import moment from "moment";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";
import {
  Grid,
  Typography,
  Stack,
  Avatar,
  Box,
  RadioGroup,
  FormControl,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import LargeBtn from "../../../../components/form/button/large/LargeBtn";
import HorizonatalList from "../../../../components/list/horizontal/HorizonatalList";
import CreateAdWizardCard from "../../../../components/cards/createadwizardcard/CreateAdWizardCard";
import AutoCompleSelect from "../../../../components/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../../components/form/input/date/InputDate";
import InputText from "../../../../components/form/input/text/InputText";
import MediumBtn from "../../../../components/form/button/medium/MediumBtn";
import AdSummaryCard from "../../../../components/cards/adsummarycard/AdSummaryCard";
import SaveAdsCard from "../../../../components/cards/saveadscard/SaveAdsCard";
import SaveAndCreateAdsCard from "../../../../components/cards/saveandcreateads/SaveAndCreateAdsCard";
import CoinUploader from "../../../../components/form/input/file/coinlogo/CoinUploader";

import { addAdsListRequest, adsSummaryRequest } from "../../../../store/action";
import InputSelectCoin from "../../../../components/form/selectcoin/InputSelectCoin";
import InputTextArea from "../../../../components/form/textarea/InputTextArea";
import InputSelect from "../../../../components/form/select/InputSelect";

//Server URL
const serverAPIUrl = process.env.REACT_APP_API_URL;
const AdWizardAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adtypeRef = useRef<any>(null);
  const [choseAd, setChooseAd] = useState<any>();
  const [choseAdType, setChooseAdType] = useState<any>();
  const [loading, setLoading] = useState(false);
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const [createAdsData, setCreateAdsData] = useState<any>({
    banner_name: "",
    subtitle: "",
    coin_id: "",
    banner_start_date: new Date(),
    no_of_days: "",
    announcements: "",
    description: "",
    ads_type: 1,
    banner_image: "",
    banner_ad_type: 1,
    banner_target_link: "",
    search_ad_description: "",
    button_name: "",
    icon: "",
    image: "",
    thumb_icon: "",
    logo: "",
    coinLogo: "",
    status: 1,
  });
  console.log(createAdsData);
  const createAdsAddHandler = () => {
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
        navigate("/adslist");
      }, 3000);
    };

    const errorHandler = (err: any) => {
      //console.log(err);

      toast.error(`${err.error.message.response.request.responseText}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    // var formData = new FormData(document.querySelector("#eventForm") as any);
    var formData = new FormData();
    formData.append("banner_name", createAdsData?.banner_name);
    // formData.append("subtitle", createAdsData?.subtitle);
    // formData.append("description", createAdsData?.description);
    // formData.append("ads_type", createAdsData?.ads_type);
    createAdsData?.banner_ad_type === 4 &&
      formData.append("coin_id", createAdsData?.coin_id);
    createAdsData?.banner_ad_type === 9 &&
      formData.append("announcements", createAdsData?.announcements);
    createAdsData?.banner_ad_type === 7 &&
      formData.append(
        "search_ad_description",
        createAdsData?.search_ad_description
      );
    (createAdsData?.banner_ad_type === 7 ||
      createAdsData?.banner_ad_type === 9) &&
      formData.append("button_name", createAdsData?.button_name);
    createAdsData?.banner_ad_type !== 4 &&
      formData.append("banner_image", createAdsData?.banner_image);
    createAdsData?.banner_ad_type !== 4 &&
      formData.append("banner_target_link", createAdsData?.banner_target_link);
    formData.append("banner_ad_type", createAdsData?.banner_ad_type);

    formData.append(
      "banner_start_date",
      moment(new Date(createAdsData.banner_start_date)).format("YYYY-MM-DD")
    );
    formData.append("no_of_days", createAdsData.no_of_days);

    formData.append("status", createAdsData?.status);

    dispatch(addAdsListRequest(formData, successHandler, errorHandler));
  };

  const createAdsNumberOfDaysHandler = (e: any) => {
    //console.log(e);

    setCreateAdsData({ ...createAdsData, no_of_days: e });
  };

  const createAdsNameHandler = (e: any) => {
    //console.log(e);

    setCreateAdsData({ ...createAdsData, banner_name: e });
  };

  const createAdsButtonNameHandler = (e: any) => {
    //console.log(e);

    setCreateAdsData({ ...createAdsData, button_name: e });
  };

  const createAdsLinkHandler = (e: any) => {
    setCreateAdsData({ ...createAdsData, banner_target_link: e });
  };

  const createAdsAnnouncementsHandler = (e: any) => {
    setCreateAdsData({ ...createAdsData, announcements: e });
  };

  const chooseAdHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChooseAd((event.target as HTMLInputElement).value);
    setCreateAdsData({
      ...createAdsData,
      banner_ad_type: parseInt((event.target as HTMLInputElement).value),
    });
    adtypeRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setChooseAdType("");
  };

  const chooseAdTypeHandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChooseAdType((event.target as HTMLInputElement).value);
    setCreateAdsData({
      ...createAdsData,
      banner_ad_type: parseInt((event.target as HTMLInputElement).value),
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          pt={3}
          pb={1}
        >
          <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "flex-start" }}
            >
              <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <IconButton>
                    <ArrowBackIosTwoToneIcon
                      onClick={() => {
                        navigate("/adslist");
                      }}
                    />
                  </IconButton>

                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "left",
                      color: "#3C3658",
                      fontWeight: 500,
                    }}
                  >
                    Create New Ad Wizard
                  </Typography>
                </Stack>
              </Grid>
            </Stack>
          </Grid>
        </Stack>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
        <Grid container spacing={2}>
          {
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <Box p={4}>
                <Stack
                  direction="column"
                  spacing={2}
                  sx={{ justifyContent: "flex-start" }}
                >
                  <Stack
                    direction="column"
                    spacing={0.7}
                    sx={{ justifyContent: "flex-start" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "left",
                        color: "#2C399F",
                        fontWeight: 600,
                      }}
                    >
                      Choose your ad
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "left",
                        fontSize: ".8rem",
                        color: "#858585",
                        fontWeight: 400,
                      }}
                    >
                      Select and Ad tailor your experience to the goals and
                      settings that will work best for your campaign
                    </Typography>
                  </Stack>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="choose_ads"
                      value={choseAd}
                      onChange={chooseAdHandleChange}
                    >
                      <Stack
                        direction="row"
                        spacing={0}
                        sx={{
                          justifyContent: "flex-start",
                          flexWrap: "wrap",
                        }}
                        pt={3}
                      >
                        <CreateAdWizardCard
                          title=" Promoted Spot"
                          caption="Promoted By coin/Project"
                          value="promoted_spot"
                          name="choose_ads"
                        />
                        <CreateAdWizardCard
                          title="Banner Ads"
                          caption="Promoted By coin/Project"
                          value="banner_ads"
                          name="choose_ads"
                        />
                        <CreateAdWizardCard
                          title="Search Ad"
                          caption="Promoted By coin/Project"
                          value={7}
                          name="choose_ads"
                        />
                        <CreateAdWizardCard
                          title="Video Ads"
                          caption="Promoted By coin/Project"
                          value={5}
                          name="choose_ads"
                        />
                        <CreateAdWizardCard
                          title="User Announcements"
                          caption="Promoted By coin/Project"
                          value={9}
                          name="choose_ads"
                        />
                        <CreateAdWizardCard
                          title=" Coin Audit"
                          caption="Promoted By coin/Project"
                          value="coin_audit"
                          name="choose_ads"
                        />
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </Stack>
              </Box>
              {choseAd && choseAd === "promoted_spot" && (
                <Grid container spacing={2} ref={adtypeRef}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box p={4}>
                      <Stack
                        direction="column"
                        spacing={2}
                        sx={{ justifyContent: "flex-start" }}
                      >
                        <Stack
                          direction="column"
                          spacing={0.7}
                          sx={{ justifyContent: "flex-start" }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              textAlign: "left",
                              color: "#2C399F",
                              fontWeight: 600,
                            }}
                          >
                            Choose Ad Type
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "left",
                              fontSize: ".8rem",
                              color: "#858585",
                              fontWeight: 400,
                            }}
                          >
                            Select and Ad tailor your experience to the goals
                            and settings that will work best for your campaign
                          </Typography>
                        </Stack>
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="choose_ad_type"
                            value={choseAdType}
                            onChange={chooseAdTypeHandleChange}
                          >
                            <Stack
                              direction="row"
                              spacing={0}
                              sx={{
                                justifyContent: "flex-start",
                                flexWrap: "wrap",
                              }}
                              pt={3}
                            >
                              <CreateAdWizardCard
                                title="Featured Coin"
                                caption="Promoted By coin/Project"
                                value={4}
                                name="choose_ad_type"
                              />
                              <CreateAdWizardCard
                                title=" NFT Promoted Spot"
                                caption="Promoted By coin/Project"
                                value="nft_promoted_spot"
                                name="choose_ad_type"
                              />
                              <CreateAdWizardCard
                                title=" AirDrop Promotion"
                                caption="Promoted By coin/Project"
                                value="airdrop_promotion"
                                name="choose_ad_type"
                              />
                              <CreateAdWizardCard
                                title="Event Promotion"
                                caption="Promoted By coin/Project"
                                value="event_promotion"
                                name="choose_ad_type"
                              />
                            </Stack>
                          </RadioGroup>
                        </FormControl>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              )}
              {choseAd && choseAd === "banner_ads" && (
                <Grid container spacing={2} ref={adtypeRef}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box p={4}>
                      <Stack
                        direction="column"
                        spacing={2}
                        sx={{ justifyContent: "flex-start" }}
                      >
                        <Stack
                          direction="column"
                          spacing={0.7}
                          sx={{ justifyContent: "flex-start" }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              textAlign: "left",
                              color: "#2C399F",
                              fontWeight: 600,
                            }}
                          >
                            Choose Ad Type
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "left",
                              fontSize: ".8rem",
                              color: "#858585",
                              fontWeight: 400,
                            }}
                          >
                            Select and Ad tailor your experience to the goals
                            and settings that will work best for your campaign
                          </Typography>
                        </Stack>
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="choose_ad_type"
                            value={choseAdType}
                            onChange={chooseAdTypeHandleChange}
                          >
                            <Stack
                              direction="row"
                              spacing={0}
                              sx={{
                                justifyContent: "flex-start",
                                flexWrap: "wrap",
                              }}
                              pt={3}
                            >
                              <CreateAdWizardCard
                                title="Main Banner"
                                //caption="Promoted By coin/Project"
                                value={1}
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                              />
                              <CreateAdWizardCard
                                title=" Square Banner"
                                //caption="Promoted By coin/Project"
                                value={2}
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                              />
                              <CreateAdWizardCard
                                title=" Square Half"
                                //caption="Promoted By coin/Project"
                                value={3}
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                              />
                              <CreateAdWizardCard
                                title="Vote Click Popup"
                                //caption="Promoted By coin/Project"
                                value={6}
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                              />
                              <CreateAdWizardCard
                                title="Welcome Popup"
                                //caption="Promoted By coin/Project"
                                value={8}
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                              />
                              <CreateAdWizardCard
                                title="Bigger Ad- Full"
                                //caption="Promoted By coin/Project"
                                value="bigger_ad_full"
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                              />
                              <CreateAdWizardCard
                                title="Bigger Ad- Half"
                                //caption="Promoted By coin/Project"
                                value="bigger_ad_half"
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                              />
                            </Stack>
                          </RadioGroup>
                        </FormControl>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              )}
              {createAdsData &&
                (parseInt(createAdsData?.banner_ad_type) === 1 ||
                  parseInt(createAdsData?.banner_ad_type) === 2 ||
                  parseInt(createAdsData?.banner_ad_type) === 3 ||
                  parseInt(createAdsData?.banner_ad_type) === 6 ||
                  parseInt(createAdsData?.banner_ad_type) === 8 ||
                  createAdsData?.banner_ad_type === "bigger_ad_full" ||
                  createAdsData?.banner_ad_type === "bigger_ad_half") &&
                choseAd === "banner_ads" && (
                  <Grid container spacing={2} ref={adtypeRef}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Box p={4}>
                        <Stack
                          direction="column"
                          spacing={2}
                          sx={{ justifyContent: "flex-start" }}
                        >
                          <Stack
                            direction="column"
                            spacing={0.7}
                            sx={{ justifyContent: "flex-start" }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                textAlign: "left",
                                color: "#2C399F",
                                fontWeight: 600,
                              }}
                            >
                              Upload Banner Image
                            </Typography>
                            <Typography
                              sx={{
                                textAlign: "left",
                                fontSize: ".8rem",
                                color: "#858585",
                                fontWeight: 400,
                              }}
                            >
                              Select and Ad tailor your experience to the goals
                              and settings that will work best for your campaign
                            </Typography>
                          </Stack>
                          <Stack
                            direction="row"
                            rowGap={2}
                            columnGap={2}
                            sx={{
                              justifyContent: "flex-start",
                              flexWrap: "wrap",
                            }}
                            pt={3}
                          >
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Banner Name
                              </Typography>
                              <InputText
                                width={100}
                                placeholder="Banner Name"
                                inputTextHandler={(e: any) =>
                                  createAdsNameHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Start Date
                              </Typography>
                              <InputDate
                                adWizard={true}
                                date={createAdsData}
                                setDate={setCreateAdsData}
                                height={40}
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                No.of Days
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Number of Days"
                                inputTextHandler={(e: any) =>
                                  createAdsNumberOfDaysHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Banner Target Link
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Banner Target Link"
                                inputTextHandler={(e: any) =>
                                  createAdsLinkHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Banner Image
                              </Typography>
                              <CoinUploader
                                name="logo"
                                id="logo"
                                setAddIcon={setCreateAdsData}
                                addIconData={createAdsData}
                              />
                            </Stack>
                            <Grid
                              item
                              xl={12}
                              lg={12}
                              md={12}
                              sm={12}
                              xs={12}
                              pt={1}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  textAlign: "left",
                                  fontSize: ".9rem",
                                  fontWeight: 600,
                                }}
                                mb={1}
                              >
                                Status
                              </Typography>

                              <InputSelect
                                selectOptions={selectOptions}
                                // currentStatus={newArrList[0].status}
                                setInputSelectValue={setCreateAdsData}
                                getInputSelectvalue={createAdsData}
                                // serverStatus={newArrList[0].status}
                              />
                            </Grid>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                )}

              {createAdsData &&
                parseInt(createAdsData?.banner_ad_type) === 7 &&
                parseInt(choseAd) === 7 && (
                  <Grid container spacing={2} ref={adtypeRef}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Box p={4}>
                        <Stack
                          direction="column"
                          spacing={2}
                          sx={{ justifyContent: "flex-start" }}
                        >
                          <Stack
                            direction="column"
                            spacing={0.7}
                            sx={{ justifyContent: "flex-start" }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                textAlign: "left",
                                color: "#2C399F",
                                fontWeight: 600,
                              }}
                            >
                              Upload Banner Image
                            </Typography>
                            <Typography
                              sx={{
                                textAlign: "left",
                                fontSize: ".8rem",
                                color: "#858585",
                                fontWeight: 400,
                              }}
                            >
                              Select and Ad tailor your experience to the goals
                              and settings that will work best for your campaign
                            </Typography>
                          </Stack>
                          <Stack
                            direction="row"
                            rowGap={2}
                            columnGap={2}
                            sx={{
                              justifyContent: "flex-start",
                              flexWrap: "wrap",
                            }}
                            pt={3}
                          >
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Banner Name
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Banner Name"
                                inputTextHandler={(e: any) =>
                                  createAdsNameHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Start Date
                              </Typography>
                              <InputDate
                                adWizard={true}
                                date={createAdsData}
                                setDate={setCreateAdsData}
                                height={40}
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                No.of Days
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Number of Days"
                                inputTextHandler={(e: any) =>
                                  createAdsNumberOfDaysHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Banner Target Link
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Banner Target Link"
                                inputTextHandler={(e: any) =>
                                  createAdsLinkHandler(e)
                                }
                              />
                            </Stack>

                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Button Name
                              </Typography>
                              <InputText
                                width={100}
                                placeholder="Eg: Register Now"
                                inputTextHandler={(e: any) =>
                                  createAdsButtonNameHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="row" spacing={1.5} width="100%">
                              <Stack
                                direction="column"
                                spacing={1.5}
                                minWidth={350}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Description
                                </Typography>
                                <InputTextArea
                                  variant="ad_wizard"
                                  placeholder="Enter Detailed Project Details. Recommended word count 450 - 950."
                                  name="search_ad_description"
                                  width={300}
                                  data={createAdsData}
                                  setData={setCreateAdsData}
                                />
                              </Stack>
                              <Stack direction="column" spacing={1.5}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Banner Image
                                </Typography>
                                <CoinUploader
                                  name="logo"
                                  id="logo"
                                  setAddIcon={setCreateAdsData}
                                  addIconData={createAdsData}
                                />
                              </Stack>
                            </Stack>
                            <Grid
                              item
                              xl={12}
                              lg={12}
                              md={12}
                              sm={12}
                              xs={12}
                              pt={1}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  textAlign: "left",
                                  fontSize: ".9rem",
                                  fontWeight: 600,
                                }}
                                mb={1}
                              >
                                Status
                              </Typography>

                              <InputSelect
                                selectOptions={selectOptions}
                                // currentStatus={newArrList[0].status}
                                setInputSelectValue={setCreateAdsData}
                                getInputSelectvalue={createAdsData}
                                // serverStatus={newArrList[0].status}
                              />
                            </Grid>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                )}
              {createAdsData &&
                parseInt(createAdsData?.banner_ad_type) === 9 &&
                parseInt(choseAd) === 9 && (
                  <Grid container spacing={2} ref={adtypeRef}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Box p={4}>
                        <Stack
                          direction="column"
                          spacing={2}
                          sx={{ justifyContent: "flex-start" }}
                        >
                          <Stack
                            direction="column"
                            spacing={0.7}
                            sx={{ justifyContent: "flex-start" }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                textAlign: "left",
                                color: "#2C399F",
                                fontWeight: 600,
                              }}
                            >
                              Upload Banner Image
                            </Typography>
                            <Typography
                              sx={{
                                textAlign: "left",
                                fontSize: ".8rem",
                                color: "#858585",
                                fontWeight: 400,
                              }}
                            >
                              Select and Ad tailor your experience to the goals
                              and settings that will work best for your campaign
                            </Typography>
                          </Stack>
                          <Stack
                            direction="row"
                            rowGap={2}
                            columnGap={2}
                            sx={{
                              justifyContent: "flex-start",
                              flexWrap: "wrap",
                            }}
                            pt={3}
                          >
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Banner Name
                              </Typography>
                              <InputText
                                width={100}
                                placeholder="Banner Name"
                                inputTextHandler={(e: any) =>
                                  createAdsNameHandler(e)
                                }
                              />
                            </Stack>

                            <Stack direction="column" spacing={1.5} width={450}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Announcements
                              </Typography>
                              <InputText
                                width={"auto"}
                                placeholder="Announcements"
                                inputTextHandler={(e: any) =>
                                  createAdsAnnouncementsHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Button Name
                              </Typography>
                              <InputText
                                width={100}
                                placeholder="Eg: Register Now"
                                inputTextHandler={(e: any) =>
                                  createAdsButtonNameHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Start Date
                              </Typography>
                              <InputDate
                                adWizard={true}
                                date={createAdsData}
                                setDate={setCreateAdsData}
                                height={40}
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                No.of Days
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Number of Days"
                                inputTextHandler={(e: any) =>
                                  createAdsNumberOfDaysHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Banner Target Link
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Banner Target Link"
                                inputTextHandler={(e: any) =>
                                  createAdsLinkHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Banner Image
                              </Typography>
                              <CoinUploader
                                name="logo"
                                id="logo"
                                setAddIcon={setCreateAdsData}
                                addIconData={createAdsData}
                              />
                            </Stack>
                            <Grid
                              item
                              xl={12}
                              lg={12}
                              md={12}
                              sm={12}
                              xs={12}
                              pt={1}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  textAlign: "left",
                                  fontSize: ".9rem",
                                  fontWeight: 600,
                                }}
                                mb={1}
                              >
                                Status
                              </Typography>

                              <InputSelect
                                selectOptions={selectOptions}
                                // currentStatus={newArrList[0].status}
                                setInputSelectValue={setCreateAdsData}
                                getInputSelectvalue={createAdsData}
                                // serverStatus={newArrList[0].status}
                              />
                            </Grid>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                )}

              {createAdsData &&
                parseInt(createAdsData?.banner_ad_type) === 5 &&
                parseInt(choseAd) === 5 && (
                  <Grid container spacing={2} ref={adtypeRef}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Box p={4}>
                        <Stack
                          direction="column"
                          spacing={2}
                          sx={{ justifyContent: "flex-start" }}
                        >
                          <Stack
                            direction="column"
                            spacing={0.7}
                            sx={{ justifyContent: "flex-start" }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                textAlign: "left",
                                color: "#2C399F",
                                fontWeight: 600,
                              }}
                            >
                              Upload Banner Image
                            </Typography>
                            <Typography
                              sx={{
                                textAlign: "left",
                                fontSize: ".8rem",
                                color: "#858585",
                                fontWeight: 400,
                              }}
                            >
                              Select and Ad tailor your experience to the goals
                              and settings that will work best for your campaign
                            </Typography>
                          </Stack>
                          <Stack
                            direction="row"
                            rowGap={2}
                            columnGap={2}
                            sx={{
                              justifyContent: "flex-start",
                              flexWrap: "wrap",
                            }}
                            pt={3}
                          >
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Banner Name
                              </Typography>
                              <InputText
                                width={100}
                                placeholder="Banner Name"
                                inputTextHandler={(e: any) =>
                                  createAdsNameHandler(e)
                                }
                              />
                            </Stack>

                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Start Date
                              </Typography>
                              <InputDate
                                adWizard={true}
                                date={createAdsData}
                                setDate={setCreateAdsData}
                                height={40}
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                No.of Days
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Number of Days"
                                inputTextHandler={(e: any) =>
                                  createAdsNumberOfDaysHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Video Target Link
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Banner Target Link"
                                inputTextHandler={(e: any) =>
                                  createAdsLinkHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Video Image
                              </Typography>
                              <CoinUploader
                                name="logo"
                                id="logo"
                                setAddIcon={setCreateAdsData}
                                addIconData={createAdsData}
                              />
                            </Stack>
                            <Grid
                              item
                              xl={12}
                              lg={12}
                              md={12}
                              sm={12}
                              xs={12}
                              pt={1}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  textAlign: "left",
                                  fontSize: ".9rem",
                                  fontWeight: 600,
                                }}
                                mb={1}
                              >
                                Status
                              </Typography>

                              <InputSelect
                                selectOptions={selectOptions}
                                // currentStatus={newArrList[0].status}
                                setInputSelectValue={setCreateAdsData}
                                getInputSelectvalue={createAdsData}
                                // serverStatus={newArrList[0].status}
                              />
                            </Grid>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                )}

              {createAdsData &&
                parseInt(createAdsData?.banner_ad_type) === 4 &&
                choseAd === "promoted_spot" && (
                  <Grid container spacing={2} ref={adtypeRef}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Box p={4}>
                        <Stack
                          direction="column"
                          spacing={2}
                          sx={{ justifyContent: "flex-start" }}
                        >
                          <Stack
                            direction="column"
                            spacing={0.7}
                            sx={{ justifyContent: "flex-start" }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                textAlign: "left",
                                color: "#2C399F",
                                fontWeight: 600,
                              }}
                            >
                              Select Date
                            </Typography>
                            <Typography
                              sx={{
                                textAlign: "left",
                                fontSize: ".8rem",
                                color: "#858585",
                                fontWeight: 400,
                              }}
                            >
                              Select and Ad tailor your experience to the goals
                              and settings that will work best for your campaign
                            </Typography>
                          </Stack>
                          <Stack
                            direction="row"
                            rowGap={2}
                            columnGap={2}
                            sx={{
                              justifyContent: "flex-start",
                              flexWrap: "wrap",
                            }}
                            pt={3}
                          >
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Banner Name
                              </Typography>
                              <InputText
                                width={100}
                                placeholder="Banner Name"
                                inputTextHandler={(e: any) =>
                                  createAdsNameHandler(e)
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Select the coin
                              </Typography>
                              <AutoCompleSelect
                                inputAutoValue={createAdsData}
                                setInputAutoValue={setCreateAdsData}
                                variant="coin"
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Start Date
                              </Typography>
                              <InputDate
                                adWizard={true}
                                date={createAdsData}
                                setDate={setCreateAdsData}
                                height={40}
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                No.of Days
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Number of Days"
                                inputTextHandler={(e: any) =>
                                  createAdsNumberOfDaysHandler(e)
                                }
                              />
                            </Stack>
                            <Grid
                              item
                              xl={12}
                              lg={12}
                              md={12}
                              sm={12}
                              xs={12}
                              pt={1}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  textAlign: "left",
                                  fontSize: ".9rem",
                                  fontWeight: 600,
                                }}
                                mb={1}
                              >
                                Status
                              </Typography>

                              <InputSelect
                                selectOptions={selectOptions}
                                // currentStatus={newArrList[0].status}
                                setInputSelectValue={setCreateAdsData}
                                getInputSelectvalue={createAdsData}
                                // serverStatus={newArrList[0].status}
                              />
                            </Grid>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                )}

              {/* {choseAdType &&
                choseAdType === "nft_promoted_spot" &&
                choseAd === "promoted_spot" && (
                  <Grid container spacing={2} ref={adtypeRef}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Box p={4}>
                        <Stack
                          direction="column"
                          spacing={2}
                          sx={{ justifyContent: "flex-start" }}
                        >
                          <Stack
                            direction="column"
                            spacing={0.7}
                            sx={{ justifyContent: "flex-start" }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                textAlign: "left",
                                color: "#2C399F",
                                fontWeight: 600,
                              }}
                            >
                              Select Date
                            </Typography>
                            <Typography
                              sx={{
                                textAlign: "left",
                                fontSize: ".8rem",
                                color: "#858585",
                                fontWeight: 400,
                              }}
                            >
                              Select and Ad tailor your experience to the goals
                              and settings that will work best for your campaign
                            </Typography>
                          </Stack>
                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                              justifyContent: "flex-start",
                              flexWrap: "wrap",
                            }}
                            pt={3}
                          >
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Select the NFT
                              </Typography>
                              <AutoCompleSelect
                                inputAutoValue={createAdsData}
                                setInputAutoValue={setCreateAdsDataData}
                                variant="nft"
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Start Date
                              </Typography>
                              <InputDate
                                adWizard={true}
                                date={createAdsData}
                                setDate={setCreateAdsDataData}
                                height={40}
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                No.of Days
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Number of Days"
                                inputTextHandler={(e: any) =>
                                  createAdsHandler(e)
                                }
                              />
                            </Stack>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                )}

              {choseAdType &&
                choseAdType === "airdrop_promotion" &&
                choseAd === "promoted_spot" && (
                  <Grid container spacing={2} ref={adtypeRef}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Box p={4}>
                        <Stack
                          direction="column"
                          spacing={2}
                          sx={{ justifyContent: "flex-start" }}
                        >
                          <Stack
                            direction="column"
                            spacing={0.7}
                            sx={{ justifyContent: "flex-start" }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                textAlign: "left",
                                color: "#2C399F",
                                fontWeight: 600,
                              }}
                            >
                              Select Date
                            </Typography>
                            <Typography
                              sx={{
                                textAlign: "left",
                                fontSize: ".8rem",
                                color: "#858585",
                                fontWeight: 400,
                              }}
                            >
                              Select and Ad tailor your experience to the goals
                              and settings that will work best for your campaign
                            </Typography>
                          </Stack>
                          <Stack direction="column" spacing={2} pt={3}>
                            <Stack
                              direction="row"
                              spacing={1}
                              sx={{
                                justifyContent: "flex-start",
                                flexWrap: "wrap",
                              }}
                            >
                              <Stack direction="column" spacing={1.5}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Select the Coin
                                </Typography>
                                <AutoCompleSelect
                                  inputAutoValue={createAdsData}
                                  setInputAutoValue={setCreateAdsDataData}
                                  variant="coin"
                                  filterType="airdrop"
                                />
                              </Stack>
                              <Stack direction="column" spacing={1.5}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Select Airdrop
                                </Typography>
                                {airDropListWithCoin?.length > 0 ? (
                                  <InputSelectCoin
                                    name="coin_airdrop"
                                    id="coin_airdrop"
                                    data={airDropListWithCoin}
                                    // selectedValue={}
                                    variant="search_with_coin"
                                    height={40}
                                    width={150}
                                    type="airdrop"
                                  />
                                ) : (
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      textAlign: "left",
                                      color: "#000000",
                                      fontWeight: 400,
                                    }}
                                    pt={1}
                                  >
                                    Airdrop not found
                                  </Typography>
                                )}
                              </Stack>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              sx={{
                                justifyContent: "flex-start",
                                flexWrap: "wrap",
                              }}
                            >
                              <Stack direction="column" spacing={1.5}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Start Date
                                </Typography>
                                <InputDate
                                  adWizard={true}
                                  date={createAdsData}
                                  setDate={setCreateAdsDataData}
                                  height={40}
                                />
                              </Stack>
                              <Stack direction="column" spacing={1.5}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  No.of Days
                                </Typography>
                                <InputText
                                  width={100}
                                  placeholder=" Number of Days"
                                  inputTextHandler={(e: any) =>
                                    createAdsHandler(e)
                                  }
                                />
                              </Stack>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                )}

              {choseAdType &&
                choseAdType === "event_promotion" &&
                choseAd === "promoted_spot" && (
                  <Grid container spacing={2} ref={adtypeRef}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Box p={4}>
                        <Stack
                          direction="column"
                          spacing={2}
                          sx={{ justifyContent: "flex-start" }}
                        >
                          <Stack
                            direction="column"
                            spacing={0.7}
                            sx={{ justifyContent: "flex-start" }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                textAlign: "left",
                                color: "#2C399F",
                                fontWeight: 600,
                              }}
                            >
                              Select Date
                            </Typography>
                            <Typography
                              sx={{
                                textAlign: "left",
                                fontSize: ".8rem",
                                color: "#858585",
                                fontWeight: 400,
                              }}
                            >
                              Select and Ad tailor your experience to the goals
                              and settings that will work best for your campaign
                            </Typography>
                          </Stack>
                          <Stack direction="column" spacing={2} pt={3}>
                            <Stack
                              direction="row"
                              spacing={1}
                              sx={{
                                justifyContent: "flex-start",
                                flexWrap: "wrap",
                              }}
                            >
                              <Stack direction="column" spacing={1.5}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Select the Coin
                                </Typography>
                                <AutoCompleSelect
                                  inputAutoValue={createAdsData}
                                  setInputAutoValue={setCreateAdsDataData}
                                  variant="coin"
                                  filterType="events"
                                />
                              </Stack>
                              <Stack direction="column" spacing={1.5}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Select Events
                                </Typography>
                                {eventsListWithCoin?.length > 0 ? (
                                  <InputSelectCoin
                                    name="coin_events"
                                    id="coin_events"
                                    data={eventsListWithCoin}
                                    // selectedValue={}
                                    variant="search_with_coin"
                                    height={40}
                                    width={150}
                                    type="events"
                                  />
                                ) : (
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      textAlign: "left",
                                      color: "#000000",
                                      fontWeight: 400,
                                    }}
                                    pt={1}
                                  >
                                    Events not found
                                  </Typography>
                                )}
                              </Stack>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              sx={{
                                justifyContent: "flex-start",
                                flexWrap: "wrap",
                              }}
                            >
                              <Stack direction="column" spacing={1.5}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Start Date
                                </Typography>
                                <InputDate
                                  adWizard={true}
                                  date={createAdsData}
                                  setDate={setCreateAdsDataData}
                                  height={40}
                                />
                              </Stack>
                              <Stack direction="column" spacing={1.5}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  No.of Days
                                </Typography>
                                <InputText
                                  width={100}
                                  placeholder=" Number of Days"
                                  inputTextHandler={(e: any) =>
                                    createAdsHandler(e)
                                  }
                                />
                              </Stack>
                            </Stack>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                )} */}
            </Grid>
          }
        </Grid>

        <Grid item xl={10} lg={10} md={10} sm={12} xs={12} my={6}>
          <Stack
            spacing={2}
            direction="row"
            sx={{ alignItems: "center", justifyContent: "flex-end" }}
          >
            <Stack spacing={2}></Stack>
            <Stack spacing={2}>
              {loading === true ? (
                <LoadingButton
                  color="secondary"
                  loading={loading}
                  loadingPosition="center"
                  // startIcon={<SaveIcon />}
                  variant="contained"
                  sx={{
                    minWidth: "104px",
                    maxWidth: "104px",
                    height: "32px",
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
                <MediumBtn
                  Title="Create Ad"
                  width="auto"
                  mdBtnHandler={createAdsAddHandler}
                />
              )}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdWizardAdd;
