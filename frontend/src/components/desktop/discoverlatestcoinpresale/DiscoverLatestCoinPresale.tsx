import { Grid, Box, Stack, Divider, Typography, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import Parser from "html-react-parser";
import { Link } from "react-router-dom";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  discoverLatestCoinRequest,
  discoverLatestPresaleRequest,
} from "../../../store/action";
import FearAndGreedcard from "../cards/fearandgreedcard/FearAndGreedcard";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const DiscoverLatestCoinPresale = () => {
  const dispatch: any = useDispatch();
  const latestCoin = useSelector((data: any) => {
    return data?.discoverReducer?.latest_coin?.data;
  });

  const latestPresale = useSelector((data: any) => {
    return data?.discoverReducer?.latest_presale?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(discoverLatestCoinRequest("noData", successHandler, errorHandler));
    dispatch(
      discoverLatestPresaleRequest("noData", successHandler, errorHandler)
    );
  }, [dispatch]);

  return (
    <Grid xs={12}>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={5}
        justifyContent="center"
      >
        <Box
          sx={{
            flexGrow: 1,

            padding: 4,
            borderRadius: 4,
            backgroundColor: "#020727",
          }}
          mb={7}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={5}
            justifyContent="space-around"
          >
            <Box
              sx={{
                flexGrow: 1,
                width: "100%",
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "column" }}
                spacing={2}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  alignItems="center"
                  spacing={1}
                >
                  <PaidOutlinedIcon sx={{ color: "#2DCEAF", fontSize: 20 }} />
                  <Typography
                    variant="h6"
                    sx={{ color: "#2DCEAF", fontWeight: 500 }}
                  >
                    Recently Added Coins
                  </Typography>
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "column", md: "column" }}
                  spacing={1}
                >
                  {latestCoin &&
                    latestCoin.slice(0, 10).map((item: any, index: number) => (
                      <Stack
                        key={index}
                        direction={{ xs: "row", sm: "row", md: "row" }}
                        alignItems="center"
                        // spacing={10}
                        justifyContent="space-between"
                        pl={{ xs: 0, sm: 0, md: 3.8 }}
                        pt={0}
                      >
                        <Stack
                          direction={{ xs: "row", sm: "row", md: "row" }}
                          alignItems="center"
                          spacing={1}
                        >
                          <Avatar
                            alt={item && item?.name}
                            src={`${serverAPIUrl}public/uploads/coin_logo/${item?.logo}`}
                            sx={{ width: 18, height: 18 }}
                          />
                          <Link
                            to={`../coin/${item?.slug}`}
                            style={{ textDecoration: "none" }}
                            target="_blank"
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#FFFFF5",
                                fontWeight: 300,
                                fontSize: 12,
                                textTransform: "capitalize",
                              }}
                            >
                              {item && item?.name?.length > 25
                                ? item?.name?.slice(0, 25) + "..."
                                : item?.name}{" "}
                              Listed
                            </Typography>
                          </Link>
                          <Link
                            to={`../coin/${item?.slug}`}
                            style={{ textDecoration: "none" }}
                            target="_blank"
                          >
                            <OpenInNewIcon
                              sx={{ color: "#21C879", fontSize: 14 }}
                            />
                          </Link>
                        </Stack>

                        <Typography
                          variant="caption"
                          sx={{
                            color: "#21C879",
                            fontWeight: 600,
                            fontSize: 10,
                          }}
                        >
                          {item && moment(new Date(item?.listed)).fromNow()}
                        </Typography>
                      </Stack>
                    ))}
                </Stack>
              </Stack>
            </Box>
            {/* <Divider
            variant="middle"
            orientation="vertical"
            flexItem
            sx={{ borderRightColor: "#1A1D23", borderRightWidth: 2 }}
          />
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={2}
              justifyContent="space-around"
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                alignItems="center"
                spacing={1}
              >
                <PaidOutlinedIcon sx={{ color: "#2DCEAF", fontSize: 20 }} />
                <Typography
                  variant="h6"
                  sx={{ color: "#2DCEAF", fontWeight: 500 }}
                >
                  Upcoming Presale
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "column", md: "column" }}
                spacing={0.5}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  alignItems="center"
                  //spacing={5}
                  justifyContent="space-between"
                  pl={{ xs: 0, sm: 0, md: 3.8 }}
                  pt={0}
                >
                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#FFFFF5", fontWeight: 300, fontSize: 12 }}
                    >
                      Safemoon Listed
                    </Typography>
                    <OpenInNewIcon sx={{ color: "#5B6171", fontSize: 14 }} />
                  </Stack>

                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "#223077", fontWeight: 600, fontSize: 10 }}
                    >
                      Starts in
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 10 }}
                    >
                      3 Days 11 Hours 33 Min 15 Sec
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  alignItems="center"
                  //spacing={5}
                  justifyContent="space-between"
                  pl={{ xs: 0, sm: 0, md: 3.8 }}
                  pt={0}
                >
                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#FFFFF5", fontWeight: 300, fontSize: 12 }}
                    >
                      Safemoon Listed
                    </Typography>
                    <OpenInNewIcon sx={{ color: "#5B6171", fontSize: 14 }} />
                  </Stack>

                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "#223077", fontWeight: 600, fontSize: 10 }}
                    >
                      Starts in
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 10 }}
                    >
                      3 Days 11 Hours 33 Min 15 Sec
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  alignItems="center"
                  //spacing={5}
                  justifyContent="space-between"
                  pl={{ xs: 0, sm: 0, md: 3.8 }}
                  pt={0}
                >
                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#FFFFF5", fontWeight: 300, fontSize: 12 }}
                    >
                      Safemoon Listed
                    </Typography>
                    <OpenInNewIcon sx={{ color: "#5B6171", fontSize: 14 }} />
                  </Stack>

                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "#223077", fontWeight: 600, fontSize: 10 }}
                    >
                      Starts in
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 10 }}
                    >
                      3 Days 11 Hours 33 Min 15 Sec
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  alignItems="center"
                  //spacing={5}
                  justifyContent="space-between"
                  pl={{ xs: 0, sm: 0, md: 3.8 }}
                  pt={0}
                >
                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#FFFFF5", fontWeight: 300, fontSize: 12 }}
                    >
                      Safemoon Listed
                    </Typography>
                    <OpenInNewIcon sx={{ color: "#5B6171", fontSize: 14 }} />
                  </Stack>

                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "#223077", fontWeight: 600, fontSize: 10 }}
                    >
                      Starts in
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 10 }}
                    >
                      3 Days 11 Hours 33 Min 15 Sec
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  alignItems="center"
                  //spacing={5}
                  justifyContent="space-between"
                  pl={{ xs: 0, sm: 0, md: 3.8 }}
                  pt={0}
                >
                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#FFFFF5", fontWeight: 300, fontSize: 12 }}
                    >
                      Safemoon Listed
                    </Typography>
                    <OpenInNewIcon sx={{ color: "#5B6171", fontSize: 14 }} />
                  </Stack>

                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "#223077", fontWeight: 600, fontSize: 10 }}
                    >
                      Starts in
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 10 }}
                    >
                      3 Days 11 Hours 33 Min 15 Sec
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Box> */}
          </Stack>
        </Box>
        <FearAndGreedcard width={250} size="small" height={220} />
      </Stack>
    </Grid>
  );
};

export default DiscoverLatestCoinPresale;
