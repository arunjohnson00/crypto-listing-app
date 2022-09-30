import { Box, Grid, Typography, Stack } from "@mui/material";
import Parser from "html-react-parser";
import moment from "moment";
const CardNewsPage = ({
  rssFeed,

  height,
  spacing,
  paddingY,
  descriptionLength,
  index,
}: any) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "linear-gradient(180deg, #0D1955 60%, #01061A)",
        borderRadius: 4,
        height: height,
        paddingX: 7,
        paddingY: paddingY,
        position: "relative",
      }}
    >
      {index && (
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#0D1956",
            border: "2px solid #2A3674",
            padding: 2,
            borderRadius: 10,
            width: 25,
            height: 25,
            left: -10,
            top: -20,
            display: "flex",
            color: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
            fontWeight: 600,
          }}
        >
          {index}
        </Box>
      )}
      <Stack direction="column" spacing={spacing} sx={{}}>
        <Typography
          variant="h5"
          sx={{
            color: "#FFFFF5",
            fontWeight: 600,
            textTransform: "capitalize",
            // fontSize: 18,
            //textAlign: "center",
          }}
          pt={1}
        >
          <a
            href={rssFeed?.link}
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            {rssFeed && Parser(rssFeed?.title)}.
          </a>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#B3B4B8",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
        >
          {rssFeed &&
            Parser(
              rssFeed?.excerpt?.substring(0, descriptionLength) + "......"
            )}
        </Typography>
        <a
          href={rssFeed && rssFeed?.link}
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#02D47C",
            textDecoration: "none",
            fontSize: ".7rem",
          }}
        >
          Read More
        </a>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#0ED5B2", fontWeight: "550" }}
          >
            {rssFeed && rssFeed?.author}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#EEEFEF", fontWeight: "550" }}
          >
            {rssFeed &&
              moment(new Date(rssFeed?.date ? rssFeed?.date : null)).fromNow()}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CardNewsPage;
