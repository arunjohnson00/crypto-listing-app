import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import { BsFillCaretUpFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";
import { logoutHandler } from "../../../../utils/logoutHandler";
import { Link } from "react-router-dom";
import { menu } from "./helper";
const LoginHeaderBtn = ({ title, handler, icon }: any) => {
  const [menuHover, setMenuHover] = useState(false);
  const navigate: any = useNavigate();
  const dispatch: any = useDispatch();

  const handleonMouseEnter = (event: any) => {
    setMenuHover(true);
  };
  const handleonMouseLeave = () => {
    setMenuHover(false);
  };
  const loginControll = () => {
    logoutHandler(navigate, dispatch);
  };
  const userData = useSelector((data: any) => {
    return data?.userReducer?.user_login;
  });
  const authUser = JSON.parse(localStorage.getItem("authUser") as any);
  const auth =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  return (
    <div onMouseLeave={handleonMouseLeave}>
      <Button
        variant="text"
        startIcon={icon}
        onClick={() => handler(navigate, dispatch)}
        onMouseEnter={handleonMouseEnter}
      >
        <Typography
          variant="subtitle2"
          sx={{ textTransform: "capitalize", color: "white" }}
        >
          {title && title}
        </Typography>
      </Button>
      {auth && menu && menuHover === true && (
        <Box
          sx={{
            position: "absolute",
            minWidth: 280,
            right: 80,
            zIndex: 99,
          }}
        >
          <Box
            sx={{
              position: "relative",
              left: 210,
              maxWidth: 50,
            }}
            px={3}
          >
            <BsFillCaretUpFill
              fontSize={20}
              style={{ padding: 0, margin: -9, color: "#000000" }}
            />
          </Box>
          <Stack
            direction="column"
            spacing={2}
            px={2}
            pt={3}
            sx={{
              backgroundColor: "#000000",
              borderRadius: 4,
              color: "#FFFFFF",
              boxShadow: "0px 18px 20px #00000033",
              border: "2px solid #080C28",
            }}
          >
            <Stack direction="row" spacing={2.5} alignItems="center">
              <Avatar alt="Profile" src={""} sx={{ width: 45, height: 45 }} />
              <Stack direction="column" spacing={0.5} alignItems="flex-start">
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#FFFFFF",
                    fontWeight: 600,
                  }}
                >
                  Hi,{" "}
                  {userData && userData !== undefined
                    ? userData?.user?.name
                    : authUser && authUser?.name}
                </Typography>
                <Link to="/user-dashboard" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: ".8rem",
                      color: "#23B184",
                    }}
                  >
                    View Dashboard
                  </Typography>
                </Link>
              </Stack>
            </Stack>
            <Divider
              variant="middle"
              flexItem
              orientation={"horizontal"}
              sx={{ borderColor: "#342D61", borderBottomWidth: 1 }}
            />
            <Stack direction="column" spacing={0} pb={1}>
              {menu?.map((item: any, index: number) => (
                <Fragment>
                  {item?.title === "Logout" ? (
                    <Stack
                      direction="row"
                      spacing={0.2}
                      alignItems="center"
                      px={2}
                      py={0}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#111138",
                        },
                      }}
                      onClick={loginControll}
                    >
                      {/* <Avatar
              alt={item?.title}
              src={item?.icon}
              sx={{ width: 22, height: 22, borderRadius: 0 }}
            /> */}
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          backgroundColor: item && item.color,
                          borderRadius: 10,
                        }}
                      ></Box>
                      <Typography
                        sx={{
                          p: 1,
                          fontSize: ".9rem",
                          color: "#FFFFFF",
                        }}
                      >
                        {item?.title}
                      </Typography>
                    </Stack>
                  ) : (
                    item?.title !== "Logout" && (
                      <Link
                        to={{
                          pathname: `${item?.link}`,
                        }}
                        state={{
                          scroll: false,
                        }}
                        style={{ textDecoration: "none", color: "#FFFFFF" }}
                        key={index}
                      >
                        <Stack
                          direction="row"
                          spacing={0.2}
                          alignItems="center"
                          px={2}
                          py={0}
                          sx={{
                            "&:hover": {
                              backgroundColor: "#111138",
                            },
                          }}
                        >
                          {/* <Avatar
                  alt={item?.title}
                  src={item?.icon}
                  sx={{ width: 22, height: 22, borderRadius: 0 }}
                /> */}
                          <Box
                            sx={{
                              width: 12,
                              height: 12,
                              backgroundColor: item && item.color,
                              borderRadius: 10,
                            }}
                          ></Box>
                          <Typography
                            sx={{
                              p: 1,
                              fontSize: ".9rem",
                              color: "#FFFFFF",
                            }}
                          >
                            {item?.title}
                          </Typography>
                        </Stack>
                      </Link>
                    )
                  )}
                </Fragment>
              ))}
            </Stack>
          </Stack>
        </Box>
      )}
    </div>
  );
};

export default LoginHeaderBtn;
