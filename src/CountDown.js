import React from "react";

const CountDownTimer = ({ targetDate }) => {
  function timeRemaining(targetDate) {
    const currentTime = Date.now();
    const timeDifference = targetDate - currentTime;
    const secsFactor = 1000;
    const minsFactor = secsFactor * 60;
    const hrsFactor = minsFactor * 60;

    const hrs = Math.floor(timeDifference / hrsFactor);
    const mins = Math.floor((timeDifference - hrs * hrsFactor) / minsFactor);
    const secs = Math.floor(
      (timeDifference - hrs * hrsFactor - mins * minsFactor) / secsFactor
    );
    const outputString = `${hrs.toString().padStart(1, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    if (timeDifference > 0) {
      return outputString;
    } else {
      return outputString + ' IMPORTANT: You will need to reload your browser for new hints to appear'
    }
  }

  /* A bunch of copy-pasted garbage code so this page will update every second */
  const { hours = 0, minutes = 0, seconds = 60 } = {};
  const [[hrs, mins, secs], setTime] = React.useState([
    hours,
    minutes,
    seconds,
  ]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () =>
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return <span>{timeRemaining(targetDate)}</span>;
};

export default CountDownTimer;
