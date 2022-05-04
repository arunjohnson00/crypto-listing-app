import { Grid, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
import Avatar from "@mui/material/Avatar";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import InputSearch from "../../components/form/input/search/InputSearch";
import { listNetworkRequest } from "../../store/action";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const Networks = () => {
  const networkList = useSelector((ntList: any) => {
    return ntList.listNetworkReducer.natworkListAll.data;
  });

  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (searchVal: any) => {
    setSearchValue(searchVal);
  };

  var filteredData = searchValue
    ? networkList.filter((flData: any) => {
        return flData.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : networkList;

  const dispatch = useDispatch();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(listNetworkRequest("emptyData", successHandler, errorHandler));
  }, [dispatch]);

  const tableColumn = [
    {
      field: "thumb_icon",
      headerName: "Icon",
      flex: 1,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params: any) => (
        <Avatar
          src={`${serverAPIUrl}public/uploads/network_icons/t/${params.row.thumb_icon}`}
          alt={params.thumb_icon}
        />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },

    {
      field: "chain_id",
      headerName: "Chain Id",
      flex: 1,
    },

    {
      field: "explorer_url",
      headerName: "Explorer URL",
      flex: 1,
    },

    {
      field: "currency_symbol",
      headerName: "Currency Symbol",
      flex: 1,
    },
    {
      field: "url",
      headerName: "Url",
      flex: 1,
    },

    {
      field: "slug",
      headerName: "Slug",
      flex: 1,
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
                  Networks
                </Typography>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                <InputSearch
                  placeholder="Search Networks"
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
            <Link to="/networks/add">
              <LargeBtn Title="Add new network" />
            </Link>
          </Grid>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTables tableColumn={tableColumn} tableData={filteredData} />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
          {" "}
          <Link to="/networks/add">
            <LargeBtn Title="Add new network" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Networks;
