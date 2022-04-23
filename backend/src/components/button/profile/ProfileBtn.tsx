import { Box, Typography, Stack } from "@mui/material";
import { Avatar, Tooltip } from "@mui/material";

const ProfileBtn = ({ handleClick }: any) => {
  // const userData = useSelector((userData: any) => {
  //   return userData;
  // });
  const authUser: any =
    sessionStorage.getItem("authUser") || localStorage.getItem("authUser");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{ alignItems: "center" }}
        onClick={handleClick}
      >
        <Tooltip title="Open settings">
          <Avatar
            src="https://mui.com/static/images/avatar/1.jpg"
            variant="rounded"
          ></Avatar>
        </Tooltip>
        <Box pt={1}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, fontSize: "13px", lineHeight: 0 }}
          >
            {JSON.parse(authUser).name}
          </Typography>
          <Typography
            variant="caption"
            sx={{ fontWeight: 500, fontSize: "10px" }}
          >
            {JSON.parse(authUser).email}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProfileBtn;
