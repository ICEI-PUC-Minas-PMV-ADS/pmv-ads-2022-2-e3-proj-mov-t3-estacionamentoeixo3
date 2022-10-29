import React, { useEffect, useState } from "react";
import { SegmentedButtons, useTheme } from "react-native-paper";
const SegmentButtonComponent = ({ value, setValue }) => {
  const theme = useTheme();
  const [mode, setMode] = useState(value);
  useEffect(() => {
    setValue(mode);
  }, [mode]);
  return (
    <SegmentedButtons
      style={{
        marginTop: 20,
        backgroundColor: "#fff",
        borderRadius: 60,
      }}
      theme={{
        colors: {
          text: "#fff",
        },
      }}
      onValueChange={setMode}
      value={value}
      density="regular"
      buttons={[
        {
          value: "user",
          label: "Cliente",
          icon: "user",
          style: { backgroundColor: value === "user" ? "#5E5CE5" : "#FFF" },
        },
        {
          value: "park",
          label: "Estacionamento",
          icon: "car",
          style: {
            backgroundColor: value === "park" ? "#5E5CE5" : "#FFF",
          },
        },
      ]}
    />
  );
};

export default SegmentButtonComponent;
