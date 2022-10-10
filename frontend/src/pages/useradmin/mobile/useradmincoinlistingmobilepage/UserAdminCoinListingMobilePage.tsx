import { Button, IconButton, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { tableHeader } from "./helper";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import UserAdminMobileHtmlTable from "../../../../components/useradmin/mobilehtmltable/UserAdminMobileHtmlTable";
import { userCoinListRequest } from "../../../../store/action";
import { useNavigate } from "react-router-dom";

const UserAdminCoinListingMobilePage = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState<any>();
  useEffect(() => {
    const successHandler = (res: any) => {
      setTableData(res?.data?.data);
    };
    const errorHandler = (err: any) => {};

    dispatch(userCoinListRequest("noData", successHandler, errorHandler));
  }, [dispatch]);
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      py={4}
      height="100vh"
    >
      <Stack direction="row" alignItems="center" width="100%" px={2} py={1}>
        <Stack direction="row" alignItems="flex-start" sx={{ flexGrow: 0 }}>
          <IconButton
            aria-label="delete"
            onClick={() => navigate("/user-dashboard")}
          >
            <ArrowBackIosRoundedIcon
              sx={{ color: "#b4bdf6", fontSize: "1.2rem" }}
            />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="center"
          sx={{ flexGrow: 1 }}
        >
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: 10,
              backgroundColor: "#6B00FE",
              minWidth: 130,
              marginRight: 4.1,
            }}
          >
            My Coins
          </Button>
        </Stack>
      </Stack>
      <Fragment>
        {tableData?.data?.length !== 0 ? (
          <UserAdminMobileHtmlTable
            tableData={tableData && tableData?.data}
            tableHeader={tableHeader}
            variant="coin"
            section="coin"
          />
        ) : (
          <Typography sx={{ color: "#FFFFFF", fontSize: ".85rem" }}>
            No data available !
          </Typography>
        )}
      </Fragment>
    </Stack>
  );
};

export default UserAdminCoinListingMobilePage;
