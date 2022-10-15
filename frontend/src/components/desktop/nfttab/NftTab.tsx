import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Grid, Stack } from "@mui/material";
import NFTListingPill from "../nftlistingpill/NFTListingPill";
import { useDispatch, useSelector } from "react-redux";
import {
  nftPageMostPopularRequest,
  nftPageRecentlyAddedRequest,
} from "../../../store/action";
import NftCollectionCard from "../cards/nftcollection/NftCollectionCard";

const NftTab = () => {
  const [value, setValue] = useState("1");
  const dispatch: any = useDispatch();
  const NftMostPopularList = useSelector((data: any) => {
    return data?.nftReducer?.nft_most_popular?.data;
  });
  const NftRecentlyAddedList = useSelector((data: any) => {
    return data?.nftReducer?.nft_recently_added?.data;
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);

    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    newValue === "1" &&
      dispatch(
        nftPageMostPopularRequest("noData", successHandler, errorHandler)
      );
    newValue === "2" &&
      dispatch(
        nftPageRecentlyAddedRequest("noData", successHandler, errorHandler)
      );
  };

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(nftPageMostPopularRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                //display: "none",
                backgroundColor: "#BABBF9",
                // color: "#FFFFF5",
              },

              "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
                color: "#BABBF9",
                textTransform: "capitalize",
                minHeight: 62,
              },
              "& .MuiButtonBase-root.MuiTab-root": {
                color: "#AFB0B7",
                textTransform: "capitalize",
                minHeight: 62,
                fontSize: 18,
              },
            }}
          >
            <Tab label="Most Popular" value="1" />
            <Tab label="Recently Added" value="2" />
            {/* <Tab label="Upcoming Events" value="3" /> */}
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: 0, paddingY: 4 }}>
          <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid container rowGap={2} columnGap={1}>
              {NftMostPopularList &&
                NftMostPopularList?.response === true &&
                NftMostPopularList?.data?.data?.map(
                  (item: any, index: number) => (
                    <Grid
                      xs={5.8}
                      sm={5.8}
                      md={2.31}
                      lg={2.31}
                      xl={2.31}
                      key={index}
                    >
                      <NftCollectionCard
                        data={item && item}
                        index={index}
                        height={{ xs: 100, sm: 100, md: "" }}
                      />
                    </Grid>
                  )
                )}
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 0, paddingY: 4 }}>
          <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid container>
              {NftRecentlyAddedList &&
                NftRecentlyAddedList?.response === true &&
                NftRecentlyAddedList?.data?.data?.map(
                  (item: any, index: number) => (
                    <Grid
                      xs={5.8}
                      sm={5.8}
                      md={2.31}
                      lg={2.31}
                      xl={2.31}
                      key={index}
                    >
                      <NftCollectionCard
                        data={item && item}
                        index={index}
                        height={{ xs: 100, sm: 100, md: "" }}
                      />
                    </Grid>
                  )
                )}
            </Grid>
          </Grid>
        </TabPanel>
        {/* <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
};

export default NftTab;
