import { Grid, Stack, Typography, Box, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import { defaultColor } from "../../../../common/common";
import moment from "moment";

const HighlightCards = ({ title, cardData, icon, variant }: any) => {
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  const responsiveHighlights = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomDot = ({ onMove, index, onClick, active }: any) => {
    return (
      <li
        className={active ? "active" : "inactive"}
        style={{
          paddingTop: 1.5,
          paddingBottom: 26,
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => onClick()}
      >
        {active ? (
          <Box
            sx={{
              width: 50,
              height: 4,
              backgroundColor: "#19ffb0",
              borderRadius: 2,
              cursor: "pointer",
              mx: 0.5,
            }}
          ></Box>
        ) : (
          <Box
            sx={{
              width: 25,
              height: 4,
              backgroundColor: "#FFFFFF",
              borderRadius: 2,
              cursor: "pointer",
              mx: 0.5,
            }}
          ></Box>
        )}
      </li>
    );
  };
  return (
    <Box
      sx={{
        backgroundColor: "#010822",
        height: 220,
        //border: "1px solid #091851",
        borderRadius: 3,
      }}
      px={2}
      pb={3}
      pt={2}
      mr={2}
    >
      <Stack
        direction="row"
        spacing={4}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
        py={0}
        pb={2}
      >
        <Stack
          direction="row"
          spacing={0.7}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Avatar
            alt={title && title}
            src={icon && icon}
            sx={{ width: 25, height: 25, pr: 1 }}
          />
          <Typography sx={{ color: "#FFFFFF", fontSize: "1.2rem" }}>
            {title && title}
          </Typography>
        </Stack>

        <Link
          to={{
            pathname: `/coins/${
              title && title?.split(" ").join("-").toLowerCase()
            }`,
          }}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <Typography
            variant="caption"
            sx={{ color: "#8B9CE1", fontWeight: 500 }}
          >
            {` More>`}
          </Typography>
        </Link>
      </Stack>
      <Carousel
        responsive={responsiveHighlights}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={false}
        showDots={true}
        renderDotsOutside={true}
        customDot={<CustomDot />}
      >
        <Box>
          {cardData &&
            cardData?.slice(0, 5).map((data: any, index: number) => (
              <Stack
                key={index + 1}
                direction="row"
                spacing={4}
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                height={33}
              >
                <Grid item xs={9}>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    spacing={2}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#717878",
                          fontWeight: "600",
                          minWidth: 13,
                        }}
                      >
                        {index + 1}
                      </Typography>
                      {data && data?.logo === null ? (
                        <Avatar
                          sx={{
                            bgcolor: defaultColor[index + 1],
                            width: 18,
                            height: 18,
                          }}
                        >
                          <Typography sx={{ fontSize: ".6rem" }}>
                            {data && data?.name[0]}
                          </Typography>
                        </Avatar>
                      ) : (
                        <Avatar
                          alt={data && data?.name}
                          src={`${serverAPIUrl}public/uploads/coin_logo/${data?.logo}`}
                          //src="https://mui.com/static/images/avatar/1.jpg"
                          sx={{ width: 18, height: 18 }}
                        />
                      )}
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1.5}
                    >
                      <Typography
                        variant="caption"
                        sx={{ color: "white", fontWeight: 500 }}
                      >
                        <Link
                          to={{
                            pathname: `/coin/${data?.slug}`,
                          }}
                          target="_blank"
                          state={{ coin_id: data?.id }}
                          style={{ textDecoration: "none", color: "#FFFFFF" }}
                        >
                          {data && data?.name}
                        </Link>
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#beb4ff", fontWeight: 500 }}
                      >
                        {data && data?.symbol}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={3}>
                  {variant === "recently_added" ? (
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", justifyContent: "flex-end" }}
                      spacing={0}
                    >
                      {" "}
                      <Typography
                        sx={{
                          color: "#4982e7",
                          fontWeight: "400",
                          fontSize: ".75rem",
                        }}
                      >
                        {data && moment(new Date(data?.listed)).fromNow()}
                      </Typography>
                    </Stack>
                  ) : (
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", justifyContent: "flex-end" }}
                      spacing={0}
                    >
                      {data &&
                      data?.percent_change !== null &&
                      Math.sign(parseInt(data?.percent_change)) === -1 ? (
                        <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                      ) : (
                        data?.percent_change !== null && (
                          <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                        )
                      )}

                      <Typography
                        variant="caption"
                        sx={{
                          color:
                            Math.sign(parseInt(data?.percent_change)) === -1
                              ? "#ff0000"
                              : "#00ff00",
                          fontWeight: "600",
                        }}
                      >
                        {data &&
                        data?.percent_change !== null &&
                        data?.percent_change !== "" ? (
                          parseInt(data?.percent_change)
                            .toFixed(2)
                            .replace("-", "") + "%"
                        ) : (
                          <span style={{ color: "#7a7a7a" }}>--</span>
                        )}
                      </Typography>
                    </Stack>
                  )}
                </Grid>
              </Stack>
            ))}
        </Box>
        <Box>
          {cardData &&
            cardData?.slice(5, 10).map((data: any, index: number) => (
              <Stack
                key={index + 6}
                direction="row"
                spacing={4}
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                height={33}
              >
                <Grid item xs={9}>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    spacing={2}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#717878",
                          fontWeight: "600",
                          minWidth: 13,
                        }}
                      >
                        {index + 6}
                      </Typography>
                      {data && data?.logo === null ? (
                        <Avatar
                          sx={{
                            bgcolor: defaultColor[index + 6],
                            width: 18,
                            height: 18,
                          }}
                        >
                          <Typography sx={{ fontSize: ".6rem" }}>
                            {data && data?.name[0]}
                          </Typography>
                        </Avatar>
                      ) : (
                        <Avatar
                          alt={data && data?.name}
                          src={`${serverAPIUrl}public/uploads/coin_logo/${data?.logo}`}
                          //src="https://mui.com/static/images/avatar/1.jpg"
                          sx={{ width: 18, height: 18 }}
                        />
                      )}
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1.5}
                    >
                      <Typography
                        variant="caption"
                        sx={{ color: "white", fontWeight: 500 }}
                      >
                        <Link
                          to={{
                            pathname: `/coin/${data?.slug}`,
                          }}
                          target="_blank"
                          state={{ coin_id: data?.id }}
                          style={{ textDecoration: "none", color: "#FFFFFF" }}
                        >
                          {data && data?.name}
                        </Link>
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#8B9CE1", fontWeight: 500 }}
                      >
                        {data && data?.symbol}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={3}>
                  {variant === "recently_added" ? (
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", justifyContent: "flex-end" }}
                      spacing={0}
                    >
                      {" "}
                      <Typography
                        sx={{
                          color: "#4982e7",
                          fontWeight: "400",
                          fontSize: ".75rem",
                        }}
                      >
                        {data && moment(new Date(data?.listed)).fromNow()}
                      </Typography>
                    </Stack>
                  ) : (
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", justifyContent: "flex-end" }}
                      spacing={0}
                    >
                      {data &&
                      data?.percent_change !== null &&
                      Math.sign(parseInt(data?.percent_change)) === -1 ? (
                        <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                      ) : (
                        data?.percent_change !== null && (
                          <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                        )
                      )}

                      <Typography
                        variant="caption"
                        sx={{
                          color:
                            Math.sign(parseInt(data?.percent_change)) === -1
                              ? "#ff0000"
                              : "#00ff00",
                          fontWeight: "600",
                        }}
                      >
                        {data &&
                        data?.percent_change !== null &&
                        data?.percent_change !== "" ? (
                          parseInt(data?.percent_change)
                            .toFixed(2)
                            .replace("-", "") + "%"
                        ) : (
                          <span style={{ color: "#7a7a7a" }}>--</span>
                        )}
                      </Typography>
                    </Stack>
                  )}
                </Grid>
              </Stack>
            ))}
        </Box>
        <Box>
          {cardData &&
            cardData?.slice(10, 15).map((data: any, index: number) => (
              <Stack
                key={index + 11}
                direction="row"
                spacing={4}
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                height={33}
              >
                <Grid item xs={9}>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    spacing={2}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#717878",
                          fontWeight: "600",
                          minWidth: 13,
                        }}
                      >
                        {index + 11}
                      </Typography>
                      {data && data?.logo === null ? (
                        <Avatar
                          sx={{
                            bgcolor: defaultColor[index + 11],
                            width: 18,
                            height: 18,
                          }}
                        >
                          <Typography sx={{ fontSize: ".6rem" }}>
                            {data && data?.name[0]}
                          </Typography>
                        </Avatar>
                      ) : (
                        <Avatar
                          alt={data && data?.name}
                          src={`${serverAPIUrl}public/uploads/coin_logo/${data?.logo}`}
                          //src="https://mui.com/static/images/avatar/1.jpg"
                          sx={{ width: 18, height: 18 }}
                        />
                      )}
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1.5}
                    >
                      <Typography
                        variant="caption"
                        sx={{ color: "white", fontWeight: 500 }}
                      >
                        <Link
                          to={{
                            pathname: `/coin/${data?.slug}`,
                          }}
                          target="_blank"
                          state={{ coin_id: data?.id }}
                          style={{ textDecoration: "none", color: "#FFFFFF" }}
                        >
                          {data && data?.name}
                        </Link>
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#8B9CE1", fontWeight: 500 }}
                      >
                        {data && data?.symbol}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={3}>
                  {variant === "recently_added" ? (
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", justifyContent: "flex-end" }}
                      spacing={0}
                    >
                      {" "}
                      <Typography
                        sx={{
                          color: "#4982e7",
                          fontWeight: "400",
                          fontSize: ".75rem",
                        }}
                      >
                        {data && moment(new Date(data?.listed)).fromNow()}
                      </Typography>
                    </Stack>
                  ) : (
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", justifyContent: "flex-end" }}
                      spacing={0}
                    >
                      {data &&
                      data?.percent_change !== null &&
                      Math.sign(parseInt(data?.percent_change)) === -1 ? (
                        <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                      ) : (
                        data?.percent_change !== null && (
                          <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                        )
                      )}

                      <Typography
                        variant="caption"
                        sx={{
                          color:
                            Math.sign(parseInt(data?.percent_change)) === -1
                              ? "#ff0000"
                              : "#00ff00",
                          fontWeight: "600",
                        }}
                      >
                        {data &&
                        data?.percent_change !== null &&
                        data?.percent_change !== "" ? (
                          parseInt(data?.percent_change)
                            .toFixed(2)
                            .replace("-", "") + "%"
                        ) : (
                          <span style={{ color: "#7a7a7a" }}>--</span>
                        )}
                      </Typography>
                    </Stack>
                  )}
                </Grid>
              </Stack>
            ))}
        </Box>
      </Carousel>
    </Box>
  );
};

export default HighlightCards;
