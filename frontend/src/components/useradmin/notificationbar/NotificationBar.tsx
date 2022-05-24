import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

const NotificationBar = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(true);
  }, [setOpen]);
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Collapse in={open}>
        <Alert
          icon={false}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              sx={{
                color: "#FFFFFF5",
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{
            mb: 2,
            backgroundColor: "#079E7D",
            height: 58,
            borederRadius: 0,
            alignItems: "center",
            justifyContent: "center",
            "&.MuiAlert-root": {
              marginBottom: 0,
              color: "#FFFFF5",
            },
            "&.MuiPaper-rounded": {
              borderRadius: 0,
            },
            "&.MuiAlert-message": {
              width: "100%",
            },
          }}
        >
          <Typography>Your ads are expiring soon.</Typography>
          <Typography>Start new ad</Typography>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default NotificationBar;
