import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
//import { useDispatch } from "react-redux";
import SideMenu from "../sidebar/SideMenu";
import TopBar from "../appbar/TopBar";
import { DrawerHeader } from "./style";

// import { listExchangeRequest } from "../../../store/action";
// import { listNetworkRequest } from "../../../store/action";
// import { listNftMarketPlacesRequest } from "../../../store/action";
// import { listUsersRequest } from "../../../store/action";

// import { listCoinRequest } from "../../../store/action";
// import { listVideoRequest } from "../../../store/action";
// import { listCoinSocialRequest } from "../../../store/action";
// import { listMenuCardRequest } from "../../../store/action";

// import { listChartProviderRequest } from "../../../store/action";
// import { listNftListingsRequest } from "../../../store/action";
// import { listCoinAuditRequest } from "../../../store/action";
// import { listCoinChatRequest } from "../../../store/action";

const LayoutView = ({ children }: any) => {
  //const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   const successHandler = (res: any) => {
  //     //console.log(res);
  //   };

  //   const errorHandler = (err: any) => {
  //     //console.log(err);
  //   };

  //   dispatch(
  //     listExchangeRequest("emptyformData", successHandler, errorHandler)
  //   );
  //   dispatch(listNetworkRequest("emptyformData", successHandler, errorHandler));
  //   dispatch(listUsersRequest("emptyformData", successHandler, errorHandler));
  //   dispatch(
  //     listNftMarketPlacesRequest("emptyformData", successHandler, errorHandler)
  //   );

  //   dispatch(listCoinRequest("emptyformData", successHandler, errorHandler));
  //   dispatch(
  //     listMenuCardRequest("emptyformData", successHandler, errorHandler)
  //   );
  //   dispatch(
  //     listCoinAuditRequest("emptyformData", successHandler, errorHandler)
  //   );
  //   dispatch(
  //     listChartProviderRequest("emptyformData", successHandler, errorHandler)
  //   );
  //   dispatch(
  //     listCoinChatRequest("emptyformData", successHandler, errorHandler)
  //   );
  //   dispatch(
  //     listCoinSocialRequest("emptyformData", successHandler, errorHandler)
  //   );
  //   dispatch(listVideoRequest("emptyformData", successHandler, errorHandler));
  //   dispatch(
  //     listNftListingsRequest("emptyformData", successHandler, errorHandler)
  //   );
  // }, [dispatch]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
      />
      <SideMenu open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#F6F6F6" }}>
        <DrawerHeader />

        {children}
      </Box>
    </Box>
  );
};

export default LayoutView;
