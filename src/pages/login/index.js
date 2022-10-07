import React, { useContext, useState } from "react";
import { SafeAreaView, ImageBase, View, ScrollView, Image } from "react-native";
import { Link } from "@react-navigation/native";
import { Avatar, Button, Text, TextInput, useTheme } from "react-native-paper";
import style from "./style";
import logo1 from "../../assets/logo_1.png";
import logo2 from "../../assets/logo_2.png";
import { PreferencesContext } from "../../contexts";
import api from "../../axios/api";

const LoginScreen = ({ navigation }) => {
  const theme = useTheme();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [viewPassword, setStatePassword] = useState(true);
  const themes = {
    color: theme.colors.text,
    border: theme.colors.primary,
    text: theme.colors.text,
  };
  const { isThemeDark } = useContext(PreferencesContext);

  const onSubmit = async () => {
    if (!email && !password) {
      return;
    }
    try {
      const response = await api.post("/userLogin", {
        email: email,
        senha: password,
      });
      let { status, data } = response;
      if (status === 200) {
        navigation.navigate("Home");
      }
    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
    }
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.logo}>
          <Image source={isThemeDark ? logo2 : logo1} />
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
                icon={!viewPassword ? "eye-off" : "eye"}
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

        <Text style={[{ ...style.link_ou, ...themes }]}>Ou</Text>
        <Text style={[{ ...style.link_create, ...themes }]}>
          <Text> Não tem uma conta? </Text>
          <Link to={"/Singup"}>
            <Text style={{ color: theme.colors.primary, marginLeft: 23 }}>
              Cadastre
            </Text>
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
