import { Avatar, Box, Checkbox, Stack, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const CreateAdWizardCard = ({ title, caption }: any) => {
  return (
    <Checkbox
      sx={{
        color: "#6d6eb0",
        padding: 0,
        margin: 1.5,
        "& .MuiSvgIcon-root": { fontSize: 18 },
      }}
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
                src="https://mui.com/static/images/avatar/1.jpg"
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
              <Typography
                variant="caption"
                sx={{
                  fontSize: ".65rem",
                  textAlign: "left",
                  color: "#858585",
                  fontWeight: 400,
                }}
              >
                {caption && caption}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      }
      checkedIcon={
        <Box
          sx={{
            borderRadius: 3,
            border: "1px solid #6D6EB0",
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
                src="https://mui.com/static/images/avatar/1.jpg"
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
              <Typography
                variant="caption"
                sx={{
                  fontSize: ".65rem",
                  textAlign: "left",
                  color: "#858585",
                  fontWeight: 400,
                }}
              >
                {caption && caption}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      }
    />
  );
};

export default CreateAdWizardCard;
