import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ITEM_HEIGHT = 48;
const ShowMoreMenu = ({ showMoreAnchorEl, open, handleClose, data }: any) => {
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
      {data &&
        data?.slice(2, data?.length).map((item: any, index: number) => (
          <MenuItem sx={{ fontSize: ".7rem" }}>
            <a
              href={item?.url}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item?.url}{" "}
            </a>
          </MenuItem>
        ))}
    </Menu>
  );
};

export default ShowMoreMenu;
