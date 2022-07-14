import { Box, Typography, Stack, Button } from "@mui/material";

const VoteCard = ({ position, variant }: any) => {
  return (
    <Box
      sx={{
        borderRadius: 8,
        background: "linear-gradient(180deg, #1E109B, #010720)",
        border: "1px solid #151345",
        height: variant === "large" ? 236 : variant === "medium" ? 150 : 236,
      }}
      px={2.5}
      py={2}
      m={1}
    >
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        pt={0}
        sx={{
          position: "relative",
          top: variant === "large" ? -70 : variant === "medium" ? -50 : -70,
        }}
      >
        <Box
          sx={{
            borderRadius: 20,
            backgroundColor: "#04091D",
            border: "1px solid #151345",
            width: variant === "large" ? 70 : variant === "medium" ? 40 : 70,
            height: variant === "large" ? 70 : variant === "medium" ? 40 : 70,
          }}
          px={2}
          py={2}
        >
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%", height: "100%" }}
          >
            <Typography
              sx={{
                color: "#56FFFB",
                fontWeight: 600,
                fontSize:
                  variant === "large"
                    ? "3rem"
                    : variant === "medium"
                    ? "1.9rem"
                    : "3rem",
              }}
            >
              {position && position}
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Stack
        direction="column"
        spacing={variant === "medium" ? 1 : 2}
        alignItems="center"
        pt={0}
        sx={{
          position: "relative",
          top: variant === "large" ? -55 : variant === "medium" ? -30 : -55,
        }}
      >
        <Stack direction="column" spacing={0} alignItems="center">
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize:
                variant === "large"
                  ? "1.9rem"
                  : variant === "medium"
                  ? "1.2rem"
                  : "1.9rem",
            }}
          >
            Safemoon
          </Typography>
          <Typography
            sx={{
              color: "#0EEAF5",
              fontWeight: 500,
              fontSize:
                variant === "large"
                  ? "1.1rem"
                  : variant === "medium"
                  ? ".8rem"
                  : "1.1rem",
            }}
          >
            SFM
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: 400,
              fontSize:
                variant === "large"
                  ? "1rem"
                  : variant === "medium"
                  ? ".8rem"
                  : "1rem",
            }}
          >
            $0.0000000000678
          </Typography>
        </Stack>
        {variant !== "medium" && (
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(180deg, #534AEE, #2316A9)",
              borderRadius: 2.5,
              textTransform: "capitalize",
              boxShadow: 0,
              height: 30,
            }}
          >
            By Safemoon
          </Button>
        )}
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography
            sx={{
              color: "#00FF9C",
              fontWeight: 600,
              fontSize:
                variant === "large"
                  ? "1.3rem"
                  : variant === "medium"
                  ? "1rem"
                  : "1.3rem",
            }}
          >
            1245
          </Typography>
          <Typography
            sx={{
              color: "#00FF9C",
              fontWeight: 400,
              fontSize:
                variant === "large"
                  ? "1.3rem"
                  : variant === "medium"
                  ? "1rem"
                  : "1.3rem",
            }}
          >
            Votes
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default VoteCard;
