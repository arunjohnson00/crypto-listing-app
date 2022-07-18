import { Grid, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
import Avatar from "@mui/material/Avatar";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import InputSearch from "../../components/form/input/search/InputSearch";
import {
  listNftListingRequest,
  searchNftListingRequest,
} from "../../store/action";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const NFTListing = () => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const nftListingsList = useSelector((nftList: any) => {
    return nftList.nftListingsReducer.listNftListings;
  });
  const searchResult = useSelector((result: any) => {
    return result?.nftListingsReducer?.search_result;
  });

  const [searchValue, setSearchValue] = useState("");
  const [dataTableParams, setDataTableParams] = useState<any>({
    PageSize: 15,
    pageCount: 1,
  });

  const searchHandler = (searchVal: any) => {
    setSearchValue(searchVal);

    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(searchNftListingRequest(searchVal, successHandler, errorHandler));
  };

  var filteredData =
    searchValue !== "" &&
    searchResult &&
    searchResult !== undefined &&
    searchResult.length !== 0
      ? searchResult.data
      : nftListingsList.data;

  const dispatch = useDispatch();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(
      listNftListingRequest(dataTableParams, successHandler, errorHandler)
    );
  }, [dispatch, dataTableParams, setDataTableParams]);

  const tableColumn = [
    {
      field: "title",
      headerName: "NFT Name",
      flex: 1,
    },
    {
      field: "thumb_icon",
      headerName: "Icon",
      flex: 1,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params: any) => (
        <Avatar
          src={`${serverAPIUrl}public/uploads/nft_listing_image/${params.row.image}`}
          alt={params.thumb_icon}
        />
      ),
    },

    {
      field: "created_at",
      headerName: "Submitted",
      flex: 1,
      renderCell: (params: any) =>
        timeAgo.format(new Date(params.row.created_at)),
    },

    {
      field: "network",
      headerName: "Network",
      flex: 1,
    },
    {
      field: "public_mint_start_date",
      headerName: "Mint date",
      flex: 1,
    },
    {
      field: "public_mint_start_time",
      headerName: "Mint Time",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params: any) => (
        <span>
          {parseInt(params.row.status) === 1 && (
            <span style={{ color: "#64dd17" }}>Approved</span>
          )}

          {parseInt(params.row.status) === 2 && (
            <span style={{ color: "#d50000" }}>Scheduled</span>
          )}

          {parseInt(params.row.status) === 3 && (
            <span style={{ color: "#6a1b9a" }}>Suspended</span>
          )}
        </span>
      ),
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          pt={3}
          pb={1}
        >
          <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "flex-start" }}
            >
              <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                <Typography variant="h5" sx={{ textAlign: "left" }}>
                  Nft Listings
                </Typography>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                <InputSearch
                  placeholder="Search Nft"
                  searchValue={searchValue}
                  searchHandler={searchHandler}
                />
              </Grid>
            </Stack>
          </Grid>

          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={12}
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Link to="/nft-listing/add">
              <LargeBtn Title="Add NFT" />
            </Link>
          </Grid>
        </Stack>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTables
          tableColumn={tableColumn && tableColumn}
          tableData={filteredData && filteredData}
          data={
            searchValue !== "" &&
            searchResult &&
            searchResult !== undefined &&
            searchResult?.length !== 0
              ? searchResult?.data
              : nftListingsList && nftListingsList?.data
          }
          setDataTableParams={setDataTableParams}
          dataTableParams={dataTableParams}
          rowCount={
            searchValue !== "" &&
            searchResult &&
            searchResult !== undefined &&
            searchResult?.length !== 0
              ? searchResult?.data?.length
              : nftListingsList && nftListingsList?.total
          }
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          {" "}
          <Link to="/nft-listing/add">
            <LargeBtn Title="Add NFT" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default NFTListing;
