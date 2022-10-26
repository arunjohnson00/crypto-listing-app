import {
  Grid,
  Stack,
  Box,
  CardMedia,
  Typography,
  Avatar,
  Button,
  Link,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import moment from "moment";
import parse from "html-react-parser";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileCryptoEventsCardSlider = ({ data, variant }: any) => {
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
      <Stack direction="column" my={0.5}>
        <Link
          href={`/crypto-events/${data && data?.slug}`}
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              flexGrow: 1,
              background: "#282760",
              height: "auto",
              backgroundColor: variant === "ads" ? "#021250" : "#01061A",
              border: "1px solid #020C37",
              borderRadius: 4,
              // minHeight: 150,
              // maxHeight: 150,
            }}
            px={2}
            py={1.5}
            mx={1}
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              height={"auto"}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{ alignItems: "flex-start" }}
              >
                <Avatar
                  sx={{ width: 50, height: 50, mt: 1 }}
                  variant="square"
                  src={`${serverAPIUrl}public/uploads/event_proof/${data?.coin_logo}`}
                  alt={data && data?.title}
                />
                <Stack
                  direction="column"
                  spacing={0.8}
                  width="100%"
                  height="100%"
                >
                  <Stack direction="column" spacing={0.3} width="100%">
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                      }}
                    >
                      {data && data?.title}.
                    </Typography>
                    {data && data?.is_online === 2 && (
                      <Stack direction="row" alignItems="center" spacing={0.3}>
                        <LocationOnIcon
                          sx={{ color: "#FBFE00", fontSize: ".9rem" }}
                        />
                        <Stack direction="column" alignItems="flex-start">
                          {" "}
                          {/* <Typography
                    variant="body2"
                    sx={{
                      color: "#535662",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                    }}
                  >
                    Venue
                  </Typography> */}
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "0.65rem",
                              fontWeight: 500,
                            }}
                          >
                            {data && data?.venue !== null ? data?.venue : "NA"}
                          </Typography>
                        </Stack>
                      </Stack>
                    )}
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: ".75rem",
                        fontWeight: 400,
                      }}
                    >
                      {data &&
                      parse(data?.description)?.toString()?.length >= 70
                        ? parse(data && data?.description)
                            .toString()
                            .slice(0, 70) + "..."
                        : parse(data && data?.description)}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A8CDE9",
                        fontSize: ".9rem",
                        fontWeight: 500,
                      }}
                    >
                      {data &&
                        moment(new Date(data?.event_date)).format(
                          "DD MMM  YYYY"
                        )}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                spacing={0.8}
                width="100%"
                sx={{
                  alignItems: "flex-end",
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
                    textTransform: "inherit",
                    fontSize: ".6rem",
                    color: "#FFFFFF",
                    backgroundColor: "#2415A2",
                  }}
                >
                  {data && moment(new Date(data?.event_date)).fromNow()}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Link>
      </Stack>
    </Grid>
  );
};

export default MobileCryptoEventsCardSlider;
