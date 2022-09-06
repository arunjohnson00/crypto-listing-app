import { makeStyles } from "@mui/styles";
import { green, red } from "@mui/material/colors";

export const useStyles = makeStyles({
  mainWrapper: {
    maxWidth: "330px",
    height: "95px",
    background: "#010619",
    borderRadius: "8px",
    color: "#818181e8",
    padding: "9px",
    border: "1.5px solid #090F2C",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
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
    paddingTop: "3px",
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
