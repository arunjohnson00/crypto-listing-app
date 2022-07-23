import { useState, useEffect, useRef } from "react";
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

//Server URL
const serverAPIUrl = process.env.REACT_APP_API_URL;
const CreateNewAdWizard = () => {
  const adtypeRef = useRef<any>(null);
  const [choseAd, setChooseAd] = useState("female");
  const [choseAdType, setChooseAdType] = useState("female");
  const [loading, setLoading] = useState({
    save_ad: false,
    save_create_new_ad: false,
    cancel_ad: false,
  });
  const [createAdsData, setCreateAdsData] = useState<any>({
    coin_id: "",
    logo: "",
    status: 1,
    coin_start_date: new Date(),
    no_of_days: "",
  });

  const cancelAdHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this process?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      result.isConfirmed && setLoading({ ...loading, cancel_ad: false });

      result.isConfirmed &&
        Swal.fire({
          title: "Deleted!",
          text: "Your data has been deleted",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      result.dismiss === Swal.DismissReason.cancel &&
        setLoading({ ...loading, cancel_ad: false });
    });
    setLoading({ ...loading, cancel_ad: true });
  };
  const saveAdHandler = () => {
    setLoading({ ...loading, save_ad: true });
    setTimeout(() => {
      setLoading({ ...loading, save_ad: false });
    }, 3000);
  };

  const saveCreateNewAdHandler = () => {
    setLoading({ ...loading, save_create_new_ad: true });
    setTimeout(() => {
      setLoading({ ...loading, save_create_new_ad: false });
    }, 3000);
  };

  const createAdsNumDaysHandler = (e: any) => {
    //console.log(e);

    setCreateAdsData({ ...createAdsData, no_of_days: e });
  };
  const chooseAdHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChooseAd((event.target as HTMLInputElement).value);

    adtypeRef.current.scrollIntoView({
      behavior: "smooth",
    });
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
          <Grid item xl={8.5} lg={8.5} md={8.5} sm={12} xs={12}>
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
                      sx={{ justifyContent: "flex-start", flexWrap: "wrap" }}
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
                          Select and Ad tailor your experience to the goals and
                          settings that will work best for your campaign
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

            {choseAdType && choseAdType === "coin_promoted_spot" && (
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
                          Select and Ad tailor your experience to the goals and
                          settings that will work best for your campaign
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
                            coinAdWizard={true}
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
                              createAdsNumDaysHandler(e)
                            }
                          />
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Grid>

          <Grid item xl={3.5} lg={3.5} md={3.5} sm={12} xs={12}></Grid>
        </Grid>

        {choseAdType && choseAdType === "coin_promoted_spot" && (
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
