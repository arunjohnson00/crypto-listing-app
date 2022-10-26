import { Box, Stack, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";

const PromoteCard = ({ icon, link, title, path }: any) => {
  return (
    <Box
      sx={{
        background: "#01061A",
        borderRadius: 6,
        border: "1px solid #070E28",
      }}
      py={4}
      px={4}
    >
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        {icon}
        <Typography
          variant="body2"
          sx={{
            color: "#FFFFFF",
            fontSize: "0.85rem",
            fontWeight: 400,
            textAlign: "right",
          }}
        >
          {title && title}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PromoteCard;
