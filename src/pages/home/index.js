import { ScrollView, ScrollViewBase, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import {
  Button,
  Text,
  TextInput,
  Searchbar,
  useTheme,
} from "react-native-paper";
import { MapsComponent } from "../../components/maps";
import { selectTheme } from "../../flux/slices/theme";
import { useDispatch, useSelector } from "react-redux";
import api from "../../axios/api";
import { selectPark, setPark } from "../../flux/slices/park";
import ListPark from "../../components/ListPark";
import DetailParkOnSelected from "../../components/DetailPark";
import { selectDetailNavigation } from "../../flux/slices/detailNav";
import Icon from "react-native-vector-icons/Feather";

const HomeScreen = (props) => {
  const [info, setInfoMark] = useState({});
  const [dadosFilter, setDataFilter] = useState();
  const [filterText, setTextFilter] = useState();

  const dispatch = useDispatch();
  //const {theme} = useSelector(selectTheme)
  const { park } = useSelector(selectPark);
  const {
    detailNavigation: { state },
  } = useSelector(selectDetailNavigation);
  const themeSelect = useTheme();

  useEffect(() => {
    handlleRequestBackend();
    //console.log(park.parks);
  });

  const handlleRequestBackend = async () => {
    try {
      const respo = await api.get("/parkLocations");
      dispatch(setPark({ ...park, parks: respo.data }));
    } catch (err) {}
  };

  const setCleanParcks = () => {
    setDataFilter(park.parks);
  };
  const pressCallback = (park) => {
    setInfoMark(park);
    setTextFilter("");
    setCleanParcks();
  };

  const filterOnChange = (value) => {
    const DadosFiltrados = park.parks.filter((item) => {
      if (item.nome.includes(value) || item.rua.includes(value)) {
        return item;
      }
    });

    setDataFilter(DadosFiltrados);
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
        {/*Componente Map View */}
        <MapsComponent info={info} />
      </View>
      <View style={{ paddingStart: 8, paddingEnd: 8, paddingTop: 6 }}>
        {/*Input Search Park*/}
        <Searchbar
          style={{
            height: 48,
            backgroundColor: "#FFF",
            width: "100%",
            display: !state ? "flex" : "none",
          }}
          value={filterText}
          placeholder="Pesquise o estacionamento"
          onChangeText={filterOnChange}
          clearIcon={"car"}
          theme={{
            colors: {
              primary: themeSelect.colors.primary,
              text: "#757575",
              placeholder: "#757575",
            },
          }}
        />
        {/*Componente List Park*/}
        <ListPark
          parks={dadosFilter ? dadosFilter : park?.parks}
          pressCallback={pressCallback}
          hide={state}
        />
        <DetailParkOnSelected hide={state} info={info} />
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
