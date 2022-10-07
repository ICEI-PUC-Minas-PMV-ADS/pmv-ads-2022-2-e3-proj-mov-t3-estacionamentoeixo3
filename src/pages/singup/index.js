import React, { useContext, useState } from "react";
import { SafeAreaView, ImageBase, View, ScrollView, Image } from "react-native";
import { Link, R } from "@react-navigation/native";
import api from "../../axios/api";
import {
  Avatar,
  Button,
  Portal,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import style from "./style";
import logo1 from "../../assets/logo_up1.png";
import logo2 from "../../assets/logo_up2.png";
import { PreferencesContext } from "../../contexts";

const SingupScreen = ({ navigation }) => {
  const theme = useTheme();
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordRepeat, setPasswordRepeat] = useState(null);
  const themes = {
    color: theme.colors.text,
    border: theme.colors.primary,
    text: theme.colors.text,
  };
  const { isThemeDark } = useContext(PreferencesContext);

  const onSubmit = async (e) => {
    console.log(email);
    if (!email && !name && !password && !passwordRepeat) {
      return;
    }
    if (password.includes(passwordRepeat)) {
      alert("passou");
      api
        .post("/users", {
          email: email,
          nome: name,
          senha: password,
        })
        .then((response) => {
          let { status, data } = response;
          if (status === 200) {
            navigation.navigate("Login");
          }
        })
        .catch((err) => {
          console.log(err.response.status);
          console.log(err.response.data);
        });
    }
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.logo}>
          <Image source={isThemeDark ? logo2 : logo1} />
        </View>
        <View style={style.banner}>
          <Text style={style.text}>Faça seu cadastro</Text>

          <Text style={style.text_subtitle}>
            Encontre as melhores vagas perto de você
          </Text>
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
            label="Nome"
            theme={{
              colors: {
                text: "#5E5CE5",
                placeholder: "#5E5CE5",
              },
            }}
            outlineColor="#5E5CE5"
            selectionColor="#5E5CE5"
            style={[{ ...style.input }]}
            value={name}
            onChangeText={(nome) => setName(nome)}
          />
          <TextInput
            mode="outlined"
            label="Digite uma senha"
            theme={{
              colors: {
                text: "#5E5CE5",
                placeholder: "#5E5CE5",
              },
            }}
            outlineColor="#5E5CE5"
            selectionColor="#5E5CE5"
            secureTextEntry
            style={[{ ...style.input }]}
            value={password}
            onChangeText={(pass) => setPassword(pass)}
          />
          <TextInput
            mode="outlined"
            label="Confirme a senha"
            theme={{
              colors: {
                text: "#5E5CE5",
                placeholder: "#5E5CE5",
              },
            }}
            outlineColor="#5E5CE5"
            selectionColor="#5E5CE5"
            secureTextEntry
            style={[{ ...style.input }]}
            value={passwordRepeat}
            onChangeText={(pass) => setPasswordRepeat(pass)}
          />
          <Button
            style={style.button}
            mode="contained"
            onPress={(e) => onSubmit(e)}
          >
            <Text style={[{ ...style.button.text }]}>Cadastrar</Text>
          </Button>
        </View>

        <Text style={[{ ...style.link_ou, ...themes }]}>Ou</Text>
        <Text style={[{ ...style.link_create, ...themes }]}>
          <Text> Ja tem uma conta? </Text>
          <Link to={"/Login"}>
            <Text style={{ color: theme.colors.primary, marginLeft: 23 }}>
              Acessar
            </Text>
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SingupScreen;
