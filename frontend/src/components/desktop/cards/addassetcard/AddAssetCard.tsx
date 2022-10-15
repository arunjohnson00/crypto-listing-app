import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AddAssetCard = ({ icon, title, link, state }: any) => {
  return (
    <Link
      to={link && link}
      style={{ textDecoration: "none", color: "inherit" }}
      state={{ currentState: state && state }}
    >
      <Box
        sx={{
          //border: "1px solid #5803AA",
          backgroundColor: "#01061A",
          borderRadius: 4,
          //maxWidth: 90,
          // minWidth: 80,
          padding: 3,
          border: "2px solid transparent",
          cursor: "ponter",
          "&:hover": {
            background: "#000209",
            border: "2px solid #5803AA",
            cursor: "ponter",
          },
        }}
        m={1.1}
      >
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          minWidth={{ xs: 90, sm: 90, md: 90 }}
          minHeight={{ xs: 90, sm: 90, md: 90 }}
        >
          <Avatar
            alt={title && title}
            src={icon && icon}
            sx={{ width: 30, height: 30, borderRadius: 0 }}
          />{" "}
          <Typography sx={{ color: "#FFFFFF", fontSize: ".9rem" }}>
            {title && title}
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
};

export default AddAssetCard;
