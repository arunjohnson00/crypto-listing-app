import { Box, Button, Stack, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userCoinListRequest } from "../../../store/action";
import UserAdminHtmlTable from "../htmltable/UserAdminHtmlTable";
import { tableHeader } from "./helper";
const UserAdminCoinListing = () => {
  const dispatch: any = useDispatch();

  const [tableData, setTableData] = useState<any>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  useEffect(() => {
    const successHandler = (res: any) => {
      setTableData(res?.data);
    };
    const errorHandler = (err: any) => {};

    dispatch(userCoinListRequest(page + 1, successHandler, errorHandler));
  }, [dispatch, page]);
  console.log(tableData);
  return (
    <Box height="100vh">
      <Fragment>
        <Helmet>
          <title> My Coins | CoinXhigh.com</title>
          <meta
            name="description"
            content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
          />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:site_name"
            content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
          />
          <meta property="og:title" content=" My Coins | CoinXhigh.com" />
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
          />
          <meta
            property="og:image"
            content="https://coinxhigh.com/coinxhighlogo.webp"
          />
          <meta property="og:url" content="https://coinxhigh.com/" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </Helmet>
        {tableData &&
        tableData?.response === true &&
        tableData?.data?.data?.length !== 0 ? (
          <UserAdminHtmlTable
            tableData={tableData && tableData}
            tableHeader={tableHeader}
            variant="coin"
            section="coin"
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
          />
        ) : (
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Typography sx={{ color: "#FFFFFF", fontSize: ".85rem" }}>
              Coin list is empty
            </Typography>
            <Link
              to="/user-dashboard/coin/add"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  fontSize: ".85rem",
                  borderRadius: 5,
                }}
              >
                Add Coin
              </Button>
            </Link>
          </Stack>
        )}
      </Fragment>
    </Box>
  );
};

export default UserAdminCoinListing;
