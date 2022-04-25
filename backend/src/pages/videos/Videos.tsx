import { Grid, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
//import Avatar from "@mui/material/Avatar";
import moment from "moment";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import { listVideoRequest } from "../../store/action";

//const serverAPIUrl = process.env.REACT_APP_API_URL;

const Videos = () => {
  const videoList = useSelector((vdList: any) => {
    return vdList.listVideoReducer.videoListAll.data;
  });

  console.log(videoList);
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
    dispatch(listVideoRequest(pageData, successHandler, errorHandler));
  }, [dispatch, pageData]);

  const tableColumn = [
    // {
    //   field: "thumb_icon",
    //   headerName: "Icon",
    //   width: 140,
    //   sortable: false,
    //   disableClickEventBubbling: true,
    //   renderCell: (params: any) => (
    //     <Avatar
    //       src={`${serverAPIUrl}public/uploads/network_icons/t/${params.row.thumb_icon}`}
    //       alt={params.thumb_icon}
    //     />
    //   ),
    // },
    {
      field: "v_name",
      headerName: "Video Name",
      width: 140,
    },

    {
      field: "approved_at",
      headerName: "Approved",
      width: 140,
      renderCell: (params: any) => (
        <span>{moment(params.row.approved_at).fromNow()}</span>
        //<span>{moment("2022-04-25T09:51:52.000000Z").fromNow()}</span>
      ),
    },

    {
      field: "created_at",
      headerName: "Careated",
      width: 140,
      renderCell: (params: any) => (
        <span>{moment(params.row.created_at).fromNow()}</span>
        //<span>{moment("2022-04-25T09:51:52.000000Z").fromNow()}</span>
      ),
    },

    {
      field: "v_title",
      headerName: "Video Title",
      width: 140,
    },
    {
      field: "v_sub_title",
      headerName: "Video subtitle",
      width: 140,
    },

    {
      field: "v_url",
      headerName: "Video URL",
      width: 140,
    },
    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params: any) => (
        <span>
          {params.row.status === 1 && (
            <span style={{ color: "#64dd17" }}>Approved</span>
          )}

          {params.row.status === 2 && (
            <span style={{ color: "#d50000" }}>Pending</span>
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
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Videos
        </Typography>
      </Grid>

      <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
          {" "}
          <Link to="/videos/add">
            <LargeBtn Title="Add new video" />
          </Link>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTables
          tableColumn={tableColumn}
          tableData={videoList}
          setPageData={setPageData}
          pageData={pageData}
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
          {" "}
          <Link to="/videos/add">
            <LargeBtn Title="Add new video" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Videos;
