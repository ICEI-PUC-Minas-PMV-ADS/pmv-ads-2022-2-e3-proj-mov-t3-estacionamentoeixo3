import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import merge from "deepmerge";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const defaultTheme = {
  ...CombinedDefaultTheme,
  colors: {
    primary: "#5E5CE5",
    notification: "#908FDC",
    background: "#0D0D0D",
    suferace: "#262626",
    accent: "#F27D16",
    disabled: "#959595",
    text: "#fff",
  },
};

const darkTheme = {
  ...CombinedDarkTheme,
  colors: {
    primary: "#5E5CE5",
    notification: "#908FDC",
    background: "#fff",
    suferace: "#262626",
    accent: "#F27D16",
    disabled: "#959595",
    text: "#262626",
  },
};

export { darkTheme, defaultTheme };
