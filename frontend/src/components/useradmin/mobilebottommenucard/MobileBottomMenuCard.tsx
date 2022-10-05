import { Avatar, Box, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutHandler } from "../../../utils/logoutHandler";

const MobileBottomMenuCard = ({
  icon,
  title,
  link,
  color,
  background,
  border,
  state,
  logout,
  variant,
}: any) => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const loginControll = () => {
    logoutHandler(navigate, dispatch);
  };
  return (
    <Fragment>
      {variant !== "logout" ? (
        <Link
          to={link && link}
          style={{ textDecoration: "none" }}
          state={{ currentState: state && state }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={0}
          >
            {" "}
            <Box
              sx={{
                border: `3px solid ${border && border}`,
                backgroundColor: background && background,
                padding: 0.5,
                borderRadius: 4,

                display: "flex",
              }}
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                variant="square"
                alt={title}
                src={icon}
                sx={{ width: 20, height: 20 }}
              />
            </Box>
            <Typography
              sx={{
                color: color && color,
                fontSize: ".6rem",
                textAlign: "center",
              }}
            >
              {title && title}
            </Typography>
          </Stack>
        </Link>
      ) : (
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={0}
        >
          {" "}
          <Box
            sx={{
              border: `3px solid ${border && border}`,
              backgroundColor: background && background,
              padding: 0.5,
              borderRadius: 4,
              cursor: "pointer",

              display: "flex",
            }}
            alignItems="center"
            justifyContent="center"
            onClick={loginControll}
          >
            <Avatar
              variant="square"
              alt={title}
              src={icon}
              sx={{ width: 20, height: 20 }}
            />
          </Box>
          <Typography
            sx={{
              color: color && color,
              fontSize: ".65rem",
              textAlign: "center",
            }}
          >
            {title && title}
          </Typography>
        </Stack>
      )}
    </Fragment>
  );
};

export default MobileBottomMenuCard;
