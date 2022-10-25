import React, { useContext, useState } from "react";
import { SafeAreaView, ImageBase, View, ScrollView, Image } from "react-native";
import { Link, R } from "@react-navigation/native";
import api from "../../../axios/api";
import {
  Avatar,
  Button,
  Portal,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import style from "./style";
import logo1 from "../../../assets/logo_up1.png";
import logo2 from "../../../assets/logo_up2.png";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../flux/slices/theme";
import { selectUser, setIsAuhtenticate, setUser } from "../../../flux/slices/user";
//import message, { setMessage } from "../../../flux/slices/message";

const SingupScreen = ({ navigation }) => {
  const themeStyle = useTheme();
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordRepeat, setPasswordRepeat] = useState(null);

  const { theme } = useSelector(selectTheme);
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  const themes = {
    color: themeStyle.colors.text,
    border: themeStyle.colors.primary,
    text: themeStyle.colors.text,
  };

  const onSubmit = async (e) => {
    if (!email && !name && !password && !passwordRepeat) {
      return;
    }
    //Atualiza o state com info dos user
    dispatch(setUser({ ...user, email, nome: name }));
    //Verifica se as senhas são iguais
    if (password.includes(passwordRepeat)) {
      api
        .post("/users", {
          email: email,
          nome: name,
          senha: password,
        })
        .then((response) => {
          let { status, data } = response;
          if (status === 200) {
            dispatch(setIsAuhtenticate(true));
            navigation.navigate("Login");
          }
        })
        .catch((err) => {
          const { data, status } = err.response;
          dispatch(
            setMessage({ state: true, text: data, status, type: "ERROR" })
          );
        });
    } else {
      dispatch(
        setMessage({
          state: true,
          text: "As senhas não são iguais!",
          status: 404,
          type: "ERROR",
        })
      );
      return;
    }
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.logo}>
          <Image source={theme ? logo2 : logo1} />
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

        <Text style={[{ ...style.link_create, ...themes }]}>
          <Text> Ja tem uma conta? </Text>
          <Link to={"/Login"}>
            <Text style={{ color: themeStyle.colors.primary, marginLeft: 23 }}>
              Acessar
            </Text>
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SingupScreen;
