import { Typography, Stack, Divider, Button } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import dateFormat, { masks } from "dateformat";

const SaveAndCreateAdsCard = () => {
  const adSummaryDetails = useSelector((adSummary: any) => {
    return adSummary?.adsReducer?.ads_summary;
  });
  return (
    <Fragment>
      {adSummaryDetails &&
        adSummaryDetails.map((data: any, index: number) => (
          <Stack
            key={index}
            direction="row"
            spacing={3}
            alignItems="center"
            pt={3}
          >
            <Typography
              sx={{
                textAlign: "left",
                color: "#BFBFBF",
                fontWeight: 700,
                fontSize: "1.1rem",
              }}
            >
              {index + 1}.
            </Typography>
            <Stack direction="column" spacing={0}>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "left",
                  color: "#9d9d9d",
                  fontWeight: 400,
                }}
              >
                Currenty selected
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  color: "#070A4E",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  textTransform: "capitalize",
                }}
              >
                {data?.choseAdType?.replace(/_/g, " ")}{" "}
                {/* {data && (
                  <span
                    style={{
                      color: "#a5a5a5",
                      fontWeight: 500,
                      fontSize: ".6rem",
                    }}
                  >
                    {" "}
                    {`(${data?.item_name})`}
                  </span>
                )} */}
              </Typography>
            </Stack>
            <Stack direction="column" spacing={0}>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "left",
                  color: "#9d9d9d",
                  fontWeight: 400,
                }}
              >
                Days
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  color: "#070A4E",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                {data?.no_of_days}
              </Typography>
            </Stack>
            <Stack direction="column" spacing={0}>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "left",
                  color: "#9d9d9d",
                  fontWeight: 400,
                }}
              >
                Start Date
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  color: "#070A4E",
                  fontWeight: 400,
                }}
              >
                {dateFormat(data?.start_date, "dd mmmm yyyy")}
              </Typography>
            </Stack>
            <Stack direction="column" spacing={0}>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "left",
                  color: "#9d9d9d",
                  fontWeight: 400,
                }}
              >
                Price
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  color: "#070A4E",
                  fontWeight: 500,
                }}
              >
                {data && parseInt(data?.price) * parseInt(data?.no_of_days)} BNB
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0} alignItems="center">
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  color: "#BB332E",
                  fontWeight: 500,
                  fontSize: ".8rem",
                  padding: 0,
                  minWidth: 80,
                  maxWidth: 80,
                }}
              >
                Edit
              </Button>
              <Divider
                flexItem
                orientation="vertical"
                variant="middle"
                sx={{ borderColor: "#85858C", height: 10 }}
              />
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  color: "#5A3FD2",
                  fontWeight: 500,
                  fontSize: ".8rem",
                  padding: 0,
                  minWidth: 80,
                  maxWidth: 80,
                }}
              >
                Remove
              </Button>
            </Stack>
          </Stack>
        ))}
    </Fragment>
  );
};

export default SaveAndCreateAdsCard;
