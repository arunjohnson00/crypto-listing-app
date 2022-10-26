import { Box, Stack, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";

const PromoteQuestionCard = ({
  icon,
  link,
  title,
  path,
  question,
  answer,
}: any) => {
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
        alignItems="flex-start"
        justifyContent="center"
      >
        <Typography
          variant="body2"
          sx={{
            color: "#3A2E70",
            fontSize: "0.85rem",
            fontWeight: 600,
            textAlign: "right",
          }}
        >
          {question && question}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#FFFFFF",
            fontSize: "0.85rem",
            fontWeight: 400,
            textAlign: "right",
          }}
        >
          {answer && answer}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PromoteQuestionCard;
