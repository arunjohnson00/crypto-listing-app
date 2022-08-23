import {
  Grid,
  Stack,
  Box,
  CardMedia,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const CryptoEventsCardSlider = ({ data, variant }: any) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  return (
    <Grid item xs={12}>
      <Stack direction="column">
        <Box
          sx={{
            flexGrow: 1,
            background: "#282760",
            height: "auto",
            backgroundColor: variant === "ads" ? "#021250" : "#01061A",
            border: "1px solid #020C37",
            borderRadius: 9,
          }}
          px={2}
          py={1.5}
          mx={1}
        >
          <Stack direction="row" spacing={0.8} sx={{ alignItems: "center" }}>
            <Avatar
              sx={{ width: 50, height: 50 }}
              variant="square"
              src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
            />
            <Stack direction="column" spacing={0.8} width="100%">
              <Stack direction="column" spacing={0} width="100%">
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                  }}
                >
                  Etherium Merge
                </Typography>
                <Typography
                  sx={{
                    color: "#A8CDE9",
                    fontSize: ".9rem",
                    fontWeight: 500,
                  }}
                >
                  15 Sept 2022
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={0.8}
                width="100%"
                sx={{
                  alignItems: "center",
                  justifyContent:
                    variant === "ads" ? "space-between" : "flex-end",
                }}
              >
                {/* {variant === "ads" && (
                  <Button
                    variant="contained"
                    startIcon={<ThumbUpOffAltIcon />}
                    size="small"
                    sx={{
                      borderRadius: 10,
                      textTransform: "capitalize",
                      fontSize: ".6rem",
                      color: "#00BEAA",
                      backgroundColor: "#01061A",
                    }}
                  >
                    238 Votes
                  </Button>
                )} */}

                <Button
                  variant="contained"
                  startIcon={<AccessTimeIcon />}
                  size="small"
                  sx={{
                    borderRadius: 10,
                    textTransform: "capitalize",
                    fontSize: ".6rem",
                    color: "#FFFFFF",
                    backgroundColor: "#2415A2",
                  }}
                >
                  126 Days to go
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Grid>
  );
};

export default CryptoEventsCardSlider;
