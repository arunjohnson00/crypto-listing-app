import { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useSelector, useDispatch } from "react-redux";
import { listUsersRequest } from "../../../store/action";
import { listExchangeRequest } from "../../../store/action";
import { listNetworkRequest } from "../../../store/action";
import { listNftMarketPlacesRequest } from "../../../store/action";

const HorizonatalList = () => {
  const dispatch = useDispatch();
  const coinList: any = useSelector((cnList: any) => {
    return cnList.listCoinReducer.coinListAll.data;
  });

  const exchangeList = useSelector((exList: any) => {
    return exList.listExchangeReducer.exchangeListAll.data;
  });

  const networkList = useSelector((ntList: any) => {
    return ntList.listNetworkReducer.natworkListAll.data;
  });

  const nftMarketPlaceList = useSelector((nftList: any) => {
    return nftList.listNftMarketPlcesReducer.nftMarketPlcesListAll.data;
  });

  const userList = useSelector((usrList: any) => {
    return usrList.listUsersReducer.userListAll.data;
  });

  useEffect(() => {
    const successHandler = (res: any) => {
      //console.log(res);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(
      listExchangeRequest("emptyformData", successHandler, errorHandler)
    );
    dispatch(listNetworkRequest("emptyformData", successHandler, errorHandler));
    dispatch(listUsersRequest("emptyformData", successHandler, errorHandler));
    dispatch(
      listNftMarketPlacesRequest("emptyformData", successHandler, errorHandler)
    );
  }, [dispatch]);

  return (
    <Box>
      <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
        <Breadcrumbs separator="|" aria-label="breadcrumb">
          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "rgb(65, 81, 167)" }}
          >
            <Typography variant="subtitle2">
              Coin Listed :{" "}
              {coinList && coinList.length !== 0 ? coinList.length : 0}
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#FF4560" }}
          >
            <Typography variant="subtitle2">
              {" "}
              Users : {userList && userList.length !== 0 ? userList.length : 0}
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#00E396" }}
          >
            <Typography variant="subtitle2">
              {" "}
              Networks :{" "}
              {networkList && networkList.length !== 0 ? networkList.length : 0}
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#00E396" }}
          >
            <Typography variant="subtitle2">
              {" "}
              Exchanges :{" "}
              {exchangeList && exchangeList.length !== 0
                ? exchangeList.length
                : 0}
            </Typography>
          </Link>

          <Link
            underline="none"
            key="1"
            color="inherit"
            sx={{ color: "#775DD0" }}
          >
            <Typography variant="subtitle2">
              {" "}
              NTF's :{" "}
              {nftMarketPlaceList && nftMarketPlaceList.length !== 0
                ? nftMarketPlaceList.length
                : 0}
            </Typography>
          </Link>
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};

export default HorizonatalList;
