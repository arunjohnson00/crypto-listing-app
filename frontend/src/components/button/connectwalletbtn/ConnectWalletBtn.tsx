import { Button, Typography } from "@mui/material";

const ConnectWalletBtn = () => {
  return (
    <Button
      variant="contained"
      sx={{
        background: "#6252E8",
        width: "auto",
        height: "38px",
        fontSize: "11px",
        padding: "10px",
        borderRadius: "3px",
        textTransform: "capitalize",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ textTransform: "capitalize", color: "white" }}
      >
        Connect Wallet
      </Typography>
    </Button>
  );
};

export default ConnectWalletBtn;
