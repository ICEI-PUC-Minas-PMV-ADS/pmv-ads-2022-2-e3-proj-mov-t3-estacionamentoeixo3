import React, { useContext, useEffect, useState } from "react";
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
import {
  selectUser,
  setIsAuhtenticate,
  setUser,
} from "../../../flux/slices/user";
import SegmentButtonComponent from "./ComponentSegmentButton";
import { selectParkAuth, setParkAuth } from "../../../flux/slices/parkAuth";
import message, { setMessage } from "../../../flux/slices/message";

const SingupScreen = ({ navigation }) => {
  //State themaDarc
  const themeStyle = useTheme();
  const [userModel, setUserModel] = useState({
    email: "",
    name: "",
    password: "",
    passwordRepeat: "",
    role: 0,
  });

  const [estacionamentoModel, setEstacionamentoModel] = useState({
    email: "",
    razao: "",
    cnpj: "",
    password: "",
    passwordRepeat: "",
    role: 1,
  });

  const [mode, setMode] = useState("user");

  const { theme } = useSelector(selectTheme);
  const { user } = useSelector(selectUser);
  const { parkAuth } = useSelector(selectParkAuth);
  const dispatch = useDispatch();

  const themes = {
    color: themeStyle.colors.text,
    border: themeStyle.colors.primary,
    text: themeStyle.colors.text,
  };

  const onSubmit = async (e) => {
    const { name, email, password, passwordRepeat, role } = userModel;
    if (mode === "user") {
      if (!email && !name && !password && !passwordRepeat) {
        return;
      }
      //Atualiza o state com info dos user
      dispatch(setUser({ ...user, email, nome: name }));
      //Verifica se as senhas s??o iguais
      if (password.includes(passwordRepeat)) {
        api
          .post("/users", {
            email: email,
            nome: name,
            senha: password,
            role: role,
          })
          .then((response) => {
            let { status, data } = response;
            if (status === 200) {
              navigation.navigate("Login");
            }
          })
          .catch((err) => {
            const { data, status } = err.response;
            dispatch(setMessage({}));
            dispatch(
              setMessage({ state: true, text: data, status, type: "ERROR" })
            );
          });
      } else {
        dispatch(
          setMessage({
            state: true,
            text: "As senhas n??o s??o iguais!",
            status: 404,
            type: "ERROR",
          })
        );
        return;
      }
    } else {
      //Estacionamento
      const { cnpj, email, password, passwordRepeat, razao, role } =
        estacionamentoModel;

      if (!cnpj && !email && !password && !passwordRepeat && !razao) {
        return;
      }
      //Atualiza o state com info dos user
      dispatch(setParkAuth({ ...parkAuth, email, razao: razao }));
      //Verifica se as senhas s??o iguais
      if (password.includes(passwordRepeat)) {
        api
          .post("/parks", {
            email: email,
            razao: razao,
            cnpj: cnpj,
            nome: name,
            senha: password,
            role: role,
          })
          .then((response) => {
            let { status, data } = response;
            if (status === 200) {
              dispatch(setIsParkAuhtenticate(true));
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
            text: "As senhas n??o s??o iguais!",
            status: 404,
            type: "ERROR",
          })
        );
        return;
      }
    }
  };
  const setModeState = (e) => {
    setMode(e);
  };

  useEffect(() => {}, [mode]);

  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.logo}>
          <Image source={theme ? logo2 : logo1} />
        </View>
        <View style={style.banner}>
          <Text style={style.text}>Fa??a seu cadastro</Text>

          <Text style={style.text_subtitle}>
            Encontre as melhores vagas perto de voc??
          </Text>
          <SegmentButtonComponent setValue={setMode} value={mode} />
        </View>

        {mode === "user" ? (
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
              value={userModel.email}
              onChangeText={(email) =>
                setUserModel((state) => ({ ...state, email: email }))
              }
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
              value={userModel.name}
              onChangeText={(nome) =>
                setUserModel((state) => ({ ...state, name: nome }))
              }
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
              value={userModel.password}
              onChangeText={(password) =>
                setUserModel((state) => ({ ...state, password: password }))
              }
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
              value={userModel.passwordRepeat}
              onChangeText={(pass) =>
                setUserModel((state) => ({
                  ...state,
                  passwordRepeat: pass,
                }))
              }
            />
            <Button
              style={style.button}
              mode="contained"
              onPress={(e) => onSubmit(e)}
            >
              <Text style={[{ ...style.button.text }]}>Cadastrar</Text>
            </Button>
          </View>
        ) : (
          <View style={style.form}>
            <TextInput
              mode="outlined"
              label="Email Estacionamento"
              theme={{
                colors: {
                  text: "#5E5CE5",
                  placeholder: "#5E5CE5",
                },
              }}
              outlineColor="#5E5CE5"
              selectionColor="#5E5CE5"
              style={[{ ...style.input }]}
              value={estacionamentoModel.email}
              onChangeText={(email) =>
                setEstacionamentoModel((state) => ({ ...state, email }))
              }
            />
            <TextInput
              mode="outlined"
              label="Raz??o Social"
              theme={{
                colors: {
                  text: "#5E5CE5",
                  placeholder: "#5E5CE5",
                },
              }}
              outlineColor="#5E5CE5"
              selectionColor="#5E5CE5"
              style={[{ ...style.input }]}
              value={estacionamentoModel.razao}
              onChangeText={(rzs) =>
                setEstacionamentoModel((state) => ({ ...state, razao: rzs }))
              }
            />
            <TextInput
              mode="outlined"
              label="CNPJ"
              theme={{
                colors: {
                  text: "#5E5CE5",
                  placeholder: "#5E5CE5",
                },
              }}
              outlineColor="#5E5CE5"
              selectionColor="#5E5CE5"
              style={[{ ...style.input }]}
              value={estacionamentoModel.cnpj}
              onChangeText={(cnpj) =>
                setEstacionamentoModel((state) => ({ ...state, cnpj }))
              }
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
              value={estacionamentoModel.password}
              onChangeText={(pass) =>
                setEstacionamentoModel((state) => ({ ...state, pass }))
              }
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
              value={estacionamentoModel.passwordRepeat}
              onChangeText={(pass) =>
                setEstacionamentoModel((state) => ({
                  ...state,
                  passwordRepeat: pass,
                }))
              }
            />

            <Button
              style={style.button}
              mode="contained"
              onPress={(e) => onSubmit(e)}
            >
              <Text style={[{ ...style.button.text }]}>Cadastrar</Text>
            </Button>
          </View>
        )}
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
