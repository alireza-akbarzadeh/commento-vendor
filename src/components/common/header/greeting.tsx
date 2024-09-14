import React, { useEffect, useState, useCallback } from "react";
import { format } from "date-fns-jalali";

export const Greeting: React.FC = React.memo(() => {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const formatDate = useCallback((date: Date) => {
    return format(date, "dd MMMM");
  }, []);

  const formatTime = useCallback((date: Date) => {
    return format(date, "HH:mm");
  }, []);

  const getGreeting = useCallback((hour: number) => {
    if (hour >= 5 && hour < 11) return "روز بخیر";
    if (hour >= 11 && hour < 14) return "ظهر بخیر";
    if (hour >= 14 && hour < 19) return "عصر بخیر";
    if (hour >= 19 && hour < 24) return "شب خوش";
    return "بامداد بخیر";
  }, []);

  const date = formatDate(currentTime);
  const time = formatTime(currentTime);
  const [hour, minute] = time.split(":");
  const greetingText = getGreeting(Number(hour));

  return (
    <div className="flex items-center gap-1 text-labelLarge">
      <p>{date}</p>
      <time>
        {minute.concat(" : ")}
        {hour}
      </time>
      <p>{`؛ ${greetingText}`}</p>
    </div>
  );
});

Greeting.displayName = "Greeting";
