import React from "react";
import Main from "../../navigations/main.js";
import {
  NavigationContainer,
  useNavigationState,
} from "@react-navigation/native";
import {
  BottomNavigation,
  Text,
  Provider as PaperProvider,
} from "react-native-paper";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { darkTheme, defaultTheme } from "../../@theme/index.js";
import { useSelector } from "react-redux";
import { selectTheme } from "../../flux/slices/theme.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const LayoutProvider = () => {
  const { theme } = useSelector(selectTheme);

  const themeSelect = theme ? darkTheme : defaultTheme;

  return (
    <PaperProvider
      theme={themeSelect}
      settings={{ icon: (props) => <AwesomeIcon {...props} /> }}
    >
      <StatusBar
        barStyle={theme ? "dark-content" : "light-content"}
        showHideTransition={"fade"}
        backgroundColor={themeSelect.colors.background}
      />
      <NavigationContainer
        theme={themeSelect}
        children={<Main />}
      ></NavigationContainer>
    </PaperProvider>
  );
};

export default LayoutProvider;
