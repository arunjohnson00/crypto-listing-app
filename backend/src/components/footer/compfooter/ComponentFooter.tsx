import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

const ComponentFooter = ({ counter }: any) => {
  return (
    <Box
      sx={{
        borderTop: "rgb(232, 232, 232) solid 2px",
        display: "flex",
        justifyContent: counter !== false ? "space-between" : "flex-end",
        width: "100%",
      }}
    >
      {counter !== false && (
        <Typography
          variant="subtitle1"
          sx={{
            paddingTop: "9px",
            paddingRight: "4px",
            textAlign: "right",
            fontWeight: "bold",
          }}
        >
          Total Coins :{" "}
          <span style={{ color: "black", fontWeight: "bold" }}>6867</span>
        </Typography>
      )}
      <Link
        href="#"
        underline="none"
        sx={{ color: "#3C3667", fontWeight: 400 }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            paddingTop: "9px",
            paddingRight: "4px",
            textAlign: "right",
            justifyContent: " space-between",
          }}
        >
          View full list ≫
        </Typography>
      </Link>
    </Box>
  );
};

export default ComponentFooter;
