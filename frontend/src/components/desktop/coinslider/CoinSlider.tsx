import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Marquee from "react-fast-marquee";
import { Stack, Grid, Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { textTransform } from "text-transform";
import trendingCoinIcon from "../../../assets/common/trending_icon.png";
import { biggestGainersRequest } from "../../../store/action";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { defaultColor } from "../../../common/common";

import "./style.css";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const CoinSlider = () => {
  const dispatch: any = useDispatch();

  const biggestGainers = useSelector((data: any) => {
    return data?.homeReducer?.biggest_gainers?.data;
  });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(biggestGainersRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Grid
      container
      sx={{
        // background: "linear-gradient(to left, #0a0538 0%, #040920 100%)",
        background: "#000000",
        margin: 0,
        padding: 0,
      }}
      my={0}
    >
      <Grid item xs={12} sm={12} md={12} lg={1.4} xl={1.4}>
        <Box
          sx={{
            background: "linear-gradient(to left, #0a0538 0%, #040920 100%)",
            borderRadius: "0px 25px 25px 0px",
            boxShadow: "8px 1px 9px #00000038",
          }}
          py={2}
          px={2}
        >
          <Stack direction={"row"} spacing={2} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={trendingCoinIcon}
              sx={{ width: 24, height: 24 }}
            />

            <Typography
              sx={{ fontSize: ".9rem", color: "#FFFFFF", fontWeight: 600 }}
            >
              TRENDING
            </Typography>
            {/* <BounceLoader size={12} color="#00FF00" /> */}
            <div>
              <span className="ripplecoinslider"></span>
            </div>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={10.6} xl={10.6} py={1}>
        <Box>
          <Marquee
            style={{ background: "none" }}
            pauseOnHover={true}
            gradient={false}
            loop={0}
            delay={0}
            speed={70}
          >
            {biggestGainers &&
              biggestGainers?.map((item: any, index: number) => (
                <Stack
                  direction={"row"}
                  spacing={1}
                  p={1}
                  alignItems="center"
                  key={index}
                >
                  {item && item?.logo === null ? (
                    <Avatar
                      sx={{
                        bgcolor: defaultColor[index],
                        width: 24,
                        height: 24,
                      }}
                    >
                      <Typography sx={{ fontSize: ".7rem" }}>
                        {item && item?.name[0]}
                      </Typography>
                    </Avatar>
                  ) : (
                    <Avatar
                      alt={item && item?.name}
                      src={`${serverAPIUrl}public/uploads/coin_logo/${item?.logo}`}
                      sx={{ width: 24, height: 24 }}
                      //src="https://mui.com/static/images/avatar/1.jpg"
                    />
                  )}

                  <Link
                    to={{
                      pathname: `/coin/${item?.slug}`,
                    }}
                    target="_blank"
                    state={{ coin_id: item?.id }}
                    style={{ textDecoration: "none", color: "#FFFFFF" }}
                  >
                    <Typography
                      sx={{
                        fontSize: ".8rem",
                        color: "#FFFFFF",
                        fontWeight: 500,
                        textTransform: "capitalize",
                      }}
                    >
                      {item?.name}
                    </Typography>
                  </Link>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center", justifyContent: "flex-end" }}
                    spacing={0}
                  >
                    {item &&
                    item?.percent_change !== null &&
                    Math.sign(parseFloat(item?.percent_change)) === -1 ? (
                      <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                    ) : (
                      item?.percent_change !== null && (
                        <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                      )
                    )}
                    <Typography
                      variant="caption"
                      sx={{
                        color:
                          Math.sign(parseFloat(item?.percent_change)) === -1
                            ? "#ff0000"
                            : "#00ff00",
                        fontWeight: "600",
                      }}
                    >
                      {item &&
                      item?.percent_change !== null &&
                      item?.percent_change !== "" ? (
                        parseFloat(item?.percent_change)
                          .toFixed(2)
                          .replace("-", "") + "%"
                      ) : (
                        <span style={{ color: "#7a7a7a" }}>--</span>
                      )}
                    </Typography>
                  </Stack>
                  {/* <Typography
                  sx={{ fontSize: ".9rem", color: "#FFFFFF", fontWeight: 600 }}
                >
                  #3
                </Typography> */}
                </Stack>
              ))}
          </Marquee>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CoinSlider;
