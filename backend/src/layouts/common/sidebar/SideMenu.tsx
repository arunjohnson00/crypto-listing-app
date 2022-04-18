import { Fragment, useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Icon } from "@mui/material";

import { Drawer, DrawerHeader } from "./style";
import { sideBarMenu } from "./helper";
import logoWhite from "../../../assets/logo/logowhite.png";
import { Link } from "react-router-dom";

const SideMenu = ({ open }: any) => {
  const [expandMenu, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [activeColorId, setActiveColorId] = useState();

  const menuHandler = (e: any, data: any) => {
    data.subMenu && handleExpand(e, data);

    setActiveColorId(data.id);
    console.log(activeColorId);
  };
  const handleExpand = (e: any, data: any) => {
    setOpen(!expandMenu);
    console.log(e.currentTarget.id);
    setTitle(data.title);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader style={{ background: "black" }}>
        <img
          src={logoWhite}
          alt="CoinXhigh logoWhite"
          style={{ width: "154px" }}
        />
      </DrawerHeader>
      <Divider />
      <List sx={{ padding: "7px" }}>
        {sideBarMenu.map((data: any, index: number) => {
          return (
            <Fragment key={index}>
              <Link
                to={"/" + data.title.toLowerCase().replace(/\s+/g, "")}
                style={{ textDecoration: "none" }}
              >
                <ListItem
                  button
                  sx={{ height: "52px" }}
                  onClick={(e) => menuHandler(e, data)}
                  id={"main" + index}
                  style={{
                    background: `${
                      activeColorId === data.id ? "#f4f4f4" : "none"
                    }`,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "rgba(170, 174, 178, 1)",
                      margin: "0px 6px 0px 0px",
                    }}
                  >
                    <Icon>{data.icon}</Icon>
                  </ListItemIcon>

                  {!data.subMenu ? (
                    <ListItemText
                      primary={data.title}
                      sx={{
                        color: "rgba(170, 174, 178, 1)",
                        fontSize: ".9rem",
                      }}
                    />
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
              </Link>
              {data.title === title && (
                <Collapse in={expandMenu} timeout="auto" unmountOnExit>
                  {data.subMenu.map((sublist: any, index: number) => {
                    return (
                      <Link
                        to={
                          "/" + sublist.title.toLowerCase().replace(/\s+/g, "")
                        }
                        style={{ textDecoration: "none" }}
                        key={index}
                      >
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <Icon>{sublist.icon}</Icon>
                            </ListItemIcon>

                            <ListItemText primary={sublist.title} />
                          </ListItemButton>
                        </List>
                      </Link>
                    );
                  })}
                </Collapse>
              )}
            </Fragment>
          );
        })}
      </List>
      <Divider />
    </Drawer>
  );
};

export default SideMenu;
