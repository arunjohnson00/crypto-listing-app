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

import "react-pro-sidebar/dist/css/styles.css";
import CoinXHighLogo from "../../../assets/logo/logo.png";
import { IconButton } from "@mui/material";

const UserAdminSideBar = () => {
  const [collapse, setCollapse] = useState(false);

  const [activeMenu, setActiveMenu] = useState<any>();

  return (
    <ProSidebar
      collapsed={collapse}
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#1E1C48",
      }}
      //breakPoint="sm"
      width={329}
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
          sx={{ color: "#25E594", fontSize: 38 }}
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
              <DashboardRoundedIcon sx={{ color: "#25E594", fontSize: 38 }} />
            }
          >
            Dashboard
          </MenuItem>

          <MenuItem
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
            icon={<BiCoinStack style={{ color: "#25E594", fontSize: 38 }} />}
          >
            Add Coin
          </MenuItem>

          <MenuItem
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
            icon={
              <DashboardRoundedIcon sx={{ color: "#25E594", fontSize: 38 }} />
            }
          >
            Add NFT
          </MenuItem>

          <MenuItem
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
            icon={
              <DashboardRoundedIcon sx={{ color: "#25E594", fontSize: 38 }} />
            }
          >
            Add AirDrop
          </MenuItem>

          <MenuItem
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
            icon={
              <DashboardRoundedIcon sx={{ color: "#25E594", fontSize: 38 }} />
            }
          >
            My Listings
          </MenuItem>

          <MenuItem
            icon={
              <DashboardRoundedIcon sx={{ color: "#25E594", fontSize: 38 }} />
            }
          >
            Ads
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
