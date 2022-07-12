import { Avatar } from "@mui/material";

const PresaleCardChip = ({ src, title }: any) => {
  return (
    <Avatar
      variant="square"
      alt="Natacha"
      src={src}
      sx={{ width: 16, height: 16 }}
    />
  );
};

export default PresaleCardChip;
