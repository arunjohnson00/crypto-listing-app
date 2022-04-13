import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { AppBar } from "./style";
import { logoutHandler } from "../../../utils/logoutHandler";

const TopBar = ({ handleDrawerOpen, handleDrawerClose, open }: any) => {
  const navigate: any = useNavigate();
  const loginControll = () => {
    logoutHandler(navigate);
  };
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      sx={{
        height: "68px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        color: "rgba(0, 0, 0, 1)",
        boxShadow: "rgb(251, 251, 251) 0px 12px 1px ",
      }}
      open={open}
    >
      <Toolbar>
        {!open ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton onClick={handleDrawerClose} sx={{ marginRight: "20px" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        )}

        <Typography variant="h6" noWrap component="div">
          Dashboard
        </Typography>

        <Button onClick={loginControll}>LogOut</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
