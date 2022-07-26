import { Box, Stack, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const TableActionBtn = ({ tableEdit, tableDelete, tableView }: any) => {
  return (
    <Box>
      <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
        <Breadcrumbs separator="|" aria-label="breadcrumb">
          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "rgb(65, 81, 167)" }}
            onClick={tableEdit}
          >
            <Typography sx={{ fontSize: ".8rem", fontWeight: 600 }}>
              {" "}
              Edit
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#FF4560" }}
            onClick={tableDelete}
          >
            <Typography sx={{ fontSize: ".8rem", fontWeight: 600 }}>
              {" "}
              Delete
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#00E396" }}
            onClick={tableView}
          >
            <Typography sx={{ fontSize: ".8rem", fontWeight: 600 }}>
              {" "}
              View
            </Typography>
          </Link>
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};

export default TableActionBtn;
