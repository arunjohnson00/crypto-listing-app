import { Chip, Avatar } from "@mui/material";

const SingleCoinChip = ({ src, title }: any) => {
  return (
    <Chip
      avatar={<Avatar alt="Natacha" src={src} />}
      label={title}
      color="success"
      sx={{
        height: "28px",
        borderRadius: "4px",
        backgroundColor: "#111138",
        padding: 0.5,
        // marginBottom: 1,
        marginRight: 1,
        fontSize: "0.6125rem",
        "&.MuiChip-root .MuiChip-avatar": {
          width: 14,
          height: 14,
          borderRadius: 0,
        },
      }}
    />
  );
};

export default SingleCoinChip;
