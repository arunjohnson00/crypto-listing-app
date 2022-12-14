import { useEffect, useState } from "react";

const CountDownTimer = (targetDate: any) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: any) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const daysFormatted = days ? `${days}d :` : "0d :";
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const hoursFormatted = hours ? `${hours}h :` : "0h :";
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const minutesFormatted = minutes ? `${minutes}m :` : "0m :";
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  const secondsFormatted = seconds ? `${seconds}s` : "0s";

  return [
    daysFormatted,
    hoursFormatted,
    minutesFormatted,
    secondsFormatted,
  ].join(" ");
};

export { CountDownTimer };
