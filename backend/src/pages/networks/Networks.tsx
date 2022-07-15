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
    return ntList.networksReducer.listNetworks.data;
  });
  const rowCount = useSelector((ntList: any) => {
    return ntList.networksReducer.listNetworks.total;
  });
  const [searchValue, setSearchValue] = useState("");
  const [dataTableParams, setDataTableParams] = useState<any>({
    PageSize: 15,
    pageCount: 1,
  });

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
    dispatch(listNetworkRequest(dataTableParams, successHandler, errorHandler));
  }, [dispatch, dataTableParams, setDataTableParams]);

  const tableColumn = [
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
          src={`${serverAPIUrl}public/uploads/network_icons/${params.row.thumb_icon}`}
          alt={params.thumb_icon}
        />
      ),
    },

    {
      field: "chain_id",
      headerName: "Chain ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "currency_symbol",
      headerName: "Symbol",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

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
      field: "url",
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
            <span style={{ color: "#64dd17" }}>Approved</span>
          )}

          {parseInt(params.row.status) === 2 && (
            <span style={{ color: "#d50000" }}>Pending</span>
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
        <DataTables
          tableColumn={tableColumn && tableColumn}
          tableData={filteredData && filteredData}
          setDataTableParams={setDataTableParams}
          dataTableParams={dataTableParams}
          rowCount={rowCount && rowCount}
          data={networkList && networkList}
        />
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
