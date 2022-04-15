import { Fragment } from "react";
import { Menu, MenuItem } from "@mui/material";

const ProfileMenu = ({ handleClose, open, anchorEl, loginControll }: any) => {
  return (
    <Fragment>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={loginControll}>Logout</MenuItem>
      </Menu>
    </Fragment>
  );
};

export default ProfileMenu;
