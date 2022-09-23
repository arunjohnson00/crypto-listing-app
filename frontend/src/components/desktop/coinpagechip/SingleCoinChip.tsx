import { Chip, Avatar, Link, Box } from "@mui/material";
import { parse } from "tldts";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const SingleCoinChip = ({ src, title, link, variant, shape }: any) => {
  return (
    <Link
      href={link && link}
      sx={{ textDecoration: "none", cursor: "pointer" }}
      target="_blank"
    >
      {" "}
      {shape === "square" ? (
        <Avatar
          alt={title && title}
          src={`${serverAPIUrl}public/uploads/network_icons/${src}`}
          sx={{
            width: 25,
            height: 25,
            borderRadius: 0,
            marginRight: 0.5,
            marginBottom: 0.7,
            flexWrap: "wrap",
          }}
        />
      ) : (
        <Chip
          avatar={
            variant === "explorer" ? (
              <Avatar
                alt={title && title}
                src={`${serverAPIUrl}public/uploads/network_icons/${src}`}
                sx={{ borderRadius: 0 }}
              />
            ) : variant === "communities" ? (
              <Avatar
                alt={title && title}
                src={`${serverAPIUrl}public/uploads/coins_social/${src}`}
                sx={{ borderRadius: 0 }}
              />
            ) : variant === "audit" ? (
              <Avatar
                alt={title && title}
                src={`${serverAPIUrl}public/uploads/coins_audit/${src}`}
                sx={{ borderRadius: 0 }}
              />
            ) : variant === "chart" ? (
              <Avatar
                alt={title && title}
                src={`${serverAPIUrl}public/uploads/coins_chart_provider/${src}`}
                sx={{ borderRadius: 0 }}
              />
            ) : variant === "website" ? (
              <Avatar alt={title && title} src={src} sx={{ borderRadius: 0 }} />
            ) : (
              <Avatar alt={title && title} src={src} sx={{ borderRadius: 0 }} />
            )
          }
          label={
            <Box
              sx={{
                "&::first-letter": {
                  textTransform: "capitalize",
                },
              }}
            >
              {
                variant === "website"
                  ? title && title !== null && parse(title).domain
                  : title && title !== null && title?.length > 12
                  ? title.slice(0, 12) + "..."
                  : title && title !== null && title
                // title && title !== null && title?.length > 21
                //   ? title
                //       ?.replace(/^https?:\/\//, "")
                //       .slice(0, 12)
                //       .replace(/\/$/, "") + "..."
                //   : title &&
                //     title !== null &&
                //     title?.replace(/^https?:\/\//, "").replace(/\/$/, "")
              }
            </Box>
          }
          color="success"
          sx={{
            height: variant === "explorer" ? 30 : "28px",
            width: variant === "explorer" ? 30 : "auto",
            borderRadius: "4px",
            backgroundColor: variant === "explorer" ? "transparent" : "#111138",
            padding: 0.5,
            marginBottom: ".5em",
            cursor: "pointer",
            marginRight: 1,
            fontSize: "0.6125rem",

            "&.MuiChip-root .MuiChip-avatar": {
              width: variant === "explorer" ? 30 : 17,
              height: variant === "explorer" ? 30 : 17,
              borderRadius: 0,
            },
          }}
        />
      )}
    </Link>
  );
};

export default SingleCoinChip;
