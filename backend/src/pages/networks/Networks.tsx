import { Grid, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import { listNetworkRequest } from "../../store/action/listNetworkAction";

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
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: "chain_id",
      label: "Chain Id",
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: "explorer_url",
      label: "Explorer URL",
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: "currency_symbol",
      label: "Currency Symbol",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "url",
      label: "Url",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "thumb_icon",
      label: "Icon",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "slug",
      label: "Slug",
      options: {
        filter: true,
        sort: false,
      },
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
