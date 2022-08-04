import { Chip, Avatar, Link } from "@mui/material";

const SingleCoinChip = ({ src, title, link }: any) => {
  return (
    <Link
      href={link && link}
      sx={{ textDecoration: "none", cursor: "pointer" }}
    >
      {" "}
      <Chip
        avatar={<Avatar alt="Natacha" src={src} />}
        label={title}
        color="success"
        sx={{
          height: "28px",
          borderRadius: "4px",
          backgroundColor: "#111138",
          padding: 0.5,
          marginBottom: ".5em",
          marginRight: 1,
          fontSize: "0.6125rem",
          "&.MuiChip-root .MuiChip-avatar": {
            width: 14,
            height: 14,
            borderRadius: 0,
          },
        }}
      />
    </Link>
  );
};

export default SingleCoinChip;
