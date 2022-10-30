import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import {
  Avatar,
  Drawer,
  Paragraph,
  Text,
  TextInput,
  Title,
  useTheme,
} from "react-native-paper";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { selectDrawer, setDrawer } from "../../flux/slices/drawerMenu";
import { selectTheme } from "../../flux/slices/theme";
import user, { selectUser, setUser } from "../../flux/slices/user";

const SideBar = () => {
  const navigate = useNavigation();
  const themeSelect = useTheme();
  const dispatch = useDispatch();
  const { theme } = useSelector(selectTheme);
  const {
    drawer: { menuOpen },
  } = useSelector(selectDrawer);
  const [active, setActive] = React.useState("");
  return (
    <Drawer.Section
      title={
        <Title level="H1" style={{ color: !theme ? "#FFF" : "#000" }}>
          Menu
        </Title>
      }
      style={{
        display: menuOpen ? "flex" : "none",
        width: "50%",
        marginTop: 34,
        height: 1000,
        position: "absolute",
        backgroundColor: theme ? "#FFF" : "#000",
        color: "#FFF",
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 99999,
      }}
    >
      <Drawer.Item
        theme={{
          colors: {
            text: "#FFF",
            accent: "#FFF",
            primary: "#FFF",
            backdrop: "#fff",
            elevation: "#FFF",
            outline: "#FFF",
            background: "#FE3",
          },
        }}
        label={
          <Text
            style={{
              width: "100%",
              color: active === "first" ? "#fff" : "#000",
              fontWeight: "800",
              fontSize: 15,
            }}
          >
            Conta
          </Text>
        }
        style={{
          marginTop: 4,
          color: "#fff ",
          backgroundColor: active === "first" ? "#908FDC" : "#fff",
        }}
        icon={"user"}
        active={active === "first"}
        onPress={() => {
          setActive("first");
          navigate.navigate("Perfil");
          dispatch(setDrawer({ menuOpen: false }));
        }}
      />
      <Drawer.Item
        label={
          <Text
            style={{
              color: active === "second" ? "#fff" : "#000",
              fontWeight: "800",
              fontSize: 15,
            }}
          >
            Pagamento
          </Text>
        }
        icon={"credit-card"}
        style={{
          backgroundColor: active === "second" ? "#908FDC" : "#fff",
          marginTop: 12,
          color: "#000",
        }}
        active={active === "second"}
        onPress={() => setActive("second")}
      />
      <Drawer.Item
        label={
          <Text
            style={{
              color: active === "third" ? "#fff" : "#000",
              fontWeight: "800",
              fontSize: 15,
            }}
          >
            Histórico
          </Text>
        }
        theme={themeSelect}
        icon={"history"}
        active={active === "third"}
        style={{
          backgroundColor: active === "third" ? "#908FDC" : "#fff",
          marginTop: 12,
          color: "#000",
        }}
        onPress={() => setActive("third")}
      />

      <Drawer.Item
        label={
          <Text
            style={{
              color: "#000",
              fontWeight: "800",
              fontSize: 15,
            }}
          >
            Sair
          </Text>
        }
        style={{
          color: "#000",
          marginTop: 12,
          backgroundColor: "#fff",
        }}
        icon={"sign-out"}
        onPress={() => {}}
      />
    </Drawer.Section>
  );
};

export default SideBar;
