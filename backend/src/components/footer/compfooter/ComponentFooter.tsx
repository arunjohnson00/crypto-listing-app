import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const ComponentFooter = ({ counter, data, path }: any) => {
  return (
    <Box
      sx={{
        borderTop: "rgb(232, 232, 232) solid 2px",
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <Link
        to={path && path}
        style={{ color: "#3C3667", fontWeight: 500, textDecoration: "none" }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            paddingTop: "8px",
            paddingRight: "4px",
            paddingBottom: "2px",
            textAlign: "right",
            justifyContent: " space-between",
            fontSize: ".8rem",
            color: "#373163",
          }}
        >
          View full list ≫
        </Typography>
      </Link>
    </Box>
  );
};

export default ComponentFooter;
