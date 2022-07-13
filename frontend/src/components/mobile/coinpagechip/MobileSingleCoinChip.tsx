import { Chip, Avatar } from "@mui/material";

const MobileSingleCoinChip = ({ src, title }: any) => {
  return (
    <Chip
      avatar={<Avatar alt="Natacha" src={src} />}
      label={title}
      color="success"
      sx={{
        height: "28px",
        borderRadius: 3,
        backgroundColor: "#111138",
        padding: 0.5,
        marginBottom: ".5em",
        marginRight: 1,
        fontSize: "0.7125rem",
        "&.MuiChip-root .MuiChip-avatar": {
          width: 14,
          height: 14,
          borderRadius: 0,
        },
      }}
    />
  );
};

export default MobileSingleCoinChip;
