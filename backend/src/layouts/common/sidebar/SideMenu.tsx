import { Fragment, useState } from "react";
import {
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Icon,
  Avatar,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useLocation, Link } from "react-router-dom";
import { sideBarMenu } from "./helper";
import { Drawer, DrawerHeader } from "./style";
import darkLogo from "../../../assets/logo/logodark.png";

const SideMenu = ({ open }: any) => {
  const location = useLocation();

  const [expandMenu, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [activeColorId, setActiveColorId] = useState<number>();
  const [subActiveColorId, setSubActiveColorId] = useState<number>();

  const menuHandler = (e: any, data: any) => {
    data.subMenu && handleExpand(e, data);
    !data.subMenu && setOpen(false);
    setActiveColorId(data.id);
    setSubActiveColorId(0);
  };

  const subMenuHandler = (e: any, sublist: any, data: any) => {
    setSubActiveColorId(sublist.id);
    setActiveColorId(data.id);
  };

  const handleExpand = (e: any, data: any) => {
    setOpen(!expandMenu);
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
          background: "#FFFFFF",
          justifyContent: "flex-start",
          paddingLeft: 33,
          paddingTop: 18,
          marginBottom: 20,
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
      <List sx={{ paddingX: open === false ? 1 : 2, paddingY: 2 }}>
        {sideBarMenu.map((data: any, index: number) => {
          return (
            <Fragment key={index}>
              <Link
                to={"/" + data.title.toLowerCase().replace(/\s+/g, "")}
                style={{ textDecoration: "none" }}
              >
                <ListItem
                  button
                  sx={{ height: "52px", paddingX: 1.55, paddingY: 1 }}
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
                      minWidth: 40,
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
                            ? "#FFFFFF "
                            : "rgba(170, 174, 178, 1)"
                        }`,
                      }}
                    >
                      {/* {data.icon} */}

                      <Avatar
                        alt={data?.title}
                        variant="square"
                        src={data?.icon}
                        sx={{
                          width: 24,
                          height: 24,
                          padding: 0.2,
                          filter:
                            activeColorId === data.id ||
                            location.pathname.replace(/[^a-zA-Z ]/g, "") ===
                              data.title
                                .toLowerCase()
                                .replace(/\s+/g, "")
                                .replace(/[^a-zA-Z ]/g, "")
                              ? "brightness(200%)"
                              : "brightness(100%)",
                        }}
                      />
                    </Icon>
                  </ListItemIcon>

                  {!data.subMenu ? (
                    <ListItemText
                      primary={data.title.replace(/[^a-zA-Z ]/g, " ")}
                      primaryTypographyProps={{
                        fontSize: ".85rem",
                        textTransform: "capitalize",
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
                            ? "#FFFFFF"
                            : "rgba(170, 174, 178, 1)"
                        }`,
                      }}
                    />
                  ) : (
                    <ListItemText
                      primary={data.title.replace(/[^a-zA-Z ]/g, " ")}
                      primaryTypographyProps={{
                        fontSize: ".85rem",
                        textTransform: "capitalize",
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
                            ? "#FFFFFF "
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
                            onClick={(e) => subMenuHandler(e, sublist, data)}
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
                                fontSize: ".8rem",
                                textTransform: "capitalize",
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
