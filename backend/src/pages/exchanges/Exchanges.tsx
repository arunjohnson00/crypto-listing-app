import { Grid, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
import Avatar from "@mui/material/Avatar";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import { listExchangeRequest } from "../../store/action";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const Exchanges = () => {
  const exchangeList = useSelector((exList: any) => {
    return exList.listExchangeReducer.exchangeListAll.data;
  });

  console.log(exchangeList);
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
    dispatch(listExchangeRequest(pageData, successHandler, errorHandler));
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
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Exchanges
        </Typography>
      </Grid>

      <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
          {" "}
          <Link to="/exchange/add">
            <LargeBtn Title="Add new exchange" />
          </Link>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTables
          tableColumn={tableColumn}
          tableData={exchangeList}
          setPageData={setPageData}
          pageData={pageData}
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
          {" "}
          <Link to="/exchange/add">
            <LargeBtn Title="Add new exchange" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Exchanges;
