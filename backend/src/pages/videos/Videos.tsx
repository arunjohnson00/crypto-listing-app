import { Grid, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
//import Avatar from "@mui/material/Avatar";
import moment from "moment";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import { listVideoRequest } from "../../store/action";

import InputSearch from "../../components/form/input/search/InputSearch";

//const serverAPIUrl = process.env.REACT_APP_API_URL;

const Videos = () => {
  const videoList = useSelector((vdList: any) => {
    return vdList.videosReducer.listVideos.data;
  });

  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (searchVal: any) => {
    setSearchValue(searchVal);
  };

  var filteredData = searchValue
    ? videoList.filter((flData: any) => {
        return flData.v_name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : videoList;

  const dispatch = useDispatch();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(listVideoRequest("emptyData", successHandler, errorHandler));
  }, [dispatch]);

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
      flex: 1,
    },

    {
      field: "approved_at",
      headerName: "Approved",
      flex: 1,
      renderCell: (params: any) => (
        // <span>{moment(params.row.created_at).fromNow()}</span>
        <span>
          {
            //console.log(new Date(params.row.approved_at).toISOString())
          }
          {params.row.approved_at !== null
            ? moment(params.row.approved_at).fromNow()
            : "Waiting"}
        </span>
      ),
      //<span>{moment("2022-04-25T09:51:52.000000Z").fromNow()}</span>
    },

    {
      field: "created_at",
      headerName: "Careated",
      flex: 1,
      renderCell: (params: any) => (
        //params.row.approved_at,
        <span>
          {console.log(params.row.created_at)}
          {moment(params.row.created_at).fromNow()}
        </span>
      ),
      //<span>{moment("2022-04-25T09:51:52.000000Z").fromNow()}</span>
    },

    {
      field: "v_title",
      headerName: "Video Title",
      flex: 1,
    },
    {
      field: "v_sub_title",
      headerName: "Video subtitle",
      flex: 1,
    },

    {
      field: "v_url",
      headerName: "Video URL",
      flex: 1,
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
            <span style={{ color: "#d50000" }}>Processing</span>
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
                  Videos
                </Typography>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                <InputSearch
                  placeholder="Search Videos"
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
            <Link to="/videos/add">
              <LargeBtn Title="Add Videos" />
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
          <Link to="/videos/add">
            <LargeBtn Title="Add new video" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Videos;
