import { makeStyles } from "@mui/styles";
import { green, red } from "@mui/material/colors";

export const useStyles = makeStyles({
  mainWrapper: {
    width: "297px",
    height: "70px",
    background: "rgb(246, 246, 246)",
    borderRadius: "8px",
    color: "rgb(168 168 168)",
    padding: "5px",
    border: "1.5px solid silver",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: "3px",
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "14px",
    marginLeft: "5px",
  },

  iconWrapper: {
    display: "flex",
    "& svg": {
      fontSize: "2.2rem",
    },
  },
  fileAccepted: {
    color: green[500],
  },

  fileRejected: {
    color: red[500],
  },
});
