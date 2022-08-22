import { useState } from "react";
import { Button, Typography, Stack, Avatar, Box } from "@mui/material";
import { BsFillCaretUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";

const AppBarNavBtn = ({ title, iconStatus, path, menu }: any) => {
  const [menuHover, setMenuHover] = useState(false);

  const handleonMouseEnter = (event: any) => {
    setMenuHover(true);
  };

  const handleonMouseLeave = () => {
    setMenuHover(false);
  };
  return (
    <div onMouseLeave={handleonMouseLeave}>
      <Button
        variant="text"
        endIcon={
          iconStatus &&
          iconStatus === true &&
          menu && <KeyboardArrowDownTwoToneIcon sx={{ color: "#23B184" }} />
        }
        //aria-controls={Boolean(anchorEl) ? "basic-menu" : undefined}
        //aria-haspopup="true"
        //aria-expanded={false}
        onMouseEnter={handleonMouseEnter}
      >
        <Link
          to={{
            pathname: path,
          }}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <Typography
            variant="subtitle2"
            sx={{ textTransform: "capitalize", color: "#FFFFFF" }}
          >
            {title && title}
          </Typography>
        </Link>
      </Button>

      {menu && menuHover === true && (
        <Box
          sx={{
            position: "absolute",
            minWidth: 250,

            zIndex: 99,
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
            px={3}
          >
            <BsFillCaretUpFill
              fontSize={20}
              style={{ padding: 0, margin: -5, color: "#000000" }}
            />
          </Box>
          <Stack
            direction="column"
            spacing={1}
            py={2}
            sx={{
              backgroundColor: "#000000",
              borderRadius: 4,
              color: "#FFFFFF",
              boxShadow: "0px 18px 20px #00000033",
            }}
          >
            {menu?.map((item: any, index: number) => (
              <Link
                to={{
                  pathname: `${item?.link}`,
                }}
                state={{
                  scroll: false,
                }}
                style={{ textDecoration: "none", color: "#FFFFFF" }}
                key={index}
              >
                <Stack
                  direction="row"
                  spacing={0.5}
                  alignItems="center"
                  px={2}
                  py={0}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#111138",
                    },
                  }}
                >
                  <Avatar
                    alt={item?.title}
                    src={item?.icon}
                    sx={{ width: 22, height: 22, borderRadius: 0 }}
                  />

                  <Typography
                    sx={{
                      p: 1,
                      fontSize: ".8rem",
                      color: "#FFFFFF",
                    }}
                  >
                    {item?.title}
                  </Typography>
                </Stack>
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </div>
  );
};

export default AppBarNavBtn;
