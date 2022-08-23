import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const SingleNFTMarketPlaceHeader = () => {
  return (
    <Box py={2}>
      <Stack direction="row" spacing={3} alignItems="flex-start">
        <Stack direction="column" spacing={2} alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 136, height: 136, borderRadius: 7 }}
          />
          <Button
            variant="contained"
            endIcon={<OpenInNewIcon />}
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#161052db",
              px: 2,
              py: 1.3,
            }}
          >
            Website
          </Button>
        </Stack>

        <Stack direction="column" spacing={2} alignItems="flex-start">
          <Typography variant="h4" sx={{ color: "#FFFFFF", fontWeight: 700 }}>
            Rarible
          </Typography>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 27, height: 27 }}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 27, height: 27 }}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 27, height: 27 }}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 27, height: 27 }}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 27, height: 27 }}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 27, height: 27 }}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 27, height: 27 }}
                />
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 27, height: 27 }}
                />
              </Stack>
              <Typography sx={{ color: "#FFFFFF", fontSize: ".85rem" }}>
                Grab Colors From Any Website With The Color Picker Extension.
                With Color Picker you can find color reading on any point of the
                browser. Simply copy the code and paste it for your use. It
                offers the HEX and RGB codes on any element.
              </Typography>
            </Stack>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 370, height: 176, borderRadius: 0 }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SingleNFTMarketPlaceHeader;
