import { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";

import Paper from "@mui/material/Paper";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material/styles";

import coinsImage from "../../../assets/responsive/coins.png";
import discoverImage from "../../../assets/responsive/discover.png";
import eventsImage from "../../../assets/responsive/events.png";
import homeImage from "../../../assets/responsive/home.png";
import newsImage from "../../../assets/responsive/news.png";
import { Avatar, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const MobileBottomNav = () => {
  const navigate = useNavigate();
  const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: #585858;
&.MuiBottomNavigationAction-root{
  padding-left:0;padding-right:0;
  min-width:55px;
},
  &.Mui-selected {
    color: #019D80;
    padding-left:0;padding-right:0;
    
  },
  &&.MuiBottomNavigationAction-root .MuiBottomNavigationAction-label{
    margin-top:5px
  }
 
`);
  const [value, setValue] = useState<any>();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    value === "coins"
      ? navigate("/coins")
      : value === "discover"
      ? navigate("/discover")
      : value === "events"
      ? navigate("/crypto-events")
      : value === "user-dashboard"
      ? navigate("/user-dashboard")
      : value === "home" && navigate("/");
  }, [value]);

  return (
    <Box>
      <Paper
        sx={{
          position: "fixed",
          height: 70,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          backgroundColor: "#01071a",
          boxShadow: "0px 0px 20px 3px rgb(32 94 255 / 12%)",

          ".MuiBottomNavigation-root": {
            backgroundColor: "#01071a",
            height: 70,
          },
        }}
        elevation={3}
      >
        <BottomNavigation value={value} onChange={handleChange} showLabels>
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={
              <Avatar
                variant="square"
                src={homeImage}
                sx={{
                  width: 24,
                  height: 24,
                  filter:
                    value === "home" ? "grayscale(0%)" : "grayscale(100%)",
                  opacity: value === "home" ? 1 : 0.5,
                }}
              />
            }
          />

          <BottomNavigationAction
            label="Coins"
            value="coins"
            icon={
              <Avatar
                variant="square"
                src={coinsImage}
                sx={{
                  width: 24,
                  height: 24,
                  filter:
                    value === "coins" ? "grayscale(0%)" : "grayscale(100%)",
                  opacity: value === "coins" ? 1 : 0.5,
                }}
              />
            }
          />

          <BottomNavigationAction
            label="Discover"
            value="discover"
            icon={
              <Avatar
                variant="square"
                src={discoverImage}
                sx={{
                  width: 24,
                  height: 24,
                  filter:
                    value === "discover" ? "grayscale(0%)" : "grayscale(100%)",
                  opacity: value === "discover" ? 1 : 0.5,
                }}
              />
            }
          />

          <BottomNavigationAction
            label="Events"
            value="events"
            icon={
              <Avatar
                variant="square"
                src={eventsImage}
                sx={{
                  width: 24,
                  height: 24,
                  filter:
                    value === "events" ? "grayscale(0%)" : "grayscale(100%)",
                  opacity: value === "events" ? 1 : 0.5,
                }}
              />
            }
          />
          <BottomNavigationAction
            label="My account"
            value="user-dashboard"
            icon={
              <Avatar
                variant="square"
                src={newsImage}
                sx={{
                  width: 24,
                  height: 24,
                  filter:
                    value === "user-dashboard"
                      ? "grayscale(0%)"
                      : "grayscale(100%)",
                  opacity: value === "user-dashboard" ? 1 : 0.5,
                }}
              />
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default MobileBottomNav;
