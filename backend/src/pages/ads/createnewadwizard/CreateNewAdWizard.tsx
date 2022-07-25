import { useState, useEffect, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  Grid,
  Typography,
  Stack,
  Avatar,
  Box,
  RadioGroup,
  FormControl,
  Button,
} from "@mui/material";

import LargeBtn from "../../../components/form/button/large/LargeBtn";
import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import CreateAdWizardCard from "../../../components/cards/createadwizardcard/CreateAdWizardCard";
import AutoCompleSelect from "../../../components/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../components/form/input/date/InputDate";
import InputText from "../../../components/form/input/text/InputText";
import LoadingButton from "@mui/lab/LoadingButton";
import MediumBtn from "../../../components/form/button/medium/MediumBtn";
import AdSummaryCard from "../../../components/cards/adsummarycard/AdSummaryCard";
import SaveAdsCard from "../../../components/cards/saveadscard/SaveAdsCard";
import SaveAndCreateAdsCard from "../../../components/cards/saveandcreateads/SaveAndCreateAdsCard";
import CoinUploader from "../../../components/form/input/file/coinlogo/CoinUploader";

import { adsSummaryRequest } from "../../../store/action";
import InputSelectCoin from "../../../components/form/selectcoin/InputSelectCoin";

//Server URL
const serverAPIUrl = process.env.REACT_APP_API_URL;
const CreateNewAdWizard = () => {
  const dispatch = useDispatch();
  const adtypeRef = useRef<any>(null);
  const [choseAd, setChooseAd] = useState("");
  const [choseAdType, setChooseAdType] = useState("");
  const adSummaryDetails = useSelector((adSummary: any) => {
    return adSummary?.adsReducer?.ads_summary;
  });

  const airDropListWithCoin = useSelector((airDropList: any) => {
    return airDropList?.adsReducer?.airdrop_list_with_coin_search?.data;
  });

  const eventsListWithCoin = useSelector((eventsList: any) => {
    return eventsList?.adsReducer?.events_list_with_coin_search?.data;
  });
  const [addCoinLogo, setCoinLogo] = useState({ coinLogo: "" });
  const [loading, setLoading] = useState({
    save_ad: false,
    save_create_new_ad: false,
    cancel_ad: false,
  });

  const [actions, setActions] = useState({
    save_ad: false,
    save_create_new_ad: false,
    view_sub_category: false,
    cancel_ad: false,
  });
  const [createAdsData, setCreateAdsData] = useState<any>({
    item_id: "",
    logo: "",
    status: 1,
    start_date: new Date(),
    no_of_days: "",
    no_of_days_banner: "",
    banner_target_link: "",
    price: 1,
  });

  const cancelAdHandler = (index: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this process?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      result.isConfirmed && setLoading({ ...loading, cancel_ad: false });

      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Process canceled",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setChooseAd("");
        setChooseAdType("");
      }
      result.dismiss === Swal.DismissReason.cancel &&
        setLoading({ ...loading, cancel_ad: false });
    });
    setLoading({ ...loading, cancel_ad: true });
  };
  const saveAdHandler = () => {
    setLoading({ ...loading, save_ad: true });
    setActions({ ...actions, save_ad: true });
    setTimeout(() => {
      setLoading({ ...loading, save_ad: false });
    }, 3000);
    // const successHandler = (res: any) => {};
    // const errorHandler = (err: any) => {};
    dispatch({
      type: adsSummaryRequest,
      payload: { ...createAdsData, choseAdType },
    });
  };

  const saveCreateNewAdHandler = () => {
    setLoading({ ...loading, save_create_new_ad: true });
    setActions({
      ...actions,
      save_create_new_ad: true,
      view_sub_category: false,
    });
    setChooseAdType("");
    setChooseAd("");
    setTimeout(() => {
      setLoading({ ...loading, save_create_new_ad: false });
    }, 3000);
    dispatch({
      type: adsSummaryRequest,
      payload: { ...createAdsData, choseAdType },
    });
  };

  const createAdsHandler = (e: any) => {
    //console.log(e);

    setCreateAdsData({ ...createAdsData, no_of_days: e });
  };

  const createBannerAdsHandler = (e: any) => {
    //console.log(e);

    setCreateAdsData({ ...createAdsData, no_of_days_banner: e });
  };

  const createBannerAdsTargetLinkHandler = (e: any) => {
    //console.log(e);

    setCreateAdsData({ ...createAdsData, banner_target_link: e });
  };
  const chooseAdHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChooseAd((event.target as HTMLInputElement).value);

    adtypeRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setChooseAdType("");
  };

  const chooseAdTypeHandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChooseAdType((event.target as HTMLInputElement).value);
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
                <Typography
                  variant="h5"
                  sx={{ textAlign: "left", color: "#3C3658", fontWeight: 500 }}
                >
                  Create New Ad Wizard
                </Typography>
              </Grid>
            </Stack>
          </Grid>
        </Stack>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
        <Grid container spacing={2}>
          {actions.save_ad === true && (
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <Box p={4}>
                <SaveAdsCard />
              </Box>
            </Grid>
          )}

          {actions.save_create_new_ad === true && (
            <Fragment>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                <Box p={4}>
                  <SaveAndCreateAdsCard />
                </Box>
              </Grid>
            </Fragment>
          )}

          {(actions.save_create_new_ad === true ||
            actions.save_ad === false) && (
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
                          title=" Banner Ads"
                          caption="Promoted By coin/Project"
                          value="banner_ads"
                          name="choose_ads"
                        />
                        <CreateAdWizardCard
                          title=" Search Ad"
                          caption="Promoted By coin/Project"
                          value="search_ads"
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
                                title="Coin Promoted Spot"
                                caption="Promoted By coin/Project"
                                value="coin_promoted_spot"
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
                                value="main_banner"
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                              />
                              <CreateAdWizardCard
                                title=" Square Banner"
                                //caption="Promoted By coin/Project"
                                value="square_banner"
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                              />
                              <CreateAdWizardCard
                                title=" Square Half"
                                //caption="Promoted By coin/Project"
                                value="square_half"
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                              />
                              <CreateAdWizardCard
                                title="Vote Click Popup"
                                //caption="Promoted By coin/Project"
                                value="vote_click_popup"
                                name="banner"
                                size="970x90"
                                type="GIF,JPEG,JPG,PNG"
                                variant="banner"
                              />
                              <CreateAdWizardCard
                                title="Welcome Popup"
                                //caption="Promoted By coin/Project"
                                value="welcome_popup"
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
              {choseAdType &&
                (choseAdType === "main_banner" ||
                  choseAdType === "square_banner" ||
                  choseAdType === "square_half" ||
                  choseAdType === "vote_click_popup" ||
                  choseAdType === "welcome_popup" ||
                  choseAdType === "bigger_ad_full" ||
                  choseAdType === "bigger_ad_half") &&
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
                                Banner Image
                              </Typography>
                              <CoinUploader
                                name="logo"
                                id="logo"
                                setAddIcon={setCoinLogo}
                                addIconData={addCoinLogo}
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
                                Benner Target Link
                              </Typography>
                              <InputText
                                width={100}
                                placeholder=" Banner Target Link"
                                inputTextHandler={(e: any) =>
                                  createBannerAdsTargetLinkHandler(e)
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
                (choseAdType === "main_banner" ||
                  choseAdType === "square_banner" ||
                  choseAdType === "square_half" ||
                  choseAdType === "vote_click_popup" ||
                  choseAdType === "welcome_popup" ||
                  choseAdType === "bigger_ad_full" ||
                  choseAdType === "bigger_ad_half") &&
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
                                Select the coin
                              </Typography>
                              <AutoCompleSelect
                                inputAutoValue={createAdsData}
                                setInputAutoValue={setCreateAdsData}
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
                                  createBannerAdsHandler(e)
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
                choseAdType === "coin_promoted_spot" &&
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
                                setInputAutoValue={setCreateAdsData}
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
                                  setInputAutoValue={setCreateAdsData}
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
                                  setInputAutoValue={setCreateAdsData}
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
                                <AutoCompleSelect
                                  inputAutoValue={createAdsData}
                                  setInputAutoValue={setCreateAdsData}
                                />
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
            </Grid>
          )}

          <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
            {adSummaryDetails && <AdSummaryCard />}
          </Grid>
        </Grid>

        {choseAdType &&
          actions.save_ad !== true &&
          (choseAdType !== "" || actions.save_create_new_ad !== true) && (
            <Grid item xl={10} lg={10} md={10} sm={12} xs={12} my={6}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ alignItems: "center", justifyContent: "flex-end" }}
              >
                <Stack spacing={2}>
                  {loading?.cancel_ad === true ? (
                    <LoadingButton
                      color="secondary"
                      loading={loading?.cancel_ad}
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
                    <Button
                      variant="text"
                      sx={{ textTransform: "capitalize", fontSize: ".75rem" }}
                      onClick={cancelAdHandler}
                    >
                      Cancel
                    </Button>
                  )}
                </Stack>
                <Stack spacing={2}>
                  {loading?.save_ad === true ? (
                    <LoadingButton
                      color="secondary"
                      loading={loading?.save_ad}
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
                      Title="Save Ad"
                      width="auto"
                      mdBtnHandler={saveAdHandler}
                    />
                  )}
                </Stack>
                <Stack spacing={2}>
                  {loading?.save_create_new_ad === true ? (
                    <LoadingButton
                      color="secondary"
                      loading={loading?.save_create_new_ad}
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
                      Title="Save & Create New Ad"
                      width="auto"
                      mdBtnHandler={saveCreateNewAdHandler}
                    />
                  )}
                </Stack>
              </Stack>
            </Grid>
          )}
      </Grid>
    </Grid>
  );
};

export default CreateNewAdWizard;
