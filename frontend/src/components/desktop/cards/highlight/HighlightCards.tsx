import { Grid, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Avatar from "@mui/material/Avatar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";

const HighlightCards = ({ title, cardData }: any) => {
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
        style={{ paddingTop: 1.5, paddingBottom: 3.5 }}
        onClick={() => onClick()}
      >
        <HorizontalRuleRoundedIcon
          sx={{
            color: "#FFFFFF",
            cursor: "pointer",
            opacity: active ? 1 : 0.5,
            fontSize: "1.8rem",
          }}
        />
      </li>
    );
  };
  return (
    <Box
      sx={{ backgroundColor: "#010822", height: "auto" }}
      px={2}
      pb={3}
      pt={2}
      m={1}
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
          <LocalFireDepartmentSharpIcon
            sx={{ color: "#FFFFFF", fontSize: 30 }}
          />
          <Typography sx={{ color: "#FFFFFF", fontSize: "1.2rem" }}>
            {title && title}
          </Typography>
        </Stack>

        <Link underline="none">
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
            cardData?.slice(0, 3).map((data: any, index: number) => (
              <Stack
                key={index}
                direction="row"
                spacing={4}
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                py={0}
              >
                <Grid item xs={10}>
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
                        sx={{ color: "#717878", fontWeight: "600" }}
                      >
                        {index + 1}
                      </Typography>
                      <Avatar
                        alt={data && data?.name}
                        src={`${serverAPIUrl}public/uploads/coin_logo/${data?.logo}`}
                        //src="https://mui.com/static/images/avatar/1.jpg"
                        sx={{ width: 18, height: 18 }}
                      />
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
                        {data && data?.name}
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
                <Grid item xs={2}>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center", justifyContent: "flex-end" }}
                    spacing={1}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color:
                          Math.sign(parseInt(data?.percent_change)) === -1
                            ? "red"
                            : "#00C080",
                        fontWeight: "600",
                      }}
                    >
                      {data && parseInt(data?.percent_change).toFixed(2)}%
                    </Typography>
                    <Typography variant="caption">
                      {Math.sign(parseInt(data?.percent_change)) === -1 ? (
                        <ArrowDropDownIcon sx={{ color: "red" }} />
                      ) : (
                        <ArrowDropUpIcon sx={{ color: "#00C080" }} />
                      )}
                    </Typography>
                  </Stack>
                </Grid>
              </Stack>
            ))}
        </Box>
        <Box>
          {cardData &&
            cardData?.slice(3, 6).map((data: any, index: number) => (
              <Stack
                key={index + 4}
                direction="row"
                spacing={4}
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                py={0}
              >
                <Grid item xs={10}>
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
                        sx={{ color: "#717878", fontWeight: "600" }}
                      >
                        {index + 4}
                      </Typography>
                      <Avatar
                        alt={data && data?.name}
                        src={`${serverAPIUrl}public/uploads/coin_logo/${data?.logo}`}
                        //src="https://mui.com/static/images/avatar/1.jpg"
                        sx={{ width: 18, height: 18 }}
                      />
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
                        {data && data?.name}
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
                <Grid item xs={2}>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center", justifyContent: "flex-end" }}
                    spacing={1}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color:
                          Math.sign(parseInt(data?.percent_change)) === -1
                            ? "red"
                            : "#00C080",
                        fontWeight: "600",
                      }}
                    >
                      {data && parseInt(data?.percent_change).toFixed(2)}%
                    </Typography>
                    <Typography variant="caption">
                      {Math.sign(parseInt(data?.percent_change)) === -1 ? (
                        <ArrowDropDownIcon sx={{ color: "red" }} />
                      ) : (
                        <ArrowDropUpIcon sx={{ color: "#00C080" }} />
                      )}
                    </Typography>
                  </Stack>
                </Grid>
              </Stack>
            ))}
        </Box>
        <Box>
          {cardData &&
            cardData?.slice(6, 9).map((data: any, index: number) => (
              <Stack
                key={index + 7}
                direction="row"
                spacing={4}
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                py={0}
              >
                <Grid item xs={10}>
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
                        sx={{ color: "#717878", fontWeight: "600" }}
                      >
                        {index + 7}
                      </Typography>
                      <Avatar
                        alt={data && data?.name}
                        src={`${serverAPIUrl}public/uploads/coin_logo/${data?.logo}`}
                        //src="https://mui.com/static/images/avatar/1.jpg"
                        sx={{ width: 18, height: 18 }}
                      />
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
                        {data && data?.name}
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
                <Grid item xs={2}>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center", justifyContent: "flex-end" }}
                    spacing={1}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color:
                          Math.sign(parseInt(data?.percent_change)) === -1
                            ? "red"
                            : "#00C080",
                        fontWeight: "600",
                      }}
                    >
                      {data && parseInt(data?.percent_change).toFixed(2)}%
                    </Typography>
                    <Typography variant="caption">
                      {Math.sign(parseInt(data?.percent_change)) === -1 ? (
                        <ArrowDropDownIcon sx={{ color: "red" }} />
                      ) : (
                        <ArrowDropUpIcon sx={{ color: "#00C080" }} />
                      )}
                    </Typography>
                  </Stack>
                </Grid>
              </Stack>
            ))}
        </Box>
      </Carousel>
    </Box>
  );
};

export default HighlightCards;
