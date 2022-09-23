import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Rating, Stack, Box, Typography } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { coinReviewSubmitRequest } from "../../../store/action";
import { useLocation } from "react-router-dom";

const WiriteReview = ({ openWriteReview, handleClose }: any) => {
  const dispatch: any = useDispatch();
  const location: any = useLocation();
  const [rating, setRating] = useState<any>(0);
  const [hover, setHover] = useState<any>();
  const [reviewCount, setReviewCount] = useState<any>();
  const [reviewText, setReviewText] = useState<any>();
  const coinRatingBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_rating_block?.data;
  });
  const reviewSubmitHandler = () => {
    const formData = new FormData();
    formData.append("slug", location && location?.pathname?.split("/").pop());
    formData.append("review", reviewText);
    formData.append("rating", rating);

    const successHandler = (res: any) => {
      setTimeout(function () {
        toast.success(`${res?.data?.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }, 2000);
      handleClose();
    };
    const errorHandler = (err: any) => {
      toast.warn(`${err?.error?.message?.response?.data?.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };

    dispatch(coinReviewSubmitRequest(formData, successHandler, errorHandler));
  };

  return (
    <div>
      <Dialog
        open={openWriteReview}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "#091338",
            color: "#FFFFF5",
            padding: 4,
          },
        }}
      >
        <Stack direction="column" spacing={0}>
          <Box px={3} py={2}>
            <Typography variant="h6">Select star </Typography>
            {
              <span>
                {" "}
                Your Rating:
                {
                  <span style={{ fontWeight: 700 }}>
                    {" "}
                    {hover <= 0 && rating > 0
                      ? rating
                      : hover <= 0
                      ? 0
                      : hover}{" "}
                    Star
                  </span>
                }
              </span>
            }
          </Box>
          <Box px={3}>
            <Rating
              name="half-rating"
              defaultValue={0}
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              precision={1}
              size="large"
              icon={
                <Box
                  py={0.5}
                  px={1}
                  sx={{
                    border: "1px solid #172140",
                    background: "#040d2f",
                    borderRadius: 2,
                  }}
                  mr={1}
                >
                  <StarRoundedIcon
                    fontSize="inherit"
                    sx={{
                      color:
                        hover <= 1 && rating <= 1
                          ? "#FF3722"
                          : hover <= 2 && rating <= 2
                          ? "#FF8622"
                          : hover <= 3 && rating <= 3
                          ? "#FFCE00"
                          : hover <= 4 && rating <= 4
                          ? "#73CF11"
                          : hover <= 5 && rating <= 5
                          ? "#00B67A"
                          : "#00B67A",
                    }}
                  />
                </Box>
              }
              emptyIcon={
                <Box
                  py={0.5}
                  px={1}
                  sx={{
                    border: "1px solid #172140",
                    background: "#040d2f",
                    borderRadius: 2,
                  }}
                  mr={1}
                >
                  {" "}
                  <StarBorderRoundedIcon
                    fontSize="inherit"
                    sx={{
                      color:
                        hover <= 1 && rating <= 1
                          ? "#FF3722"
                          : hover <= 2 && rating <= 2
                          ? "#FF8622"
                          : hover <= 3 && rating <= 3
                          ? "#FFCE00"
                          : hover <= 4 && rating <= 4
                          ? "#73CF11"
                          : hover <= 5 && rating <= 5
                          ? "#00B67A"
                          : "#00B67A",
                    }}
                  />
                </Box>
              }
            />
          </Box>
        </Stack>

        <DialogTitle>
          {" "}
          Write a review for{" "}
          <span style={{ color: "#dbf62e" }}>
            {coinRatingBlock && coinRatingBlock[0]?.name}
          </span>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText sx={{ color: "#FFFFF5" }}>
            Write a review
          </DialogContentText> */}
          <TextareaAutosize
            className="review"
            aria-label="minimum height"
            minRows={13}
            value={reviewText}
            placeholder={`Write your review for ${
              coinRatingBlock && coinRatingBlock[0]?.name
            }`}
            style={{
              // fontFamily: "inherit",
              //lineHeight: "inherit",
              maxWidth: 600,
              minWidth: 500,
              padding: 13,
              borderRadius: 6,
              backgroundColor: "#020a22",
              marginTop: 5,
              resize: "none",
              border:
                reviewCount >= 600 ? "2px solid red" : "2px solid transparent",

              color: "#FFFFFF",
            }}
            onChange={(e: any) => {
              e?.target?.value?.length <= 600 &&
                setReviewCount(e?.target?.value?.length);

              e?.target?.value?.length <= 600 &&
                setReviewText(e?.target?.value);
            }}
          />
          {
            <Stack direction="row" spacing={1} pt={1}>
              <Box sx={{ color: "#19ffb0" }}>
                {reviewCount === undefined ? (
                  0
                ) : (
                  <span style={{ color: "#FFFFFF" }}>{reviewCount}</span>
                )}{" "}
                / 600{" "}
              </Box>
              {reviewCount >= 600 && (
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ color: "red" }}
                >
                  <WarningAmberIcon sx={{ fontSize: 19 }} />{" "}
                  <span>Maximum limit exceeded</span>
                </Stack>
              )}
            </Stack>
          }
        </DialogContent>
        <DialogActions>
          <Stack direction="row" spacing={1} pb={2} px={2}>
            <Button
              onClick={handleClose}
              sx={{ textTransform: "capitalize", color: "#FFFFFF" }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => reviewSubmitHandler()}
              variant="contained"
              sx={{ backgroundColor: "#6252E7", textTransform: "capitalize" }}
            >
              Submit
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WiriteReview;
