import { useState, useEffect, useRef, Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  Backdrop,
  CircularProgress,
  Divider,
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

import {
  addAdsListRequest,
  adsSummaryRequest,
  editAdsListRequest,
  updateAdsListRequest,
} from "../../../../store/action";
import InputSelectCoin from "../../../../components/form/selectcoin/InputSelectCoin";
import InputTextArea from "../../../../components/form/textarea/InputTextArea";
import InputSelect from "../../../../components/form/select/InputSelect";

import promoSpotAdIcon from "../../../../assets/ads/ad_coins.png";
import bannerAdIcon from "../../../../assets/ads/ad_banner.png";
import searchAdIcon from "../../../../assets/ads/ad_search.png";
import coinAuditAdIcon from "../../../../assets/ads/ad_coin_audit.png";
import videoAdIcon from "../../../../assets/ads/ad_video.png";
import announcementAdIcon from "../../../../assets/ads/ad_announcement.png";

//Server URL
const serverAPIUrl = process.env.REACT_APP_API_URL;
const AdWizardEdit = () => {
  let { id } = useParams();
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

  const [editAdsData, setEditAdsData] = useState<any>({
    id: "",
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
  console.log(editAdsData);
  const updateAdsAddHandler = () => {
    setLoading(true);
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
      setLoading(false);
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
    formData.append("id", editAdsData?.id);
    formData.append("banner_name", editAdsData?.banner_name);
    // formData.append("subtitle", editAdsData?.subtitle);
    // formData.append("description", editAdsData?.description);
    // formData.append("ads_type", editAdsData?.ads_type);
    editAdsData?.banner_ad_type === 4 &&
      formData.append("coin_id", editAdsData?.coin_id);
    editAdsData?.banner_ad_type === 9 &&
      formData.append("announcements", editAdsData?.announcements);
    editAdsData?.banner_ad_type === 7 &&
      formData.append(
        "search_ad_description",
        editAdsData?.search_ad_description
      );
    (editAdsData?.banner_ad_type === 7 || editAdsData?.banner_ad_type === 9) &&
      formData.append("button_name", editAdsData?.button_name);
    (editAdsData?.banner_ad_type !== 4 || editAdsData?.banner_ad_type !== 9) &&
      editAdsData.banner_image !== "" &&
      typeof editAdsData.banner_image !== "string" &&
      formData.append("banner_image", editAdsData?.banner_image);
    editAdsData?.banner_ad_type !== 4 &&
      formData.append("banner_target_link", editAdsData?.banner_target_link);
    formData.append("banner_ad_type", editAdsData?.banner_ad_type);

    formData.append(
      "banner_start_date",
      moment(new Date(editAdsData.banner_start_date)).format("YYYY-MM-DD")
    );
    formData.append("no_of_days", editAdsData.no_of_days);

    formData.append("status", editAdsData?.status);

    dispatch(updateAdsListRequest(formData, successHandler, errorHandler));
  };

  const editAdsNumberOfDaysHandler = (e: any) => {
    //console.log(e);

    setEditAdsData({ ...editAdsData, no_of_days: e });
  };

  const editAdsNameHandler = (e: any) => {
    //console.log(e);

    setEditAdsData({ ...editAdsData, banner_name: e });
  };

  const editAdsButtonNameHandler = (e: any) => {
    //console.log(e);

    setEditAdsData({ ...editAdsData, button_name: e });
  };

  const editAdsLinkHandler = (e: any) => {
    setEditAdsData({ ...editAdsData, banner_target_link: e });
  };

  const editAdsAnnouncementsHandler = (e: any) => {
    setEditAdsData({ ...editAdsData, announcements: e });
  };

  const chooseAdHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChooseAd((event.target as HTMLInputElement).value);
    setEditAdsData({
      ...editAdsData,
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
    setEditAdsData({
      ...editAdsData,
      banner_ad_type: parseInt((event.target as HTMLInputElement).value),
    });
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setEditAdsData(res?.data?.data);
      res && setChooseAdType(parseInt(res?.data?.data?.banner_ad_type));
      res &&
        setChooseAd(
          parseInt(res?.data?.data?.banner_ad_type) === 4
            ? "promoted_spot"
            : parseInt(res?.data?.data?.banner_ad_type) === 1 ||
              parseInt(res?.data?.data?.banner_ad_type) === 2 ||
              parseInt(res?.data?.data?.banner_ad_type) === 3 ||
              parseInt(res?.data?.data?.banner_ad_type) === 6 ||
              parseInt(res?.data?.data?.banner_ad_type) === 8
            ? "banner_ads"
            : parseInt(res?.data?.data?.banner_ad_type)
        );
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editAdsListRequest({ id: id }, successHandler, errorHandler));
  }, [dispatch]);
  console.log(choseAd);
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
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
                  <IconButton
                    onClick={() => {
                      navigate("/adslist");
                    }}
                  >
                    <ArrowBackIosTwoToneIcon />
                  </IconButton>

                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "left",
                      color: "#3C3658",
                      fontWeight: 500,
                    }}
                  >
                    Update Ad Wizard
                  </Typography>
                </Stack>
              </Grid>
            </Stack>
          </Grid>
        </Stack>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
        <Grid container spacing={2}>
          {choseAd && (
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <Box p={4} sx={{ background: "#FFFFFF", borderRadius: 4, mb: 2 }}>
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
                    <Divider
                      orientation="horizontal"
                      flexItem
                      variant="fullWidth"
                      sx={{ py: 1 }}
                    />
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
                          icon={promoSpotAdIcon}
                        />
                        <CreateAdWizardCard
                          title="Banner Ads"
                          caption="Promoted By coin/Project"
                          value="banner_ads"
                          name="choose_ads"
                          icon={bannerAdIcon}
                        />
                        <CreateAdWizardCard
                          title="Search Ad"
                          caption="Promoted By coin/Project"
                          value={7}
                          name="choose_ads"
                          icon={searchAdIcon}
                        />
                        <CreateAdWizardCard
                          title="Video Ads"
                          caption="Promoted By coin/Project"
                          value={5}
                          name="choose_ads"
                          icon={videoAdIcon}
                        />
                        <CreateAdWizardCard
                          title="User Announcements"
                          caption="Promoted By coin/Project"
                          value={9}
                          name="choose_ads"
                          icon={announcementAdIcon}
                        />
                        <CreateAdWizardCard
                          title=" Coin Audit"
                          caption="Promoted By coin/Project"
                          value="coin_audit"
                          name="choose_ads"
                          icon={coinAuditAdIcon}
                        />
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </Stack>
              </Box>
              {choseAd && choseAd === "promoted_spot" && (
                <Grid container spacing={2} ref={adtypeRef}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box
                      p={4}
                      sx={{ background: "#FFFFFF", borderRadius: 4, mb: 2 }}
                    >
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
                          <Divider
                            orientation="horizontal"
                            flexItem
                            variant="fullWidth"
                            sx={{ py: 1 }}
                          />
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
                                icon={promoSpotAdIcon}
                              />
                              <CreateAdWizardCard
                                title=" NFT Promoted Spot"
                                caption="Promoted By coin/Project"
                                value="nft_promoted_spot"
                                name="choose_ad_type"
                                icon={promoSpotAdIcon}
                              />
                              <CreateAdWizardCard
                                title=" AirDrop Promotion"
                                caption="Promoted By coin/Project"
                                value="airdrop_promotion"
                                name="choose_ad_type"
                                icon={promoSpotAdIcon}
                              />
                              <CreateAdWizardCard
                                title="Event Promotion"
                                caption="Promoted By coin/Project"
                                value="event_promotion"
                                name="choose_ad_type"
                                icon={promoSpotAdIcon}
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
                    <Box
                      p={4}
                      sx={{ background: "#FFFFFF", borderRadius: 4, mb: 2 }}
                    >
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
                          <Divider
                            orientation="horizontal"
                            flexItem
                            variant="fullWidth"
                            sx={{ py: 1 }}
                          />
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
                                icon={bannerAdIcon}
                              />
                              <CreateAdWizardCard
                                title=" Square Banner"
                                //caption="Promoted By coin/Project"
                                value={2}
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                                icon={bannerAdIcon}
                              />
                              <CreateAdWizardCard
                                title=" Square Half"
                                //caption="Promoted By coin/Project"
                                value={3}
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                                icon={bannerAdIcon}
                              />
                              <CreateAdWizardCard
                                title="Vote Click Popup"
                                //caption="Promoted By coin/Project"
                                value={6}
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                                icon={bannerAdIcon}
                              />
                              <CreateAdWizardCard
                                title="Welcome Popup"
                                //caption="Promoted By coin/Project"
                                value={8}
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                                icon={bannerAdIcon}
                              />
                              <CreateAdWizardCard
                                title="Bigger Ad- Full"
                                //caption="Promoted By coin/Project"
                                value="bigger_ad_full"
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                                icon={bannerAdIcon}
                              />
                              <CreateAdWizardCard
                                title="Bigger Ad- Half"
                                //caption="Promoted By coin/Project"
                                value="bigger_ad_half"
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                                icon={bannerAdIcon}
                              />
                            </Stack>
                          </RadioGroup>
                        </FormControl>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              )}
              {editAdsData &&
                (parseInt(editAdsData?.banner_ad_type) === 1 ||
                  parseInt(editAdsData?.banner_ad_type) === 2 ||
                  parseInt(editAdsData?.banner_ad_type) === 3 ||
                  parseInt(editAdsData?.banner_ad_type) === 6 ||
                  parseInt(editAdsData?.banner_ad_type) === 8 ||
                  editAdsData?.banner_ad_type === "bigger_ad_full" ||
                  editAdsData?.banner_ad_type === "bigger_ad_half") &&
                choseAd === "banner_ads" && (
                  <Grid container spacing={2} ref={adtypeRef}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Box
                        p={4}
                        sx={{ background: "#FFFFFF", borderRadius: 4, mb: 2 }}
                      >
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
                            <Divider
                              orientation="horizontal"
                              flexItem
                              variant="fullWidth"
                              sx={{ py: 1 }}
                            />
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
                            <Stack
                              direction="column"
                              spacing={1.5}
                              flexGrow={0.5}
                            >
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
                                  editAdsNameHandler(e)
                                }
                                value={editAdsData && editAdsData?.banner_name}
                              />
                            </Stack>

                            <Stack
                              direction="column"
                              spacing={1.5}
                              flexGrow={1.5}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Redirection URL
                              </Typography>
                              <InputText
                                width={100}
                                placeholder="Redirection URL"
                                inputTextHandler={(e: any) =>
                                  editAdsLinkHandler(e)
                                }
                                value={
                                  editAdsData && editAdsData?.banner_target_link
                                }
                              />
                            </Stack>
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
                              setAddIcon={setEditAdsData}
                              addIconData={editAdsData}
                              slug="banner_ads"
                              variant="ads"
                            />
                          </Stack>
                          <Stack
                            direction="column"
                            spacing={0.7}
                            sx={{ justifyContent: "flex-start", pt: 3 }}
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
                            <Divider
                              orientation="horizontal"
                              flexItem
                              variant="fullWidth"
                              sx={{ py: 1 }}
                            />
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
                            <Stack
                              direction="column"
                              spacing={1.5}
                              // flexGrow={1}
                              width={200}
                            >
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
                                date={editAdsData}
                                setDate={setEditAdsData}
                                height={40}
                                serverRef={
                                  editAdsData &&
                                  moment(
                                    new Date(editAdsData.banner_start_date)
                                  )
                                }
                              />
                            </Stack>
                            <Stack
                              direction="column"
                              spacing={1.5}
                              // flexGrow={1}
                              width={200}
                            >
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
                                  editAdsNumberOfDaysHandler(e)
                                }
                                value={editAdsData && editAdsData?.no_of_days}
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
                                setInputSelectValue={setEditAdsData}
                                getInputSelectvalue={editAdsData}
                                // serverStatus={newArrList[0].status}
                                serverStatus={
                                  editAdsData && editAdsData?.status
                                }
                              />
                            </Grid>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                )}

              {editAdsData &&
                parseInt(editAdsData?.banner_ad_type) === 7 &&
                parseInt(choseAd) === 7 && (
                  <Grid container spacing={2} ref={adtypeRef}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Box
                        p={4}
                        sx={{ background: "#FFFFFF", borderRadius: 4, mb: 2 }}
                      >
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
                            <Divider
                              orientation="horizontal"
                              flexItem
                              variant="fullWidth"
                              sx={{ py: 1 }}
                            />
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
                            <Stack direction="row" spacing={2} width="100%">
                              <Stack
                                direction="column"
                                spacing={1.5}
                                flexGrow={1}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Search Title{" "}
                                  <span
                                    style={{
                                      color: "#006aee",
                                      fontWeight: 400,
                                      fontSize: ".75rem",
                                    }}
                                  >
                                    (Max 55 Words)
                                  </span>
                                </Typography>
                                <InputText
                                  width={100}
                                  placeholder=" Banner Name"
                                  inputTextHandler={(e: any) =>
                                    editAdsNameHandler(e)
                                  }
                                  value={
                                    editAdsData && editAdsData?.banner_name
                                  }
                                />
                              </Stack>

                              <Stack
                                direction="column"
                                spacing={1.5}
                                flexGrow={1}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Redirection URL
                                </Typography>
                                <InputText
                                  width={100}
                                  placeholder="Redirection URL"
                                  inputTextHandler={(e: any) =>
                                    editAdsLinkHandler(e)
                                  }
                                  value={
                                    editAdsData &&
                                    editAdsData?.banner_target_link
                                  }
                                />
                              </Stack>
                            </Stack>
                            <Stack direction="row" spacing={2} width="100%">
                              <Stack
                                direction="column"
                                spacing={1.5}
                                // minWidth={350}
                                flexGrow={1.1}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    textAlign: "left",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Description{" "}
                                  <span
                                    style={{
                                      color: "#006aee",
                                      fontWeight: 400,
                                      fontSize: ".75rem",
                                    }}
                                  >
                                    (Max 130 Words)
                                  </span>
                                </Typography>
                                <InputTextArea
                                  variant="ad_wizard"
                                  placeholder="Enter Detailed Project Details. Recommended word count 450 - 950."
                                  name="search_ad_description"
                                  width={300}
                                  data={editAdsData}
                                  setData={setEditAdsData}
                                  value={editAdsData?.search_ad_description}
                                />
                              </Stack>
                              <Stack
                                direction="column"
                                spacing={1.5}
                                flexGrow={1}
                              >
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
                                    editAdsButtonNameHandler(e)
                                  }
                                  value={
                                    editAdsData && editAdsData?.button_name
                                  }
                                />
                              </Stack>
                            </Stack>
                            <Stack
                              direction="column"
                              spacing={1.5}
                              flexGrow={1}
                            >
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
                                setAddIcon={setEditAdsData}
                                addIconData={editAdsData}
                                slug="banner_ads"
                                variant="ads"
                              />
                            </Stack>
                          </Stack>

                          <Stack
                            direction="column"
                            spacing={0.7}
                            sx={{ justifyContent: "flex-start", pt: 3 }}
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
                            <Divider
                              orientation="horizontal"
                              flexItem
                              variant="fullWidth"
                              sx={{ py: 1 }}
                            />
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
                            <Stack
                              direction="column"
                              spacing={1.5}
                              // flexGrow={1}
                              width={200}
                            >
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
                                date={editAdsData}
                                setDate={setEditAdsData}
                                height={40}
                                serverRef={
                                  editAdsData &&
                                  moment(
                                    new Date(editAdsData.banner_start_date)
                                  )
                                }
                              />
                            </Stack>
                            <Stack
                              direction="column"
                              spacing={1.5}
                              // flexGrow={1}
                              width={200}
                            >
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
                                  editAdsNumberOfDaysHandler(e)
                                }
                                value={editAdsData && editAdsData?.no_of_days}
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
                                setInputSelectValue={setEditAdsData}
                                getInputSelectvalue={editAdsData}
                                // serverStatus={newArrList[0].status}
                                serverStatus={
                                  editAdsData && editAdsData?.status
                                }
                              />
                            </Grid>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                )}
              {editAdsData &&
                parseInt(editAdsData?.banner_ad_type) === 9 &&
                parseInt(choseAd) === 9 && (
                  <Grid container spacing={2} ref={adtypeRef}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Box
                        p={4}
                        sx={{ background: "#FFFFFF", borderRadius: 4, mb: 2 }}
                      >
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
                            <Divider
                              orientation="horizontal"
                              flexItem
                              variant="fullWidth"
                              sx={{ py: 1 }}
                            />
                          </Stack>
                          <Stack
                            direction="row"
                            rowGap={2}
                            columnGap={2}
                            sx={{
                              justifyContent: "flex-start",
                            }}
                            pt={3}
                          >
                            <Stack
                              direction="column"
                              spacing={1.5}
                              flexGrow={0.1}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Announcement Title
                              </Typography>
                              <InputText
                                width={100}
                                placeholder="Announcement Title"
                                inputTextHandler={(e: any) =>
                                  editAdsNameHandler(e)
                                }
                                value={editAdsData && editAdsData?.banner_name}
                              />
                            </Stack>

                            <Stack
                              direction="column"
                              spacing={1.5}
                              flexGrow={1}
                            >
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
                                  editAdsAnnouncementsHandler(e)
                                }
                                value={
                                  editAdsData && editAdsData?.announcements
                                }
                              />
                            </Stack>
                          </Stack>
                          <Stack
                            direction="row"
                            rowGap={2}
                            columnGap={2}
                            sx={{
                              justifyContent: "flex-start",
                            }}
                            pt={3}
                          >
                            <Stack
                              direction="column"
                              spacing={1.5}
                              flexGrow={0.1}
                            >
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
                                  editAdsButtonNameHandler(e)
                                }
                                value={editAdsData && editAdsData?.button_name}
                              />
                            </Stack>

                            <Stack
                              direction="column"
                              spacing={1.5}
                              flexGrow={1}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Redirection URL
                              </Typography>
                              <InputText
                                width={100}
                                placeholder="Redirection URL"
                                inputTextHandler={(e: any) =>
                                  editAdsLinkHandler(e)
                                }
                                value={
                                  editAdsData && editAdsData?.banner_target_link
                                }
                              />
                            </Stack>
                          </Stack>
                          {/* <Stack direction="column" spacing={1.5}>
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
                              setAddIcon={setEditAdsData}
                              addIconData={editAdsData}
                              slug="banner_ads"
                              variant="ads"
                            />
                          </Stack> */}
                          <Stack
                            direction="column"
                            spacing={0.7}
                            sx={{ justifyContent: "flex-start", pt: 3 }}
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
                            <Divider
                              orientation="horizontal"
                              flexItem
                              variant="fullWidth"
                              sx={{ py: 1 }}
                            />
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
                            <Stack
                              direction="column"
                              spacing={1.5}
                              // flexGrow={1}
                              width={200}
                            >
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
                                date={editAdsData}
                                setDate={setEditAdsData}
                                height={40}
                                serverRef={
                                  editAdsData &&
                                  moment(
                                    new Date(editAdsData.banner_start_date)
                                  )
                                }
                              />
                            </Stack>
                            <Stack
                              direction="column"
                              spacing={1.5}
                              // flexGrow={1}
                              width={200}
                            >
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
                                  editAdsNumberOfDaysHandler(e)
                                }
                                value={editAdsData && editAdsData?.no_of_days}
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
                                setInputSelectValue={setEditAdsData}
                                getInputSelectvalue={editAdsData}
                                // serverStatus={newArrList[0].status}
                                serverStatus={
                                  editAdsData && editAdsData?.status
                                }
                              />
                            </Grid>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                )}

              {editAdsData &&
                parseInt(editAdsData?.banner_ad_type) === 4 &&
                choseAd === "promoted_spot" && (
                  <Grid container spacing={2} ref={adtypeRef}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <Box
                        p={4}
                        sx={{ background: "#FFFFFF", borderRadius: 4, mb: 2 }}
                      >
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
                              Ads Details
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
                            <Divider
                              orientation="horizontal"
                              flexItem
                              variant="fullWidth"
                              sx={{ py: 1 }}
                            />
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
                            <Stack
                              direction="column"
                              spacing={1.5}
                              flexGrow={0.2}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Ad Title
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Ad Title"
                                inputTextHandler={(e: any) =>
                                  editAdsNameHandler(e)
                                }
                                value={editAdsData && editAdsData?.banner_name}
                              />
                            </Stack>
                          </Stack>
                          <Stack
                            direction="column"
                            spacing={0.7}
                            sx={{ justifyContent: "flex-start", pt: 3 }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                textAlign: "left",
                                color: "#2C399F",
                                fontWeight: 600,
                              }}
                            >
                              Select Date & Coin
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
                            <Divider
                              orientation="horizontal"
                              flexItem
                              variant="fullWidth"
                              sx={{ py: 1 }}
                            />
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
                            <Stack
                              direction="column"
                              spacing={1.5}
                              width={"auto"}
                            >
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
                                inputAutoValue={editAdsData}
                                setInputAutoValue={setEditAdsData}
                                variant="coin"
                                serverRef={editAdsData && editAdsData?.coin_id}
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5} width={200}>
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
                                date={editAdsData}
                                setDate={setEditAdsData}
                                height={40}
                                serverRef={
                                  editAdsData &&
                                  moment(
                                    new Date(editAdsData.banner_start_date)
                                  )
                                }
                              />
                            </Stack>
                            <Stack direction="column" spacing={1.5} width={200}>
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
                                  editAdsNumberOfDaysHandler(e)
                                }
                                value={editAdsData && editAdsData?.no_of_days}
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
                                setInputSelectValue={setEditAdsData}
                                getInputSelectvalue={editAdsData}
                                // serverStatus={newArrList[0].status}
                                serverStatus={
                                  editAdsData && editAdsData?.status
                                }
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
                      <Box p={4} sx={{ background: "#FFFFFF", borderRadius: 4, mb: 2 }}>
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
                              <Divider
                      orientation="horizontal"
                      flexItem
                      variant="fullWidth"
                      sx={{ py: 1 }}
                    />
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
                                inputAutoValue={editAdsData}
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
                                date={editAdsData}
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
                                  editAdsHandler(e)
                                }
                                               value={editAdsData && editAdsData?.no_of_days}
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
                      <Box p={4} sx={{ background: "#FFFFFF", borderRadius: 4, mb: 2 }}>
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
                              <Divider
                      orientation="horizontal"
                      flexItem
                      variant="fullWidth"
                      sx={{ py: 1 }}
                    />
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
                                  inputAutoValue={editAdsData}
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
                                  date={editAdsData}
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
                                    editAdsHandler(e)
                                  }
                                                 value={editAdsData && editAdsData?.no_of_days}
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
                      <Box p={4} sx={{ background: "#FFFFFF", borderRadius: 4, mb: 2 }}>
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
                              <Divider
                      orientation="horizontal"
                      flexItem
                      variant="fullWidth"
                      sx={{ py: 1 }}
                    />
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
                                  inputAutoValue={editAdsData}
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
                                  date={editAdsData}
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
                                    editAdsHandler(e)
                                  }
                                                 value={editAdsData && editAdsData?.no_of_days}
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
          )}
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
                  Title="Update Ad"
                  width="auto"
                  mdBtnHandler={updateAdsAddHandler}
                />
              )}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdWizardEdit;
