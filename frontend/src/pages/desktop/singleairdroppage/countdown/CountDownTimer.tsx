import { useEffect, useState } from "react";

import moment from "moment";
import { Box, Stack, Typography } from "@mui/material";

export default function CountDownTimer({ data }: any) {
  const [duration, setDuration] = useState<any>("");
  const [now, setNow] = useState<any>("");
  const [days, setDays] = useState<any>("");
  const [hours, setHours] = useState<any>("");
  const [minutes, setMinutes] = useState<any>("");
  const [seconds, setSeconds] = useState<any>("");
  const [load, setLoad] = useState<any>(true);
  useEffect(() => {
    const now = setInterval(() => {
      setNow(new Date().toLocaleString());
    }, 1000);
    console.log(new Date());
    console.log(moment(new Date()).unix());
    console.log(moment(new Date()).add(240, "day"));
    return () => clearInterval(now);
  }, []);

  const countdownTime = (diff: any) => {
    const d: any = Math.floor(diff / (3600 * 24));
    const h: any = Math.floor((diff % (3600 * 24)) / 3600);
    const m: any = Math.floor((diff % 3600) / 60);
    const s: any = Math.floor(diff % 60);
    setDays(d);
    setHours(h);
    setMinutes(m);
    setSeconds(s);
    setLoad(false);
    //console.log(d, h, m, s);
  };

  useEffect(() => {
    const start = moment(now);
    const end = moment(new Date(data).toLocaleString());
    const diff = end.diff(start, "seconds");
    setDuration(diff);
    duration > 0 && countdownTime(duration);
  }, [now]);
  //console.log(duration);
  return (
    <div>
      {load ? (
        <p>Loading...</p>
      ) : (
        <Stack direction="column" alignItems="center" spacing={1.5} pb={2}>
          <Box
            sx={{
              backgroundColor: " #00071A",
              borderRadius: 6,
              minWidth: 150,
            }}
            px={2}
            py={1.5}
          >
            <Stack direction="column" alignItems="center">
              <Stack direction="row" alignItems="center" spacing={3}>
                <Stack direction="column" alignItems="center">
                  {" "}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.7rem",
                      fontWeight: 600,
                    }}
                  >
                    {days}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    Day
                  </Typography>
                </Stack>
                <Stack direction="column" alignItems="center">
                  {" "}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.7rem",
                      fontWeight: 600,
                    }}
                  >
                    {hours}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    Hour
                  </Typography>
                </Stack>
                <Stack direction="column" alignItems="center">
                  {" "}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.7rem",
                      fontWeight: 600,
                    }}
                  >
                    {minutes}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    Min
                  </Typography>
                </Stack>
                <Stack direction="column" alignItems="center">
                  {" "}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.7rem",
                      fontWeight: 600,
                    }}
                  >
                    {seconds}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    Sec
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      )}
    </div>
  );
}
