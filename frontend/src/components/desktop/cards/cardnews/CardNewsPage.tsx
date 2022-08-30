import { Box, Grid, Typography, Stack } from "@mui/material";
import Parser from "html-react-parser";

const CardNewsPage = ({
  rssFeed,
  timeAgo,
  height,
  spacing,
  paddingY,
  descriptionLength,
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
      }}
    >
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
            {rssFeed && rssFeed?.title.substring(0, 73)}...
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
          {rssFeed && Parser(rssFeed?.excerpt?.substring(0, descriptionLength))}
          ...
        </Typography>
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
              timeAgo.format(new Date(rssFeed?.date ? rssFeed?.date : null))}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CardNewsPage;
