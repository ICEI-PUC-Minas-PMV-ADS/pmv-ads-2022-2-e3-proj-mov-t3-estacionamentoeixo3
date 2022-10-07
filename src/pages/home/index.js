import { View } from "react-native";
import React, { Component, useState } from "react";
import { Button, Text } from "react-native-paper";

const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text theme={{ fonts: { medium: "Open Sans" } }}>Home Screen</Text>
    </View>
  );
};
export default HomeScreen;
