import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const TableMenu = ({ anchorEl, setAnchorEl }: any) => {
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {" "}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>NetWork</MenuItem>
        <MenuItem onClick={handleClose}>NFT</MenuItem>
        <MenuItem onClick={handleClose}>NetWork</MenuItem>
      </Menu>
    </div>
  );
};

export default TableMenu;
