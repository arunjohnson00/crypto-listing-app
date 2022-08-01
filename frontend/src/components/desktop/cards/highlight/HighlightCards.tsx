import { Grid, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Avatar from "@mui/material/Avatar";

const HighlightCards = ({ title, cardData }: any) => {
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  return (
    <Box sx={{ backgroundColor: "#010822" }} px={2} pb={3} pt={2} m={1}>
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

      {cardData &&
        cardData?.slice(0, 9).map((data: any, index: number) => (
          <Stack
            key={index}
            direction="row"
            spacing={4}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
            py={0}
          >
            <Grid item xs={10}>
              <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
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
                        : "green",
                    fontWeight: "600",
                  }}
                >
                  {data && parseInt(data?.percent_change).toFixed(2)}%
                </Typography>
                <Typography variant="caption">
                  {Math.sign(parseInt(data?.percent_change)) === -1 ? (
                    <ArrowDropDownIcon sx={{ color: "red" }} />
                  ) : (
                    <ArrowDropUpIcon sx={{ color: "green" }} />
                  )}
                </Typography>
              </Stack>
            </Grid>
          </Stack>
        ))}
    </Box>
  );
};

export default HighlightCards;
