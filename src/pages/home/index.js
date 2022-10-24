import { ScrollView, ScrollViewBase, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import {
  Button,
  Text,
  TextInput,
  Searchbar,
  useTheme,
  List,
} from "react-native-paper";
import { MapsComponent } from "../../components/maps";
import { selectTheme } from "../../flux/slices/theme";
import { useDispatch, useSelector } from "react-redux";
import api from "../../axios/api";
import { selectPark, setPark } from "../../flux/slices/park";

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  //const {theme} = useSelector(selectTheme)
  const { park } = useSelector(selectPark);
  const themeSelect = useTheme();

  useEffect(() => {
    handlleRequestBackend();
    //console.log(park.parks);
  });

  const handlleRequestBackend = async () => {
    try {
      const respo = await api.get("/parkLocations");
      dispatch(setPark({ ...park, parks: respo.data }));
    } catch (err) { }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          display: "flex",
          height: 300,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <MapsComponent />
      </View>
      <View style={{ paddingStart: 8, paddingEnd: 8, paddingTop: 6 }}>
        <Searchbar
          style={{ height: 48, backgroundColor: "#FFF", width: "100%" }}
          placeholder="Pesquise o estacionamento"
          loading
          theme={{
            colors: {
              primary: themeSelect.colors.primary,
              text: "#757575",
              placeholder: "#757575",
            },
          }}
        />
        {park.parks?.map((park) => (
          <List.Item
            key={park.id}
            title={park.nome}
            description={park.rua}
            left={(props) => <List.Icon {...props} icon="car" />}
            onPress={(e) => alert(park.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
