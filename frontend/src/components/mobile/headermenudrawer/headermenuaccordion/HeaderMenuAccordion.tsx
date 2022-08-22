import * as React from "react";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Avatar, Stack } from "@mui/material";
import { coinMenu, nftMenu, airdropsMenu, eventsMenu } from "./helper";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid red`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <KeyboardArrowDownIcon sx={{ fontSize: "1.3rem", color: "#FFFFFF" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#000000",
  borderBottom: "1px solid #1e1e1e",
  color: "#FFFFFF",
  fontSize: ".85rem",

  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    fontSize: ".8rem",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),

  backgroundColor: "#000000",
  color: "#FFFFFF",
  fontSize: ".85rem",
}));

const HeaderMenuAccordion = ({ toggleDrawer }: any) => {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div style={{ width: "100%" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ fontSize: ".85rem" }}>Coins</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" spacing={2}>
            {coinMenu &&
              coinMenu.map((item: any, index: number) => (
                <Link
                  to={{
                    pathname: `${item?.link}`,
                  }}
                  state={{
                    scroll: false,
                  }}
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                  key={index}
                  onClick={toggleDrawer}
                >
                  <Stack
                    direction="row"
                    spacing={0.5}
                    alignItems="center"
                    px={2}
                    py={0}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#111138",
                      },
                    }}
                  >
                    <Avatar
                      alt={item?.title}
                      src={item?.icon}
                      sx={{ width: 22, height: 22, borderRadius: 0 }}
                    />

                    <Typography
                      sx={{
                        p: 1,
                        fontSize: ".8rem",
                        color: "#FFFFFF",
                      }}
                    >
                      {item?.title}
                    </Typography>
                  </Stack>
                </Link>
              ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ fontSize: ".85rem" }}>NFT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" spacing={2}>
            {nftMenu &&
              nftMenu.map((item: any, index: number) => (
                <Link
                  to={{
                    pathname: `${item?.link}`,
                  }}
                  state={{
                    scroll: false,
                  }}
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                  key={index}
                  onClick={toggleDrawer}
                >
                  <Stack
                    direction="row"
                    spacing={0.5}
                    alignItems="center"
                    px={2}
                    py={0}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#111138",
                      },
                    }}
                  >
                    <Avatar
                      alt={item?.title}
                      src={item?.icon}
                      sx={{ width: 22, height: 22, borderRadius: 0 }}
                    />

                    <Typography
                      sx={{
                        p: 1,
                        fontSize: ".8rem",
                        color: "#FFFFFF",
                      }}
                    >
                      {item?.title}
                    </Typography>
                  </Stack>
                </Link>
              ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ fontSize: ".85rem" }}>Airdrops</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" spacing={2}>
            {airdropsMenu &&
              airdropsMenu.map((item: any, index: number) => (
                <Link
                  to={{
                    pathname: `${item?.link}`,
                  }}
                  state={{
                    scroll: false,
                  }}
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                  key={index}
                  onClick={toggleDrawer}
                >
                  <Stack
                    direction="row"
                    spacing={0.5}
                    alignItems="center"
                    px={2}
                    py={0}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#111138",
                      },
                    }}
                  >
                    <Avatar
                      alt={item?.title}
                      src={item?.icon}
                      sx={{ width: 22, height: 22, borderRadius: 0 }}
                    />

                    <Typography
                      sx={{
                        p: 1,
                        fontSize: ".8rem",
                        color: "#FFFFFF",
                      }}
                    >
                      {item?.title}
                    </Typography>
                  </Stack>
                </Link>
              ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography sx={{ fontSize: ".85rem" }}>Events</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" spacing={2}>
            {eventsMenu &&
              eventsMenu.map((item: any, index: number) => (
                <Link
                  to={{
                    pathname: `${item?.link}`,
                  }}
                  state={{
                    scroll: false,
                  }}
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                  key={index}
                  onClick={toggleDrawer}
                >
                  <Stack
                    direction="row"
                    spacing={0.5}
                    alignItems="center"
                    px={2}
                    py={0}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#111138",
                      },
                    }}
                  >
                    <Avatar
                      alt={item?.title}
                      src={item?.icon}
                      sx={{ width: 22, height: 22, borderRadius: 0 }}
                    />

                    <Typography
                      sx={{
                        p: 1,
                        fontSize: ".8rem",
                        color: "#FFFFFF",
                      }}
                    >
                      {item?.title}
                    </Typography>
                  </Stack>
                </Link>
              ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default HeaderMenuAccordion;
