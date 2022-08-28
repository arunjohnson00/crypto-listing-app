import { useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import { BiCoinStack } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import "./style.css";
import "react-pro-sidebar/dist/css/styles.css";
import CoinXHighLogo from "../../../assets/logo/logo.png";
import { Avatar, IconButton, Typography } from "@mui/material";

import UserDashBoardIcon from "../../../assets/userdashboard/dashboard_menu.png";
import MyListingIcon from "../../../assets/userdashboard/mylistings_menu.png";
import AddCoinIcon from "../../../assets/userdashboard/coin_menu.png";
import AddNFTIcon from "../../../assets/userdashboard/nft_menu.png";
import AddAirdropIcon from "../../../assets/userdashboard/airdrop_menu.png";
import SettingsIcon from "../../../assets/userdashboard/settings_menu.png";
import AdsIcon from "../../../assets/userdashboard/ads_menu.png";
const UserAdminSideBar = ({ collapse, setCollapse }: any) => {
  const [activeMenu, setActiveMenu] = useState<any>();

  return (
    <ProSidebar
      collapsed={collapse}
      style={{
        position: "sticky",
        height: "100vh",
        background: "#08022f",
        top: 0,
      }}
      //breakPoint="sm"
      width={"auto"}
      collapsedWidth={75}
    >
      <SidebarHeader
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 18,
          paddingBottom: 18,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {collapse === false ? (
          <img src={CoinXHighLogo} alt="CoinXHigh" width={150} />
        ) : null}
        <IconButton
          sx={{ color: "#25E594", fontSize: "1.5rem" }}
          onClick={() => {
            collapse === false ? setCollapse(true) : setCollapse(false);
          }}
        >
          <HiMenuAlt1 />
        </IconButton>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem
            active
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
            onClick={(e: any) => {
              setActiveMenu(true);
            }}
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
          >
            <Typography variant="body2" ml={2}>
              {" "}
              Dashboard{" "}
            </Typography>
          </MenuItem>

          <MenuItem
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
            icon={
              <Avatar
                alt="User Dashboard"
                src={AddCoinIcon}
                sx={{
                  width: 25,
                  height: 25,
                  borderRadius: 0,
                }}
              />
            }
          >
            <Typography variant="body2" ml={2}>
              {" "}
              Add Coin
            </Typography>
          </MenuItem>

          <MenuItem
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
            icon={
              <Avatar
                alt="User Dashboard"
                src={AddNFTIcon}
                sx={{
                  width: 25,
                  height: 25,
                  borderRadius: 0,
                }}
              />
            }
          >
            <Typography variant="body2" ml={2}>
              {" "}
              Add NFT
            </Typography>
          </MenuItem>

          <MenuItem
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
            icon={
              <Avatar
                alt="User Dashboard"
                src={AddAirdropIcon}
                sx={{
                  width: 25,
                  height: 25,
                  borderRadius: 0,
                }}
              />
            }
          >
            <Typography variant="body2" ml={2}>
              {" "}
              Add AirDrop
            </Typography>
          </MenuItem>

          <MenuItem
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
            icon={
              <Avatar
                alt="My Listings"
                src={MyListingIcon}
                sx={{
                  width: 25,
                  height: 25,
                  borderRadius: 0,
                }}
              />
            }
          >
            <Typography variant="body2" ml={2}>
              {" "}
              My Listings
            </Typography>
          </MenuItem>

          <MenuItem
            icon={
              <Avatar
                alt="User Dashboard"
                src={AdsIcon}
                sx={{
                  width: 25,
                  height: 25,
                  borderRadius: 0,
                }}
              />
            }
          >
            <Typography variant="body2" ml={2}>
              {" "}
              Ads
            </Typography>
          </MenuItem>

          <MenuItem
            icon={
              <Avatar
                alt="User Dashboard"
                src={SettingsIcon}
                sx={{
                  width: 25,
                  height: 25,
                  borderRadius: 0,
                }}
              />
            }
          >
            <Typography variant="body2" ml={2}>
              {" "}
              Settings
            </Typography>
          </MenuItem>

          {/* <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu> */}
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        {/**
         *  You can add a footer for the sidebar ex: copyright
         */}
      </SidebarFooter>
    </ProSidebar>
  );
};

export default UserAdminSideBar;
