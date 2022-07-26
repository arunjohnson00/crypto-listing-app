import { Grid, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
//import Avatar from "@mui/material/Avatar";
import moment from "moment";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";
import { listVideoRequest, searchVideoRequest } from "../../store/action";

import InputSearch from "../../components/form/input/search/InputSearch";

//const serverAPIUrl = process.env.REACT_APP_API_URL;

const Videos = () => {
  const videoList = useSelector((vdList: any) => {
    return vdList.videosReducer.listVideos;
  });
  const searchResult = useSelector((result: any) => {
    return result?.videosReducer?.search_result;
  });
  const [dataTableParams, setDataTableParams] = useState<any>({
    PageSize: 15,
    pageCount: 1,
  });

  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (searchVal: any) => {
    setSearchValue(searchVal);

    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(searchVideoRequest(searchVal, successHandler, errorHandler));
  };

  var filteredData =
    searchValue !== "" &&
    searchResult &&
    searchResult !== undefined &&
    searchResult.length !== 0
      ? searchResult?.data
      : videoList?.data;

  const dispatch = useDispatch();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(listVideoRequest(dataTableParams, successHandler, errorHandler));
  }, [dispatch, dataTableParams, setDataTableParams]);

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
      field: "id",
      headerName: "#",
      flex: 0.5,
      renderCell: (params: any) => (
        <span style={{ color: "#bebebe", fontWeight: 600 }}>{params?.id}</span>
      ),
    },
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
        <span>{moment(params.row.created_at).fromNow()}</span>
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
          {parseInt(params.row.status) === 1 && (
            <span style={{ color: "#64dd17" }}>Approved</span>
          )}

          {parseInt(params.row.status) === 2 && (
            <span style={{ color: "#d50000" }}>Processing</span>
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
            <Link to="/videos/add" style={{ textDecoration: "none" }}>
              <LargeBtn Title="Add Videos" />
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
              : videoList && videoList?.data
          }
          setDataTableParams={setDataTableParams}
          dataTableParams={dataTableParams}
          rowCount={
            searchValue !== "" &&
            searchResult &&
            searchResult !== undefined &&
            searchResult?.length !== 0
              ? searchResult?.data?.length
              : videoList && videoList?.total
          }
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack spacing={2} sx={{ alignItems: "flex-end" }}>
          {" "}
          <Link to="/videos/add" style={{ textDecoration: "none" }}>
            <LargeBtn Title="Add new video" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Videos;
