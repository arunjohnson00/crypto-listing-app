import { makeStyles } from "@mui/styles";
import { green, red } from "@mui/material/colors";

export const useStyles = makeStyles({
  mainWrapper: {
    width: "345px",
    height: "75px",
    background: "#010619",
    color: "#818181e8",
    borderRadius: "8px",

    padding: "9px",
    border: "1.5px solid #090F2C",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: "3px",
    background: "#010619",
    color: "#818181e8",
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
