import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import MultiSlider from "../../../../components/useradmin/multislider/MultiSlider";
import UserAdminTabs from "../../../../components/useradmin/useradmintabs/UserAdminTabs";

const UserDashboard = () => {
  const userData = useSelector((data: any) => {
    return data?.userReducer?.user_login;
  });
  const authUser = JSON.parse(localStorage.getItem("authUser") as any);
  return (
    <Grid container spacing={1}>
      <Box width="100%" my={6}>
        <MultiSlider />
      </Box>

      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#FFFFF5", fontSize: "1rem" }}
          >
            <span>
              {"Good " +
                ((new Date().getHours() < 12 && "Morning") ||
                  (new Date().getHours() < 18 && "Afternoon") ||
                  "Evening")}
              ,
            </span>{" "}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#FFFFF5", fontSize: "1.2rem" }}
          >
            {" "}
            {userData && userData !== undefined
              ? userData?.user?.name
              : authUser && authUser?.name}
          </Typography>
        </Stack>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} py={3}>
          <UserAdminTabs />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserDashboard;
