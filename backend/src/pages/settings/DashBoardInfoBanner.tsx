import { useState, useEffect } from "react";
import { Grid, Typography, Stack, Box, Divider } from "@mui/material";

import MediumBtn from "../../components/form/button/medium/MediumBtn";
import BannerUploader from "../../components/form/input/file/banner/BannerUploader";
import InputText from "../../components/form/input/text/InputText";

import IconButton from "@mui/material/IconButton";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import "material-react-toastify/dist/ReactToastify.css";

const DashBoardInfoBanner = ({
  settingsData,
  setSettingsData,
  dashBoardInfoBannerRemoveHandle,
  dashBoardInfoBannerCount,
  index,
  dashBoardInfoBannerData,
  setDashBoardInfoBannerData,
  infoBannerHandler,
}: any) => {
  return (
    <Stack direction="column" spacing={2} pt={3} pb={3} px={3}>
      <Stack direction="row">
        <InputText
          placeholder="Benner Redirection URL"
          width="auto"
          name={`redirection_url[${index + 2}]`}
          id={`redirection_url_${index + 2}`}
        />
      </Stack>

      <Stack direction="row" sx={{ justifyContent: " space-between" }}>
        <BannerUploader
          addIconData={dashBoardInfoBannerData}
          setAddIcon={setDashBoardInfoBannerData}
          name={`info_banner[${index + 2}]`}
        />
        <MediumBtn mdBtnHandler={infoBannerHandler} Title="Save" />
        <IconButton
          aria-label="delete"
          sx={{ color: "red" }}
          onClick={dashBoardInfoBannerRemoveHandle}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default DashBoardInfoBanner;
