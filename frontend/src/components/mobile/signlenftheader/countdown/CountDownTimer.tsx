import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CountDownTimer = (targetDate: any) => {
  const location = useLocation();
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate, location]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: any) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const daysFormatted = days ? `${days}D ` : null;
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const hoursFormatted = hours ? `${hours}H ` : null;
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const minutesFormatted = minutes ? `${minutes}M ` : null;
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  const secondsFormatted = seconds ? `${seconds}S` : null;

  return [
    daysFormatted,
    hoursFormatted,
    minutesFormatted,
    secondsFormatted,
  ].join(" ");
};

export { CountDownTimer };
