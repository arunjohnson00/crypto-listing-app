import { styled } from "@mui/material/styles";
import Badge, { BadgeProps } from "@mui/material/Badge";

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    backgroundColor: "#D8B9C3",
    top: 8,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "7px 7px",
    borderRadius: "50px",
  },
}));
