import React from "react";
import { Screen, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../home";
import Profile from "../profile";

const Dashboard = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator shifting={false}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Dashboard;
