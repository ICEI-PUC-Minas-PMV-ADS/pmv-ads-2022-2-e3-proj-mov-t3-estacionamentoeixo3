import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, Appbar, Switch, Avatar } from "react-native-paper";
import { selectTheme, setTheme } from "../../flux/slices/theme";
import {
  selectDetailNavigation,
  setDetailNavigation,
} from "../../flux/slices/detailNav";
import Icon from "react-native-vector-icons/Feather";
import SideBar from "../sideBar";
import user, { selectUser, setUser } from "../../flux/slices/user";
import { NavigationHelpersContext } from "@react-navigation/native";
import { selectDrawer, setDrawer } from "../../flux/slices/drawerMenu";

const Header = ({ route, navigation }) => {
  const themeSTyle = useTheme();
  const dispatch = useDispatch();
  const { theme } = useSelector(selectTheme);
  const {
    detailNavigation: { state },
  } = useSelector(selectDetailNavigation);
  const {
    drawer: { menuOpen },
  } = useSelector(selectDrawer);
  const handlerStateSwitch = () => dispatch(setTheme(!theme));
  return (
    <Appbar.Header
      dark={true}
      statusBarHeight={1}
      style={{
        height: 34,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      theme={{
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
          justifyContent: "space-around",
        }}
      >
        <Icon
          name={"arrow-left"}
          style={{
            marginTop: -2,
            marginStart: 20,
            fontWeight: "bold",
            display:
              (!state && route.name === "Home") ||
              (route.name === "Login" || route.name === "Singup")
                ? "none"
                : "flex",
          }}
          size={30}
          color={theme ? "#5E5CE5" : "hsl(48, 100%, 70%)"}
          brand={true}
          onPress={() => {
            if (route.name === "Home") {
              dispatch(setDetailNavigation({ state: !state }));
            } else {
              dispatch(setDetailNavigation({ state: true }));
              navigation.navigate("Home");
              dispatch(setDrawer({ menuOpen: false }));
            }
          }}
        />

        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Icon
            name={theme ? "moon" : "sun"}
            style={{ marginTop: -2 }}
            size={29}
            color={theme ? "#5E5CE5" : "hsl(48, 100%, 70%)"}
            brand={true}
          />
          <Switch
            style={[{ marginTop: -2 }]}
            color={theme ? "#fff" : "#000"}
            value={theme}
            thumbColor={theme ? "#000" : "#fff"}
            onChange={handlerStateSwitch}
          />
          <Icon
            name={!menuOpen ? "menu" : "x"}
            style={{
              marginTop: -2,
              marginRight: 20,
              marginLeft: 4,
              display:
                route.name === "Home" || route.name === "Perfil"
                  ? "flex"
                  : "none",
            }}
            size={29}
            color={theme ? "#5E5CE5" : "hsl(48, 100%, 70%)"}
            brand={true}
            onPress={() => dispatch(setDrawer({ menuOpen: !menuOpen }))}
          />
        </View>
      </View>
    </Appbar.Header>
  );
};

export default Header;
