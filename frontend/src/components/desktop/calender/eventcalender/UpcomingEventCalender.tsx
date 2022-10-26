import { useEffect, useState, useRef } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPickerSkeleton } from "@mui/x-date-pickers/CalendarPickerSkeleton";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Badge, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { eventsUpcomingRequest } from "../../../../store/action";
import moment from "moment";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function getRandomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date: Dayjs, { signal }: { signal: AbortSignal }) {
  return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() =>
        getRandomNumber(1, daysInMonth)
      );

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const initialValue = dayjs("2022-04-07");

const UpcomingEventCalender = ({ date, setDate, dateHandler }: any) => {
  const dispatch: any = useDispatch();
  const eventsUpcoming = useSelector((data: any) => {
    return data?.eventsReducer?.events_upcoming?.data;
  });
  const requestAbortController = useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState<any>([]);
  const [value, setValue] = useState<Dayjs | null>(initialValue);

  const fetchHighlightedDays = (date: Dayjs) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        // setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  useEffect(() => {
    fetchHighlightedDays(initialValue);

    return () => requestAbortController.current?.abort();
  }, []);

  useEffect(() => {
    const initialflDays: any = eventsUpcoming?.data?.data
      ?.filter(
        (val: any) =>
          moment(val.event_date).isSame(moment(new Date()), "month") === true
      )
      .map((item: any) => moment(item.event_date).format("DD"))
      .map((i: any) => Number(i));
    console.log(initialflDays);
    setHighlightedDays(initialflDays);
  }, [eventsUpcoming]);

  const handleMonthChange = (date: any) => {
    if (requestAbortController.current) {
      //   // make sure that you are aborting useless requests
      //   // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    const flDays = eventsUpcoming?.data?.data
      ?.filter(
        (val: any) => moment(val.event_date).isSame(date, "month") === true
      )
      .map((item: any) => moment(item.event_date).format("DD"))
      .map((i: any) => Number(i));

    // setIsLoading(true);
    setHighlightedDays(flDays);
    fetchHighlightedDays(date);
  };

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(eventsUpcomingRequest("noData", successHandler, errorHandler));
  }, [dispatch, setValue, value]);

  console.log(eventsUpcoming?.data?.data);
  return (
    <Box
      sx={{ backgroundColor: "#030C37", borderRadius: 5, color: "#FFFFF5" }}
      mt={{ xs: 3, sm: 3, md: 7 }}
    >
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CalendarPicker
            date={date}
            onChange={(newDate) => dateHandler(newDate)}
            loading={isLoading}
            onMonthChange={handleMonthChange}
            renderDay={(day: any, _value, DayComponentProps) => {
              const isSelected =
                !DayComponentProps.outsideCurrentMonth &&
                highlightedDays?.length > 0 &&
                highlightedDays.indexOf(day.getDate()) >= 0;
              return (
                <>
                  <Badge
                    key={day.toString()}
                    overlap="circular"
                    badgeContent={isSelected ? "🟢" : undefined}
                  >
                    <PickersDay {...DayComponentProps} />
                  </Badge>
                </>
              );
            }}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </Box>
  );
};

export default UpcomingEventCalender;
