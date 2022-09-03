import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AddAssetCard = ({ icon, title, link }: any) => {
  return (
    <Link
      to={link && link}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Box
        sx={{
          //border: "1px solid #5803AA",
          backgroundColor: "#01061A",
          borderRadius: 4,
          maxWidth: 90,
          minWidth: 80,
          padding: 3,
          cursor: "ponter",
          "&:hover": {
            background: "#000209",
            border: "2px solid #5803AA",
            cursor: "ponter",
          },
        }}
        m={1}
      >
        <Stack direction="column" spacing={2} alignItems="center">
          <Avatar
            alt={title && title}
            src={icon && icon}
            sx={{ width: 30, height: 30, borderRadius: 0 }}
          />{" "}
          <Typography sx={{ color: "#FFFFFF", fontSize: ".65rem" }}>
            {title && title}
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
};

export default AddAssetCard;
