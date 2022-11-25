import { ScrollView, ScrollViewBase, StyleSheet, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import {
  Button,
  Text,
  TextInput,
  Searchbar,
  useTheme,
  Modal,
  Title,
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
import SideBar from "../../components/sideBar";
import Stars from "react-native-stars";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import { selectUserId } from "../../flux/slices/userId";
const HomeScreen = (props) => {
  const [info, setInfoMark] = useState({});
  const [dadosFilter, setDataFilter] = useState();
  const [filterText, setTextFilter] = useState("");
  const [parkId, setIdPark] = useState();
  const [startRating, setStarsRating] = useState(0);
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const [feedback, setFeedBack] = React.useState("");
  //const {theme} = useSelector(selectTheme)
  const { park } = useSelector(selectPark);
  const {
    detailNavigation: { state },
  } = useSelector(selectDetailNavigation);
  const {
    userId: { id },
  } = useSelector(selectUserId);

  const themeSelect = useTheme();

  const containerStyle = {
    padding: 10,
    width: 380,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    marginStart: 7,
  };

  useEffect(() => {
    handlleRequestBackend();
  });

  const styles = StyleSheet.create({
    myStarStyle: {
      fontSize: 54,
      color: "yellow",
      backgroundColor: "transparent",
      textShadowColor: "black",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },

    myEmptyStarStyle: {
      color: "white",
    },
  });

  //Busca todos os estacionametos da api
  const handlleRequestBackend = async () => {
    try {
      const respo = await api.get("/parkLocations");
      dispatch(setPark({ ...park, parks: respo.data }));
    } catch (err) {}
  };

  //Limpa o estado da variável parks
  const setCleanParcks = () => {
    setDataFilter(park.parks);
  };

  //Callback que carrega o estacionamento selecionado
  const pressCallback = (park) => {
    setInfoMark(park);
    setTextFilter("");
    setCleanParcks();
  };

  //Filtra os estacionamentos e lista
  const filterOnChange = (value) => {
    setTextFilter(value);
    const DadosFiltrados = park.parks.filter((item) => {
      if (item.nome.includes(value) || item.rua.includes(value)) {
        return item;
      }
    });

    setDataFilter(DadosFiltrados);
  };

  //Seta o Modal visible ou hide
  const setModalShow = (e) => {
    setVisible(e);
    return e;
  };

  //Recupera o id do estacionamento selecionado
  const getIdPark = (id) => setIdPark(id);

  //Envia o feedback para o estacionamento selecionado
  const sendFeedBack = async () => {
    if (feedback === "") {
      return;
    }

    const respo = await api.get(`/userDetail/${id}`);
    const {
      data: { nome },
    } = respo;

    if (!nome) return;
    console.log(nome);
    api
      .post(`/ratePark/${parkId}`, {
        name: nome,
        rating: startRating,
        comment: feedback,
      })
      .then((e) => {
        setVisible(false);
      });
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
          clearIcon={"close"}
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
        <DetailParkOnSelected
          hide={state}
          info={info}
          setIdPark={getIdPark}
          setModal={setModalShow}
        />
      </View>
      <Modal
        theme={themeSelect}
        dismissable
        visible={visible}
        onDismiss={setModalShow}
        contentContainerStyle={containerStyle}
        style={{
          backgroundColor: themeSelect.colors.background,
          height: 400,
          marginTop: 140,
        }}
      >
        <ScrollView
          theme={themeSelect}
          style={{
            flex: 1,
            backgroundColor: themeSelect.colors.background,
            padding: 10,
          }}
        >
          <Text
            variant="displaySmall"
            style={{ color: themeSelect.colors.text, textAlign: "left" }}
          >
            Deixe seu FeedBack
          </Text>
          <TextInput
            style={{
              backgroundColor: "#fff",
              marginTop: 12,
              width: "100%",
              height: 49,
            }}
            mode="outlined"
            theme={selectTheme}
            label="Deixe seu FeedBack aqui"
            defaultValue={feedback}
            onChangeText={(text) => setFeedBack(text)}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ marginTop: 20 }}>
              <Stars
                update={(val) => {
                  setStarsRating(val);
                }}
                default={startRating}
                count={5}
                half={true}
                starSize={50}
                fullStar={
                  <IconMat name={"star"} style={[styles.myStarStyle]} />
                }
                emptyStar={
                  <IconMat
                    name={"star-outline"}
                    style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                  />
                }
                halfStar={
                  <IconMat name={"star-half"} style={[styles.myStarStyle]} />
                }
              />
            </View>
            <Button
              onPress={sendFeedBack}
              mode="contained"
              style={{
                width: "50%",
                marginTop: 50,
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                }}
              >
                Enviar
              </Text>
            </Button>
          </View>
        </ScrollView>
      </Modal>
    </ScrollView>
  );
};
export default HomeScreen;
