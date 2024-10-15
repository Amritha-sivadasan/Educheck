"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

function Timer() {
  const [time, setTime] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return ` ${hours == 0 ? "00" : ""}:${mins < 10 ? "0" : ""}${mins}:${
      secs < 10 ? "0" : ""
    }${secs}`;
  };
  const timeStle = time < 359 ? "text-red-500" : "text-gray-500";

  return (
    <Button
      className={`h-6 rounded bg-secondary hover:bg-secondary ${timeStle}`}
    >
      {formatTime(time)}
    </Button>
  );
}

export default Timer;
