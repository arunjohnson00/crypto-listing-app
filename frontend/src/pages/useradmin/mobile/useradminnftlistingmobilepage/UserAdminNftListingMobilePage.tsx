import { Button, IconButton, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { tableHeader } from "./helper";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import UserAdminMobileHtmlTable from "../../../../components/useradmin/mobilehtmltable/UserAdminMobileHtmlTable";
import { userNFTListRequest } from "../../../../store/action";
import { useNavigate } from "react-router-dom";

const UserAdminNftListingMobilePage = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const [tableData, setTableData] = useState<any>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  useEffect(() => {
    const successHandler = (res: any) => {
      setTableData(res?.data);
    };
    const errorHandler = (err: any) => {};

    dispatch(userNFTListRequest(page + 1, successHandler, errorHandler));
  }, [dispatch, page]);
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
            My NFT's
          </Button>
        </Stack>
      </Stack>
      <Fragment>
        {tableData?.data?.length !== 0 ? (
          <UserAdminMobileHtmlTable
            tableData={tableData && tableData}
            tableHeader={tableHeader}
            variant="nft"
            section="nft"
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
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

export default UserAdminNftListingMobilePage;
