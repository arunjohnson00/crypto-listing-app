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
import { useLocation } from "react-router-dom";

import { Drawer, DrawerHeader } from "./style";
import { sideBarMenu } from "./helper";
//import logoWhite from "../../../assets/logo/logowhite.png";
import darkLogo from "../../../assets/logo/logodark.png";
import { Link } from "react-router-dom";

const SideMenu = ({ open }: any) => {
  const location = useLocation();

  console.log(location.pathname.replace(/[^a-zA-Z ]/g, ""));
  const [expandMenu, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [activeColorId, setActiveColorId] = useState<number>();
  const [subActiveColorId, setSubActiveColorId] = useState();

  const menuHandler = (e: any, data: any) => {
    data.subMenu && handleExpand(e, data);

    setActiveColorId(data.id);

    console.log(
      data.title
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-zA-Z ]/g, "")
    );
  };

  const subMenuHandler = (e: any, sublist: any) => {
    setSubActiveColorId(sublist.id);
    console.log(sublist.id);
    console.log(subActiveColorId);
  };

  const handleExpand = (e: any, data: any) => {
    setOpen(!expandMenu);
    // console.log(e.currentTarget.id);
    setTitle(data.title);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          borderRight: 0,
          boxShadow: "rgb(255 255 255 / 55%) 11px 12px 1px",
        },
      }}
    >
      <DrawerHeader
        style={{
          background: "white",
          justifyContent: "flex-start",
          paddingLeft: "26px",
          paddingTop: "18px",
        }}
      >
        <img
          src={darkLogo}
          alt="CoinXhigh logoWhite"
          style={{ width: "154px" }}
        />
      </DrawerHeader>
      {
        //<Divider />
      }
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
                      activeColorId === data.id ||
                      location.pathname.replace(/[^a-zA-Z ]/g, "") ===
                        data.title
                          .toLowerCase()
                          .replace(/\s+/g, "")
                          .replace(/[^a-zA-Z ]/g, "")
                        ? "rgb(61 56 122)"
                        : "none"
                    }`,
                    borderRadius: `${
                      activeColorId === data.id ||
                      location.pathname.replace(/[^a-zA-Z ]/g, "") ===
                        data.title
                          .toLowerCase()
                          .replace(/\s+/g, "")
                          .replace(/[^a-zA-Z ]/g, "")
                        ? "7px"
                        : "0px"
                    }`,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "rgba(170, 174, 178, 1)",
                      margin: "0px 6px 0px 0px",
                    }}
                  >
                    <Icon
                      sx={{
                        color: `${
                          activeColorId === data.id ||
                          location.pathname.replace(/[^a-zA-Z ]/g, "") ===
                            data.title
                              .toLowerCase()
                              .replace(/\s+/g, "")
                              .replace(/[^a-zA-Z ]/g, "")
                            ? "white "
                            : "rgba(170, 174, 178, 1)"
                        }`,
                      }}
                    >
                      {data.icon}
                    </Icon>
                  </ListItemIcon>

                  {!data.subMenu ? (
                    <ListItemText
                      primary={data.title.replace(/[^a-zA-Z ]/g, " ")}
                      primaryTypographyProps={{
                        fontSize: ".93rem",
                        fontWeight: `${
                          activeColorId === data.id ||
                          location.pathname.replace(/[^a-zA-Z ]/g, "") ===
                            data.title
                              .toLowerCase()
                              .replace(/\s+/g, "")
                              .replace(/[^a-zA-Z ]/g, "")
                            ? 500
                            : 400
                        }`,
                      }}
                      sx={{
                        color: `${
                          activeColorId === data.id ||
                          location.pathname.replace(/[^a-zA-Z ]/g, "") ===
                            data.title
                              .toLowerCase()
                              .replace(/\s+/g, "")
                              .replace(/[^a-zA-Z ]/g, "")
                            ? "white"
                            : "rgba(170, 174, 178, 1)"
                        }`,
                      }}
                    />
                  ) : (
                    <ListItemText
                      primary={data.title.replace(/[^a-zA-Z ]/g, " ")}
                      primaryTypographyProps={{
                        fontSize: ".93rem",
                        fontWeight: `${
                          activeColorId === data.id ||
                          location.pathname.replace(/[^a-zA-Z ]/g, "") ===
                            data.title
                              .toLowerCase()
                              .replace(/\s+/g, "")
                              .replace(/[^a-zA-Z ]/g, "")
                            ? 500
                            : 400
                        }`,
                      }}
                      sx={{
                        color: `${
                          activeColorId === data.id ||
                          location.pathname.replace(/[^a-zA-Z ]/g, "") ===
                            data.title
                              .toLowerCase()
                              .replace(/\s+/g, "")
                              .replace(/[^a-zA-Z ]/g, "")
                            ? "white "
                            : "rgba(170, 174, 178, 1)"
                        }`,
                      }}
                    />
                  )}

                  {!data.subMenu ? null : activeColorId === data.id &&
                    expandMenu ? (
                    <ExpandLess
                      style={{
                        fontSize: 17,
                        color: "rgba(170, 174, 178, 1)",
                      }}
                    />
                  ) : (
                    <ExpandMore
                      style={{
                        fontSize: 17,
                        color: "rgba(170, 174, 178, 1)",
                      }}
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
                          <ListItemButton
                            sx={{ pl: open ? 4 : 2 }}
                            onClick={(e) => subMenuHandler(e, sublist)}
                            id={`${data.title
                              .toLowerCase()
                              .replace(/\s+/g, "")}sub${index}`}
                            style={{
                              background: `${
                                activeColorId === data.id &&
                                subActiveColorId === sublist.id
                                  ? "#f4f4f4"
                                  : "none"
                              }`,
                            }}
                          >
                            <ListItemIcon>
                              <Icon
                                sx={{
                                  color: `${
                                    activeColorId === data.id &&
                                    subActiveColorId === sublist.id
                                      ? "#3D387A "
                                      : "rgba(170, 174, 178, 1)"
                                  }`,
                                }}
                              >
                                {sublist.icon}
                              </Icon>
                            </ListItemIcon>

                            <ListItemText
                              primary={sublist.title.replace(
                                /[^a-zA-Z ]/g,
                                " "
                              )}
                              primaryTypographyProps={{
                                fontSize: ".93rem",
                                fontWeight: `${
                                  activeColorId === data.id &&
                                  subActiveColorId === sublist.id
                                    ? 500
                                    : 400
                                }`,
                              }}
                              sx={{
                                color: `${
                                  activeColorId === data.id &&
                                  subActiveColorId === sublist.id
                                    ? "#3D387A "
                                    : "rgba(170, 174, 178, 1)"
                                }`,
                              }}
                            />
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
