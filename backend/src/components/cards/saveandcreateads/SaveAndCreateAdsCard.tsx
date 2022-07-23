import { Typography, Stack, Divider, Button } from "@mui/material";

const SaveAndCreateAdsCard = () => {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <Typography
        sx={{
          textAlign: "left",
          color: "#BFBFBF",
          fontWeight: 700,
          fontSize: "1.1rem",
        }}
      >
        1.
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
          3
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
          22 July 2022
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
          3 BNB
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
  );
};

export default SaveAndCreateAdsCard;
