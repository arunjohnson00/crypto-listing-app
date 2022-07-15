import { Grid, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LargeBtn from "../../components/form/button/large/LargeBtn";
import Avatar from "@mui/material/Avatar";
import { listEventsRequest } from "../../store/action";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import DataTables from "../../components/tables/datatables/DataTables";

import InputSearch from "../../components/form/input/search/InputSearch";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const Events = () => {
  const eventsList = useSelector((evnList: any) => {
    return evnList.eventsReducer.listEvents.data;
  });
  const rowCount = useSelector((evnList: any) => {
    return evnList.eventsReducer.listEvents.total;
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
    ? eventsList.filter((flData: any) => {
        return flData.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    : eventsList;

  const dispatch = useDispatch();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(listEventsRequest(dataTableParams, successHandler, errorHandler));
  }, [dispatch, dataTableParams, setDataTableParams]);

  const tableColumn = [
    {
      field: "coin_id",
      headerName: "Coin ID",
      flex: 1,
    },
    {
      field: "thumb_icon",
      headerName: "Icon",
      flex: 1,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params: any) => (
        <Avatar
          src={`${serverAPIUrl}public/uploads/event_proof/${params.row.proof}`}
          alt={params.thumb_icon}
        />
      ),
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },

    {
      field: "category_id",
      headerName: "Category ID",
      flex: 1,
    },

    {
      field: "event_date",
      headerName: "Event Date",
      flex: 1,
    },
    {
      field: "or_earlier",
      headerName: "Earlier",
      flex: 1,
      renderCell: (params: any) =>
        parseInt(params.row.or_earlier) === 1 ? (
          <span style={{ color: "green" }}>yes</span>
        ) : (
          <span style={{ color: "red" }}>No</span>
        ),
    },

    {
      field: "source_link",
      headerName: "Source Link",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
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
                  Events
                </Typography>
              </Grid>
              <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                <InputSearch
                  placeholder="Search Events"
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
            <Link to="/events/add">
              <LargeBtn Title="Add new Events" />
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
          data={eventsList && eventsList}
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          {" "}
          <Link to="/events/add">
            <LargeBtn Title="Add new Events" />
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Events;
