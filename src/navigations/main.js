import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { LoginScreen, HomeScreen } from "../pages";
import Header from "../components/header";
import { useNavigation } from "@react-navigation/native";
const routes = [
  { name: "Home", component: HomeScreen },
  { name: "Login", component: LoginScreen },
];

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      {routes.map((item, index) => (
        <Stack.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
};

export default Main;
