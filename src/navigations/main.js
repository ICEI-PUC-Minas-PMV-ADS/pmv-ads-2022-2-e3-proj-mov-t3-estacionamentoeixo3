import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, HomeScreen, SingScreen, Profile } from "../pages";
import Header from "../components/header";
import SideBar from "../components/sideBar";
import { View } from "react-native";

const routes = [
  { name: "Login", component: LoginScreen, initial: true },
  { name: "Singup", component: SingScreen },
  // { name: "Dashboard", component: Dashboard },
  { name: "Home", component: HomeScreen },
  { name: "Perfil", component: Profile },
];

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      children={<SideBar />}
      screenOptions={{
        header: ({ route, navigation }) => (
          <Header route={route} navigation={navigation} />
        ),
        cardOverlay: (props) => <SideBar route={props} navigation={props} />,
      }}
    >
      {routes.map((item, index) => (
        <Stack.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
};

export default Main;
