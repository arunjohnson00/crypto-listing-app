import {
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Box,
  Button,
  Typography,
} from "@mui/material";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInterval } from "react-interval-hook";
import { welcomePopupAdsRequest } from "../../../store/action";

const WelcomePopupAds = () => {
  const dispatch: any = useDispatch();
  const [random, setRandom] = useState(0);
  const welcomePopupAds = useSelector((data: any) => {
    return data?.adsReducer?.welcome_popup_ads?.data;
  });
  useInterval(() => {
    welcomePopupAds?.data?.length > 1
      ? welcomePopupAds?.data && welcomePopupAds?.data?.length - 1 === random
        ? setRandom(0)
        : setRandom(random + 1)
      : setRandom(0);
  }, 15000);

  //   console.log(random, welcomePopupAds?.data[random]);
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  const [open, setOpen] = useState(true);
  var items = window.localStorage.getItem("welcomePopup") as any;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      var hours = 1; // to clear the localStorage after 1 hour
      // (if someone want to clear after 8hrs simply change hours=8)
      var now: any = new Date().getTime();
      var setupTime = localStorage.getItem("setupTime") as any;
      if (setupTime === null) {
        localStorage.setItem("setupTime", now);

        localStorage.setItem("welcomePopup", JSON.stringify(true));
      } else {
        localStorage.setItem("welcomePopup", JSON.stringify(false));
        if (new Date().getTime() - setupTime > hours * 60 * 60 * 1000) {
          localStorage.setItem("welcomePopup", JSON.stringify(false));
          localStorage.setItem("setupTime", now);
        }
      }
    };
    const errorHandler = (err: any) => {};

    dispatch(welcomePopupAdsRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  const localStorageCheck = JSON.parse(
    localStorage.getItem("welcomePopup") as any
  );
  // console.log(localStorageCheck);
  return (
    <div>
      {welcomePopupAds &&
        welcomePopupAds?.response === true &&
        localStorageCheck === true && (
          <Dialog
            open={open}
            // TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
              style: {
                backgroundColor: "transparent",
                boxShadow: "none",
                borderRadius: 4,
                overflow: "hidden",
              },
            }}
            sx={{
              "&.MuiDialog-paper": {
                overflow: "hidden",
              },
            }}
          >
            <DialogContent
              sx={{
                background: "#000000",
                padding: 0,
                border: "1px solid  #1b2756",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{ position: "absolute", width: "100%", overflow: "hidden" }}
              >
                <Box sx={{ position: "relative", top: 3, right: 4 }}>
                  <Stack direction="row" justifyContent="flex-end" pb={1}>
                    <IconButton
                      onClick={handleClose}
                      aria-label="delete"
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography
                          sx={{
                            color: "#1154ad",
                            fontSize: ".8rem",
                            fontWeight: 500,
                          }}
                        >
                          Close{" "}
                        </Typography>
                        <HighlightOffSharpIcon sx={{ color: "#cecece" }} />
                      </Stack>
                    </IconButton>
                  </Stack>
                </Box>
              </Box>
              <a
                href={welcomePopupAds?.data[random]?.banner_target_link}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                  py={2}
                >
                  {welcomePopupAds &&
                    welcomePopupAds?.data?.length > 0 &&
                    welcomePopupAds?.data[random] && (
                      <img
                        src={`${serverAPIUrl}public/uploads/banner_ads/${welcomePopupAds?.data[random]?.banner_image}`}
                        alt={welcomePopupAds?.data[random]?.banner_name}
                        style={{ width: "70%" }}
                      />
                    )}

                  {/* <Button
                    variant="contained"
                    sx={{
                      borderRadius: 10,
                      backgroundColor: "#00B6FC",
                      textTransform: "none",
                      fontSize: ".8rem",
                    }}
                  >
                    Learn More
                  </Button> */}
                </Stack>{" "}
              </a>
            </DialogContent>
          </Dialog>
        )}
    </div>
  );
};

export default WelcomePopupAds;
