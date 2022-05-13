import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Paper from "@mui/material/Paper";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material/styles";

import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const MobileBottomNav = () => {
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
          label="Coins"
          value="coins"
          icon={<MonetizationOnOutlinedIcon />}
        />
        <BottomNavigationAction
          label="NFT"
          value="nft"
          icon={<AssistantOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Presale"
          value="presale"
          icon={<TimelapseOutlinedIcon />}
        />
        <BottomNavigationAction
          label="News"
          value="news"
          icon={<NewspaperOutlinedIcon />}
        />

        <BottomNavigationAction
          label="Events"
          value="events"
          icon={<LocalFireDepartmentIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default MobileBottomNav;
