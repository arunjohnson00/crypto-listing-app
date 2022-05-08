import { Grid, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
import Avatar from "@mui/material/Avatar";
import moment from "moment";
import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import { listCoinRequest } from "../../store/action";
import InputSearch from "../../components/form/input/search/InputSearch";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const CoinListing = () => {
  const coinList = useSelector((cnList: any) => {
    return cnList.coinReducer.listCoins.data;
  });

  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (searchVal: any) => {
    setSearchValue(searchVal);
  };

  var filteredData = searchValue
    ? coinList.filter((flData: any) => {
        return flData.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : coinList;

  const dispatch = useDispatch();

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(listCoinRequest("emptyData", successHandler, errorHandler));
  }, [dispatch]);

  const tableColumn = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "logo",
      headerName: "Icon",
      flex: 1,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params: any) => (
        <Avatar
          src={`${serverAPIUrl}public/uploads/coin_logo/${params.row.logo}`}
          alt={params.logo}
        />
      ),
    },
    {
      field: "is_presale",
      headerName: "Is Presale",
      flex: 1,
      renderCell: (params: any) =>
        params.row.is_presale === 1 ? (
          <span style={{ color: "green" }}>yes</span>
        ) : (
          <span style={{ color: "red" }}>No</span>
        ),
    },

    {
      field: "created_at",
      headerName: "Submitted",
      flex: 1,
      renderCell: (params: any) => (
        <span>{moment(params.row.created_at).fromNow()}</span>
      ),
    },

    {
      field: "network_id",
      headerName: "Network Id",
      flex: 1,
    },

    {
      field: "explorer_link",
      headerName: "Block explorer url",
      flex: 1,
      renderCell: (params: any) => (
        <span style={{ color: "blue" }}>{params.row.explorer_link}</span>
      ),
    },

    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params: any) => (
        <span>
          {params.row.status === 1 && (
            <span style={{ color: "#64dd17" }}>Approved</span>
          )}

          {params.row.status === 2 && (
            <span style={{ color: "#d50000" }}>Scheduled</span>
          )}

          {params.row.status === 3 && (
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
                  Coin Listing
                </Typography>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                <InputSearch
                  placeholder="Search Coin"
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
            <Link to="/coins/add">
              <LargeBtn Title="Add new coins" />
            </Link>
          </Grid>
        </Stack>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTables tableColumn={tableColumn} tableData={filteredData} />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          {" "}
          <Link to="/coins/add">
            <LargeBtn Title="Add new coins" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CoinListing;
