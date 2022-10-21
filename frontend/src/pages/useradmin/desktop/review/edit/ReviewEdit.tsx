import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Stack,
  IconButton,
  Backdrop,
  CircularProgress,
  TextareaAutosize,
  Rating,
} from "@mui/material";
import LargeBtn from "../../../../../components/useradmin/form/button/large/LargeBtn";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import {
  dashboardEditReviewRequest,
  dashboardUpdateReviewRequest,
} from "../../../../../store/action";
import { Helmet } from "react-helmet-async";

const ReviewEdit = () => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const location: any = useLocation();
  // const [rating, setRating] = useState<any>(0);
  const [hover, setHover] = useState<any>();
  const [reviewCount, setReviewCount] = useState<any>();
  // const [reviewText, setReviewText] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [editReviewData, setEditReview] = useState<any>();

  const reviewSubmitHandler = () => {
    const formData = new FormData();
    formData.append("review_id", editReviewData && editReviewData?.id);
    formData.append("review", editReviewData && editReviewData?.review);
    formData.append("rating", editReviewData && editReviewData?.rating);
    setLoading(true);
    const successHandler = (res: any) => {
      setLoading(false);

      toast.success(
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CheckCircleRoundedIcon sx={{ color: "#5CE32D", fontSize: 50 }} />
            <Typography sx={{ fontSize: ".85rem" }}>
              {res?.data?.message}
            </Typography>
          </Stack>
        </Box>,
        {
          position: "top-right",
          icon: false,
          //theme: "colored",
          className: "toast-success-container toast-success-container-after",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      setTimeout(() => {
        navigate("/user-dashboard");
      }, 3000);
    };
    const errorHandler = (err: any) => {
      toast.error(
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CancelRoundedIcon sx={{ color: "#ff3722", fontSize: 50 }} />
            <Typography sx={{ fontSize: ".85rem" }}>
              {err.error.message.response.data.message}
            </Typography>
          </Stack>
        </Box>,
        {
          icon: false,
          position: "top-right",
          className: "toast-error-container toast-error-container-after",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    };

    dispatch(
      dashboardUpdateReviewRequest(formData, successHandler, errorHandler)
    );
  };

  useEffect(() => {
    const formData = new FormData();
    formData.append("review_id", location?.state?.id);
    const successHandler = (res: any) => {
      setEditReview(res?.data?.data);
    };
    const errorHandler = (err: any) => {};

    dispatch(
      dashboardEditReviewRequest(formData, successHandler, errorHandler)
    );
  }, [dispatch]);

  return (
    <Grid container spacing={2} pb={10}>
      <Helmet>
        <title>Edit Review | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Edit Review | CoinXhigh.com" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta
          property="og:image"
          content="https://coinxhigh.com/coinxhighlogo.webp"
        />
        <meta property="og:url" content="https://coinxhigh.com/" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center" }}
          px={2}
          pt={3}
        >
          {/* <IconButton>
            <ArrowBackIosTwoToneIcon
              onClick={() => {
                navigate("/review");
              }}
            />
          </IconButton> */}

          <Typography variant="h5" sx={{ textAlign: "left", color: "#FFFFFF" }}>
            Edit Review
          </Typography>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{
            maxWidth: "758px",
            background: "linear-gradient(to bottom,#040B27 30%, #01061A 80%)",
            borderRadius: "5px",
          }}
          pt={3}
          pl={4}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Stack direction="column" spacing={0} pb={2}>
              <Box px={0} py={2}>
                <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
                  Select star{" "}
                </Typography>
                {
                  <span style={{ color: "#FFFFFF" }}>
                    {" "}
                    Your Rating:
                    {
                      <span style={{ fontWeight: 700 }}>
                        {" "}
                        {hover <= 0 &&
                        editReviewData &&
                        editReviewData &&
                        editReviewData?.rating > 0
                          ? editReviewData && editReviewData?.rating
                          : hover <= 0
                          ? 0
                          : hover}{" "}
                        Star
                      </span>
                    }
                  </span>
                }
              </Box>
              <Box px={0}>
                {editReviewData && (
                  <Rating
                    name="half-rating"
                    value={
                      editReviewData &&
                      parseFloat(editReviewData?.rating).toFixed(0)
                    }
                    onChange={(event, newValue) => {
                      setEditReview({ ...editReviewData, rating: newValue });
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
                              hover <= 1 &&
                              editReviewData &&
                              editReviewData?.rating <= 1
                                ? "#FF3722"
                                : hover <= 2 &&
                                  editReviewData &&
                                  editReviewData?.rating <= 2
                                ? "#FF8622"
                                : hover <= 3 &&
                                  editReviewData &&
                                  editReviewData?.rating <= 3
                                ? "#FFCE00"
                                : hover <= 4 &&
                                  editReviewData &&
                                  editReviewData?.rating <= 4
                                ? "#73CF11"
                                : hover <= 5 &&
                                  editReviewData &&
                                  editReviewData?.rating <= 5
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
                              hover <= 1 &&
                              editReviewData &&
                              editReviewData?.rating <= 1
                                ? "#FF3722"
                                : hover <= 2 &&
                                  editReviewData &&
                                  editReviewData?.rating <= 2
                                ? "#FF8622"
                                : hover <= 3 &&
                                  editReviewData &&
                                  editReviewData?.rating <= 3
                                ? "#FFCE00"
                                : hover <= 4 &&
                                  editReviewData &&
                                  editReviewData?.rating <= 4
                                ? "#73CF11"
                                : hover <= 5 &&
                                  editReviewData &&
                                  editReviewData?.rating <= 5
                                ? "#00B67A"
                                : "#00B67A",
                          }}
                        />
                      </Box>
                    }
                  />
                )}
              </Box>
            </Stack>{" "}
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "1.2rem",
                fontWeight: 600,
              }}
            >
              Write a review for{" "}
              <span style={{ color: "#dbf62e" }}>
                {editReviewData && editReviewData?.name}
              </span>{" "}
            </span>
            {/* <DialogContentText sx={{ color: "#FFFFF5" }}>
            Write a review
          </DialogContentText> */}
            <TextareaAutosize
              className="review"
              aria-label="minimum height"
              minRows={13}
              value={editReviewData && editReviewData?.review}
              placeholder={`Write your review for ${
                editReviewData && editReviewData?.name
              }
              `}
              style={{
                // fontFamily: "inherit",
                //lineHeight: "inherit",
                //maxWidth: 600,
                minWidth: 400,
                padding: "1%",
                width: "93%",
                borderRadius: 6,
                backgroundColor: "rgb(1 13 47)",
                marginTop: 20,
                resize: "none",
                border:
                  reviewCount >= 600
                    ? "2px solid red"
                    : "2px solid transparent",

                color: "#FFFFFF",
              }}
              onChange={(e: any) => {
                e?.target?.value?.length <= 600 &&
                  setReviewCount(e?.target?.value?.length);

                e?.target?.value?.length <= 600 &&
                  setEditReview({
                    ...editReviewData,
                    review: e?.target?.value,
                  });
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
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Stack spacing={2} sx={{ alignItems: "flex-end" }} pb={5} mr={5}>
              {loading ? (
                <LoadingButton
                  color="secondary"
                  loading={loading}
                  loadingPosition="center"
                  // startIcon={<SaveIcon />}
                  variant="contained"
                  sx={{
                    width: "173px",
                    height: "41px",
                    backgroundColor: "rgb(61, 56, 122)",
                    borderRadius: "8px",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    fontWeight: "300",
                  }}
                >
                  Saving...Wait
                </LoadingButton>
              ) : (
                <LargeBtn
                  Title="Update Review"
                  lgBtnHandler={reviewSubmitHandler}
                />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReviewEdit;
