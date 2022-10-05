import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const MobileDrawer = ({ state, setState, toggleDrawer }: any) => {
  console.log(state);
  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: "80vw" }}
    >
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon sx={{ color: "#ffffff" }} />
                ) : (
                  <MailIcon sx={{ color: "#ffffff" }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"left"}
          open={state?.left}
          onClose={toggleDrawer(false)}
          PaperProps={{
            style: { background: "#000000", color: "#FFFFFF" },
          }}
          sx={{}}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default MobileDrawer;
