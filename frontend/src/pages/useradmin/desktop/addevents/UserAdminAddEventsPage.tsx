import { Box, Stack, useMediaQuery } from "@mui/material";

import onlineEventImage from "../../../../assets/userdashboard/online-event.png";
import offlineEventImage from "../../../../assets/userdashboard/offline-event.png";
import UserAdminAddEventCard from "../../../../components/useradmin/addeventcard/UserAdminAddEventCard";

const UserAdminAddEventsPage = ({ windowInnerWidth }: any) => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      pt={matches === true ? 7 : 2}
      width="100%"
    >
      <Stack
        direction="row"
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
        pt={15}
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
