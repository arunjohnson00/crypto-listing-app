import { Button } from "@mui/material";
import React from "react";

const SponsoredBtn = ({ title, width }: any) => {
  return (
    <Button
      variant="contained"
      sx={{
        color: "#FFFFF5",
        backgroundColor: "#333333",
        paddingX: 1,
        paddingY: 1,
        width: `${width}px`,
      }}
    >
      {title}
    </Button>
  );
};

export default SponsoredBtn;
