import {
  Box,
  ClickAwayListener,
  IconButton,
  MenuList,
  Paper,
  Link,
  Avatar,
  Stack,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Fragment, useState } from "react";
import { parse } from "tldts";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const ShowMoreMenu = ({ data, variant }: any) => {
  const [showMoreAnchorEl, setShowMoreAnchorEl] = useState<any>(false);
  const open = Boolean(showMoreAnchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setShowMoreAnchorEl(!showMoreAnchorEl);
  };
  const handleClose = () => {
    setShowMoreAnchorEl(false);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ padding: 0 }}
      >
        <MoreVertIcon sx={{ color: "#75787c" }} />
      </IconButton>
      {data !== null && data !== undefined && showMoreAnchorEl === true && (
        <ClickAwayListener onClickAway={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: 30,
              left: -5,
              boxShadow: "2px 2px 5px #000000",
              paddingY: 2,
              backgroundColor: "#111138",
              color: "#FFFFFF",
              zIndex: 99,
              borderRadius: 3,
              maxWidth: 350,
              minWidth: 170,
            }}
          >
            <ArrowDropUpIcon
              sx={{
                position: "absolute",
                top: -13.6,
                left: 4.4,
                color: "#111138",
              }}
            />
            {data &&
              data.map((item: any, index: number) => (
                <Fragment>
                  {variant === "website" && (
                    <Link
                      href={item && item?.url}
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "inherit",
                      }}
                      target="_blank"
                    >
                      <Box
                        py={0.6}
                        px={2}
                        key={index}
                        // selected={option === "Pyxis"}
                        onClick={handleClose}
                        sx={{
                          fontSize: ".7rem",
                          "&::first-letter": {
                            textTransform: "capitalize",
                          },
                          "&:hover": {
                            backgroundColor: "#1f2c54",
                          },
                        }}
                      >
                        {item && item?.url !== null
                          ? parse(item?.url).domain
                          : item && item?.url !== null && item?.url?.length > 12
                          ? item?.url.slice(0, 12) + "..."
                          : item && item?.url !== null && item?.url}
                      </Box>
                    </Link>
                  )}

                  {variant === "network" && (
                    <Link
                      href={item && item?.url}
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "inherit",
                      }}
                      target="_blank"
                    >
                      <Box
                        py={0.6}
                        px={2}
                        key={index}
                        // selected={option === "Pyxis"}
                        onClick={handleClose}
                        sx={{
                          fontSize: ".7rem",
                          "&::first-letter": {
                            textTransform: "capitalize",
                          },
                          "&:hover": {
                            backgroundColor: "#1f2c54",
                          },
                        }}
                      >
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Avatar
                            alt={item?.name}
                            src={`${serverAPIUrl}public/uploads/network_icons/${item?.logo}`}
                            sx={{ width: 45, height: 11, borderRadius: 0 }}
                          />{" "}
                          <span>
                            {item?.name?.length > 14
                              ? item?.name?.slice(0, 11) + "..."
                              : item?.name}
                          </span>
                        </Stack>
                      </Box>
                    </Link>
                  )}

                  {variant === "audit" && (
                    <Link
                      href={item && item?.url}
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "inherit",
                      }}
                      target="_blank"
                    >
                      <Box
                        py={0.6}
                        px={2}
                        key={index}
                        // selected={option === "Pyxis"}
                        onClick={handleClose}
                        sx={{
                          fontSize: ".7rem",
                          "&::first-letter": {
                            textTransform: "capitalize",
                          },
                          "&:hover": {
                            backgroundColor: "#1f2c54",
                          },
                        }}
                      >
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Avatar
                            alt={item?.name}
                            src={`${serverAPIUrl}public/uploads/coins_audit/${item?.thumb_icon}`}
                            sx={{ width: 16, height: 16, borderRadius: 0 }}
                          />{" "}
                          <span>
                            {item?.name?.length > 14
                              ? item?.name?.slice(0, 14) + "..."
                              : item?.name}
                          </span>
                        </Stack>
                      </Box>
                    </Link>
                  )}

                  {variant === "chart" && (
                    <Link
                      href={item && item?.url}
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "inherit",
                      }}
                      target="_blank"
                    >
                      <Box
                        py={0.6}
                        px={2}
                        key={index}
                        // selected={option === "Pyxis"}
                        onClick={handleClose}
                        sx={{
                          fontSize: ".7rem",
                          "&::first-letter": {
                            textTransform: "capitalize",
                          },
                          "&:hover": {
                            backgroundColor: "#1f2c54",
                          },
                        }}
                      >
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Avatar
                            alt={item?.name}
                            src={`${serverAPIUrl}public/uploads/coins_chart_provider/${item?.thumb_icon}`}
                            sx={{ width: 16, height: 16, borderRadius: 0 }}
                          />{" "}
                          <span>
                            {item?.name?.length > 14
                              ? item?.name?.slice(0, 14) + "..."
                              : item?.name}
                          </span>
                        </Stack>
                      </Box>
                    </Link>
                  )}
                </Fragment>
              ))}
          </Box>
        </ClickAwayListener>
      )}
    </Box>
  );
};

export default ShowMoreMenu;
