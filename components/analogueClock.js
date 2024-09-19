"use client";
import React, { useEffect, useState } from "react";

const AnalogueClock = () => {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [updateTime, setUpdateTime] = useState(true);

  const calTime = () => {
    const dateTime = new Date();

    setSeconds(dateTime.getSeconds());
    setMinutes(dateTime.getMinutes());
    setHours(dateTime.getHours());

    setUpdateTime(false);

    setTimeout(() => {
      setUpdateTime(true);
    }, 1000);
    // if (seconds < 60) {
    //   setTimeout(() => {
    //     setSeconds(seconds + 1);
    //   }, 1000);
    // } else {
    //   if (minutes < 60) {
    //     setMinutes(minutes + 1);
    //   } else {
    //     if(hours)
    //     setHours(hours + 1);
    //   }
    // }
  };

  useEffect(() => {
    if (updateTime) calTime();
  }, [updateTime]);

  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center p-20">
      <div
        className="w-96 h-96 flex items-start justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/clock_dial.webp')" }}
      >
        <h1 className="text-4xl"><strong>{hours}</strong> : <strong>{minutes}</strong> : <strong>{seconds}</strong></h1>
        {/* <span className="h-48 border-l-2 border-black rotate-45 origin-bottom"></span>
        <span className="h-40 border-l-4 border-black rotate-45 origin-bottom"></span>
        <span className="h-28 border-l-8 border-black rotate-45 origin-bottom"></span> */}
      </div>
    </div>
  );
};

export default AnalogueClock;
