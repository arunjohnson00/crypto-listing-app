import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import StarBorder from "@mui/icons-material/StarBorder";

import { Drawer, DrawerHeader } from "./style";
import { sideBarMenu } from "./helper";
import logoWhite from "../../../assets/logo/logowhite.png";
import { Link } from "react-router-dom";

const SideMenu = ({ handleDrawerClose, open }: any) => {
  const theme = useTheme();

  const [expandMenu, setOpen] = useState(false);
  const [title, setTitle] = useState([]);
  const handleExpand = (e: any, data: any) => {
    setOpen(!expandMenu);
    console.log(e.currentTarget.id);
    setTitle(data.title);

    console.log(title);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader style={{ background: "black" }}>
        <img
          src={logoWhite}
          alt="CoinXhigh logoWhite"
          style={{ width: "154px" }}
        />
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ padding: "20px" }}>
        {sideBarMenu.map((data: any, index: number) => {
          return (
            <>
              <ListItem
                button
                sx={{ height: "52px" }}
                onClick={(e) => data.subMenu && handleExpand(e, data)}
                key={index}
                id={"main" + index}
              >
                <ListItemIcon
                  sx={{ color: "rgba(170, 174, 178, 1)", minWidth: "40px" }}
                >
                  <InboxIcon />
                </ListItemIcon>

                {!data.subMenu ? (
                  <Link
                    to={"/" + data.title.toLowerCase().replace(/\s+/g, "")}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <ListItemText
                      primary={data.title}
                      sx={{ color: "rgba(170, 174, 178, 1)" }}
                    />
                  </Link>
                ) : (
                  <ListItemText
                    primary={data.title}
                    sx={{ color: "rgba(170, 174, 178, 1)" }}
                  />
                )}

                {!data.subMenu ? null : expandMenu ? (
                  <ExpandLess
                    style={{ fontSize: 17, color: "rgba(170, 174, 178, 1)" }}
                  />
                ) : (
                  <ExpandMore
                    style={{ fontSize: 17, color: "rgba(170, 174, 178, 1)" }}
                  />
                )}
              </ListItem>
              {data.title === title && (
                <Collapse in={expandMenu} timeout="auto" unmountOnExit>
                  {data.subMenu.map((sublist: any, index: number) => {
                    return (
                      <List component="div" key={index} disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>

                          <Link
                            to={"/" + sublist.toLowerCase().replace(/\s+/g, "")}
                            style={{ textDecoration: "none" }}
                          >
                            <ListItemText primary={sublist} />
                          </Link>
                        </ListItemButton>
                      </List>
                    );
                  })}
                </Collapse>
              )}{" "}
            </>
          );
        })}
      </List>
      <Divider />
    </Drawer>
  );
};

export default SideMenu;
