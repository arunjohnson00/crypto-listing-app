import { useEffect, useState } from "react";

import moment from "moment";

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
        <p
          style={{
            color: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
          }}
        >
          {parseInt(days) !== 0 && <span>{days} Day</span>}{" "}
          {parseInt(hours) !== 0 && <span>{hours} Hr</span>}{" "}
          {parseInt(minutes) !== 0 && <span>{minutes} Min</span>}{" "}
          {parseInt(seconds) !== 0 && <span>{seconds} Sec</span>}{" "}
        </p>
      )}
    </div>
  );
}
