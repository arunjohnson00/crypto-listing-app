import { Box, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import AddEventCard from "../../../components/desktop/cards/addeventcard/AddEventCard";
import onlineEventImage from "../../../assets/addevent/online-event.png";
import offlineEventImage from "../../../assets/addevent/offline-event.png";

const AddEventsPage = ({ windowInnerWidth }: any) => {
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
        pt={10}
        pb={15}
      >
        <AddEventCard
          title="Online Event"
          image={onlineEventImage}
          link="/user-dashboard/events/online-events/add"
        />
        <AddEventCard
          title="Offline Event"
          image={offlineEventImage}
          link="/user-dashboard/events/offline-events/add"
        />
      </Stack>
    </Box>
  );
};

export default AddEventsPage;
