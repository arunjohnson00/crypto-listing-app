import { Chip, Avatar, Link } from "@mui/material";
import { parse } from "tldts";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const SingleCoinChip = ({ src, title, link, varient }: any) => {
  return (
    <Link
      href={link && link}
      sx={{ textDecoration: "none", cursor: "pointer" }}
      target="_blank"
    >
      {" "}
      {title !== null && link !== null && (
        <Chip
          avatar={
            varient === "explorer" ? (
              <Avatar
                alt={title && title}
                src={`${serverAPIUrl}public/uploads/network_icons/${src}`}
              />
            ) : (
              <Avatar alt={title && title} src={src} />
            )
          }
          label={
            varient === "website"
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
          color="success"
          sx={{
            height: "28px",
            borderRadius: "4px",
            backgroundColor: "#111138",
            padding: 0.5,
            marginBottom: ".5em",
            cursor: "pointer",
            marginRight: 1,
            fontSize: "0.6125rem",
            "&.MuiChip-root .MuiChip-avatar": {
              width: 14,
              height: 14,
              borderRadius: 0,
            },
          }}
        />
      )}
    </Link>
  );
};

export default SingleCoinChip;
