import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, Appbar, Switch, Avatar } from "react-native-paper";
import { selectTheme, setTheme } from "../../flux/slices/theme";
import Icon from "react-native-vector-icons/Feather";

const Header = ({ route, navigation }) => {
  const themeSTyle = useTheme();
  const dispatch = useDispatch();
  const { theme } = useSelector(selectTheme);
  const handlerStateSwitch = () => dispatch(setTheme(!theme));

  return (
    <Appbar.Header
      dark={true}
        statusBarHeight={1}
      style={{
        height: 34,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      theme={{
        dark: true,
        mode: "",
        colors: {
          primary: themeSTyle.colors.background,
        },
      }}
    >
      <View
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingEnd: 11,
        }}
      >
        <Icon
          name={theme ? "moon" : "sun"}
            style={{marginTop:-2}}
          size={29}
          color={theme ? "#5E5CE5" : "hsl(48, 100%, 70%)"}
          brand={true}
        />
        <Switch
          style={[{ marginTop:-2}]}
          color={theme ? "#fff" : "#000"}
          value={theme}
          thumbColor={theme ? "#000" : "#fff"}
          onChange={handlerStateSwitch}
        />
      </View>
    </Appbar.Header>
  );
};

export default Header;
