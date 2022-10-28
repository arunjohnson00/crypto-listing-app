import { Dialog, DialogContent, IconButton, Stack, Box } from "@mui/material";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { welcomePopupAdsRequest } from "../../../store/action";

const WelcomePopupAds = () => {
  const dispatch: any = useDispatch();
  const [random, setRandom] = useState(0);
  const welcomePopupAds = useSelector((data: any) => {
    return data?.adsReducer?.welcome_popup_ads?.data;
  });
  useEffect(() => {
    welcomePopupAds?.data?.length > 1 &&
      setInterval(() => {
        welcomePopupAds?.data && welcomePopupAds?.data?.length - 1 === random
          ? setRandom(0)
          : setRandom(random + 1);
      }, 10000);
  });

  //   console.log(random, welcomePopupAds?.data[random]);
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(welcomePopupAdsRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <div>
      {welcomePopupAds && welcomePopupAds?.response === true && (
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
                    <HighlightOffSharpIcon sx={{ color: "#cecece" }} />
                  </IconButton>
                </Stack>
              </Box>
            </Box>
            {/* <img
            src={
              data && `${serverAPIUrl}public/uploads/event_proof/${data?.proof}`
            }
            alt={data && data?.title}
            style={{ width: "100%" }}
          /> */}
            {welcomePopupAds &&
              welcomePopupAds?.data?.length > 0 &&
              welcomePopupAds?.data[random] && (
                <img
                  src={`${serverAPIUrl}public/uploads/banner_ads/${welcomePopupAds?.data[random]?.banner_image}`}
                  alt={welcomePopupAds?.data[random]?.banner_name}
                  style={{ width: "100%" }}
                />
              )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default WelcomePopupAds;
