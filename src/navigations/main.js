import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  HomeScreen,
  SingScreen,
  LoginAdm,
  Dashboard,
} from "../pages";
import Header from "../components/header";

const routes = [
  // { name: "Login", component: LoginScreen },
  // { name: "Singup", component: SingScreen },
  // { name: "Dashboard", component: Dashboard },
  { name: "Home", component: HomeScreen },
];

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route, navigation }) => (
          <Header route={route} navigation={navigation} />
        ),
      }}
    >
      {routes.map((item, index) => (
        <Stack.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
};

export default Main;
