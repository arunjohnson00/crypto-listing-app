import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddEventCard = ({ title, link, image }: any) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "#030B2F", borderRadius: 1 }} px={12} py={10}>
      <Stack direction="column" spacing={2.5} alignItems="center">
        <Avatar
          variant="square"
          alt={title && title}
          src={image && image}
          sx={{ width: 60, height: 60 }}
        />
        <Typography sx={{ color: "#FFFFFF", textTransform: "capitalize" }}>
          {title && title}
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            color: "#FFFFFF",
            textTransform: "capitalize",
            backgroundColor: "#6601FF",
            borderRadius: 10,
            minWidth: 100,
          }}
          onClick={() => link && navigate(link)}
        >
          Select
        </Button>
      </Stack>
    </Box>
  );
};

export default AddEventCard;
