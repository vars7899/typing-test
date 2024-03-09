"use client";

import { cn } from "@/utils/utils";
import React from "react";

interface TimerOptions extends React.HTMLAttributes<HTMLDivElement> {
  timespan: number;
}

const Timer: React.FC<TimerOptions> = ({ className, timespan, ...rest }) => {
  const [timeElapsed, setTimeElapsed] = React.useState(timespan);

  React.useEffect(() => {
    const timerFn = window.setInterval(
      () => setTimeElapsed((prev) => prev - 1),
      1000
    );
    return () => {
      window.clearInterval(timerFn);
    };
  }, [timespan]);

  return (
    <div
      className={cn(
        "w-full h-8 bg-zinc-900 rounded-lg overflow-hidden p-[4px]",
        className
      )}
      {...rest}
    >
      <div className="rounded-md overflow-hidden h-full w-full flex items-center justify-start">
        {Array.from({ length: timeElapsed }).map(() => (
          <div
            style={{
              width: `${100 / timespan}%`,
            }}
            className={cn(`h-full pr-[4px]`)}
          >
            <div className="bg-green-800 h-full w-full animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timer;
