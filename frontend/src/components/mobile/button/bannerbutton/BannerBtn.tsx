import { Button } from "@mui/material";

const BannerBtn = ({ title, width }: any) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "15px",
        textTransform: "capitalize",
        fontSize: "0.775rem",
        height: "56px",
        paddingLeft: 3,
        paddingRight: 3,
        color: "#274C73",
        fontWeight: 600,
        width: `${width && width}px`,
      }}
      style={{
        background: "linear-gradient(to right, #12D8F8 0%, #12D8F8 100%)",
      }}
    >
      {title && title}
    </Button>
  );
};

export default BannerBtn;
