import React from "react";

const useWPM = (testContent: string) => {
  const [startTime, setStartTime] = React.useState<number | null>(null);
  const [endTime, setEndTime] = React.useState<number | null>(null);
  const [grossWpm, setGrossWpm] = React.useState<number>(0);
  const [keyStrokeErrors, setKeyStrokeErrors] = React.useState<Array<number>>(
    []
  );
  const [netWpm, setNetWpm] = React.useState<number>(0);
  const [accuracy, setAccuracy] = React.useState<number>(0);

  const startTypingTimer = () => setStartTime(() => Date.now());
  const endTypingTimer = () => setEndTime(() => Date.now());
  const resetWPM = () => {
    setStartTime(null);
    setEndTime(null);
    setGrossWpm(0);
    setNetWpm(0);
  };
  const addKeyStrokeError = (error: number) =>
    setKeyStrokeErrors((prev) => [...prev, error]);

  React.useEffect(() => {
    if (startTime && endTime) {
      const timeDiff = endTime - startTime;
      const words = testContent
        .split(/\s+/)
        .filter((word) => word !== "").length;
      const calcGrossWpm = Math.floor(words / (timeDiff / 60));
      const calcNetWpm =
        calcGrossWpm - Math.floor(keyStrokeErrors.length / (timeDiff / 60));
      const numberOfUniqueError = Array.from(new Set(keyStrokeErrors)).length;
      const calcAccuracy =
        Math.floor(
          (testContent.length - numberOfUniqueError) / testContent.length
        ) * 100;

      setAccuracy(calcAccuracy);
      setGrossWpm(calcGrossWpm);
      setNetWpm(calcNetWpm);
    }
  }, [startTime, endTime]);

  return {
    startTypingTimer,
    endTypingTimer,
    resetWPM,
    startTime,
    endTime,
    grossWpm,
    netWpm,
    addKeyStrokeError,
    accuracy,
  };
};

export default useWPM;
