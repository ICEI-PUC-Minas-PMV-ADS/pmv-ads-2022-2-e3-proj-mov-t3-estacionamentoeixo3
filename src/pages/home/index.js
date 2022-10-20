import { View } from "react-native";
import React, { Component, useState } from "react";
import { Button, Text } from "react-native-paper";
import {MapsComponent} from '../../components/maps'
const HomeScreen = (props) => {
  return (
    <View style={{ display:'flex', alignItems: "center", justifyContent: "center",height:500 }}>
      <Text theme={{ fonts: { medium: "Open Sans" } }}>Home Screen</Text>
        <MapsComponent/>
    </View>
  );
};
export default HomeScreen;
