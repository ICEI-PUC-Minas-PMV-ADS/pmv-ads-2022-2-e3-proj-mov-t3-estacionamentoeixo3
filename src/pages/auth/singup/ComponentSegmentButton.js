import React, { useEffect, useState } from "react";
import { SegmentedButtons } from "react-native-paper";
const SegmentButton = ({ value, setValue }) => {
  const [mode, setMode] = useState("user");
  useEffect(() => {
    setValue(mode);
  }, [mode]);
  return (
    <SegmentedButtons
      value={mode}
      onValueChange={setMode}
      density="small"
      buttons={[
        {
          value: "user",
          label: "Cliente",
          icon: "employee",
        },
        {
          value: "adm",
          label: "Park",
          icon: "busines",
        },
      ]}
    />
  );
};

export default SegmentButton;
