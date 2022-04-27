import { Grid, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
import Avatar from "@mui/material/Avatar";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import { listCoinRequest } from "../../store/action";
import InputSearch from "../../components/form/input/search/InputSearch";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const CoinListing = () => {
  const coinList = useSelector((cnList: any) => {
    return cnList.listCoinReducer.coinListAll.data;
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

  console.log(filteredData);
  const dispatch = useDispatch();

  const successHandler = (res: any) => {
    console.log(res);
  };

  const errorHandler = (err: any) => {
    console.log(err);
  };
  useEffect(() => {
    dispatch(listCoinRequest("emptyData", successHandler, errorHandler));
  }, [dispatch]);

  const tableColumn = [
    {
      field: "thumb_icon",
      headerName: "Icon",
      width: 140,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params: any) => (
        <Avatar
          src={`${serverAPIUrl}public/uploads/exchange_icons/${params.row.thumb_icon}`}
          alt={params.thumb_icon}
        />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 140,
    },

    {
      field: "url",
      headerName: "Url",
      width: 140,
    },

    {
      field: "slug",
      headerName: "Slug",
      width: 140,
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
                  placeholder="Search Exchanges"
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
