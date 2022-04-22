import { Grid, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
import Avatar from "@mui/material/Avatar";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import { listNetworkRequest } from "../../store/action/listNetworkAction";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const Networks = () => {
  const networkList = useSelector((ntList: any) => {
    return ntList.listNetworkReducer.natworkListAll.data;
  });

  console.log(networkList);
  const [pageData, setPageData] = useState({
    page: 0,
    count: 1,
    rowPerPage: 100,
    data: [["Loading Data..."]],
    isLoading: false,
  });
  console.log(pageData);
  const dispatch = useDispatch();

  const successHandler = (res: any) => {
    console.log(res);
  };

  const errorHandler = (err: any) => {
    console.log(err);
  };
  useEffect(() => {
    dispatch(listNetworkRequest(pageData, successHandler, errorHandler));
  }, [dispatch, pageData]);

  const tableColumn = [
    {
      field: "thumb_icon",
      headerName: "Icon",
      width: 140,
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
      width: 140,
    },

    {
      field: "chain_id",
      headerName: "Chain Id",
      width: 140,
    },

    {
      field: "explorer_url",
      headerName: "Explorer URL",
      width: 140,
    },

    {
      field: "currency_symbol",
      headerName: "Currency Symbol",
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
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Networks
        </Typography>
      </Grid>

      <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
          {" "}
          <Link to="/networks/add">
            <LargeBtn Title="Add new network" />
          </Link>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTables
          tableColumn={tableColumn}
          tableData={networkList}
          setPageData={setPageData}
          pageData={pageData}
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
