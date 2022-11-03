import { useState } from "react";
import {
  Avatar,
  Box,
  Radio,
  Stack,
  Typography,
  FormControlLabel,
} from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const CreateAdWizardCard = ({
  title,
  caption,
  value,
  name,
  size,
  type,
  variant,
  icon,
}: any) => {
  return (
    <div>
      <Radio
        sx={{
          color: "#6d6eb0",
          padding: 0,
          margin: 1.5,
          "& .MuiSvgIcon-root": { fontSize: 18 },
          "&.MuiRadio-root:hover": {
            background: "none",
          },
        }}
        disableTouchRipple
        disableRipple
        name={name && name}
        value={value && value}
        icon={
          <Box
            sx={{
              borderRadius: 3,
              border: "1px solid #7D7D7D",
              minWidth: 200,
              minHeight: 170,
            }}
            p={1.6}
          >
            <Stack direction="column" spacing={3}>
              <Stack
                direction="row"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Avatar
                  alt="Remy Sharp"
                  src={icon}
                  variant="square"
                  sx={{ width: 27, height: 27 }}
                />

                {/* <CircleOutlinedIcon sx={{ color: "#6d6eb0" }} /> */}
              </Stack>
              <Stack
                direction="column"
                spacing={1.3}
                sx={{ justifyContent: "flex-start" }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    textAlign: "left",
                    color: "#000000",
                    fontWeight: 600,
                  }}
                >
                  {title && title}
                </Typography>
                <Stack
                  direction="column"
                  spacing={variant === "banner" ? 0 : 1.3}
                  sx={{ justifyContent: "flex-start" }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: ".65rem",
                      textAlign: "left",
                      color: "#858585",
                      fontWeight: 400,
                    }}
                  >
                    {caption && caption} {size && `Size :${size}`}
                  </Typography>

                  {type && (
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: ".65rem",
                        textAlign: "left",
                        color: "#858585",
                        fontWeight: 400,
                      }}
                    >
                      {type && `Type :${type}`}
                    </Typography>
                  )}
                </Stack>
              </Stack>
            </Stack>
          </Box>
        }
        checkedIcon={
          <Box
            sx={{
              borderRadius: 3,
              border: "2px solid #6D6EB0",
              minWidth: 200,
              minHeight: 170,
            }}
            p={1.6}
          >
            <Stack direction="column" spacing={3}>
              <Stack
                direction="row"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Avatar
                  alt="Remy Sharp"
                  variant="square"
                  src={icon}
                  sx={{ width: 27, height: 27 }}
                />

                <CheckCircleOutlineOutlinedIcon sx={{ color: "#6d6eb0" }} />
              </Stack>
              <Stack
                direction="column"
                spacing={1.3}
                sx={{ justifyContent: "flex-start" }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    textAlign: "left",
                    color: "#000000",
                    fontWeight: 600,
                  }}
                >
                  {title && title}
                </Typography>
                <Stack
                  direction="column"
                  spacing={variant === "banner" ? 0 : 1.3}
                  sx={{ justifyContent: "flex-start" }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: ".65rem",
                      textAlign: "left",
                      color: "#858585",
                      fontWeight: 400,
                    }}
                  >
                    {caption && caption} {size && `Size :${size}`}
                  </Typography>
                  {type && (
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: ".65rem",
                        textAlign: "left",
                        color: "#858585",
                        fontWeight: 400,
                      }}
                    >
                      {type && `Type :${type}`}
                    </Typography>
                  )}
                </Stack>
              </Stack>
            </Stack>
          </Box>
        }
      />
    </div>
  );
};

export default CreateAdWizardCard;
