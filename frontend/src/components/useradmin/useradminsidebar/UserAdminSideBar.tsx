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

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

import "./style.css";
import "react-pro-sidebar/dist/css/styles.css";
import CoinXHighLogo from "../../../assets/logo/logo.png";
import { Avatar, IconButton, Typography } from "@mui/material";
import { logoutHandler } from "../../../utils/logoutHandler";
import UserDashBoardIcon from "../../../assets/userdashboard/dashboard_menu.png";
import MyListingIcon from "../../../assets/userdashboard/mylistings_menu.png";
import AddCoinIcon from "../../../assets/userdashboard/coin_menu.png";
import AddNFTIcon from "../../../assets/userdashboard/nft_menu.png";
import AddAirdropIcon from "../../../assets/userdashboard/airdrop_menu.png";
import SettingsIcon from "../../../assets/userdashboard/settings_menu.png";
import AdsIcon from "../../../assets/userdashboard/ads_menu.png";
import { Link } from "react-router-dom";
const UserAdminSideBar = ({ collapse, setCollapse }: any) => {
  const [activeMenu, setActiveMenu] = useState<any>();
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const loginControll = () => {
    logoutHandler(navigate, dispatch);
  };
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
            <Link
              to="/user-dashboard"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="body2" ml={2}>
                {" "}
                Dashboard{" "}
              </Typography>
            </Link>
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
            <Link
              to="/user-dashboard/coin/add"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Typography variant="body2" ml={2}>
                {" "}
                Add Coin
              </Typography>
            </Link>
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
            <Link
              to="/user-dashboard/nft/add"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Typography variant="body2" ml={2}>
                {" "}
                Add NFT
              </Typography>
            </Link>
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
            <Link
              to="/user-dashboard/events/add"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="body2" ml={2}>
                {" "}
                Add Events
              </Typography>
            </Link>
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
            <Link
              to="/user-dashboard/airdrops/add"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="body2" ml={2}>
                {" "}
                Add AirDrop
              </Typography>
            </Link>
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
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
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
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
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
            <Link
              to="/user-dashboard/settings"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Typography variant="body2" ml={2}>
                {" "}
                Settings
              </Typography>
            </Link>
          </MenuItem>

          <MenuItem
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
            onClick={loginControll}
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
              Logout
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
