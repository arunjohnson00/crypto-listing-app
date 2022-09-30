import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Fragment } from "react";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cryptoCurrenciesTabRequest } from "../../../../store/action";

const TableBtnGroup = () => {
  const dispatch: any = useDispatch();
  const tabIndex = useSelector((data: any) => {
    return data?.homeReducer?.crypto_currencies_tab;
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch({ type: cryptoCurrenciesTabRequest, payload: newValue });
  };
  return (
    <Fragment>
      <Box
        sx={{
          maxWidth: { xs: 320, sm: 480 },
          bgcolor: "#010E3A",
          borderRadius: 4,
          overflow: "hidden",
          color: "#FFFFFF",
          borderColor: "#051447",
          height: 40,
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          disableRipple
          // TabIndicatorProps={{
          //   style: {
          //     backgroundColor: "transparent",
          //     color: "red",
          //   },
          // }}
          variant="standard"
          scrollButtons={false}
          aria-label="scrollable auto tabs example"
          sx={{
            ".MuiTab-root": {
              color: "#FFFFFF",
              fontSize: "0.795rem",
              textTransform: "capitalize",
              padding: 0,
              minHeight: 38,
              paddingX: 1,
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#FFFFFF",
              backgroundColor: "#040b29",
            },
          }}
        >
          <Tab label="All Coins" />
          <Divider
            flexItem
            orientation="vertical"
            variant="middle"
            sx={{ height: 25, alignSelf: "center", borderColor: "#1565C0" }}
          />
          <Tab label="Today's Best" />
          <Divider
            flexItem
            orientation="vertical"
            variant="middle"
            sx={{ height: 25, alignSelf: "center", borderColor: "#1565C0" }}
          />
          <Tab label="Recently Added" />
          <Divider
            flexItem
            orientation="vertical"
            variant="middle"
            sx={{ height: 25, alignSelf: "center", borderColor: "#1565C0" }}
          />
          <Tab label="Presales" />
        </Tabs>
      </Box>
      {/* <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{ borderRadius: "11px", overflow: "hidden" }}
      >
        <Button
          sx={{
            backgroundColor: "#010E3A",
            textTransform: "capitalize",
            fontSize: "0.795rem",
            borderColor: "#051447",
            color: "#03E2B1",
          }}
        >
          All Coins
        </Button>
        <Button
          sx={{
            backgroundColor: "#010E3A",
            textTransform: "capitalize",
            fontSize: "0.795rem",
            borderColor: "#051447",
          }}
        >
          Today's Best
        </Button>
        <Button
          sx={{
            backgroundColor: "#010E3A",
            textTransform: "capitalize",
            fontSize: "0.795rem",
            borderColor: "#051447",
          }}
        >
          New Listings
        </Button>
        <Button
          sx={{
            backgroundColor: "#010E3A",
            textTransform: "capitalize",
            fontSize: "0.795rem",
            borderColor: "#051447",
          }}
        >
          Presales
        </Button>
      </ButtonGroup> */}
    </Fragment>
  );
};

export default TableBtnGroup;
