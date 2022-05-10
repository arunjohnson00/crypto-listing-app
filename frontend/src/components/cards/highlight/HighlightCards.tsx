import { Grid, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import Avatar from "@mui/material/Avatar";

const HighlightCards = () => {
  return (
    <Grid item xs={4}>
      <Box sx={{ backgroundColor: "#010822" }} px={2} pb={3}>
        <Stack
          direction="row"
          spacing={4}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          py={3}
        >
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <LocalFireDepartmentSharpIcon
              sx={{ color: "white", fontSize: 37 }}
            />
            <Typography variant="h6" sx={{ color: "white" }}>
              Todyas Performer
            </Typography>
          </Stack>

          <Link underline="none">
            {" "}
            <Typography
              variant="caption"
              sx={{ color: "#8B9CE1", fontWeight: "bold" }}
            >
              {` More>`}
            </Typography>
          </Link>
        </Stack>

        <Stack
          direction="row"
          spacing={4}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          py={1}
        >
          <Grid item xs={10}>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={3}>
              <Typography
                variant="caption"
                sx={{ color: "#8B9CE1", fontWeight: "600" }}
              >
                1
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 18, height: 18 }}
              />
              <Typography
                variant="caption"
                sx={{ color: "white", fontWeight: "600" }}
              >
                STEPN
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#8B9CE1", fontWeight: "600" }}
              >
                GMT
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "flex-end" }}
              spacing={3}
            >
              <Typography
                variant="caption"
                sx={{ color: "red", fontWeight: "600" }}
              >
                13.3%
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "red", fontWeight: "600" }}
              >
                ⯆
              </Typography>
            </Stack>
          </Grid>
        </Stack>

        <Stack
          direction="row"
          spacing={4}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          py={1}
        >
          <Grid item xs={10}>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={3}>
              <Typography
                variant="caption"
                sx={{ color: "#8B9CE1", fontWeight: "600" }}
              >
                1
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 18, height: 18 }}
              />
              <Typography
                variant="caption"
                sx={{ color: "white", fontWeight: "600" }}
              >
                STEPN
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#8B9CE1", fontWeight: "600" }}
              >
                GMT
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "flex-end" }}
              spacing={3}
            >
              <Typography
                variant="caption"
                sx={{ color: "red", fontWeight: "600" }}
              >
                13.3%
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "red", fontWeight: "600" }}
              >
                ⯆
              </Typography>
            </Stack>
          </Grid>
        </Stack>

        <Stack
          direction="row"
          spacing={4}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          py={1}
        >
          <Grid item xs={10}>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={3}>
              <Typography
                variant="caption"
                sx={{ color: "#8B9CE1", fontWeight: "600" }}
              >
                1
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 18, height: 18 }}
              />
              <Typography
                variant="caption"
                sx={{ color: "white", fontWeight: "600" }}
              >
                STEPN
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#8B9CE1", fontWeight: "600" }}
              >
                GMT
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "flex-end" }}
              spacing={3}
            >
              <Typography
                variant="caption"
                sx={{ color: "red", fontWeight: "600" }}
              >
                13.3%
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "red", fontWeight: "600" }}
              >
                ⯆
              </Typography>
            </Stack>
          </Grid>
        </Stack>
      </Box>
    </Grid>
  );
};

export default HighlightCards;
