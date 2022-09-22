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
  listNFTNetworkRequest,
  searchNFTNetworkRequest,
} from "../../store/action";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const NFTNetworks = () => {
  const nftnetworksList = useSelector((ntList: any) => {
    return ntList.nftNetworksReducer.listNFTNetworks;
  });
  const searchResult = useSelector((result: any) => {
    return result?.nftNetworksReducer?.search_result;
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
    dispatch(searchNFTNetworkRequest(searchVal, successHandler, errorHandler));
  };

  var filteredData =
    searchValue !== "" &&
    searchResult &&
    searchResult !== undefined &&
    searchResult.length !== 0
      ? searchResult.data
      : nftnetworksList.data;

  const dispatch = useDispatch();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(
      listNFTNetworkRequest(dataTableParams, successHandler, errorHandler)
    );
  }, [dispatch, dataTableParams, setDataTableParams]);

  const tableColumn = [
    {
      field: "id",
      headerName: "#",
      flex: 0.5,
      renderCell: (params: any) => (
        <span style={{ color: "#bebebe", fontWeight: 600 }}>{params?.id}</span>
      ),
    },
    {
      field: "name",
      headerName: "Network Name",
      flex: 2,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "thumb_icon",
      headerName: "Icon",
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
      disableClickEventBubbling: true,
      renderCell: (params: any) => (
        <Avatar
          src={`${serverAPIUrl}public/uploads/nft_networks/${params.row.thumb_icon}`}
          alt={params.thumb_icon}
        />
      ),
    },

    // {
    //   field: "chain_id",
    //   headerName: "Chain ID",
    //   flex: 1,
    //   align: "center",
    //   headerAlign: "center",
    // },
    // {
    //   field: "currency_symbol",
    //   headerName: "Symbol",
    //   flex: 1,
    //   align: "center",
    //   headerAlign: "center",
    // },

    {
      field: "explorer_url",
      headerName: "Explorer URL",
      flex: 2.5,
      align: "left",
      headerAlign: "left",
      renderCell: (params: any) => (
        <span style={{ color: "blue", fontSize: ".7rem" }}>
          <a
            href={params.row.explorer_url}
            target="_blank"
            rel="noreferrer"
            style={{ color: "blue", textDecoration: "none" }}
          >
            {" "}
            {params.row.explorer_url}
          </a>
        </span>
      ),
    },

    {
      field: "network_url",
      headerName: "Network URL",
      flex: 2.5,
      align: "left",
      headerAlign: "left",
      renderCell: (params: any) => (
        <span style={{ color: "blue", fontSize: ".7rem" }}>
          <a
            href={params.row.url}
            target="_blank"
            rel="noreferrer"
            style={{ color: "blue", textDecoration: "none" }}
          >
            {" "}
            {params.row.url}
          </a>
        </span>
      ),
    },

    {
      field: "status",
      headerName: "Status",
      align: "center",
      headerAlign: "center",
      flex: 1,
      renderCell: (params: any) => (
        <span>
          {parseInt(params.row.status) === 1 && (
            <span style={{ color: "#00e396" }}>Approved</span>
          )}

          {parseInt(params.row.status) === 2 && (
            <span style={{ color: "#ff0023" }}>Suspended</span>
          )}

          {parseInt(params.row.status) === 3 && (
            <span style={{ color: "#c105ffd4" }}>Processing</span>
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
                  NFT Networks
                </Typography>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                <InputSearch
                  placeholder="Search NFT Networks"
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
            <Link
              to="/nft-listing-network/add"
              style={{ textDecoration: "none" }}
            >
              <LargeBtn Title="Add new NFTnetwork" width={250} />
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
              : nftnetworksList && nftnetworksList?.data
          }
          setDataTableParams={setDataTableParams}
          dataTableParams={dataTableParams}
          rowCount={
            searchValue !== "" &&
            searchResult &&
            searchResult !== undefined &&
            searchResult?.length !== 0
              ? searchResult?.data?.length
              : nftnetworksList && nftnetworksList?.total
          }
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
          <Link
            to="/nft-listing-network/add"
            style={{ textDecoration: "none" }}
          >
            <LargeBtn Title="Add new NFT network" width={250} />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default NFTNetworks;
