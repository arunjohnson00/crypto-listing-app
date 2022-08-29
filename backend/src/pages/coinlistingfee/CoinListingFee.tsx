import { useState, useEffect, Fragment } from "react";
import {
  Grid,
  Typography,
  Stack,
  Box,
  Divider,
  Avatar,
  NativeSelect,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MediumBtn from "../../components/form/button/medium/MediumBtn";
import BannerUploader from "../../components/form/input/file/banner/BannerUploader";
import InputText from "../../components/form/input/text/InputText";
import InputTextArea from "../../components/form/textarea/InputTextArea";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { viewDiscountStore } from "../../store/action";
import InputSelect from "../../components/form/select/InputSelect";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const CoinListingFee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Paused", value: 2 },
  ];

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
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <Typography variant="h5" sx={{ textAlign: "left" }}>
                  Coin Listing Fee
                </Typography>
              </Grid>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
      <Box sx={{ width: "100%" }}>
        <Stack direction="row" spacing={2} pt={3} pb={1} px={3}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Box
                sx={{ width: "100%", background: "white", borderRadius: "7px" }}
                p={4}
                mb={5}
              >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  {/* <Typography variant="h6">Discount Settings</Typography>
                  <Divider /> */}

                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <form id="discount">
                      <Stack direction="column" spacing={2} py={2} px={3}>
                        <Typography variant="subtitle1">
                          Select the type of Listing
                        </Typography>
                        <NativeSelect
                          id="select"
                          sx={{ maxWidth: 250 }}
                          name="listing_type"
                        >
                          <option value="10" selected>
                            For Coin
                          </option>
                          <option value="20">For NFT</option>
                          <option value="30">For Airdrop</option>
                          <option value="40">For Event</option>
                        </NativeSelect>
                      </Stack>
                      <Stack direction="column" spacing={2} py={4} px={3}>
                        <Typography variant="subtitle1">
                          Listing Fee Plan Name
                        </Typography>
                        <InputText
                          // width="auto"
                          placeholder="Eg: Fasttrack,  Fasttrack Plus,  Fasttrack Gold"
                          name="listing_plan_name"
                          value=""
                          sx={{ maxWidth: 250 }}
                        />
                        <Typography variant="subtitle1">
                          Display Position
                        </Typography>
                        <InputText
                          // width="auto"
                          placeholder="Eg: 1, 2, 3 Etc."
                          name="display_position"
                          value=""
                          sx={{ maxWidth: 250 }}
                        />
                        <Typography variant="subtitle1">Features</Typography>
                        <InputText
                          // width="auto"
                          placeholder="Eg: Published within 2 hour"
                          name="features"
                          value=""
                          sx={{ maxWidth: 250 }}
                        />

                        <Typography variant="subtitle1">
                          Regular Price
                        </Typography>
                        <InputText
                          // width="auto"
                          placeholder="Price might be grater than discounted price"
                          name="regular_price"
                          value=""
                          sx={{ maxWidth: 250 }}
                        />

                        <Typography variant="subtitle1">
                          Discount Percentage
                        </Typography>
                        <InputText
                          // width="auto"
                          placeholder="Enter Discount Percentage"
                          name="discount_percentage"
                          value=""
                          sx={{ maxWidth: 250 }}
                        />

                        <Typography variant="subtitle1">
                          Discounted Price
                        </Typography>
                        <InputText
                          // width="auto"
                          placeholder="Enter Discounted Price"
                          name="discounted_price"
                          value=""
                          sx={{ maxWidth: 250 }}
                        />

                        <Typography variant="subtitle1">Currency</Typography>
                        <InputText
                          // width="auto"
                          placeholder="Eg: USD, XRP, SOL etc"
                          name="currency"
                          value=""
                          sx={{ maxWidth: 250 }}
                        />

                        <Typography variant="subtitle1">Status</Typography>

                        <InputSelect
                          selectOptions={selectOptions}
                          // currentStatus={updateCoinSocialData?.status}
                          // setInputSelectValue={setUpdateCoinSocial}
                          // getInputSelectvalue={updateCoinSocialData}
                          // serverStatus={updateCoinSocialData?.status}
                        />

                        {/* {loading.discount ? (
                          <LoadingButton
                            color="secondary"
                            loading={loading.discount}
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
                          <MediumBtn
                            Title="Save ad"
                            mdBtnHandler={discountHandler}
                          />
                        )} */}
                        <MediumBtn mdBtnHandler Title="Submit" />
                      </Stack>
                    </form>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Grid>
  );
};

export default CoinListingFee;
