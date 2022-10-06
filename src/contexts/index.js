import React from "react";

export const PreferencesContext = React.createContext({
  setIsThemeDark: () => {},
  isThemeDark: false,
});
