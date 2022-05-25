import { Box, Grid, Stack, Typography } from "@mui/material";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

const UserAdminShortcuts = ({ title }: any) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "auto",
        borderRadius: 7,
        backgroundColor: "#0F0C23",
        border: "2px solid #0C8C98",
        width: "90%",
      }}
      px={2.5}
      py={4}
    >
      <Stack
        direction="column"
        sx={{ alignItems: "center" }}
        spacing={2}
        my={1}
      >
        <Typography variant="h6" sx={{ color: "#FFFFF5", textAlign: "center" }}>
          {title}
        </Typography>

        {title === "Add Coin" && (
          <PaidOutlinedIcon sx={{ color: "#25E595", fontSize: "45px" }} />
        )}
        {title === "Add NFT" && (
          <PaidOutlinedIcon sx={{ color: "#25E595", fontSize: "45px" }} />
        )}
        {title === "Add AirDrop" && (
          <PaidOutlinedIcon sx={{ color: "#25E595", fontSize: "45px" }} />
        )}
        {title === "Create Ad" && (
          <PaidOutlinedIcon sx={{ color: "#25E595", fontSize: "45px" }} />
        )}
      </Stack>
    </Box>
  );
};

export default UserAdminShortcuts;
