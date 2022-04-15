import { styled } from "@mui/material/styles";
import Badge, { BadgeProps } from "@mui/material/Badge";

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 6,
    top: 9,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "7px 7px",
    borderRadius: "50px",
  },
}));
