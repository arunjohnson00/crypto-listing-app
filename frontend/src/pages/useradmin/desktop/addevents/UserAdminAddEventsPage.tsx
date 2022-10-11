import { Box, Stack, useMediaQuery } from "@mui/material";

import onlineEventImage from "../../../../assets/userdashboard/online-event.png";
import offlineEventImage from "../../../../assets/userdashboard/offline-event.png";
import UserAdminAddEventCard from "../../../../components/useradmin/addeventcard/UserAdminAddEventCard";

const UserAdminAddEventsPage = ({ windowInnerWidth }: any) => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "flex-start", sm: "flex-start", md: "center" },
        alignItems: { xs: "flex-start", sm: "flex-start", md: "center" },
      }}
      pt={matches === true ? 7 : 2}
      width="100%"
      height={{ xs: "100vh", sm: "100vh", md: "auto" }}
    >
      <Stack
        direction={{ xs: "row", sm: "row", md: "row" }}
        spacing={{ xs: 1, sm: 1, md: 3 }}
        justifyContent={{ xs: "flex-start", sm: "flex-start", md: "center" }}
        alignItems={{ xs: "flex-start", sm: "flex-start", md: "center" }}
        pt={{ xs: 2, sm: 2, md: 15 }}
        pb={15}
      >
        <UserAdminAddEventCard
          title="Online Event"
          image={onlineEventImage}
          link="/user-dashboard/events/online-events/add"
        />
        <UserAdminAddEventCard
          title="Offline Event"
          image={offlineEventImage}
          link="/user-dashboard/events/offline-events/add"
        />
      </Stack>
    </Box>
  );
};

export default UserAdminAddEventsPage;
