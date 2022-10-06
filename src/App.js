import * as React from "react";
import 'react-native-gesture-handler';
import Main from "./navigations/main.js";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import merge from "deepmerge";
import { PreferencesContext } from "./contexts";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

function App() {
  const [isThemeDark, setIsTheme] = React.useState(true);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const setIsThemeDark = React.useCallback(() => {
    return setIsTheme(!isThemeDark);
  }, [isThemeDark]);

  const values = React.useMemo(
    () => ({
      isThemeDark,
      setIsThemeDark,
    }),
    [isThemeDark, setIsThemeDark]
  );

  return (
    <PreferencesContext.Provider value={values}>
      <PaperProvider theme={theme}>
        <NavigationContainer
          theme={theme}
          children={<Main />}
        ></NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

export default App;
