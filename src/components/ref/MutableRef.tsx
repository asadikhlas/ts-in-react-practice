import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, settimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      settimer((prevtimer) => prevtimer + 1);
    }, 1000);

    return () => {
      clearTimer();
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearTimer()}>Clear Hook Timer</button>
    </div>
  );
};
