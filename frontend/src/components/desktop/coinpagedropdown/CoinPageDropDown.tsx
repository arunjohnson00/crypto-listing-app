import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Box, Paper } from "@mui/material";
const CoinPageDropDown = ({ data, title }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        variant="contained"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        sx={{
          textTransform: "capitalize",
          fontWeight: 500,
          borderRadius: 2.5,
          backgroundColor: "#2444D4",
        }}
        size="small"
      >
        {title && title}
      </Button>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{ marginTop: 1 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 330 }} p={0.5} onClick={handleClose}>
          {/* <MenuItem  sx>Profile</MenuItem> */}
          {data}
        </Box>
      </Menu>
    </div>
  );
};

export default CoinPageDropDown;
