import { useState, useEffect } from "react";
import { View, Text } from "react-native";

const Clock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setHours(now.getHours());
      setMinutes(now.getMinutes());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return <Text className="text-4xl">{`${hours}:${minutes}`}</Text>;
};

export default Clock;
