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
  const daysFormatted = days ? `${days}D ` : "0D ";
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const hoursFormatted = hours ? `${hours}H ` : "0H ";
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const minutesFormatted = minutes ? `${minutes}M ` : "0M ";
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  const secondsFormatted = seconds ? `${seconds}S ` : "0S ";

  return [
    daysFormatted,
    hoursFormatted,
    minutesFormatted,
    secondsFormatted,
  ].join(" ");
};

export { CountDownTimer };
