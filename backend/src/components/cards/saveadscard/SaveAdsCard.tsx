import { Typography, Stack, Divider } from "@mui/material";

const SaveAdsCard = () => {
  return (
    <Stack direction="column" spacing={6}>
      <Stack direction="column" spacing={1.5}>
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            color: "#2638B9",
            fontWeight: 600,
          }}
        >
          Review Ad
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            color: "#676767",
            fontWeight: 400,
          }}
        >
          Please review ad before submitting
        </Typography>
      </Stack>
      <Stack direction="column" spacing={0}>
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            color: "#676767",
            fontWeight: 400,
          }}
        >
          You are selecting
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: "left",
            color: "#070A4E",
            fontWeight: 700,
          }}
        >
          Coin Promoted Spot
        </Typography>
      </Stack>
      <Stack direction="column" spacing={0}>
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            color: "#676767",
            fontWeight: 400,
          }}
        >
          Total Days
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: "left",
            color: "#070A4E",
            fontWeight: 500,
          }}
        >
          3 Days
        </Typography>
      </Stack>
      <Stack direction="row" spacing={4}>
        <Stack direction="column" spacing={0}>
          <Typography
            variant="body2"
            sx={{
              textAlign: "left",
              color: "#676767",
              fontWeight: 400,
            }}
          >
            Start Date
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: "left",
              color: "#070A4E",
              fontWeight: 500,
            }}
          >
            27 July 2022
          </Typography>
        </Stack>
        <Divider
          flexItem
          orientation="vertical"
          variant="middle"
          sx={{ borderColor: "#bebebe" }}
        />
        <Stack direction="column" spacing={0}>
          <Typography
            variant="body2"
            sx={{
              textAlign: "left",
              color: "#676767",
              fontWeight: 400,
            }}
          >
            End Date
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: "left",
              color: "#070A4E",
              fontWeight: 500,
            }}
          >
            27 Aug 2022
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="column" spacing={0}>
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            color: "#676767",
            fontWeight: 400,
          }}
        >
          Total Amount
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "left",
            background: "linear-gradient(78deg,#4F61FF 5%, #07BAFF 14%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          12 BNB
        </Typography>
      </Stack>
      <Stack direction="column" spacing={0}>
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            color: "#676767",
            fontWeight: 400,
          }}
        >
          What next?
        </Typography>
        <Stack direction="row" spacing={2}>
          <Typography
            sx={{
              textAlign: "left",
              color: "#1D1D36",
              fontWeight: 500,
              fontSize: ".65rem",
            }}
          >
            Please transfer 12 BNB to
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              color: "#181C99",
              fontWeight: 600,
              fontSize: ".65rem",
            }}
          >
            0x473037de59cf9484632f4a27b509cfe8d4a31404{" "}
            <span style={{ color: "#000000" }}>{"(BEP20)"}</span>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SaveAdsCard;
