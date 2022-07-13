import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Stack, Typography } from "@mui/material";
const MobileTopAlertBox = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ width: "100%", backgroundColor: "#000819" }}>
      <Collapse in={open}>
        <Alert
          icon={false}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" sx={{ color: "#FFFFFF" }} />
            </IconButton>
          }
          sx={{
            mb: 2,
            backgroundColor: "#000000",

            borderRadius: 3,
            height: "auto",
            paddingTop: 1,
          }}
        >
          <Stack direction="column" spacing={0}>
            <Typography
              sx={{
                alignSelf: "flex-end",
                color: "#a3a3a3",
                fontSize: "0.8rem",
              }}
            >
              Veryfiy Your identity. Complete the identity verification process
              to secure your account and transactions
            </Typography>
            <Stack direction="column" spacing={1} justifyContent="flex-end">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1a1f30",
                  borderRadius: 3,
                  textTransform: "capitalize",
                  fontSize: ".7rem",
                  alignSelf: "end",
                }}
              >
                {" "}
                LetsGo {">"}
              </Button>
            </Stack>
          </Stack>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default MobileTopAlertBox;
