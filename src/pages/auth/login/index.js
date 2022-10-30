import React, { useState } from "react";
import { View, ScrollView, Image } from "react-native";
import { Link } from "@react-navigation/native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import style from "./style";
import { logo1, logo2 } from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../flux/slices/theme";
import {
  selectUser,
  setIsAuhtenticate,
  setUser,
} from "../../../flux/slices/user";
import { selectMessage, setMessage } from "../../../flux/slices/message";
import api from "../../../axios/api";
import { setIsParkAuhtenticate } from "../../../flux/slices/parkAuth";

const LoginScreen = ({ navigation }) => {
  const themeStyle = useTheme();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [viewPassword, setStatePassword] = useState(true);

  const dispatch = useDispatch();
  const { theme } = useSelector(selectTheme);
  const { user } = useSelector(selectUser);

  const themes = {
    color: themeStyle.colors.text,
    border: themeStyle.colors.primary,
    text: themeStyle.colors.text,
  };

  const onSubmit = async () => {
    if (!email && !password) {
      dispatch(
        setMessage({
          text: "Verifique as credenciais",
          status: 205,
          type: "ERROR",
        })
      );
      return;
    }
    //Salva o user que fez login
    dispatch(setUser({ ...user, email }));

    try {
      const response = await api.post("/userLogin", {
        email: email,
        senha: password,
      });

      let { status, data } = response;
      if (status === 200) {
        //Verifica se o login é de usuário ou estacionamento
        // if (data.role === "park") {
        //   dispatch(setIsParkAuhtenticate(true));
        //   //caso seja o estacionamento vai para o dashboard
        //   navigation.navigate("Dashboard");
        // } else {
        //caso seja o usuario  vai para o Home
        dispatch(setIsAuhtenticate(true));
        navigation.navigate("Home");
        // }
      }
    } catch (err) {
      dispatch(setIsAuhtenticate(false));
      // dispatch(setIsParkAuhtenticate(false));
      dispatch(
        setMessage({
          text: err.response.data,
          state: true,
          type: "ERROR",
          status: err.response.status,
        })
      );
    }
  };

  return (
    <ScrollView style={[{ paddingHorizontal: 12 }]}>
      <View style={style.container}>
        <View style={style.logo}>
          <Image source={theme ? logo2 : logo1} />
        </View>
        <View style={style.form}>
          <TextInput
            mode="outlined"
            label="Email"
            theme={{
              colors: {
                text: "#5E5CE5",
                placeholder: "#5E5CE5",
              },
            }}
            outlineColor="#5E5CE5"
            selectionColor="#5E5CE5"
            style={[{ ...style.input }]}
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            mode="outlined"
            label="Senha"
            theme={{
              colors: {
                text: "#5E5CE5",
                placeholder: "#5E5CE5",
              },
            }}
            secureTextEntry={viewPassword}
            style={[{ ...style.input }]}
            right={
              <TextInput.Icon
                style={style.icon_eye}
                onPress={() => setStatePassword(!viewPassword)}
                color={style.icon_eye.color}
                icon={!viewPassword ? "eye-slash" : "eye"}
              />
            }
            value={password}
            onChangeText={(pass) => setPassword(pass)}
          />

          <Button
            style={style.button}
            mode="contained"
            onPress={(e) => onSubmit(e)}
          >
            <Text style={[{ ...style.button.text }]}>Entrar</Text>
          </Button>
        </View>

        <Text style={[{ ...style.link_create, ...themes }]}>
          <Text> Não tem uma conta? </Text>
          <Link to={"/Singup"}>
            <Text style={{ color: themeStyle.colors.primary, marginLeft: 23 }}>
              Cadastre
            </Text>
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
