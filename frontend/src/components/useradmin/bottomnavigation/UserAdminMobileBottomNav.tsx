import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";

import Paper from "@mui/material/Paper";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material/styles";

import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

import UserDashBoardIcon from "../../../assets/userdashboard/user-dashboard.png";
import MyListingIcon from "../../../assets/userdashboard/my-listings.png";
import { Avatar, Typography } from "@mui/material";

const UserAdminMobileBottomNav = () => {
  const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: #585858;
  &.Mui-selected {
    color: #019D80;
  },
  &.Mui-selected
`);
  const [value, setValue] = React.useState("coins");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Paper
      sx={{
        position: "fixed",
        height: 70,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backgroundColor: "#000000",
        "& .MuiBottomNavigation-root": {
          backgroundColor: "#000000",
          height: 70,
        },
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ width: "auto" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label={
            <Typography sx={{ fontSize: ".55rem", color: "#01F970" }} pt={0.3}>
              Dashboard
            </Typography>
          }
          value="dashboard"
          icon={
            <Avatar
              alt="User Dashboard"
              src={UserDashBoardIcon}
              sx={{
                width: 25,
                height: 25,
                borderRadius: 0,
              }}
            />
          }
        />
        <BottomNavigationAction
          label={
            <Typography sx={{ fontSize: ".55rem", color: "#01F970" }} pt={0.3}>
              Add Coin
            </Typography>
          }
          value="addcoin"
          icon={
            <Avatar
              alt="User Dashboard"
              src={UserDashBoardIcon}
              sx={{
                width: 25,
                height: 25,
                borderRadius: 0,
              }}
            />
          }
        />
        <BottomNavigationAction
          label={
            <Typography sx={{ fontSize: ".55rem", color: "#01F970" }} pt={0.3}>
              Add NFT
            </Typography>
          }
          value="addnft"
          icon={
            <Avatar
              alt="User Dashboard"
              src={UserDashBoardIcon}
              sx={{
                width: 25,
                height: 25,
                borderRadius: 0,
              }}
            />
          }
        />
        <BottomNavigationAction
          label={
            <Typography sx={{ fontSize: ".55rem", color: "#01F970" }} pt={0.3}>
              Add Airdrops
            </Typography>
          }
          value="addairdrops"
          icon={
            <Avatar
              alt="User Dashboard"
              src={UserDashBoardIcon}
              sx={{
                width: 25,
                height: 25,
                borderRadius: 0,
              }}
            />
          }
        />

        <BottomNavigationAction
          label={
            <Typography sx={{ fontSize: ".55rem", color: "#01F970" }} pt={0.3}>
              My Listing
            </Typography>
          }
          value="mylisting"
          icon={
            <Avatar
              alt="User Dashboard"
              src={MyListingIcon}
              sx={{
                width: 25,
                height: 25,
                borderRadius: 0,
              }}
            />
          }
        />
        {/* <BottomNavigationAction
          label={
            <Typography sx={{ fontSize: ".55rem", color: "#01F970" }} pt={0.3}>
              {" "}
              Ads
            </Typography>
          }
          value="ads"
          icon={
            <Avatar
              alt="User Dashboard"
              src={UserDashBoardIcon}
              sx={{
                width: 25,
                height: 25,
                borderRadius: 0,
              }}
            />
          }
        /> */}
      </BottomNavigation>
    </Paper>
  );
};

export default UserAdminMobileBottomNav;
