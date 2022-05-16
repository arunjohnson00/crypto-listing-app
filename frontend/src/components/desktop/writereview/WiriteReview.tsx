import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const WiriteReview = ({ openWriteReview, handleClose }: any) => {
  return (
    <div>
      <Dialog
        open={openWriteReview}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "#091338",
            color: "#FFFFF5",
          },
        }}
      >
        <DialogTitle> Write a review</DialogTitle>
        <DialogContent>
          {/* <DialogContentText sx={{ color: "#FFFFF5" }}>
            Write a review
          </DialogContentText> */}
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Minimum 3 rows"
            style={{
              maxWidth: 600,
              minWidth: 500,
              padding: 2,
              borderRadius: 4,
              backgroundColor: "#252c43",
              marginTop: 5,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WiriteReview;
