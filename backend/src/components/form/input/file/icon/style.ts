import { makeStyles } from "@mui/styles";
import { green, red } from "@mui/material/colors";

export const useStyles = makeStyles({
  mainWrapper: {
    width: "345px",
    height: "95px",
    background: "white",
    borderRadius: "8px",
    color: "rgb(168 168 168)",
    padding: "9px",
    border: "1.5px solid silver",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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
    // marginTop: "7px",
    "& svg": {
      fontSize: "4.2rem",
    },
  },
  fileAccepted: {
    color: green[500],
  },

  fileRejected: {
    color: red[500],
  },
});
