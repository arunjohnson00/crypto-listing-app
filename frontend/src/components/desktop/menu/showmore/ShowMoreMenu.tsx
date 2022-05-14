import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ITEM_HEIGHT = 48;
const ShowMoreMenu = ({ showMoreAnchorEl, open, handleClose }: any) => {
  return (
    <Menu
      id="long-menu"
      MenuListProps={{
        "aria-labelledby": "long-button",
      }}
      anchorEl={showMoreAnchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          maxHeight: ITEM_HEIGHT * 4.5,
          width: "20ch",
          backgroundColor: "#262354",
          color: "#FFFFF5",
        },
      }}
    >
      <MenuItem>Hi test</MenuItem>
      <MenuItem>Hi test2</MenuItem>
    </Menu>
  );
};

export default ShowMoreMenu;
