import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    //boxShadow: `0 0 0 2px #44B700`,
    width: 0,
    height: 8,
    borderRadius: 10,

    "&::after": {
      position: "absolute",
      top: -2.1,
      left: -2,
      width: "100%",
      height: "100%",
      borderRadius: "100%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "2px solid #44B700",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2)",
      opacity: 0,
    },
  },
}));
