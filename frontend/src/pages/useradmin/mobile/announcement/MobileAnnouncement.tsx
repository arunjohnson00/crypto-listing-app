import { Divider, Stack, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useNavigate } from "react-router-dom";

const MobileAnnouncement = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="column" spacing={2} alignItems="center" py={3}>
      <Box
        sx={{
          // border: "1px solid #151717",
          backgroundColor: "#00020B",

          borderRadius: 4,
          height: "auto",
          width: "100%",
        }}
      >
        <Stack direction="row" alignItems="center" width="100%" p={2}>
          <Stack direction="row" alignItems="flex-start" sx={{ flexGrow: 0 }}>
            <IconButton aria-label="delete" onClick={() => navigate(-1)}>
              <ArrowBackIosRoundedIcon
                sx={{ color: "#b4bdf6", fontSize: "1.2rem" }}
              />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="center"
            sx={{ flexGrow: 1 }}
          >
            <Typography sx={{ fontSize: "1rem", color: "#FFFFFF", mr: "67px" }}>
              Announcement
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* <Divider
        light
        flexItem
        variant="middle"
        orientation="horizontal"
        sx={{ borderColor: "#1F556D" }}
      /> */}
      <Stack direction="column" spacing={2} alignItems="center" width="100%">
        <Box
          sx={{
            // border: "1px solid #151717",
            backgroundColor: "#00020B",

            borderRadius: 4,
            height: "auto",
            width: "100%",
          }}
        >
          <Stack direction="column" spacing={4} alignItems="center" p={3}>
            <Stack
              direction="column"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              width="100%"
              pt={1}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: ".9rem",
                }}
              >
                Limited Period Deal
              </Typography>
              <Divider
                light
                flexItem
                variant="middle"
                orientation="horizontal"
                sx={{ borderColor: "#1F556D" }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                We have some new offer for newly added coin.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#2092C5",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Contact admin for more details
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#4D4E53",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                32 min ago
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            // border: "1px solid #151717",
            backgroundColor: "#00020B",

            borderRadius: 4,
            height: "auto",
            width: "100%",
          }}
        >
          <Stack direction="column" spacing={4} alignItems="center" p={3}>
            <Stack
              direction="column"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              width="100%"
              pt={1}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: ".9rem",
                }}
              >
                Limited Period Deal
              </Typography>
              <Divider
                light
                flexItem
                variant="middle"
                orientation="horizontal"
                sx={{ borderColor: "#1F556D" }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                We have some new offer for newly added coin.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#2092C5",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Contact admin for more details
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#4D4E53",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                32 min ago
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            // border: "1px solid #151717",
            backgroundColor: "#00020B",

            borderRadius: 4,
            height: "auto",
            width: "100%",
          }}
        >
          <Stack direction="column" spacing={4} alignItems="center" p={3}>
            <Stack
              direction="column"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              width="100%"
              pt={1}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: ".9rem",
                }}
              >
                Limited Period Deal
              </Typography>
              <Divider
                light
                flexItem
                variant="middle"
                orientation="horizontal"
                sx={{ borderColor: "#1F556D" }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                We have some new offer for newly added coin.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#2092C5",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Contact admin for more details
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#4D4E53",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                32 min ago
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            // border: "1px solid #151717",
            backgroundColor: "#00020B",

            borderRadius: 4,
            height: "auto",
            width: "100%",
          }}
        >
          <Stack direction="column" spacing={4} alignItems="center" p={3}>
            <Stack
              direction="column"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              width="100%"
              pt={1}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#20DDCF",
                  fontWeight: 500,
                  fontSize: ".9rem",
                }}
              >
                Limited Period Deal
              </Typography>
              <Divider
                light
                flexItem
                variant="middle"
                orientation="horizontal"
                sx={{ borderColor: "#1F556D" }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                We have some new offer for newly added coin.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#2092C5",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Contact admin for more details
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#4D4E53",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                32 min ago
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default MobileAnnouncement;
