import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, HomeScreen, SingScreen, LoginAdm } from "../pages";
import Header from "../components/header";


const routes = [
    // { name: "Login", "component": LoginScreen },
    // { name: "Singup", component: SingScreen },
    // { name: "Home", component: HomeScreen },
    { name: "LoginAdm", component: LoginAdm },
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
