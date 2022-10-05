import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, HomeScreen } from "../pages";

const routes = [
  { name: "Home", component: HomeScreen },
  { name: "Login", component: LoginScreen },
];

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      {routes.map((item, index) => (
        <Stack.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Stack.Navigator>
  );
};

export default Main;
